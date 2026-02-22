export const existingUserData = {
  userName: 'John',
  creditScore: 642,
  status: 'Almost Ready!',
  progressBalance: '25/32',
  progressPercentage: 78,
  coachUpdate: {
    title: 'Great job!',
    message: 'You reduced your utilization to 25%',
    pointsRemain: '+7 points remain',
    nextSteps: [
      'Make one more on-time payment'
    ]
  },
  starterOption: {
    title: 'Credit Builder Starter Card',
    benefits: [
      'Low $300 limit',
      'Reports payment history',
      'No annual fee'
    ],
    buttonText: 'Accept Starter Card'
  },
  improvementPlan: {
    title: 'Approval Readiness',
    progress: 25,
    total: 32,
    tasks: [
      {
        id: 1,
        title: 'Set Up Automatic Bill Payments',
        dueDate: 'July 31',
        points: '+5 pts',
        completed: false,
        pointsColor: 'bg-yellow-500'
      },
      {
        id: 2,
        title: 'Make One On-time Payment',
        dueDate: 'August 20',
        points: '+7 pts',
        completed: false,
        pointsColor: 'bg-green-600'
      },
      {
        id: 3,
        title: 'Report\'s payment history',
        dueDate: '',
        points: 'Due +5 pts',
        completed: false,
        pointsColor: 'bg-yellow-500'
      },
      {
        id: 4,
        title: 'Reduce Credit Utilization Below 30%',
        dueDate: '',
        points: '',
        completed: true,
        pointsColor: ''
      }
    ]
  },
  successStory: {
    quote: 'I raised my score by 80 points in 4 months with Synchrony\'s guidance!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
};
