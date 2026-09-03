import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AccordionGallery from "./AccordionGallery";

gsap.registerPlugin(ScrollTrigger);

const WhatIsCodeLens = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const galleryRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        galleryRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const items = [
    {
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85",
      label: "Think like a reviewer",
      alt: "Source code on a screen",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1400&q=85",
      label: "Find what you miss",
      alt: "Developer working with code",
    },
    {
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=85",
      label: "Understand the risk",
      alt: "Cyber security concept",
    },
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
      label: "Improve the code",
      alt: "Performance analytics",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#0b0907]
        px-[7vw]
        pt-20
        pb-28
        text-[#f4ead8]
        md:pt-24
        md:pb-32
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[25%]
          top-[-15%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#d9942f]/[0.045]
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-15%]
          top-[35%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#d9942f]/[0.035]
          blur-[190px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[-15%]
          bottom-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#d9942f]/[0.025]
          blur-[180px]
        "
      />

      <div className="relative mx-auto max-w-[1500px]">

        {/* =====================================================
            SECTION LABEL
        ====================================================== */}

        <div className="mb-14 flex items-center gap-5 md:mb-16">
          <span
            className="
              h-px
              w-12
              bg-[#d9942f]
              opacity-80
            "
          />

          <span
            className="
              font-sans
              text-[10px]
              font-medium
              uppercase
              tracking-[0.32em]
              text-[#d9942f]
            "
          >
            What is CodeLens?
          </span>
        </div>

        {/* =====================================================
            MAIN INTRO
        ====================================================== */}

        <div
          ref={headingRef}
          className="
            grid
            grid-cols-1
            gap-14
            lg:grid-cols-[1.2fr_0.8fr]
            lg:gap-24
          "
        >
          {/* LEFT HEADING */}

          <div>
            <h2
              className="
                max-w-[950px]
                font-sans
                text-[clamp(3.6rem,7.2vw,7.6rem)]
                font-medium
                leading-[0.9]
                tracking-[-0.055em]
              "
            >
              <span className="text-[#f4ead8]">
                Code should be
              </span>

              <br />

              <span className="text-[#d9942f]">
                understood.
              </span>

              <br />

              <span className="text-[#f4ead8]/45">
                Not just executed.
              </span>
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}

          <div
            ref={textRef}
            className="
              flex
              items-end
              pb-2
              lg:pb-5
            "
          >
            <div className="max-w-[430px]">

              <div
                className="
                  mb-7
                  h-px
                  w-11
                  bg-[#d9942f]
                  opacity-70
                "
              />

              <p
                className="
                  font-sans
                  text-[15px]
                  font-normal
                  leading-[1.8]
                  tracking-[-0.01em]
                  text-[#f4ead8]/55
                  md:text-[17px]
                "
              >
                CodeLens is an AI-powered code review system that
                looks beyond syntax. It examines how your code
                behaves, where it can fail, and what could be
                improved before it reaches production.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            SECOND PART
        ====================================================== */}

        <div
          className="
            mt-28
            md:mt-36
          "
        >

          {/* SMALL LABEL */}

          <div className="mb-12 flex items-center gap-5">
            <span
              className="
                h-px
                w-10
                bg-[#d9942f]
                opacity-70
              "
            />

            <span
              className="
                font-sans
                text-[10px]
                font-medium
                uppercase
                tracking-[0.32em]
                text-[#d9942f]
              "
            >
              How CodeLens thinks
            </span>
          </div>

          {/* CONTENT */}

          <div
            className="
              grid
              grid-cols-1
              gap-12
              lg:grid-cols-[0.65fr_1.35fr]
              lg:gap-20
            "
          >

            {/* LEFT */}

            <div>
              <h3
                className="
                  max-w-[500px]
                  font-sans
                  text-[clamp(2.8rem,4.8vw,5.2rem)]
                  font-medium
                  leading-[0.92]
                  tracking-[-0.05em]
                "
              >
                Think like
                <br />

                <span className="text-[#f4ead8]/35">
                  a reviewer.
                </span>
              </h3>

              <p
                className="
                  mt-8
                  max-w-[390px]
                  font-sans
                  text-[14px]
                  leading-[1.9]
                  tracking-[-0.01em]
                  text-[#f4ead8]/40
                "
              >
                A second pair of eyes for every pull request —
                looking for the problems you might not see
                yourself.
              </p>
            </div>

            {/* RIGHT ACCORDION */}

            <div
              ref={galleryRef}
              className="w-full"
            >
              <AccordionGallery
                items={items}
                defaultIndex={0}
                accentColor="#d9942f"
                overlayColor="#0b0907"
                textColor="#f4ead8"
                grayscale={true}
                showLabels={true}
                duration={0.65}
                ease="power3.out"
                parallax={0.35}
                tilt={5}
                stagger={0.06}
                trigger="hover"
                height={480}
                gap={7}
                radius={8}
                expandRatio={0.5}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatIsCodeLens;