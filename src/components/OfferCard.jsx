import { ArrowRight } from 'lucide-react';

function OfferCard({ offer }) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`${offer.buttonColor} text-white px-4 py-3`}>
        <h3 className="font-bold text-base">{offer.title}</h3>
      </div>

      <div className="p-5">
        <div className="h-28 bg-gradient-to-br from-white to-gray-50 rounded-xl mb-4 flex items-center justify-center shadow-inner border border-gray-200">
          <div className="text-5xl">
            {offer.id === 1 ? '🏦' : offer.id === 2 ? '📊' : '👨‍💼'}
          </div>
        </div>

        <p className="text-gray-900 font-bold mb-3 text-sm">{offer.description}</p>

        <ul className="space-y-1.5 mb-5">
          {offer.details.map((detail, index) => (
            <li key={index} className="text-gray-700 text-xs font-medium flex items-start">
              <span className="mr-2">▸</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full ${offer.buttonColor} hover:opacity-90 text-white px-4 py-2.5 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all duration-200 shadow-md text-sm`}
        >
          <span>{offer.buttonText}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default OfferCard;
