import { ArrowRight } from 'lucide-react';

function OfferCard({ offer }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`${offer.buttonColor} text-white px-4 py-3`}>
        <h3 className="font-bold text-lg">{offer.title}</h3>
      </div>

      <div className="p-6">
        <div className="h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
          <div className="text-4xl">
            {offer.id === 1 ? '🏦' : offer.id === 2 ? '📊' : '👨‍💼'}
          </div>
        </div>

        <p className="text-gray-700 font-semibold mb-2">{offer.description}</p>

        <ul className="space-y-1 mb-6">
          {offer.details.map((detail, index) => (
            <li key={index} className="text-gray-600 text-sm flex items-start">
              <span className="mr-2">▸</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full ${offer.buttonColor} text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200`}
        >
          <span>{offer.buttonText}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default OfferCard;
