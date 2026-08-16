export default function LoadingWave() {
  return (
    <div className="relative w-32 h-32 mb-6 rounded-full mx-auto flex items-center justify-center">
      {/* Blur background */}
      <div className="absolute inset-0 rounded-full bg-[#fff0e5] backdrop-blur-2xl z-0" />
      <svg
        viewBox="0 0 100 100"
        className="absolute top-0 left-0 w-full h-full z-10"
      >
        <defs>
          <clipPath id="circleClip">
            <circle cx="50" cy="50" r="48" />
          </clipPath>
          <linearGradient id="redwave" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(79,27,32)" />
            <stop offset="100%" stopColor="rgb(40,10,15)" />
          </linearGradient>
        </defs>
        <g clipPath="url(#circleClip)">
          <path fill="url(#redwave)" opacity="0.9">
            <animate
              attributeName="d"
              dur="2s"
              repeatCount="indefinite"
              values="M0,60 Q25,50 50,60 T100,60 V100 H0 Z;
                      M0,60 Q25,70 50,60 T100,60 V100 H0 Z;
                      M0,60 Q25,50 50,60 T100,60 V100 H0 Z"
            />
          </path>
          <path fill="url(#redwave)" opacity="0.7">
            <animate
              attributeName="d"
              dur="2.5s"
              repeatCount="indefinite"
              values="M0,65 Q25,55 50,65 T100,65 V100 H0 Z;
                      M0,65 Q25,75 50,65 T100,65 V100 H0 Z;
                      M0,65 Q25,55 50,65 T100,65 V100 H0 Z"
            />
          </path>
        </g>
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="rgb(79,27,32)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
