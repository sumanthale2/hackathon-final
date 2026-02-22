import { CheckCircle } from 'lucide-react';

function ProgressBar({ current, total, label }) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full">
      {label && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">{label}</span>
          <span className="text-sm font-bold text-blue-600 flex items-center space-x-1">
            <span>{current}/{total}</span>
            <CheckCircle className="w-4 h-4" />
          </span>
        </div>
      )}

      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 flex items-center justify-end pr-1"
          style={{ width: `${percentage}%` }}
        >
          {percentage > 10 && (
            <span className="text-white text-xs font-bold">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
