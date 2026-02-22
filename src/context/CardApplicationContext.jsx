import { createContext, useContext, useState } from 'react';

const CardApplicationContext = createContext(null);

export const CardApplicationProvider = ({ children }) => {
  const [applicationData, setApplicationData] = useState({
    selectedCard: null,
    step: 1,
    ssn: '',
    phone: '',
    firstName: '',
    lastName: '',
    middleInitial: '',
    suffix: '',
    streetAddress: '',
    apartment: '',
    zipCode: '',
    city: '',
    state: '',
    housing: '',
    primaryPhone: '',
    primaryPhoneType: 'home',
    alternatePhone: '',
    alternatePhoneType: 'home',
    email: '',
    emailConfirm: '',
    ssn2: '',
    dateOfBirth: '',
    annualIncome: '',
    termsAccepted: false,
    referenceNumber: ''
  });

  const selectCard = (cardId) => {
    setApplicationData(prev => ({
      ...prev,
      selectedCard: cardId,
      step: 1
    }));
  };

  const updateApplicationData = (data) => {
    setApplicationData(prev => ({
      ...prev,
      ...data
    }));
  };

  const nextStep = () => {
    setApplicationData(prev => ({
      ...prev,
      step: prev.step + 1
    }));
  };

  const previousStep = () => {
    setApplicationData(prev => ({
      ...prev,
      step: Math.max(1, prev.step - 1)
    }));
  };

  const submitApplication = () => {
    const referenceNumber = `J${Math.random().toString(36).substr(2, 5).toUpperCase()}${Math.floor(Math.random() * 100)}`;
    setApplicationData(prev => ({
      ...prev,
      step: 5,
      referenceNumber
    }));
  };

  const resetApplication = () => {
    setApplicationData({
      selectedCard: null,
      step: 1,
      ssn: '',
      phone: '',
      firstName: '',
      lastName: '',
      middleInitial: '',
      suffix: '',
      streetAddress: '',
      apartment: '',
      zipCode: '',
      city: '',
      state: '',
      housing: '',
      primaryPhone: '',
      primaryPhoneType: 'home',
      alternatePhone: '',
      alternatePhoneType: 'home',
      email: '',
      emailConfirm: '',
      ssn2: '',
      dateOfBirth: '',
      annualIncome: '',
      termsAccepted: false,
      referenceNumber: ''
    });
  };

  return (
    <CardApplicationContext.Provider
      value={{
        applicationData,
        selectCard,
        updateApplicationData,
        nextStep,
        previousStep,
        submitApplication,
        resetApplication
      }}
    >
      {children}
    </CardApplicationContext.Provider>
  );
};

export const useCardApplication = () => {
  const context = useContext(CardApplicationContext);
  if (!context) {
    throw new Error('useCardApplication must be used within CardApplicationProvider');
  }
  return context;
};
