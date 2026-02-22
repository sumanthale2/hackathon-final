import { useNavigate } from 'react-router-dom';
import { useCardApplication } from '../context/CardApplicationContext';
import { selectedCardData } from '../data/cardsData';
import CardApplicationLayout from '../components/CardApplicationLayout';
import { CheckCircle, Download } from 'lucide-react';

function CardApplicationStep3() {
  const navigate = useNavigate();
  const { applicationData, updateApplicationData, submitApplication, previousStep } =
    useCardApplication();
  const card = selectedCardData[applicationData.selectedCard];

  const handleAgreeAndSubmit = () => {
    if (applicationData.termsAccepted) {
      submitApplication();
      navigate('/apply-card/thankyou');
    }
  };

  const handleBack = () => {
    previousStep();
    navigate('/apply-card/step2');
  };

  return (
    <CardApplicationLayout
      currentStep={3}
      totalSteps={4}
      onBack={handleBack}
      cardTitle={card?.title}
    >
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Terms & Conditions
          </h1>

          <button className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition">
            <Download className="w-4 h-4" />
            Download all (PDF)
          </button>
        </div>

        <p className="text-slate-600 text-sm max-w-2xl">
          Please carefully review the agreements below. You must read and accept
          all required disclosures before submitting your application.
        </p>
      </div>

      {/* Terms Container */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-10">
        <div className="max-h-96 overflow-y-auto pr-2 space-y-6 text-sm text-slate-700 leading-relaxed">

          <p className="font-medium">
            Before applying, please review each of the following documents:
          </p>

          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>
              <span className="font-medium">Credit Terms</span> (rates, fees, and other costs)
            </li>
            <li>
              <span className="font-medium">Consent to Electronic Communications</span>
            </li>
            <li>
              <span className="font-medium">Privacy Policy</span>
            </li>
            <li>
              <span className="font-medium">Application Disclosures</span> (including SSN verification)
            </li>
            <li>
              <span className="font-medium">Online Usage Agreement</span>
            </li>
          </ol>

          <div className="pt-6 border-t border-slate-200">
            <p className="font-semibold text-slate-900 mb-4">
              Agreement Summary
            </p>

            <div className="space-y-5">

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={applicationData.termsAccepted}
                  onChange={(e) =>
                    updateApplicationData({ termsAccepted: e.target.checked })
                  }
                  className="mt-1 w-5 h-5 rounded border-slate-300 focus:ring-2 focus:ring-blue-500"
                />
                <span>
                  I have read and agree to all Terms and Conditions. Selecting
                  “Agree & Submit” constitutes my electronic signature.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-1 w-5 h-5 rounded border-slate-300 focus:ring-2 focus:ring-blue-500"
                />
                <span>
                  This is an application for credit from Synchrony Bank (“SYNCB”).
                  If SYNCB is unable to approve my application, I authorize SYNCB
                  to share my application with additional lenders or financing
                  providers as described in the disclosures.
                  <span className="text-red-600 ml-1">*</span>
                </span>
              </label>

            </div>
          </div>
        </div>
      </div>

      {/* Final Confirmation */}
      <div className="flex items-start gap-3 p-5 bg-blue-50 border border-blue-200 rounded-xl mb-8">
        <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={applicationData.termsAccepted}
            onChange={(e) =>
              updateApplicationData({ termsAccepted: e.target.checked })
            }
            className="w-5 h-5 rounded border-slate-300 focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-slate-900 font-medium">
            I confirm that I agree to all terms and conditions
          </span>
        </label>
      </div>

      {/* CTA */}
      <button
        onClick={handleAgreeAndSubmit}
        disabled={!applicationData.termsAccepted}
        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 disabled:from-slate-300 disabled:to-slate-300 text-slate-900 font-semibold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:cursor-not-allowed mb-4"
      >
        Agree & Submit
      </button>

      <p className="text-xs text-slate-500 text-center">
        By clicking “Agree & Submit”, you acknowledge that you have reviewed and
        accepted all required disclosures.
      </p>
    </CardApplicationLayout>
  );
}

export default CardApplicationStep3;