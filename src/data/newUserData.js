export const newUserData = {
  userName: 'John',
  creditScore: 640,
  status: 'Borderline Approval',
  partialCreditLimit: 750,
  improvementTips: [
    'Pay down balances below 30%',
    'Set up automatic payments',
    'Limit new credit inquiries'
  ],
  offers: [
    {
      id: 1,
      title: 'Secured Builder Card',
      description: 'Start with a $500 deposit',
      details: ['Credit Limit Increase Reviews'],
      buttonText: 'Choose Secured Card',
      buttonColor: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      id: 2,
      title: 'Prism Starter Credit Line',
      description: 'Instant $300 BNPL Line',
      details: ['Build Payment History'],
      buttonText: 'Select Prism Line',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      id: 3,
      title: 'Credit Coaching Plan',
      description: 'Score Boost Tips & Tasks',
      details: ['Goal: Reach 700 Score'],
      buttonText: 'View Coaching Plan',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    }
  ],
  improvementPlan: {
    steps: [
      {
        id: 1,
        title: 'Pay Down Balance < 30%',
        completed: false,
        status: 'In Progress'
      },
      {
        id: 2,
        title: 'Set Up AutoPay',
        completed: false,
        status: 'Next Step'
      },
      {
        id: 3,
        title: 'On-Time Payments for 3 Months',
        completed: false,
        status: 'Upcoming'
      }
    ],
    targetScore: 700
  },
  successStory: {
    quote: 'I raised my score by 80 points in 4 months with Synchrony\'s guidance!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
};
