import {
  useLayoutEffect,
  useEffect,
  useRef,
  useCallback,
} from "react";

import Lenis from "lenis";
import "./ScrollStack.css";

export const ScrollStackItem = ({
  children,
  itemClassName = "",
}) => (
  <div
    className={`scroll-stack-card ${itemClassName}`.trim()}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = "",

  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,

  stackPosition = "20%",
  scaleEndPosition = "10%",

  baseScale = 0.85,
  scaleDuration = 0.5,

  rotationAmount = 0,
  blurAmount = 15,

  useWindowScroll = false,

  onStackComplete,
}) => {
  const scrollerRef = useRef(null);

  const stackCompletedRef = useRef(false);

  const animationFrameRef =
    useRef(null);

  const lenisRef = useRef(null);

  const cardsRef = useRef([]);

  const lastTransformsRef =
    useRef(new Map());

  const isUpdatingRef =
    useRef(false);

  /*
   * Each card's untransformed document
   * top, measured once. getBoundingClientRect()
   * reflects the CSS transform we apply below,
   * so re-measuring a card mid-scroll would feed
   * its own translateY back into itself and make
   * it vibrate between two values.
   */
  const cardTopsRef =
    useRef([]);

  /*
   * ----------------------------------------
   * CALCULATE PROGRESS
   * ----------------------------------------
   */

  const calculateProgress = useCallback(
    (scrollTop, start, end) => {
      if (scrollTop < start) {
        return 0;
      }

      if (scrollTop > end) {
        return 1;
      }

      return (
        (scrollTop - start) /
        (end - start)
      );
    },
    []
  );

  /*
   * ----------------------------------------
   * PARSE PERCENTAGE
   * ----------------------------------------
   */

  const parsePercentage = useCallback(
    (value, containerHeight) => {
      if (
        typeof value === "string" &&
        value.includes("%")
      ) {
        return (
          (parseFloat(value) / 100) *
          containerHeight
        );
      }

      return parseFloat(value);
    },
    []
  );

  /*
   * ----------------------------------------
   * GET SCROLL DATA
   * ----------------------------------------
   */

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,

        containerHeight:
          window.innerHeight,

        scrollContainer:
          document.documentElement,
      };
    }

    const scroller =
      scrollerRef.current;

    return {
      scrollTop:
        scroller?.scrollTop || 0,

      containerHeight:
        scroller?.clientHeight || 0,

      scrollContainer: scroller,
    };
  }, [useWindowScroll]);

  /*
   * ----------------------------------------
   * GET ELEMENT OFFSET
   * ----------------------------------------
   */

  const getElementOffset =
    useCallback(
      (element) => {
        if (useWindowScroll) {
          const rect =
            element.getBoundingClientRect();

          return (
            rect.top +
            window.scrollY
          );
        }

        return element.offsetTop;
      },
      [useWindowScroll]
    );

  /*
   * ----------------------------------------
   * MEASURE CARD TOPS
   * ----------------------------------------
   */

  const measureCardTops =
    useCallback(() => {
      cardTopsRef.current =
        cardsRef.current.map((card) => {
          if (!useWindowScroll) {
            return card.offsetTop;
          }

          /*
           * Strip any existing scroll-driven
           * transform before reading the rect,
           * so we measure the real layout
           * position, not last frame's translateY.
           */
          const prevTransform =
            card.style.transform;

          card.style.transform = "none";

          const top =
            card.getBoundingClientRect().top +
            window.scrollY;

          card.style.transform = prevTransform;

          return top;
        });
    }, [useWindowScroll]);

  /*
   * ----------------------------------------
   * UPDATE CARD TRANSFORMS
   * ----------------------------------------
   */

  const updateCardTransforms =
    useCallback(() => {
      if (
        !cardsRef.current.length ||
        isUpdatingRef.current
      ) {
        return;
      }

      isUpdatingRef.current = true;

      const {
        scrollTop,
        containerHeight,
      } = getScrollData();

      const stackPositionPx =
        parsePercentage(
          stackPosition,
          containerHeight
        );

      const scaleEndPositionPx =
        parsePercentage(
          scaleEndPosition,
          containerHeight
        );

      /*
       * Find the end of the stack.
       */
      const endElement =
        useWindowScroll
          ? document.querySelector(
              ".scroll-stack-end"
            )
          : scrollerRef.current?.querySelector(
              ".scroll-stack-end"
            );

      const endElementTop = endElement
        ? getElementOffset(endElement)
        : 0;

      /*
       * ------------------------------------
       * UPDATE EVERY CARD
       * ------------------------------------
       */

      cardsRef.current.forEach(
        (card, i) => {
          if (!card) return;

          const cardTop =
            cardTopsRef.current[i] ??
            getElementOffset(card);

          /*
           * When the card starts entering
           * the stack.
           */
          const triggerStart =
            cardTop -
            stackPositionPx -
            itemStackDistance * i;

          /*
           * When scaling ends.
           */
          const triggerEnd =
            cardTop -
            scaleEndPositionPx;

          /*
           * Start pinning.
           */
          const pinStart =
            cardTop -
            stackPositionPx -
            itemStackDistance * i;

          /*
           * Stop pinning near the bottom
           * of the stack.
           */
          const pinEnd =
            endElementTop -
            containerHeight / 2;

          /*
           * --------------------------------
           * SCALE
           * --------------------------------
           */

          const scaleProgress =
            calculateProgress(
              scrollTop,
              triggerStart,
              triggerEnd
            );

          /*
           * Each card gets slightly different
           * scale.
           */
          const targetScale =
            baseScale +
            i * itemScale;

          const scale =
            1 -
            scaleProgress *
              (1 - targetScale);

          /*
           * --------------------------------
           * ROTATION
           * --------------------------------
           */

          const rotation =
            rotationAmount
              ? i *
                rotationAmount *
                scaleProgress
              : 0;

          /*
           * --------------------------------
           * BLUR
           * --------------------------------
           */

          let blur = 0;

          if (blurAmount) {
            let topCardIndex = 0;

            for (
              let j = 0;
              j < cardsRef.current.length;
              j++
            ) {
              const jCardTop =
                cardTopsRef.current[j] ??
                getElementOffset(
                  cardsRef.current[j]
                );

              const jTriggerStart =
                jCardTop -
                stackPositionPx -
                itemStackDistance * j;

              if (
                scrollTop >=
                jTriggerStart
              ) {
                topCardIndex = j;
              }
            }

            if (i < topCardIndex) {
              const depthInStack =
                topCardIndex - i;

              blur = Math.max(
                0,
                depthInStack *
                  blurAmount
              );
            }
          }

          /*
           * --------------------------------
           * TRANSLATE
           * --------------------------------
           */

          let translateY = 0;

          const isPinned =
            scrollTop >= pinStart &&
            scrollTop <= pinEnd;

          if (isPinned) {
            translateY =
              scrollTop -
              cardTop +
              stackPositionPx +
              itemStackDistance * i;
          } else if (
            scrollTop > pinEnd
          ) {
            translateY =
              pinEnd -
              cardTop +
              stackPositionPx +
              itemStackDistance * i;
          }

          /*
           * --------------------------------
           * ROUND VALUES
           * --------------------------------
           */

          const newTransform = {
            translateY:
              Math.round(
                translateY * 100
              ) / 100,

            scale:
              Math.round(
                scale * 1000
              ) / 1000,

            rotation:
              Math.round(
                rotation * 100
              ) / 100,

            blur:
              Math.round(
                blur * 100
              ) / 100,
          };

          /*
           * --------------------------------
           * AVOID UNNECESSARY DOM UPDATES
           * --------------------------------
           */

          const lastTransform =
            lastTransformsRef.current.get(
              i
            );

          const hasChanged =
            !lastTransform ||
            Math.abs(
              lastTransform.translateY -
                newTransform.translateY
            ) > 0.1 ||
            Math.abs(
              lastTransform.scale -
                newTransform.scale
            ) > 0.001 ||
            Math.abs(
              lastTransform.rotation -
                newTransform.rotation
            ) > 0.1 ||
            Math.abs(
              lastTransform.blur -
                newTransform.blur
            ) > 0.1;

          /*
           * --------------------------------
           * APPLY TRANSFORM
           * --------------------------------
           */

          if (hasChanged) {
            const transform = `
              translate3d(
                0,
                ${newTransform.translateY}px,
                0
              )
              scale(${newTransform.scale})
              rotate(${newTransform.rotation}deg)
            `;

            const filter =
              newTransform.blur > 0
                ? `blur(${newTransform.blur}px)`
                : "";

            card.style.transform =
              transform;

            card.style.filter =
              filter;

            lastTransformsRef.current.set(
              i,
              newTransform
            );
          }

          /*
           * --------------------------------
           * STACK COMPLETE
           * --------------------------------
           */

          if (
            i ===
            cardsRef.current.length - 1
          ) {
            const isInView =
              scrollTop >= pinStart &&
              scrollTop <= pinEnd;

            if (
              isInView &&
              !stackCompletedRef.current
            ) {
              stackCompletedRef.current =
                true;

              onStackComplete?.();
            } else if (
              !isInView &&
              stackCompletedRef.current
            ) {
              stackCompletedRef.current =
                false;
            }
          }
        }
      );

      isUpdatingRef.current = false;
    }, [
      itemScale,
      itemStackDistance,
      stackPosition,
      scaleEndPosition,
      baseScale,
      rotationAmount,
      blurAmount,
      useWindowScroll,
      onStackComplete,
      calculateProgress,
      parsePercentage,
      getScrollData,
      getElementOffset,
    ]);

  /*
   * ----------------------------------------
   * HANDLE SCROLL
   * ----------------------------------------
   */

  const handleScroll =
    useCallback(() => {
      updateCardTransforms();
    }, [updateCardTransforms]);

  /*
   * ----------------------------------------
   * LENIS
   * ----------------------------------------
   */

  const setupLenis =
    useCallback(() => {
      /*
       * WINDOW SCROLL
       */

      if (useWindowScroll) {
        const lenis = new Lenis({
          duration: 1.2,

          easing: (t) =>
            Math.min(
              1,
              1.001 -
                Math.pow(
                  2,
                  -10 * t
                )
            ),

          smoothWheel: true,

          touchMultiplier: 2,

          infinite: false,

          wheelMultiplier: 1,

          lerp: 0.1,

          syncTouch: true,

          syncTouchLerp: 0.075,
        });

        lenis.on(
          "scroll",
          handleScroll
        );

        const raf = (time) => {
          lenis.raf(time);

          animationFrameRef.current =
            requestAnimationFrame(
              raf
            );
        };

        animationFrameRef.current =
          requestAnimationFrame(raf);

        lenisRef.current = lenis;

        return lenis;
      }

      /*
       * INTERNAL SCROLL
       */

      const scroller =
        scrollerRef.current;

      if (!scroller) return;

      const content =
        scroller.querySelector(
          ".scroll-stack-inner"
        );

      const lenis = new Lenis({
        wrapper: scroller,

        content,

        duration: 1.2,

        easing: (t) =>
          Math.min(
            1,
            1.001 -
              Math.pow(
                2,
                -10 * t
              )
          ),

        smoothWheel: true,

        touchMultiplier: 2,

        infinite: false,

        gestureOrientationHandler: true,

        normalizeWheel: true,

        wheelMultiplier: 1,

        touchInertiaMultiplier: 35,

        lerp: 0.1,

        syncTouch: true,

        syncTouchLerp: 0.075,

        touchInertia: 0.6,
      });

      lenis.on(
        "scroll",
        handleScroll
      );

      const raf = (time) => {
        lenis.raf(time);

        animationFrameRef.current =
          requestAnimationFrame(
            raf
          );
      };

      animationFrameRef.current =
        requestAnimationFrame(raf);

      lenisRef.current = lenis;

      return lenis;
    }, [
      handleScroll,
      useWindowScroll,
    ]);

  /*
   * ----------------------------------------
   * INITIALIZATION
   * ----------------------------------------
   */

  useLayoutEffect(() => {
    const scroller =
      scrollerRef.current;

    if (!scroller) return;

    /*
     * IMPORTANT:
     *
     * If useWindowScroll is false,
     * only select cards inside this stack.
     */
    const cards = Array.from(
      scroller.querySelectorAll(
        ".scroll-stack-card"
      )
    );

    cardsRef.current = cards;

    const transformsCache =
      lastTransformsRef.current;

    /*
     * ------------------------------------
     * CARD SETUP
     * ------------------------------------
     */

    cards.forEach(
      (card, i) => {
        /*
         * Space cards apart.
         */
        if (
          i <
          cards.length - 1
        ) {
          card.style.marginBottom =
            `${itemDistance}px`;
        }

        /*
         * GPU acceleration.
         */
        card.style.willChange =
          "transform, filter";

        card.style.transformOrigin =
          "top center";

        card.style.backfaceVisibility =
          "hidden";

        card.style.webkitBackfaceVisibility =
          "hidden";

        card.style.transform =
          "translateZ(0)";

        card.style.webkitTransform =
          "translateZ(0)";

        card.style.perspective =
          "1000px";

        card.style.webkitPerspective =
          "1000px";
      }
    );

    /*
     * Measure real card positions before any
     * scroll transform is applied to them.
     */
    measureCardTops();

    /*
     * Start Lenis.
     */
    setupLenis();

    /*
     * Initial transform.
     */
    updateCardTransforms();

    /*
     * ------------------------------------
     * CLEANUP
     * ------------------------------------
     */

    return () => {
      if (
        animationFrameRef.current
      ) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }

      if (lenisRef.current) {
        lenisRef.current.destroy();
      }

      stackCompletedRef.current =
        false;

      cardsRef.current = [];

      transformsCache.clear();

      isUpdatingRef.current =
        false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    measureCardTops,
    setupLenis,
    updateCardTransforms,
  ]);

  /*
   * Re-measure on resize so cached tops don't
   * go stale when layout reflows.
   */
  useEffect(() => {
    const onResize = () => {
      measureCardTops();
      updateCardTransforms();
    };

    window.addEventListener("resize", onResize);

    return () =>
      window.removeEventListener(
        "resize",
        onResize
      );
  }, [measureCardTops, updateCardTransforms]);

  /*
   * ----------------------------------------
   * RENDER
   * ----------------------------------------
   */

  return (
    <div
      className={`scroll-stack-scroller ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className="scroll-stack-inner">
        {children}

        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;