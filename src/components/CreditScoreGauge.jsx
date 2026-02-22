import { motion } from "framer-motion";

function CreditScoreGauge({ score = 642, status = "Almost Ready!" }) {
  const min = 300;
  const max = 850;
  const radius = 70;
  const circumference = Math.PI * radius;

  const normalized = Math.min(Math.max(score, min), max);
  const progress = (normalized - min) / (max - min);
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-40">
        <svg viewBox="0 0 200 120" className="w-full h-full">
          {/* Background Arc */}
          <path
            d="M 30 100 A 70 70 0 0 1 170 100"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="18"
            strokeLinecap="round"
          />

          {/* Progress Arc */}
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="35%" stopColor="#f59e0b" />
              <stop offset="65%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>

          <motion.path
            d="M 30 100 A 70 70 0 0 1 170 100"
            fill="none"
            stroke="url(#scoreGradient)"
            strokeWidth="18"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Needle */}
          <motion.line
            x1="100"
            y1="100"
            x2="100"
            y2="35"
            stroke="#1f2937"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ rotate: -90 }}
            animate={{ rotate: progress * 180 - 90 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "100px 100px" }}
          />

          <circle cx="100" cy="100" r="6" fill="#1f2937" />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
          <div className="text-sm text-gray-500 font-medium">
            Credit Score
          </div>
          <div className="text-5xl font-bold text-gray-900 tracking-tight">
            {score}
          </div>
        </div>
      </div>

      {/* Status Pill */}
      <div className="mt-2">
        <span className="bg-yellow-500 text-white px-5 py-1.5 rounded-full text-sm font-semibold shadow-md">
          {status}
        </span>
      </div>
    </div>
  );
}

export default CreditScoreGauge;