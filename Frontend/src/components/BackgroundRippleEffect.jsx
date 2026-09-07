import React, { useMemo, useState } from "react";

export const BackgroundRippleEffect = ({
  rows = 8,
  cols = 30,
  cellSize = 55,
}) => {
  const [clickedCell, setClickedCell] = useState(null);
  const [rippleKey, setRippleKey] = useState(0);

  return (
    <div
      className="absolute top-0 left-0 w-full overflow-hidden pointer-events-auto"
      style={{
        height: "440px",
        background: "#000",
      }}
    >
      <div
        key={rippleKey}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
          width: `${cols * cellSize}px`,
          height: `${rows * cellSize}px`,
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {useMemo(
          () =>
            Array.from({ length: rows * cols }, (_, index) => {
              const row = Math.floor(index / cols);
              const col = index % cols;

              const distance = clickedCell
                ? Math.hypot(
                    clickedCell.row - row,
                    clickedCell.col - col
                  )
                : 0;

              const delay = clickedCell
                ? Math.min(distance * 45, 700)
                : 0;

              return (
                <div
                  key={index}
                  onClick={() => {
                    setClickedCell({ row, col });
                    setRippleKey((value) => value + 1);
                  }}
                  className="ripple-cell"
                  style={{
                    "--delay": `${delay}ms`,
                  }}
                />
              );
            }),
          [rows, cols, clickedCell]
        )}
      </div>

      {/* Fade only at the BOTTOM edge of the grid */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{
          height: "120px",
          background:
            "linear-gradient(to bottom, transparent, #000)",
        }}
      />
    </div>
  );
};

export default BackgroundRippleEffect;