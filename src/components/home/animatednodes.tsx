import { motion } from "framer-motion";

const SIZE = 360; // canvas: increase for larger mini-map
const CX = SIZE / 2;
const CY = SIZE / 2;

const NEXUS_BLUE = "#3b82f6"; // left side of gradients (nexus base)
const BRANCH_COLORS = {
  purple: "#9333ea",
  green: "#34d399",
  orange: "#fb923c",
  yellow: "#facc15",
  pink: "#f472b6",
};

// relative branch offsets (px) from the center (CX,CY)
const branches = [
  { id: 1, x: -80, y: -100, color: BRANCH_COLORS.purple, dur: 3.0 },
  { id: 2, x: 100, y: -60, color: BRANCH_COLORS.green, dur: 2.5 },
  { id: 3, x: 90, y: 100, color: BRANCH_COLORS.orange, dur: 2.8 },
  { id: 4, x: -100, y: 60, color: BRANCH_COLORS.yellow, dur: 3.2 },
  { id: 5, x: -140, y: 10, color: BRANCH_COLORS.pink, dur: 2.7 },
];

const AnimatedNodes = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* fixed-size canvas so coordinates are stable */}
      <div style={{ width: SIZE, height: SIZE }} className="relative">
        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="absolute top-0 left-0"
        >
          <defs>
            {/* gradients for each branch line */}
            {branches.map((b) => (
              <linearGradient
                key={`grad-${b.id}`}
                id={`grad-${b.id}`}
                x1={CX}
                y1={CY}
                x2={CX + b.x}
                y2={CY + b.y}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor={NEXUS_BLUE} />
                <stop offset="100%" stopColor={b.color} />
              </linearGradient>
            ))}
          </defs>

          {/* curved paths + moving particle */}
          {branches.map((b) => {
            const x = CX + b.x;
            const y = CY + b.y;

            const pathD = `M ${CX} ${CY} ${x} ${y}`;

            return (
              <g key={`grp-${b.id}`}>
                {/* visible path */}
                <path
                  id={`path-${b.id}`}
                  d={pathD}
                  stroke={`url(#grad-${b.id})`}
                  strokeWidth={3}
                  fill="none"
                  strokeLinecap="round"
                  strokeOpacity="0.95"
                />

                {/* subtle glowing stroke behind to amplify color */}
                <path
                  d={pathD}
                  stroke={b.color}
                  strokeWidth={8}
                  fill="none"
                  strokeLinecap="round"
                  opacity={0.06}
                />

                {/* moving particle along the path */}
                <circle r={3.2} fill={b.color}>
                  <animateMotion
                    dur={`${b.dur}s`}
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    {/* NOTE: xlinkHref is used for compatibility across browsers */}
                    <mpath xlinkHref={`#path-${b.id}`} />
                  </animateMotion>
                </circle>
              </g>
            );
          })}
        </svg>

        {/* central node (centered) */}
        <motion.div
          initial={false}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            left: CX - 14,
            top: CY - 14,
            transform: "translate(-50%, -50%)",
            width: 28,
            height: 28,
            borderRadius: 9999,
            background: NEXUS_BLUE,
            boxShadow: "0 6px 18px rgba(59,130,246,0.35)",
          }}
        >
          {/* purple halo behind center */}
          <motion.div
            aria-hidden
            initial={false}
            animate={{ scale: [1, 1.35, 1], opacity: [0.35, 0.75, 0.35] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              width: 160,
              height: 160,
              borderRadius: 9999,
              background:
                "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.34) 0%, rgba(124,58,237,0.05) 40%, transparent 70%)",
              zIndex: -1,
              pointerEvents: "none",
            }}
          />
        </motion.div>

        {/* branch nodes (positioned to exact path ends) */}
        {branches.map((b) => {
          const x = CX + b.x - 9;
          const y = CY + b.y - 9;
          return (
            <motion.div
              key={`node-${b.id}`}
              className="absolute"
              style={{
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
                width: 18,
                height: 18,
                borderRadius: 9999,
                background: b.color,
                boxShadow: `0 6px 14px ${b.color}55`,
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: b.dur,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedNodes;
