import { ArrowRight, CheckCircle, Lightbulb } from "lucide-react";
import Layout from "../components/Layout";
import InfoCard from "../components/InfoCard";
import CreditScoreGauge from "../components/CreditScoreGauge";
import TaskItem from "../components/TaskItem";
import ProgressBar from "../components/ProgressBar";
import { existingUserData } from "../data/existingUserData";

function ExistingUserDashboard() {
  return (
    <Layout userName={existingUserData.userName} showGreeting={false}>
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-6 rounded-b-3xl shadow-lg">
        <h1 className="text-3xl font-bold">
          Welcome back, {existingUserData.userName}!
        </h1>
        <p className="text-blue-200 mt-1">
          Great progress on your credit uplift journey
        </p>
      </div>

      {/* Main Dashboard Container */}
      <div className="bg-gray-100 px-8 py-8 min-h-screen">
        <div className="bg-white rounded-3xl shadow-xl p-8">

          {/* Greeting */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Hi {existingUserData.userName},
            <span className="font-normal text-gray-600">
              {" "}Welcome back!
            </span>
          </h2>

          {/* Top Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

            {/* LEFT COLUMN */}
            <div className="space-y-6">
              <InfoCard title="Your Current Progress" soft>
                <CreditScoreGauge
                  score={existingUserData.creditScore}
                  status={existingUserData.status}
                />

                <div className="mt-6 flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-gray-700">
                    Progress Balance {existingUserData.progressBalance}
                  </span>
                </div>
              </InfoCard>

              <InfoCard title="Success Story" soft>
                <div className="flex items-start space-x-4">
                  <img
                    src={existingUserData.successStory.image}
                    alt="Success"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">
                      +20 pts
                    </span>
                    <p className="text-gray-600 mt-2 text-sm italic">
                      "{existingUserData.successStory.quote}"
                    </p>
                  </div>
                </div>
              </InfoCard>
            </div>

            {/* MIDDLE COLUMN */}
            <InfoCard soft>
              <div className="flex items-center space-x-2 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-800">
                  Credit Coach Update
                </h3>
              </div>

              <div className="flex items-center space-x-6 mb-6">
                <div className="text-5xl">👨‍💼</div>
                <Lightbulb className="w-12 h-12 text-yellow-400" />
              </div>

              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {existingUserData.coachUpdate.title}
              </h4>

              <p className="text-gray-600 mb-4">
                {existingUserData.coachUpdate.message}
              </p>

              <div className="flex items-center space-x-2 mb-4">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-700 font-semibold">
                  {existingUserData.coachUpdate.pointsRemain}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {existingUserData.coachUpdate.nextSteps.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-yellow-500" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 rounded-xl flex justify-center items-center space-x-2 transition">
                <span>Next Steps</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </InfoCard>

            {/* RIGHT COLUMN */}
            <InfoCard soft>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800">
                  Recommended Starter Options
                </h3>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-5 mb-5 shadow-inner">
                <div className="text-white font-semibold mb-3">
                  synchrony
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-3xl mb-2">💳</div>
                  <div className="text-xs text-gray-400">•••• 1234</div>
                </div>
              </div>

              <h4 className="font-bold text-lg text-gray-800 mb-3">
                {existingUserData.starterOption.title}
              </h4>

              <ul className="space-y-2 mb-6">
                {existingUserData.starterOption.benefits.map(
                  (benefit, index) => (
                    <li key={index} className="text-gray-600 text-sm">
                      • {benefit}
                    </li>
                  )
                )}
              </ul>

              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 rounded-xl flex justify-center items-center space-x-2 transition">
                <span>{existingUserData.starterOption.buttonText}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </InfoCard>
          </div>

          {/* Improvement Plan Section */}
          <InfoCard title="Your Credit Improvement Plan" soft>
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

            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 rounded-xl flex justify-center items-center space-x-2 transition">
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