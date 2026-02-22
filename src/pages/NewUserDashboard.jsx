import { ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import InfoCard from '../components/InfoCard';
import CreditScoreGauge from '../components/CreditScoreGauge';
import OfferCard from '../components/OfferCard';
import { newUserData } from '../data/newUserData';

function NewUserDashboard() {
  return (
    <Layout userName={newUserData.userName} showGreeting={false}>
      <div className="bg-gray-100 rounded-3xl p-6 min-h-[calc(100vh-150px)]">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Hi {newUserData.userName}, <span className="font-normal">We have a personalized credit path for you!</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-1">
            <InfoCard title="Your Current Status">
              <CreditScoreGauge score={newUserData.creditScore} status={newUserData.status} />

              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-700 font-semibold">▸ Partial Credit Limit:</span>
                  <span className="text-gray-900 font-bold">${newUserData.partialCreditLimit}</span>
                </div>
              </div>
            </InfoCard>

            <InfoCard title="Improvement Tips" className="mt-6">
              <ul className="space-y-2">
                {newUserData.improvementTips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard title="Success Story" className="mt-6">
              <div className="flex items-start space-x-3">
                <img
                  src={newUserData.successStory.image}
                  alt="Success Story"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-700 text-sm italic">"{newUserData.successStory.quote}"</p>
                </div>
              </div>
            </InfoCard>
          </div>

          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">📦</div>
                <h3 className="text-2xl font-bold text-gray-800">Your Customized Offers</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {newUserData.offers.map((offer) => (
                  <OfferCard key={offer.id} offer={offer} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <InfoCard title="Credit Improvement Plan" className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle className="w-6 h-6 text-blue-600" />
            <span className="text-gray-600 text-sm">Track your progress to approval readiness</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {newUserData.improvementPlan.steps.map((step) => (
              <div
                key={step.id}
                className={`p-4 rounded-lg border-2 ${
                  step.status === 'In Progress'
                    ? 'bg-blue-50 border-blue-300'
                    : step.status === 'Next Step'
                    ? 'bg-green-50 border-green-300'
                    : 'bg-gray-50 border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <CheckCircle
                    className={`w-6 h-6 ${
                      step.status === 'In Progress'
                        ? 'text-blue-600'
                        : step.status === 'Next Step'
                        ? 'text-green-600'
                        : 'text-gray-400'
                    }`}
                  />
                  {step.status === 'Next Step' && (
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      Next Step
                    </span>
                  )}
                </div>
                <p className="font-semibold text-gray-800">{step.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Target Score</p>
              <p className="text-3xl font-bold text-gray-800">{newUserData.improvementPlan.targetScore}</p>
            </div>
            <ArrowRight className="w-8 h-8 text-blue-600" />
            <div className="text-right">
              <p className="text-gray-600 text-sm">Goal: Increase to</p>
              <p className="text-3xl font-bold text-green-600">{newUserData.improvementPlan.targetScore}</p>
            </div>
          </div>
        </InfoCard>
      </div>
    </Layout>
  );
}

export default NewUserDashboard;
