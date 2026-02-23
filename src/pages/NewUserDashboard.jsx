import { ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import InfoCard from '../components/InfoCard';
import CreditScoreGauge from '../components/CreditScoreGauge';
import OfferCard from '../components/OfferCard';
import { newUserData } from '../data/newUserData';

function NewUserDashboard() {
  return (
    <Layout userName={newUserData.userName} showGreeting={false}>
      <div className="px-4 py-6 max-w-[1400px] mx-auto">
        <div className="bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Hi {newUserData.userName},{" "}
            <span className="font-normal text-gray-700">We have a personalized credit path for you!</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

            <div className="space-y-6">
              <InfoCard title="Your Current Status">
                <CreditScoreGauge score={newUserData.creditScore} status={newUserData.status} />

                <div className="mt-6 border-t border-gray-300 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium text-sm">▸ Partial Credit Limit:</span>
                    <span className="text-gray-900 font-bold text-lg">${newUserData.partialCreditLimit}</span>
                  </div>
                </div>
              </InfoCard>

              <InfoCard title="Improvement Tips">
                <ul className="space-y-3">
                  {newUserData.improvementTips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{tip}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard title="Success Story">
                <div className="flex items-start space-x-4">
                  <img
                    src={newUserData.successStory.image}
                    alt="Success Story"
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-xs font-bold inline-block mb-2">
                      +20 pts
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed italic">"{newUserData.successStory.quote}"</p>
                  </div>
                </div>
              </InfoCard>
            </div>

            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-5">
                  <div className="text-3xl">📦</div>
                  <h3 className="text-2xl font-bold text-gray-900">Your Customized Offers</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {newUserData.offers.map((offer) => (
                    <OfferCard key={offer.id} offer={offer} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <InfoCard title="Credit Improvement Plan">
            <div className="flex items-center space-x-2 mb-6">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 font-medium">Track your progress to approval readiness</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {newUserData.improvementPlan.steps.map((step) => (
                <div
                  key={step.id}
                  className={`p-5 rounded-xl border shadow-sm ${
                    step.status === 'In Progress'
                      ? 'bg-white border-blue-400'
                      : step.status === 'Next Step'
                      ? 'bg-white border-green-400'
                      : 'bg-white/60 border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
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
                      <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-sm">
                        Next Step
                      </span>
                    )}
                  </div>
                  <p className="font-bold text-gray-900 text-sm leading-relaxed">{step.title}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Target Score</p>
                <p className="text-4xl font-bold text-gray-900">{newUserData.improvementPlan.targetScore}</p>
              </div>
              <ArrowRight className="w-10 h-10 text-blue-600" />
              <div className="text-right">
                <p className="text-gray-600 text-sm font-medium mb-1">Goal: Increase to</p>
                <p className="text-4xl font-bold text-green-600">{newUserData.improvementPlan.targetScore}</p>
              </div>
            </div>
          </InfoCard>
        </div>
      </div>
    </Layout>
  );
}

export default NewUserDashboard;
