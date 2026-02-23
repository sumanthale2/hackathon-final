import { ArrowRight, CheckCircle, Lightbulb } from "lucide-react";
import Layout from "../components/Layout";
import InfoCard from "../components/InfoCard";
import CreditScoreGauge from "../components/CreditScoreGauge";
import TaskItem from "../components/TaskItem";
import ProgressBar from "../components/ProgressBar";
import { existingUserData } from "../data/existingUserData";

function ExistingUserDashboard() {
  return (
    <Layout userName={existingUserData.userName} showGreeting={true}>
      <div className="px-4 py-6 max-w-[1400px] mx-auto">
        <div className="bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Hi {existingUserData.userName},{" "}
            <span className="font-normal text-gray-700">Welcome back, John!</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

            <div className="space-y-6">
              <InfoCard title="Your Current Progress">
                <CreditScoreGauge
                  score={existingUserData.creditScore}
                  status={existingUserData.status}
                />

                <div className="mt-6 flex items-center space-x-2 border-t border-gray-300 pt-4">
                  <CheckCircle className="w-5 h-5 text-gray-900" />
                  <span className="font-bold text-gray-900 text-sm">
                    Progress Balance {existingUserData.progressBalance}
                  </span>
                </div>
              </InfoCard>

              <InfoCard title="Success Story">
                <div className="flex items-start space-x-4">
                  <img
                    src={existingUserData.successStory.image}
                    alt="Success"
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-xs font-bold inline-block mb-2">
                      +20 pts
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed italic">
                      "{existingUserData.successStory.quote}"
                    </p>
                  </div>
                </div>
              </InfoCard>
            </div>

            <InfoCard>
              <div className="flex items-center space-x-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Credit Coach Update
                </h3>
              </div>

              <div className="flex items-center justify-center space-x-4 my-6">
                <div className="text-6xl">👨‍💼</div>
                <Lightbulb className="w-16 h-16 text-yellow-400 drop-shadow-md" />
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                {existingUserData.coachUpdate.title}
              </h4>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {existingUserData.coachUpdate.message}
              </p>

              <div className="flex items-center space-x-2 mb-4">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-700 font-bold">
                  {existingUserData.coachUpdate.pointsRemain}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {existingUserData.coachUpdate.nextSteps.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-yellow-500" />
                    <span className="font-medium">{step}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-3.5 rounded-xl flex justify-center items-center space-x-2 transition-all shadow-md hover:shadow-lg">
                <span>Next Steps</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </InfoCard>

            <InfoCard>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900 text-lg">
                  Recommended Starter Options
                </h3>
                <ArrowRight className="w-5 h-5 text-gray-500" />
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-6 mb-5 shadow-lg">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 bg-yellow-500 rounded" />
                  <span className="text-white font-bold text-lg">synchrony</span>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-inner">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-4xl">💳</div>
                    <div className="flex space-x-1">
                      <div className="w-8 h-6 bg-red-500 rounded" />
                      <div className="w-8 h-6 bg-yellow-400 rounded" />
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">•••• 1234</div>
                </div>
              </div>

              <h4 className="font-bold text-xl text-gray-900 mb-4">
                {existingUserData.starterOption.title}
              </h4>

              <ul className="space-y-2 mb-6">
                {existingUserData.starterOption.benefits.map(
                  (benefit, index) => (
                    <li key={index} className="text-gray-700 text-sm font-medium flex items-start">
                      <span className="mr-2">•</span>
                      <span>{benefit}</span>
                    </li>
                  )
                )}
              </ul>

              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-3.5 rounded-xl flex justify-center items-center space-x-2 transition-all shadow-md hover:shadow-lg">
                <span>{existingUserData.starterOption.buttonText}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </InfoCard>
          </div>

          <InfoCard title="Your Credit Improvement Plan">
            <ProgressBar
              current={existingUserData.improvementPlan.progress}
              total={existingUserData.improvementPlan.total}
              label={existingUserData.improvementPlan.title}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {existingUserData.improvementPlan.tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-4 rounded-xl flex justify-center items-center space-x-2 transition-all shadow-md hover:shadow-lg">
              <span>Track My Progress</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </InfoCard>

        </div>
      </div>
    </Layout>
  );
}

export default ExistingUserDashboard;
