import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

function CardApplicationLayout({ children, currentStep, totalSteps, onBack, cardTitle }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBackClick}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition font-semibold"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          <div className="text-center">
            <p className="text-gray-600 text-sm">Step {currentStep} of {totalSteps}</p>
            <div className="w-64 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="w-20"></div>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default CardApplicationLayout;
