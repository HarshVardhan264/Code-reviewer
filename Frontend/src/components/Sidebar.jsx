import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

// ============================================================
// CODELENS LOGO ICON
// ============================================================

export const Lens = ({ size = "0.78em" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="inline-block align-[-0.02em]"
  >
    <circle
      cx="12"
      cy="12"
      r="10.5"
      stroke="currentColor"
      strokeWidth="2.4"
    />

    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="currentColor"
      strokeWidth="2.4"
    />
  </svg>
);

// ============================================================
// PLUS ICON
// ============================================================

const PlusIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

// ============================================================
// CHEVRON ICON
// ============================================================

const ChevronIcon = ({ direction = "left", size = 18 }) => {
  const rotation =
    direction === "left"
      ? "rotate(0)"
      : direction === "right"
      ? "rotate(180deg)"
      : "rotate(90deg)";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: rotation,
      }}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
};

// ============================================================
// HISTORY ICON
// ============================================================

const HistoryIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12a9 9 0 1 0 3-6.7" />
    <path d="M3 4v6h6" />
    <path d="M12 7v5l3 2" />
  </svg>
);

// ============================================================
// USER ICON
// ============================================================

const UserIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c.7-4.2 3.3-6 8-6s7.3 1.8 8 6" />
  </svg>
);

// ============================================================
// LOGOUT ICON
// ============================================================

const LogoutIcon = ({ size = 17 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4" />
    <path d="M15 16l4-4-4-4" />
    <path d="M19 12H9" />
  </svg>
);

// ============================================================
// ARROW UP ICON
// ============================================================

const ArrowUpIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 19V5" />
    <path d="m6 11 6-6 6 6" />
  </svg>
);

// ============================================================
// DEFAULTS
// ============================================================

const MIN_WIDTH = 220;
const MAX_WIDTH = 420;
const DEFAULT_WIDTH = 280;
const COLLAPSED_WIDTH = 68;

// ============================================================
// SIDEBAR
// ============================================================

const Sidebar = ({
  user,
  reviewCount = 0,
  history = [],
  freeReviewLimit = 4,
  onOpenHistory,
  onUpgrade,
  onWidthChange,
}) => {
  const sidebarRef = useRef(null);
  const contentRef = useRef(null);
  const resizeRef = useRef(null);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [width, setWidth] = useState(DEFAULT_WIDTH);

  const [isDragging, setIsDragging] = useState(false);

  // ----------------------------------------------------------
  // Initial animation
  // ----------------------------------------------------------

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sidebarRef.current,
        {
          x: -30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        contentRef.current?.children || [],
        {
          opacity: 0,
          y: 8,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          delay: 0.15,
          ease: "power2.out",
        }
      );
    }, sidebarRef);

    return () => ctx.revert();
  }, []);

  // ----------------------------------------------------------
  // Inform Review.jsx about width
  // ----------------------------------------------------------

  useEffect(() => {
    if (onWidthChange) {
      onWidthChange(isCollapsed ? COLLAPSED_WIDTH : width);
    }
  }, [width, isCollapsed, onWidthChange]);

  // ----------------------------------------------------------
  // Collapse / Expand
  // ----------------------------------------------------------

  const toggleSidebar = () => {
    const nextState = !isCollapsed;

    setIsCollapsed(nextState);

    if (onWidthChange) {
      onWidthChange(nextState ? COLLAPSED_WIDTH : width);
    }
  };

  // ----------------------------------------------------------
  // Resize sidebar
  // ----------------------------------------------------------

  const handlePointerDown = (event) => {
    if (isCollapsed) return;

    event.preventDefault();

    setIsDragging(true);

    resizeRef.current = {
      startX: event.clientX,
      startWidth: width,
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const handlePointerMove = (event) => {
    if (!resizeRef.current) return;

    const delta =
      event.clientX - resizeRef.current.startX;

    const nextWidth = Math.min(
      MAX_WIDTH,
      Math.max(
        MIN_WIDTH,
        resizeRef.current.startWidth + delta
      )
    );

    setWidth(nextWidth);

    if (onWidthChange) {
      onWidthChange(nextWidth);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);

    resizeRef.current = null;

    window.removeEventListener(
      "pointermove",
      handlePointerMove
    );

    window.removeEventListener(
      "pointerup",
      handlePointerUp
    );
  };

  // ----------------------------------------------------------
  // Keyboard resize
  // ----------------------------------------------------------

  const handleResizeKeyDown = (event) => {
    if (isCollapsed) return;

    let nextWidth = width;

    if (event.key === "ArrowRight") {
      nextWidth = Math.min(MAX_WIDTH, width + 10);
    }

    if (event.key === "ArrowLeft") {
      nextWidth = Math.max(MIN_WIDTH, width - 10);
    }

    if (nextWidth !== width) {
      event.preventDefault();

      setWidth(nextWidth);

      if (onWidthChange) {
        onWidthChange(nextWidth);
      }
    }
  };

  // ----------------------------------------------------------
  // Cleanup listeners
  // ----------------------------------------------------------

  useEffect(() => {
    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp
      );
    };
  }, []);

  // ----------------------------------------------------------
  // Logout
  // ----------------------------------------------------------

  const handleLogout = () => {
    localStorage.removeItem("codelens_token");
    localStorage.removeItem("codelens_user");
    localStorage.removeItem("isLoggedIn");

    window.location.href = "/login";
  };

  // ----------------------------------------------------------
  // Usage
  // ----------------------------------------------------------

  const remaining = Math.max(
    0,
    freeReviewLimit - reviewCount
  );

  const usagePercentage =
    freeReviewLimit > 0
      ? Math.min(
          100,
          (reviewCount / freeReviewLimit) * 100
        )
      : 0;

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <aside
      ref={sidebarRef}
      className={`
        fixed
        left-0
        top-0
        bottom-0
        z-50
        hidden
        lg:flex
        flex-col
        bg-[#080b09]
        border-r
        border-white/[0.07]
        text-[#eeeae1]
        select-none
        ${isDragging ? "cursor-col-resize" : ""}
      `}
      style={{
        width: `${isCollapsed ? COLLAPSED_WIDTH : width}px`,
      }}
    >
      {/* ======================================================
          HEADER
      ======================================================= */}

      <div
        className={`
          h-[68px]
          shrink-0
          flex
          items-center
          ${
            isCollapsed
              ? "justify-center px-2"
              : "justify-between px-5"
          }
        `}
      >
        {/* ----------------------------------------------------
            EXPANDED LOGO
        ----------------------------------------------------- */}

        {!isCollapsed && (
          <Link
            to="/"
            className="
              select-none
              text-[20px]
              font-medium
              tracking-[-0.05em]
              text-[#eeeae1]
              no-underline
              flex
              items-center
              whitespace-nowrap
            "
            aria-label="CodeLens home"
          >
            C<Lens />
            <span>delens</span>
          </Link>
        )}

        {/* ----------------------------------------------------
            COLLAPSED LENS ONLY
        ----------------------------------------------------- */}

        {isCollapsed && (
          <button
            type="button"
            onClick={toggleSidebar}
            aria-label="Open sidebar"
            className="
              group
              w-10
              h-10
              rounded-xl
              flex
              items-center
              justify-center
              text-[#eeeae1]
              hover:bg-white/[0.06]
              transition-all
              duration-200
            "
          >
            <Lens
              size="23px"
            />
          </button>
        )}

        {/* ----------------------------------------------------
            COLLAPSE BUTTON
        ----------------------------------------------------- */}

        {!isCollapsed && (
          <button
            type="button"
            onClick={toggleSidebar}
            aria-label="Collapse sidebar"
            className="
              w-8
              h-8
              rounded-lg
              flex
              items-center
              justify-center
              text-white/45
              hover:text-white
              hover:bg-white/[0.06]
              transition-all
              duration-200
            "
          >
            <ChevronIcon
              direction="left"
              size={17}
            />
          </button>
        )}
      </div>

      {/* ======================================================
          COLLAPSED CONTENT
      ======================================================= */}

      {isCollapsed ? (
        <div
          className="
            flex-1
            flex
            flex-col
            items-center
            pt-4
          "
        >
          {/* New Review */}

          <button
            type="button"
            onClick={() => {
              window.location.href = "/review";
            }}
            title="New review"
            className="
              w-10
              h-10
              rounded-xl
              flex
              items-center
              justify-center
              text-white/60
              hover:text-white
              hover:bg-white/[0.06]
              transition-all
              duration-200
            "
          >
            <PlusIcon size={19} />
          </button>

          {/* History */}

          <button
            type="button"
            onClick={() => {
              if (history.length > 0) {
                onOpenHistory?.(history[0]);
              }
            }}
            title="Review history"
            className="
              mt-2
              w-10
              h-10
              rounded-xl
              flex
              items-center
              justify-center
              text-white/50
              hover:text-white
              hover:bg-white/[0.06]
              transition-all
              duration-200
            "
          >
            <HistoryIcon size={18} />
          </button>

          {/* Bottom profile */}

          <div className="mt-auto pb-4">
            <button
              type="button"
              title={user?.name || "Profile"}
              className="
                w-10
                h-10
                rounded-xl
                flex
                items-center
                justify-center
                text-white/60
                hover:text-white
                hover:bg-white/[0.06]
                transition-all
                duration-200
              "
            >
              <UserIcon size={19} />
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* ==================================================
              EXPANDED CONTENT
          =================================================== */}

          <div
            ref={contentRef}
            className="
              flex-1
              flex
              flex-col
              min-h-0
              overflow-hidden
              px-3
            "
          >
            {/* ------------------------------------------------
                NEW REVIEW
            ------------------------------------------------- */}

            <button
              type="button"
              onClick={() => {
                window.location.href = "/review";
              }}
              className="
                group
                w-full
                h-[42px]
                rounded-xl
                flex
                items-center
                gap-3
                px-3
                text-[13px]
                text-white/75
                hover:text-white
                hover:bg-white/[0.055]
                transition-all
                duration-200
              "
            >
              <span
                className="
                  w-7
                  h-7
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  border
                  border-white/[0.10]
                  bg-white/[0.025]
                  group-hover:border-white/[0.16]
                "
              >
                <PlusIcon size={16} />
              </span>

              <span>
                New review
              </span>
            </button>

            {/* ------------------------------------------------
                SECTION TITLE
            ------------------------------------------------- */}

            <div
              className="
                mt-7
                mb-2
                px-3
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-white/25
              "
            >
              Recent reviews
            </div>

            {/* ------------------------------------------------
                HISTORY
            ------------------------------------------------- */}

            <div
              className="
                flex-1
                overflow-y-auto
                pr-1
                scrollbar-thin
                scrollbar-thumb-white/[0.08]
              "
            >
              {history.length === 0 ? (
                <div
                  className="
                    px-3
                    py-5
                    text-[12px]
                    leading-5
                    text-white/25
                  "
                >
                  No reviews yet.
                  <br />
                  Start by reviewing a repository.
                </div>
              ) : (
                <div className="space-y-1">
                  {history.map((item) => {
                    const repoName =
                      item.repoUrl
                        ?.replace(/^https?:\/\//, "")
                        ?.replace(/\/$/, "")
                        ?.split("/")
                        ?.slice(-1)[0] ||
                      "Repository";

                    return (
                      <button
                        key={item._id}
                        type="button"
                        onClick={() =>
                          onOpenHistory?.(item)
                        }
                        className="
                          group
                          w-full
                          text-left
                          rounded-xl
                          px-3
                          py-2.5
                          hover:bg-white/[0.045]
                          transition-all
                          duration-200
                        "
                      >
                        <div className="flex items-center gap-2">
                          <HistoryIcon
                            size={14}
                          />

                          <span
                            className="
                              min-w-0
                              flex-1
                              truncate
                              text-[12px]
                              text-white/60
                              group-hover:text-white/85
                            "
                          >
                            {repoName}
                          </span>
                        </div>

                        <div
                          className="
                            mt-1
                            pl-[22px]
                            text-[10px]
                            text-white/25
                          "
                        >
                          {item.createdAt
                            ? new Date(
                                item.createdAt
                              ).toLocaleDateString()
                            : ""}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* ==================================================
                USAGE
            =================================================== */}

            <div
              className="
                mt-3
                mb-3
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.025]
                p-4
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.12em]
                    text-white/35
                  "
                >
                  Free reviews
                </span>

                <span
                  className="
                    text-[12px]
                    text-white/65
                  "
                >
                  {reviewCount}/{freeReviewLimit}
                </span>
              </div>

              {/* Progress */}

              <div
                className="
                  mt-3
                  h-1
                  w-full
                  rounded-full
                  bg-white/[0.07]
                  overflow-hidden
                "
              >
                <div
                  className="
                    h-full
                    rounded-full
                    bg-white/55
                    transition-all
                    duration-500
                  "
                  style={{
                    width: `${usagePercentage}%`,
                  }}
                />
              </div>

              <div
                className="
                  mt-2
                  text-[10px]
                  text-white/25
                "
              >
                {remaining > 0
                  ? `${remaining} review${
                      remaining === 1
                        ? ""
                        : "s"
                    } remaining`
                  : "Free limit reached"}
              </div>

              {/* Upgrade */}

              {remaining === 0 && (
                <button
                  type="button"
                  onClick={onUpgrade}
                  className="
                    mt-3
                    w-full
                    h-9
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-[11px]
                    font-medium
                    text-[#080b09]
                    bg-[#eeeae1]
                    hover:bg-white
                    transition-all
                    duration-200
                  "
                >
                  <ArrowUpIcon size={14} />
                  Upgrade
                </button>
              )}
            </div>
          </div>

          {/* ==================================================
              PROFILE
          =================================================== */}

          <div
            className="
              shrink-0
              border-t
              border-white/[0.06]
              px-3
              py-3
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
                rounded-xl
                px-2
                py-2
                hover:bg-white/[0.035]
                transition-all
              "
            >
              {/* Avatar */}

              <div
                className="
                  w-8
                  h-8
                  shrink-0
                  rounded-full
                  border
                  border-white/[0.10]
                  bg-white/[0.04]
                  flex
                  items-center
                  justify-center
                  text-white/65
                "
              >
                <UserIcon size={15} />
              </div>

              {/* User info */}

              <div className="min-w-0 flex-1">
                <div
                  className="
                    truncate
                    text-[12px]
                    text-white/75
                  "
                >
                  {user?.name || "CodeLens User"}
                </div>

                <div
                  className="
                    truncate
                    text-[10px]
                    text-white/25
                    mt-0.5
                  "
                >
                  {user?.email || ""}
                </div>
              </div>

              {/* Logout */}

              <button
                type="button"
                onClick={handleLogout}
                title="Logout"
                className="
                  w-8
                  h-8
                  shrink-0
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  text-white/25
                  hover:text-white/70
                  hover:bg-white/[0.05]
                  transition-all
                "
              >
                <LogoutIcon size={16} />
              </button>
            </div>
          </div>
        </>
      )}

      {/* ======================================================
          RESIZE HANDLE
      ======================================================= */}

      {!isCollapsed && (
        <div
          role="separator"
          aria-orientation="vertical"
          aria-label="Resize sidebar"
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onKeyDown={handleResizeKeyDown}
          className="
            absolute
            right-[-3px]
            top-0
            bottom-0
            w-[6px]
            cursor-col-resize
            group
          "
        >
          <div
            className="
              absolute
              right-[2px]
              top-1/2
              -translate-y-1/2
              w-[2px]
              h-12
              rounded-full
              bg-transparent
              group-hover:bg-white/[0.12]
              transition-all
              duration-200
            "
          />
        </div>
      )}
    </aside>
  );
};

export default Sidebar;