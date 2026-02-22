import { useNavigate } from 'react-router-dom';
import { useCardApplication } from '../context/CardApplicationContext';
import { selectedCardData } from '../data/cardsData';
import CardApplicationLayout from '../components/CardApplicationLayout';
import { Info, Lock } from 'lucide-react';

function CardApplicationStep1() {
  const navigate = useNavigate();
  const { applicationData, updateApplicationData, nextStep, previousStep } = useCardApplication();
  const card = selectedCardData[applicationData.selectedCard];

  const handleContinue = () => {
    if (applicationData.ssn && applicationData.phone) {
      nextStep();
      navigate('/apply-card/step2');
    }
  };

  const handleNoPhoneClick = () => {
    updateApplicationData({ phone: 'NO_PHONE' });
    nextStep();
    navigate('/apply-card/step2');
  };

  const handleBack = () => {
    previousStep();
    navigate('/cards');
  };

  return (
    <CardApplicationLayout
      currentStep={1}
      totalSteps={4}
      onBack={handleBack}
      cardTitle={card?.title}
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white shadow-lg border border-gray-100 mb-6">
          <img
            src={card?.image}
            alt={card?.title}
            className="w-28 h-18 object-cover rounded-xl"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
          Apply for the
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-2">
          {card?.title}
        </h2>
      </div>

      {/* Notices */}
      <div className="space-y-4 mb-10">

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm">
          <p className="text-blue-900 text-sm leading-relaxed">
            Please review our{" "}
            <span className="font-semibold underline cursor-pointer">
              Terms & Conditions
            </span>{" "}
            before proceeding.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start space-x-3 shadow-sm">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-900 text-sm leading-relaxed">
            If your credit is currently frozen, please remove the freeze prior to submitting your application.
          </p>
        </div>

      </div>

      {/* Section Intro */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-2 tracking-tight">
          Let’s begin by verifying your information
        </h3>
        <p className="text-slate-600 text-sm">
          All fields are required unless stated otherwise.
        </p>
      </div>

      {/* Prefill Info Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10 shadow-sm">
        <p className="text-slate-700 text-sm leading-relaxed">
          We may be able to prefill portions of your application, including your name,
          address, and contact information, to make the process faster.
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-10 mb-12">

        {/* SSN */}
        <div>
          <label className="block text-slate-800 font-medium mb-3">
            <div className="flex items-center space-x-2">
              <Lock className="w-5 h-5 text-slate-500" />
              <span>Last 4 digits of your SSN</span>
            </div>
          </label>

          <input
            type="password"
            value={applicationData.ssn}
            onChange={(e) => updateApplicationData({ ssn: e.target.value })}
            placeholder="••••"
            maxLength="4"
            className="w-full px-5 py-3.5 border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all duration-200 shadow-sm"
          />

          <p className="text-slate-500 text-xs mt-3 leading-relaxed">
            By providing your Social Security number, Synchrony will attempt to locate your information to expedite your request.
          </p>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-slate-800 font-medium mb-3">
            Mobile Phone Number
          </label>

          <input
            type="tel"
            value={applicationData.phone}
            onChange={(e) => updateApplicationData({ phone: e.target.value })}
            placeholder="(555) 123-4567"
            className="w-full px-5 py-3.5 border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all duration-200 shadow-sm"
          />

          <p className="text-slate-500 text-xs mt-3 leading-relaxed">
            You consent to receive a one-time verification text message. Standard messaging rates may apply.
          </p>
        </div>

      </div>

      {/* Agreement Box */}
      <div className="bg-slate-100 border border-slate-200 p-4 rounded-xl mb-10 text-xs text-slate-700 shadow-sm">
        By clicking <span className="font-semibold">“Continue”</span>, you agree to our{" "}
        <span className="font-semibold underline cursor-pointer">
          Online Usage Agreement
        </span>.
      </div>

      {/* Actions */}
      <div className="space-y-4">

        <button
          onClick={handleContinue}
          disabled={!applicationData.ssn || !applicationData.phone}
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 disabled:from-slate-300 disabled:to-slate-300 text-slate-900 font-semibold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:cursor-not-allowed"
        >
          Continue
        </button>

        <button
          onClick={handleNoPhoneClick}
          className="w-full text-slate-600 hover:text-slate-900 font-medium py-3 transition"
        >
          I don’t have a mobile phone number
        </button>

      </div>

    </CardApplicationLayout>
  );
}

export default CardApplicationStep1;