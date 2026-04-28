import { useEffect, useRef } from "react";

const CANVAS_SIZE = 240;
const STROKE_WIDTH = 10;
const STROKE_COLOR = "#D90012"; // armenian-red

export default function LetterTrace({ letter, onDone }) {
  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const lastPointRef = useRef(null);

  // Set up the canvas backing store at device pixel ratio for crisp strokes.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = CANVAS_SIZE * dpr;
    canvas.height = CANVAS_SIZE * dpr;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = STROKE_COLOR;
    ctx.lineWidth = STROKE_WIDTH;
  }, []);

  function getPoint(e) {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * CANVAS_SIZE,
      y: ((e.clientY - rect.top) / rect.height) * CANVAS_SIZE,
    };
  }

  function startDraw(e) {
    e.preventDefault();
    const point = getPoint(e);
    if (!point) return;
    drawingRef.current = true;
    lastPointRef.current = point;
    canvasRef.current.setPointerCapture?.(e.pointerId);
  }

  function continueDraw(e) {
    if (!drawingRef.current) return;
    const point = getPoint(e);
    const last = lastPointRef.current;
    if (!point || !last) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    lastPointRef.current = point;
  }

  function stopDraw(e) {
    if (!drawingRef.current) return;
    drawingRef.current = false;
    lastPointRef.current = null;
    canvasRef.current.releasePointerCapture?.(e.pointerId);
  }

  function clearCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-xs font-bold uppercase tracking-wide text-armenian-ink/50">
        Trace it
      </p>
      <div
        className="relative rounded-2xl bg-armenian-cream"
        style={{ width: CANVAS_SIZE, height: CANVAS_SIZE }}
      >
        {/* Faded letter template */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center font-display font-black text-armenian-ink/15"
          style={{ fontSize: CANVAS_SIZE * 0.78, lineHeight: 1 }}
          aria-hidden="true"
        >
          {letter.capital}
        </div>

        {/* Drawing layer */}
        <canvas
          ref={canvasRef}
          onPointerDown={startDraw}
          onPointerMove={continueDraw}
          onPointerUp={stopDraw}
          onPointerCancel={stopDraw}
          onPointerLeave={stopDraw}
          style={{
            width: CANVAS_SIZE,
            height: CANVAS_SIZE,
            touchAction: "none",
          }}
          className="absolute inset-0 cursor-crosshair rounded-2xl"
          aria-label={`Trace the letter ${letter.name}`}
        />
      </div>

      <div className="flex w-full gap-2">
        <button
          type="button"
          onClick={clearCanvas}
          className="btn flex-1 justify-center bg-armenian-ink/10 text-armenian-ink hover:bg-armenian-ink/20 text-sm"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={onDone}
          className="btn flex-1 justify-center bg-armenian-blue text-white hover:bg-[#002785] text-sm"
        >
          Done
        </button>
      </div>
    </div>
  );
}
