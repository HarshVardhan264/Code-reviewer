import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import "./AccordionGallery.css";

const DEFAULT_ITEMS = [
  {
    image: "https://picsum.photos/id/1015/900/1200",
    label: "Canyon",
    link: "#",
  },
  {
    image: "https://picsum.photos/id/1018/900/1200",
    label: "Ridgeline",
    link: "#",
  },
  {
    image: "https://picsum.photos/id/1039/900/1200",
    label: "Falls",
    link: "#",
  },
  {
    image: "https://picsum.photos/id/1043/900/1200",
    label: "Harbour",
    link: "#",
  },
  {
    image: "https://picsum.photos/id/1044/900/1200",
    label: "Skyline",
    link: "#",
  },
];

const AccordionGallery = ({
  items = DEFAULT_ITEMS,
  defaultIndex = 0,

  accentColor = "#9be86a",
  overlayColor = "#020504",
  textColor = "#ffffff",

  height = 480,
  gap = 8,
  radius = 6,
  expandRatio = 0.5,

  orientation = "horizontal",

  duration = 0.65,
  ease = "power3.out",

  parallax = 0.35,
  tilt = 5,
  stagger = 0.06,

  trigger = "hover",
  showLabels = true,
  grayscale = true,

  className = "",
}) => {
  const rootRef = useRef(null);

  const panelRefs = useRef([]);
  const mediaRefs = useRef([]);
  const barRefs = useRef([]);
  const textRefs = useRef([]);

  const tlRef = useRef(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(320);

  const vertical = orientation === "vertical";
  const count = items.length;

  const [active, setActive] = useState(
    Math.min(Math.max(defaultIndex, 0), count - 1)
  );

  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const applyLayout = useCallback(
    (animate) => {
      const panels = panelRefs.current;

      if (!panels.length) return;

      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);

      const grow =
        count > 1
          ? (r * (count - 1)) / (1 - r)
          : 1;

      const mediaSize = mediaSizeRef.current;

      // Kill previous animation
      tlRef.current?.kill();

      const dur =
        animate && !prefersReduced
          ? duration
          : 0;

      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;

        const isActive = i === active;

        const media = mediaRefs.current[i];
        const bar = barRefs.current[i];
        const text = textRefs.current[i];

        // Tilt collapsed cards
        const rot = isActive
          ? 0
          : i < active
          ? tilt
          : -tilt;

        const rotProp = vertical
          ? { rotateX: -rot }
          : { rotateY: rot };

        // Expand active panel
        tl.to(
          panel,
          {
            flexGrow: isActive ? grow : 1,
            ...rotProp,
            duration: dur,
            ease,
          },
          0
        );

        // Image movement + grayscale
        if (media) {
          const drift = Math.max(
            -1.5,
            Math.min(1.5, active - i)
          );

          const shift =
            drift *
            parallax *
            mediaSize *
            0.06;

          const gray = grayscale
            ? isActive
              ? 0
              : 1
            : 0;

          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,

              x: vertical
                ? 0
                : isActive
                ? 0
                : shift,

              y: vertical
                ? isActive
                  ? 0
                  : shift
                : 0,

              "--ag-gray": gray,
              "--ag-dim": isActive ? 0 : 0.35,

              duration: dur,
              ease,
            },
            0
          );
        }

        // Label animation
        if (showLabels && bar && text) {
          if (isActive) {
            tl.to(
              [bar, text],
              {
                opacity: 1,
                x: 0,
                duration: dur,
                ease,
                stagger: prefersReduced
                  ? 0
                  : stagger,
              },
              0
            );
          } else {
            tl.to(
              [bar, text],
              {
                opacity: 0,
                x: -14,
                duration: dur * 0.6,
                ease,
              },
              0
            );
          }
        }
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      vertical,
      tilt,
      parallax,
      grayscale,
      showLabels,
      stagger,
      prefersReduced,
    ]
  );

  // Measure gallery
  useEffect(() => {
    const el = rootRef.current;

    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();

      const total = vertical
        ? rect.height
        : rect.width;

      const usable = Math.max(
        total - gap * (count - 1),
        120
      );

      const size = Math.max(
        140,
        usable *
          Math.min(
            Math.max(expandRatio, 0.2),
            0.9
          ) *
          1.22
      );

      mediaSizeRef.current = size;

      el.style.setProperty(
        "--ag-media-size",
        `${size}px`
      );

      applyLayout(!firstRunRef.current);
    };

    measure();

    const resizeObserver =
      new ResizeObserver(measure);

    resizeObserver.observe(el);

    return () => {
      resizeObserver.disconnect();
    };
  }, [
    applyLayout,
    gap,
    count,
    expandRatio,
    vertical,
  ]);

  // Update active panel
  useEffect(() => {
    applyLayout(!firstRunRef.current);

    firstRunRef.current = false;
  }, [applyLayout]);

  // Cleanup GSAP
  useEffect(() => {
    return () => {
      tlRef.current?.kill();
    };
  }, []);

  const handleEnter = (index) => {
    if (trigger === "hover") {
      setActive(index);
    }
  };

  const handleClick = (index, e) => {
    if (index !== active) {
      e.preventDefault();
      setActive(index);
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "ArrowRight" ||
      e.key === "ArrowDown"
    ) {
      e.preventDefault();

      setActive(
        (index + 1) % count
      );
    }

    if (
      e.key === "ArrowLeft" ||
      e.key === "ArrowUp"
    ) {
      e.preventDefault();

      setActive(
        (index - 1 + count) % count
      );
    }
  };

  return (
    <div
      ref={rootRef}
      className={`
        accordion-gallery
        ${vertical ? "accordion-gallery--vertical" : ""}
        ${className}
      `.trim()}
      style={{
        "--ag-accent": accentColor,
        "--ag-overlay": overlayColor,
        "--ag-text": textColor,
        "--ag-gap": `${gap}px`,
        "--ag-radius": `${radius}px`,
        height: vertical
          ? `${Math.round(height * 1.6)}px`
          : `${height}px`,
      }}
      role="list"
      aria-label="CodeLens review capabilities"
    >
      {items.map((item, i) => {
        const isActive = i === active;

        const Tag = item.link
          ? "a"
          : "div";

        return (
          <Tag
            key={i}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            className={`
              ag-panel
              ${isActive ? "ag-panel--active" : ""}
            `}
            style={{
              borderRadius: `${radius}px`,
            }}
            href={item.link || undefined}
            onClick={(e) =>
              handleClick(i, e)
            }
            onMouseEnter={() =>
              handleEnter(i)
            }
            onFocus={() =>
              setActive(i)
            }
            onKeyDown={(e) =>
              handleKeyDown(i, e)
            }
            role="listitem"
            tabIndex={0}
            aria-current={
              isActive ? "true" : undefined
            }
            aria-label={item.label}
          >
            <span className="ag-panel__frame">
              <span
                className="ag-panel__media"
                ref={(el) => {
                  mediaRefs.current[i] = el;
                }}
              >
                <img
                  src={item.image}
                  alt={
                    item.alt ||
                    item.label ||
                    ""
                  }
                  draggable="false"
                />
              </span>

              <span
                className="ag-panel__overlay"
                aria-hidden="true"
              />
            </span>

            {showLabels && (
              <span
                className="ag-panel__label"
                aria-hidden="true"
              >
                <span
                  className="ag-panel__bar"
                  ref={(el) => {
                    barRefs.current[i] = el;
                  }}
                />

                <span
                  className="ag-panel__text"
                  ref={(el) => {
                    textRefs.current[i] = el;
                  }}
                >
                  {item.label}
                </span>
              </span>
            )}
          </Tag>
        );
      })}
    </div>
  );
};

export default AccordionGallery;