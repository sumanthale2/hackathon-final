import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCardApplication } from "../context/CardApplicationContext";
import { selectedCardData } from "../data/cardsData";
import CardApplicationLayout from "../components/CardApplicationLayout";

function CardApplicationStep2() {
  const navigate = useNavigate();
  const { applicationData, updateApplicationData, nextStep, previousStep } =
    useCardApplication();
  const card = selectedCardData[applicationData.selectedCard];

  /* Simulated Auto-Prefill (as if fetched from database) */
  useEffect(() => {
    updateApplicationData({
      firstName: applicationData.firstName || "Sam",
      middleInitial: applicationData.middleInitial || "A",
      lastName: applicationData.lastName || "Smith",
      suffix: applicationData.suffix || "",
      streetAddress: applicationData.streetAddress || "221B Baker Street",
      apartment: applicationData.apartment || "12A",
      zipCode: applicationData.zipCode || "10001",
      city: applicationData.city || "New York, NY",
      housing: applicationData.housing || "rent",
      primaryPhone: applicationData.primaryPhone || "(555) 123-4567",
      primaryPhoneType: applicationData.primaryPhoneType || "cell",
      alternatePhone: applicationData.alternatePhone || "",
      alternatePhoneType: applicationData.alternatePhoneType || "",
      email: applicationData.email || "sam@gmail.com",
      emailConfirm: applicationData.emailConfirm || "sam@gmail.com",
      ssn2: applicationData.ssn2 || "123-45-6789",
      dateOfBirth: applicationData.dateOfBirth || "1998-05-12",
      annualIncome: applicationData.annualIncome || "75000",
    });
    // eslint-disable-next-line
  }, []);

  const handleContinue = () => {
    if (
      applicationData.firstName &&
      applicationData.lastName &&
      applicationData.zipCode &&
      applicationData.email &&
      applicationData.emailConfirm
    ) {
      nextStep();
      navigate("/apply-card/step3");
    }
  };

  const handleBack = () => {
    previousStep();
    navigate("/apply-card");
  };

  return (
    <CardApplicationLayout
      currentStep={2}
      totalSteps={4}
      onBack={handleBack}
      cardTitle={card?.title}
    >
      {/* Header */}
      {/* Prefill Notice */}
      <div className="mb-10 bg-blue-50 border border-blue-200 rounded-xl p-5 shadow-sm">
        <p className="text-sm text-blue-900 leading-relaxed">
          We’ve securely retrieved your information from our internal records
          and trusted database sources to speed up your application.
        </p>
        <p className="text-sm text-blue-900 mt-2 leading-relaxed">
          Please carefully review the prefilled details below and make any
          necessary updates before continuing.
        </p>
        <p className="text-sm text-blue-900 mt-2">
          You can also review our{" "}
          <span className="font-semibold underline cursor-pointer">
            Terms & Conditions
          </span>{" "}
          before proceeding.
        </p>
      </div>

      {/* Section Heading */}
      <div className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Review Your Information
        </h1>
        <p className="text-slate-500 text-sm mt-2">
          Confirm that all details are accurate before submitting your
          application.
        </p>
      </div>

      {/* Form Container */}
      <form className="space-y-10 mb-14">
        {/* Name Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-8">
          <h2 className="text-lg font-semibold text-slate-800">
            Personal Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                value={applicationData.firstName}
                onChange={(e) =>
                  updateApplicationData({ firstName: e.target.value })
                }
                className="input-modern"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                M.I. <span className="text-slate-400">Optional</span>
              </label>
              <input
                type="text"
                maxLength="1"
                value={applicationData.middleInitial}
                onChange={(e) =>
                  updateApplicationData({ middleInitial: e.target.value })
                }
                className="input-modern"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                value={applicationData.lastName}
                onChange={(e) =>
                  updateApplicationData({ lastName: e.target.value })
                }
                className="input-modern"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Suffix <span className="text-slate-400">Optional</span>
              </label>
              <select
                value={applicationData.suffix}
                onChange={(e) =>
                  updateApplicationData({ suffix: e.target.value })
                }
                className="input-modern"
              >
                <option value="">Select</option>
                <option value="Jr">Jr</option>
                <option value="Sr">Sr</option>
                <option value="II">II</option>
                <option value="III">III</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-8">
          <h2 className="text-lg font-semibold text-slate-800">
            Contact Information
          </h2>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Street Address
            </label>
            <input
              type="text"
              value={applicationData.streetAddress}
              onChange={(e) =>
                updateApplicationData({ streetAddress: e.target.value })
              }
              className="input-modern"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <input
              type="text"
              value={applicationData.apartment}
              onChange={(e) =>
                updateApplicationData({ apartment: e.target.value })
              }
              placeholder="Apt # (Optional)"
              className="input-modern"
            />
            <input
              type="text"
              value={applicationData.zipCode}
              onChange={(e) =>
                updateApplicationData({ zipCode: e.target.value })
              }
              placeholder="Zip Code"
              className="input-modern"
            />
            <input
              type="text"
              value={applicationData.city}
              onChange={(e) => updateApplicationData({ city: e.target.value })}
              placeholder="City & State"
              className="input-modern"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={applicationData.email}
              onChange={(e) => updateApplicationData({ email: e.target.value })}
              className="input-modern"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Confirm Email
            </label>
            <input
              type="email"
              value={applicationData.emailConfirm}
              onChange={(e) =>
                updateApplicationData({ emailConfirm: e.target.value })
              }
              className="input-modern"
            />
          </div>
        </div>

        {/* Financial Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-8">
          <h2 className="text-lg font-semibold text-slate-800">
            Financial Information
          </h2>

          <div className="relative">
            <span className="absolute left-4 top-3 text-slate-400">$</span>
            <input
              type="number"
              value={applicationData.annualIncome}
              onChange={(e) =>
                updateApplicationData({ annualIncome: e.target.value })
              }
              className="input-modern pl-8"
            />
            <span className="absolute right-4 top-3 text-slate-400">.00</span>
          </div>
        </div>
      </form>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={
          !applicationData.firstName ||
          !applicationData.lastName ||
          !applicationData.zipCode ||
          !applicationData.email ||
          !applicationData.emailConfirm
        }
        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 disabled:from-slate-300 disabled:to-slate-300 text-slate-900 font-semibold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:cursor-not-allowed"
      >
        Continue
      </button>

      {/* Shared Modern Input Styling */}
      <style jsx>{`
        .input-modern {
          width: 100%;
          padding: 0.85rem 1rem;
          border: 1px solid #cbd5e1;
          border-radius: 0.75rem;
          background: #ffffff;
          transition: all 0.2s ease;
        }
        .input-modern:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
        }
      `}</style>
    </CardApplicationLayout>
  );
}

export default CardApplicationStep2;
