import { useNavigate } from "react-router-dom";
import { useCardApplication } from "../context/CardApplicationContext";
import { useAuth } from "../context/AuthContext";
import { selectedCardData } from "../data/cardsData";
import { CheckCircle } from "lucide-react";

function CardApplicationThankYou() {
  const navigate = useNavigate();
  const { applicationData, resetApplication } = useCardApplication();
  const { user } = useAuth();
  const card = selectedCardData[applicationData.selectedCard];

  const handleOkay = () => {
    resetApplication();
    navigate("/dashboard/new");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 p-12 text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center border border-green-200 shadow-sm">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
        </div>

        {/* Card Image */}
        <div className="mb-10">
          <img
            src={card?.image}
            alt={card?.title}
            className="w-40 h-28 object-cover rounded-2xl mx-auto shadow-lg"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">
          Application Submitted
        </h1>

        {/* Main Message */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-10 text-left shadow-sm">
          <p className="text-slate-800 text-lg leading-relaxed">
            Thank you for applying for the{" "}
            <span className="font-semibold">{card?.title}</span>. You will
            receive a written explanation within 10 business days. If a valid
            email address was provided, you may receive a response
            electronically within 3–4 business days.
          </p>

          <div className="mt-8 pt-6 border-t border-blue-200 text-center">
            <p className="text-slate-600 text-sm mb-2">
              Your application reference number
            </p>
            <p className="text-3xl font-semibold text-blue-600 tracking-wider">
              {applicationData.referenceNumber}
            </p>
          </div>
        </div>

        {/* Legal / Disclosures */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-10 text-left text-xs text-slate-600 space-y-4 leading-relaxed">
          <p>
            <span className="font-semibold text-slate-800">*</span> Subject to
            credit approval. Rewards and promotional terms apply. Cash back
            earned will be credited as a statement credit. Additional rate and
            fee terms may apply.
          </p>

          <p>
            <span className="font-semibold text-slate-800">No Annual Fee:</span>{" "}
            Variable APRs may apply based on creditworthiness. Balance transfer
            and cash advance fees may apply. Foreign transaction fees may apply.
            See your cardmember agreement for full details.
          </p>

          <p>
            The Synchrony Mastercard is issued by Synchrony Bank pursuant to a
            license by Mastercard International Incorporated. © 2026.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={handleOkay}
          className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 px-10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default CardApplicationThankYou;
