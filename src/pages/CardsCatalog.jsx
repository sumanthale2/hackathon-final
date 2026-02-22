import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCardApplication } from "../context/CardApplicationContext";
import { Filter, ArrowRight, LogIn } from "lucide-react";
import { creditCards } from "../data/cardsData";

function CardsCatalog() {
  const navigate = useNavigate();
  const { selectCard } = useCardApplication();

  const handleApplyCard = (cardId) => {
    selectCard(cardId);
    navigate("/apply-card");
  };

  const handleSeeIfPrequalified = (cardId) => {
    selectCard(cardId);
    navigate("/apply-card");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
            Find the right card to fit your needs
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Whether you're building credit, maximizing rewards, or financing a
            project, explore our premium selection of credit cards designed to
            support your financial goals.
          </p>
                <button
            onClick={() => navigate("/login")}
            className="inline-flex items-center absolute top-10 right-10 space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <LogIn className="w-4 h-4" />
            <span className="font-medium text-sm">Login</span>
          </button>
        </div>

        {/* Top Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <p className="text-slate-700 font-medium text-base">
            Showing <span className="font-semibold">{creditCards.length}</span>{" "}
            card options
          </p>

          <button className="group inline-flex items-center space-x-2 border border-slate-300 bg-white px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:border-slate-400 transition-all duration-300">
            <Filter className="w-4 h-4 text-slate-600 group-hover:text-slate-800 transition" />
            <span className="text-slate-700 font-medium text-sm">
              Filter by category
            </span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {creditCards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col p-8"
            >
              {/* Card Header */}
              <div className="flex flex-col">
                {/* Large Card Image */}
                <div className="mb-8">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-36 object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Title */}
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-slate-900 leading-snug">
                    <span className="bg-orange-400 px-2 py-1 mr-2 rounded-sm text-black">
                      {card.name.split(" ")[0]}
                    </span>
                    {card.name.split(" ").slice(1).join(" ")}
                  </h3>
                </div>

                {/* Description Points */}
                {/* <div className="space-y-3 text-slate-600 text-base leading-relaxed">
                  {card.fullDescription.split("\n").map((line, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2"></div>
                      <p>{line}</p>
                    </div>
                  ))}
                </div> */}
              </div>
              {/* Divider */}
              <div className="border-t border-slate-100 mb-6"></div>

              {/* Full Description */}
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                {card.fullDescription.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    {idx < card.fullDescription.split("\n").length - 1 && (
                      <br />
                    )}
                  </span>
                ))}
              </p>

              {/* Action Buttons */}
              <div className="space-y-4 mt-8">
                {/* Primary CTA */}
                <button
                  onClick={() => handleApplyCard(card.id)}
                  className={`w-full ${card.buttonColor} text-slate-900 font-semibold py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-[1px] transition-all duration-300`}
                >
                  Apply Now
                </button>

                {/* Secondary CTA */}
                {card.id === 2 || card.id === 5 || card.id === 6 ? (
                  <button
                    onClick={() => handleSeeIfPrequalified(card.id)}
                    className="w-full border border-slate-800 text-slate-800 font-semibold py-3.5 rounded-xl hover:bg-slate-50 transition-all duration-300"
                  >
                    See if you prequalify
                  </button>
                ) : null}

                {/* Text Link */}
                <button className="group w-full inline-flex items-center justify-center text-blue-600 hover:text-blue-800 text-sm font-medium transition">
                  Get details
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardsCatalog;
