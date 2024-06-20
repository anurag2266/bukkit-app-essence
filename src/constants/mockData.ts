import { MonthlyClassAttendance, StudentLegacy } from './types';
import localization from './localization';
import images from './images';


const schools = [
  {
    id: '1',
    name: 'Tricoci University',
    address: 'Chicago, IL',
    logo: require('../assets/images/tricoci.png')
  },
  {
    id: '2',
    name: 'Bellus Academy',
    address: 'San Diego, CA',
    logo: require('../assets/images/tricoci.png')
  },
  {
    id: '3',
    name: 'American National Uni.',
    address: 'Salem, VA',
    logo: require('../assets/images/tricoci.png')
  }
];

const clientName = 'Anglela';

const studentAttendanceSummary = {
  ca: [
    { title: 'Lessons\nin July', value: 25 },
    { title: 'Hours\nin July', value: 135 },
    { title: 'Rate of\nattendance', value: '92%' }
  ],

  da: [
    { title: 'Days in\nJuly', value: 4 },
    { title: 'Days in\n2019', value: 148 },
    { title: 'Rate of\nattendance', value: '92%' }
  ]
};

const studentAttendances: { [key: string]: Array<MonthlyClassAttendance> } = {
  ca: [
    {
      month: 6,
      data: [
        {
          week: 'June 29th',
          totalHours: 20,
          data: [
            {
              date: new Date(2020, 6, 6),
              hours: 2,
              status: 'irregular'
            },
            {
              date: new Date(2020, 6, 7),
              hours: 8,
              status: 'approved'
            },
            {
              date: new Date(2020, 6, 8),
              hours: 2,
              status: 'irregular'
            },
            {
              date: new Date(2020, 6, 9),
              hours: 0,
              status: 'rejected'
            },
            {
              date: new Date(2020, 6, 10),
              hours: 8,
              status: 'approved'
            }
          ]
        },
        {
          week: 'June 29th',
          totalHours: 20,
          data: [
            {
              date: new Date(2020, 6, 6),
              hours: 2,
              status: 'irregular'
            },
            {
              date: new Date(2020, 6, 7),
              hours: 8,
              status: 'approved'
            },
            {
              date: new Date(2020, 6, 8),
              hours: 2,
              status: 'irregular'
            },
            {
              date: new Date(2020, 6, 9),
              hours: 0,
              status: 'rejected'
            },
            {
              date: new Date(2020, 6, 10),
              hours: 8,
              status: 'approved'
            }
          ]
        },
        {
          week: 'June 29th',
          totalHours: 20,
          data: [
            {
              date: new Date(2020, 6, 6),
              hours: 2,
              status: 'irregular'
            },
            {
              date: new Date(2020, 6, 7),
              hours: 8,
              status: 'approved'
            },
            {
              date: new Date(2020, 6, 8),
              hours: 2,
              status: 'irregular'
            },
            {
              date: new Date(2020, 6, 9),
              hours: 0,
              status: 'rejected'
            },
            {
              date: new Date(2020, 6, 10),
              hours: 8,
              status: 'approved'
            }
          ]
        }
      ]
    },
    {
      month: 5,
      data: [
        {
          week: 'June 29th',
          totalHours: 20,
          data: [
            {
              date: new Date(2020, 6, 6),
              hours: 2,
              status: 'irregular'
            },
            {
              date: new Date(2020, 6, 7),
              hours: 8,
              status: 'approved'
            },
            {
              date: new Date(2020, 6, 8),
              hours: 2,
              status: 'irregular'
            },
            {
              date: new Date(2020, 6, 9),
              hours: 0,
              status: 'rejected'
            },
            {
              date: new Date(2020, 6, 10),
              hours: 8,
              status: 'approved'
            }
          ]
        },
        {
          week: 'June 29th',
          totalHours: 20,
          data: [
            {
              date: new Date(2020, 6, 6),
              hours: 2,
              status: 'irregular'
            },
            {
              date: new Date(2020, 6, 7),
              hours: 8,
              status: 'approved'
            },
            {
              date: new Date(2020, 6, 8),
              hours: 2,
              status: 'irregular'
            },
            {
              date: new Date(2020, 6, 9),
              hours: 0,
              status: 'rejected'
            },
            {
              date: new Date(2020, 6, 10),
              hours: 8,
              status: 'approved'
            }
          ]
        },
        {
          week: 'June 29th',
          totalHours: 20,
          data: [
            {
              date: new Date(2020, 6, 6),
              hours: 2,
              status: 'irregular'
            },
            {
              date: new Date(2020, 6, 7),
              hours: 8,
              status: 'approved'
            },
            {
              date: new Date(2020, 6, 8),
              hours: 2,
              status: 'irregular'
            },
            {
              date: new Date(2020, 6, 9),
              hours: 0,
              status: 'rejected'
            },
            {
              date: new Date(2020, 6, 10),
              hours: 8,
              status: 'approved'
            }
          ]
        }
      ]
    }
  ],

  da: [
    {
      month: 6,
      value: 4,
      data: [
        {
          date: new Date(2019, 6, 4),
          classes: ['9:15 - 3:40'],
          status: 'approved'
        },
        {
          date: new Date(2019, 6, 3),
          classes: ['9:15 - 3:30'],
          status: 'approved'
        },
        {
          date: new Date(2019, 6, 2),
          classes: ['9:00'],
          status: 'warning'
        },
        {
          date: new Date(2019, 6, 1),
          classes: ['9:25 - 4:15'],
          status: 'approved'
        }
      ]
    },
    {
      month: 5,
      value: 12,
      data: [
        {
          date: new Date(2019, 5, 28),
          classes: ['9:00 - 4:30'],
          status: 'warning'
        },
        {
          date: new Date(2019, 5, 27),
          classes: [],
          status: 'rejected'
        }
      ]
    }
  ]
};

const studentAttendanceDetails = {
  ca: [
    { lesson: 'Beauty Therapy', inTime: '09:33am', outTime: '10:16am' },
    { lesson: 'Beauty Therapy', inTime: '09:33am', outTime: '10:16am' },
    { lesson: 'Beauty Therapy', inTime: '09:33am', outTime: '10:16am' },
    { lesson: 'Beauty Therapy', inTime: '09:33am', outTime: '10:16am' },
    { lesson: 'Beauty Therapy', inTime: '09:33am', outTime: '10:16am' }
  ],
  da: [
    { event: 'Check-in', with: 'West Entrance', time: '09:15am' },
    { event: 'Check-in', with: 'West Entrance', time: '09:15am' },
    { event: 'Check-in', with: 'West Entrance', time: '09:15am' },
    { event: 'Check-in', with: 'West Entrance', time: '09:15am' },
    { event: 'Check-in', with: 'West Entrance', time: '09:15am' }
  ]
}

const beacons = {
  ca: [
    { name: 'Cosmetology 101', description: 'Mr. John Rogers, Room 12' },
    { name: 'Salon Management', description: 'Mrs. Williams, Room 14' }
  ],

  da: [
    { name: 'West One', description: 'Student entrace West' },
    { name: 'Reception Hall', description: 'description' },
    { name: 'Admissions Office', description: 'description' }
  ]
};
const staffAttendanceSummary = {
  ca: [
    { title: localization.myLessons, value: 0 },
    { title: localization.myStudents, value: 0 },
    { title: localization.approvalRequired, value: 0 }
  ],

  da: [
    { title: localization.campusCheckins, value: 0 },
    { title: localization.campusApprovals, value: 0 },
    { title: localization.overallApprovals, value: 0 }
  ]
};

const staffHotspots = [
  { name: 'West One', description: 'West Entrance' },
  { name: 'Admin', description: 'Admissions Office' },
  { name: 'Lab Block', description: 'Floor 2, lab building' }
];

const staffClasses = [
  { name: 'Cosmetology 101', description: 'Room 12, Main Campus' },
  { name: 'Salon Management', description: 'Lecture Theatre 1' },
  { name: 'Cosmetology 101', description: 'Lab B, Admin Block' }
];

const staffStudents: Array<StudentLegacy> = [
  {
    first_name: 'Angela',
    last_name: 'Richards',
    campus: 'New York Campus',
    status: 'approved'
  },
  {
    first_name: 'Angela',
    last_name: 'Richards',
    campus: 'New York Campus',
    status: 'approved'
  },
  {
    first_name: 'Angela',
    last_name: 'Richards',
    campus: 'New York Campus',
    status: 'approved'
  },
  {
    first_name: 'Angela',
    last_name: 'Richards',
    campus: 'New York Campus',
    status: 'warning'
  },
  {
    first_name: 'Angela',
    last_name: 'Richards',
    campus: 'New York Campus',
    status: 'approved'
  },
  {
    first_name: 'Angela',
    last_name: 'Richards',
    campus: 'New York Campus',
    status: 'warning'
  }
];

const staffConfirmedStudents: Array<StudentLegacy> = [
  {
    name: 'Angela Richards',
    campus: 'New York Campus',
    status: 'approved'
  },
  {
    name: 'Nicholas Wilson',
    campus: 'New York Campus',
    status: 'approved'
  }
];

const staffClassSnapshot: Array<StudentLegacy> = [
  {
    name: 'Angela Richards',
    campus: 'New York Campus',
    status: 'approved'
  },
  {
    name: 'Nicholas Wilson',
    campus: 'New York Campus',
    status: 'approved'
  },
  {
    name: 'Jonathan Ripples',
    campus: 'New York Campus',
    status: 'approved'
  }
];

const hotspotConfigurations = [
  {
    title: 'Advanced Color',
    instructor: 'Mr. Richard Wilson',
    classStart: '9:30am',
    classEnd: '11:45am',
    gracePeriodStart: '10 minutes',
    gracePeriodEnd: '10 minutes'
  },
  {
    title: 'Finance 101',
    instructor: 'Mr. Richard Wilson',
    classStart: '1:30pm',
    classEnd: '3:30pm',
    gracePeriodStart: '10 minutes',
    gracePeriodEnd: '10 minutes'
  },
  {
    title: 'Salon Basics',
    instructor: 'Mr. Richard Wilson',
    classStart: '11:30am',
    classEnd: '12:00am',
    gracePeriodStart: '10 minutes',
    gracePeriodEnd: '10 minutes'
  }
];

const staffClassesHistory = [
  {
    date: new Date(2020, 7, 23),
    data: [
      {
        lesson: 'Cosmetology 101',
        online: true,
        room: 'Room 105',
        inTime: '08:30am',
        outTime: '11:00am'
      },
      {
        lesson: 'Cosmetology 101',
        room: 'Room 105',
        inTime: '08:30am',
        outTime: '11:00am'
      },
      {
        lesson: 'Cosmetology 101',
        room: 'Room 105',
        inTime: '08:30am',
        outTime: '11:00am'
      },
      {
        lesson: 'Cosmetology 101',
        room: 'Room 105',
        inTime: '08:30am',
        outTime: '11:00am',
        active: true
      }
    ]
  },
  {
    date: new Date(2020, 7, 22),
    data: [
      {
        lesson: 'Cosmetology 101',
        online: true,
        room: 'Room 105',
        inTime: '08:30am',
        outTime: '11:00am'
      },
      {
        lesson: 'Cosmetology 101',
        room: 'Room 105',
        inTime: '08:30am',
        outTime: '11:00am'
      }
    ]
  },
  {
    date: new Date(2020, 7, 17),
    data: [
      {
        lesson: 'Cosmetology 101',
        room: 'Room 105',
        inTime: '08:30am',
        outTime: '11:00am'
      },
      {
        lesson: 'Cosmetology 101',
        online: true,
        room: 'Room 105',
        inTime: '08:30am',
        outTime: '11:00am'
      }
    ]
  }
];

const vendorList = [
  {
    id: 1,
    name: "Super Cutz",
    category: "Barber Shop",
    type: "unisex",
    location: "12 Condell Street, Wembley, \nHA6 2LA, London",
    distance: "1.1 miles away",
    slotAvailableTime: "10:00am",
    slotAvailableDate: "29/07/20",
    maxPrice: 45,
    minPrice: 15,
    rating: 4,
    totalReview: 56,
    profilePic: images.vendorProfilePic1
  },
  {
    id: 2,
    name: "Super Cutz",
    category: "Barber Shop",
    type: "unisex",
    location: "12 Condell Street, Wembley, \nHA6 2LA, London",
    distance: "1.1 miles away",
    slotAvailableTime: "10:00am",
    slotAvailableDate: "29/07/20",
    maxPrice: 45,
    minPrice: 15,
    rating: 4,
    totalReview: 56,
    profilePic: images.vendorProfilePic2

  },
  {
    id: 3,
    name: "Super Cutz",
    category: "Barber Shop",
    type: "unisex",
    location: "12 Condell Street, Wembley, \nHA6 2LA, London",
    distance: "1.1 miles away",
    slotAvailableTime: "10:00am",
    slotAvailableDate: "29/07/20",
    maxPrice: 45,
    minPrice: 15,
    rating: 4,
    totalReview: 56,
    profilePic: images.vendorProfilePic1
  },
  {
    id: 4,
    name: "Super Cutz",
    category: "Barber Shop",
    type: "unisex",
    location: "12 Condell Street, Wembley, \nHA6 2LA, London",
    distance: "1.1 miles away",
    slotAvailableTime: "10:00am",
    slotAvailableDate: "29/07/20",
    maxPrice: 45,
    minPrice: 15,
    rating: 4,
    totalReview: 56,
    profilePic: images.vendorProfilePic1
  },
  {
    id: 5,
    name: "Super Cutz",
    category: "Barber Shop",
    type: "unisex",
    location: "12 Condell Street, Wembley, \nHA6 2LA, London",
    distance: "1.1 miles away",
    slotAvailableTime: "10:00am",
    slotAvailableDate: "29/07/20",
    maxPrice: 45,
    minPrice: 15,
    rating: 4,
    totalReview: 56,
    profilePic: images.vendorProfilePic1
  },
]
const subCategory = [
  {
    id: 1,
    name: "All",
    active: false,
  },
  {
    id: 1,
    name: "Barber Shop",
    active: true,
  },
  {
    id: 2,
    name: "Hair Salon",
    active: false,
  },
  {
    id: 3,
    name: "Make-Up",
    active: false,
  },
  {
    id: 4,
    name: "Nails & Feet",
    active: false,
  },
  {
    id: 5,
    name: "Hair Removal",
    active: false,
  },
  {
    id: 6,
    name: "Spa & Massage",
    active: false,
  },
  {
    id: 7,
    name: "Skin & Facial",
    active: false,
  },
  {
    id: 8,
    name: "Tatoos & Piercings",
    active: false,
  },
  {
    id: 9,
    name: "Eyebrows / Lashes",
    active: false,
  }
]
const categoryList = [
  {
    id: 1,
    title: 'Health & Beauty',
    active:false,
    image: images.catBeauty,
    subCategory: [
      {
        id: 1,
        name: "Barber Shop",
      },
      {
        id: 2,
        name: "Hair Salon",
      },
      {
        id: 3,
        name: "Make-Up",
      },
      {
        id: 4,
        name: "Nails & Feet",
      },
      {
        id: 5,
        name: "Skin & Facial",
      },
      {
        id: 6,
        name: "Hair Removal",
      },
      {
        id: 7,
        name: "Spa & Massage",
      },
      {
        id: 8,
        name: "Tatoos & Piercings",
      },
      {
        id: 9,
        name: "Eyebrows / Lashes",
      }
    ]
  },
  {
    id: 2,
    title: 'Sports & Fitness',
    active:false,
    image: images.catFitness,
    subCategory: [
      {
        id: 1,
        name: "Gym",
      },
      {
        id: 2,
        name: "Yoga",
      },
      {
        id: 3,
        name: "Zoomba",
      },
      {
        id: 4,
        name: "Indoor Sports",
      },
      {
        id: 5,
        name: "Outdoor Sports",
      },
      {
        id: 6,
        name: "Fitness",
      },
      {
        id: 7,
        name: "Gym",
      },
      {
        id: 8,
        name: "Yoga",
      },
      {
        id: 9,
        name: "Zoomba",
      }
    ]
  },
  {
    id: 3,
    title: 'Home & Garden',
    image: images.catGarden,
    active:false,
    subCategory: [
      {
        id: 1,
        name: "House Help",
      },
      {
        id: 2,
        name: "Cleaning",
      },
      {
        id: 3,
        name: "Gardener",
      },
      {
        id: 4,
        name: "House Help",
      },
      {
        id: 5,
        name: "Deep Cleaning",
      },
      {
        id: 6,
        name: "Cleaning",
      },
      {
        id: 7,
        name: "Repair",
      },
      {
        id: 8,
        name: "House Help",
      },
      {
        id: 9,
        name: "Cleaning",
      }
    ]
  },
  {
    id: 4,
    title: 'Pets',
    active:false,
    image: images.catPets,
    subCategory: [
      {
        id: 1,
        name: "Pets Doctor",
      },
      {
        id: 2,
        name: "Pets Care",
      },
      {
        id: 3,
        name: "Pets Cleaning",
      }
    ]
  },

];
const vendorServices = [
  {
    id: 1,
    type: 'popular',
    services: [
      {
        id: 1,
        name: 'Haircut',
        description: 'This is an expanded view containing the description of the service. It tells the user what the service involves. And so on.',
        price: '10.00',
        time: '1hr',
        active: false,
        fix:true
      },
      {
        id: 2,
        name: 'Beard trimming',
        description: 'This is an expanded view containing the description of the service. It tells the user what the service involves. And so on.',
        price: '8.00',
        time: '1hr',
        active: false,
        fix:false
      },
      {
        id: 3,
        name: 'Braids',
        description: 'This is an expanded view containing the description of the service. It tells the user what the service involves. And so on.',
        price: '25.00',
        time: '1hr',
        active: false,
        fix:true   
      }
    ]
  },
  {
    id: 2,
    type: 'other',
    services: [
      {
        id: 4,
        name: 'Styling',
        description: 'This is an expanded view containing the description of the service. It tells the user what the service involves. And so on.',
        price: '35.00',
        time: '1hr',
        active: false,
        fix:false
      },
      {
        id: 5,
        name: 'Styling',
        description: 'This is an expanded view containing the description of the service. It tells the user what the service involves. And so on.',
        price: '35.00',
        time: '1hr',
        active: false,
        fix:false
      },
      {
        id: 6,
        name: 'Styling',
        description: 'This is an expanded view containing the description of the service. It tells the user what the service involves. And so on.',
        price: '35.00',
        time: '1hr',
        active: false,
        fix:false
      },
      {
        id: 7,
        name: 'Styling',
        description: 'This is an expanded view containing the description of the service. It tells the user what the service involves. And so on.',
        price: '35.00',
        time: '1hr',
        active: false,
        fix:false
      },
      {
        id: 8,
        name: 'Styling',
        description: 'This is an expanded view containing the description of the service. It tells the user what the service involves. And so on.',
        price: '35.00',
        time: '1hr',
        active: false,
        fix:false
      },
      {
        id: 9,
        name: 'Styling',
        description: 'This is an expanded view containing the description of the service. It tells the user what the service involves. And so on.',
        price: '35.00',
        time: '1hr',
        active: false,
        fix:false
      },
      {
        id: 10,
        name: 'Styling',
        description: 'This is an expanded view containing the description of the service. It tells the user what the service involves. And so on.',
        price: '35.00',
        time: '1hr',
        active: false,
        fix:false
      },
      {
        id: 11,
        name: 'Styling',
        description: 'This is an expanded view containing the description of the service. It tells the user what the service involves. And so on.',
        price: '35.00',
        time: '1hr',
        active: false,
        fix:false
      },
      {
        id: 12,
        name: 'Styling',
        description: 'This is an expanded view containing the description of the service. It tells the user what the service involves. And so on.',
        price: '35.00',
        time: '1hr',
        active: false,
        fix:false
      }
    ]
  }
]

const vendorAbout = [
  {
    id: 1,
    detail: "This is an introduction to the business. Extreme Barbers is a unisex saloon that offers a varied range of hair services. Located in the Central Business District. This is an introduction to the business.",
    subDetail: "Extreme Barbers is a unisex saloon that offers a varied range of hair services. Located in the Central Business District.",
    facilities: [
      {
        id: 1,
        name: "Toilets",
        image: images.toilets
      },
      {
        id: 2,
        name: "Baby Changing Area",
        image: images.babyChanging
      },
      {
        id: 3,
        name: "Hand Washing Facilities",
        image: images.handWashing
      },
      {
        id: 4,
        name: "Waiting Area (With Seats)",
        image: images.waitingArea
      },
      {
        id: 5,
        name: "Air Conditioned",
        image: images.airConditioning
      },
      {
        id: 6,
        name: "Free Parking",
        image: images.freeParking
      },
    ],
    contactNum: "077777777777",
    whatsapp: images.callIocn,
    socialProfile: "Xtreme_barberz",
    instagram: images.instaIocn,
    openingHours: [
      {
        id: 1,
        day: "Monday",
        from: "09:00",
        to: "18:00",
        status: "Open"
      },
      {
        id: 2,
        day: "Tuesday",
        from: "09:00",
        to: "18:00",
        status: "Open"
      },
      {
        id: 3,
        day: "Wednesday",
        from: "09:00",
        to: "18:00",
        status: "Open"
      },
      {
        id: 4,
        day: "Thursday",
        from: "09:00",
        to: "18:00",
        status: "Open",
      },
      {
        id: 5,
        day: "Friday",
        from: "09:00",
        to: "18:00",
        status: "Open"
      },
      {
        id: 6,
        day: "Saturday",
        from: "09:00",
        to: "18:00",
        status: "Open"
      },
      {
        id: 7,
        day: "Sunday",
        from: "",
        to: "",
        status: "Closed"
      },
    ]
  }
]

const settingpaymentmode=[
  {
    id: 1,
    paymentMethodLogo: images.google,
    paymentMethod: localization.googlePay,
    detail:''
  },
  {
    id: 2,
    paymentMethodLogo: images.creditCard,
    paymentMethod: localization.creditcard,
    detail: localization.cardNum,
    //detail:''
  },
  {
    id: 3,
    paymentMethodLogo: images.paypal,
    paymentMethod: localization.paypal,
    detail: localization.payPalId
  },
]
const paymentmode = [
  {
    id: 1,
    paymentMethodLogo: images.google,
    paymentMethod: localization.googlePay,
    detail:''
  },
  {
    id: 2,
    paymentMethodLogo: images.creditCard,
    paymentMethod: localization.creditcard,
    detail: localization.cardNum,
    //detail:''
  },
  {
    id: 3,
    paymentMethodLogo: images.paypal,
    paymentMethod: localization.paypal,
    detail: localization.payPalId
  },
  {
    id: 4,
    paymentMethodLogo: images.payCash,
    paymentMethod: localization.payCash,
    detail:''
  },
]

const paymentHistory = [
  {
    id: 1,
    paymentDate: localization.paymentDate,
    payedFor: localization.payFor,
    amount: localization.payedAmount,
    receipt: images.receipt
  },
  {
    id: 2,
    paymentDate: localization.paymentDate,
    payedFor: localization.payFor,
    amount: localization.payedAmount,
    receipt: images.receipt
  },
  {
    id: 3,
    paymentDate: localization.paymentDate,
    payedFor: localization.payFor,
    amount: localization.payedAmount,
    receipt: images.receipt
  },
  {
    id: 4,
    paymentDate: localization.paymentDate,
    payedFor: localization.payFor,
    amount: localization.payedAmount,
    receipt: images.receipt
  },
  {
    id: 5,
    paymentDate: localization.paymentDate,
    payedFor: localization.payFor,
    amount: localization.payedAmount,
    receipt: images.receipt
  },
  {
    id: 6,
    paymentDate: localization.paymentDate,
    payedFor: localization.payFor,
    amount: localization.payedAmount,
    receipt: images.receipt
  },
  {
    id: 7,
    paymentDate: localization.paymentDate,
    payedFor: localization.payFor,
    amount: localization.payedAmount,
    receipt: images.receipt
  },
]
const payemntAccordian = [
  {
    id: 1,
    title: localization.pendingAppointments,
    active:false
  },
  {
    id: 2,
    title: localization.completedAppointments,
    active:false

  },
]

const favouritesAccordion = [
  {
    id: 1,
    title: 'Favourite Barber Shops',
    active:true,
    list:[
      {
        id: 1,
        name: "Super Cutz",
        category: "Barber Shop",
        type: "unisex",
        location: "12 Condell Street, Wembley, \nHA6 2LA, London",
        distance: "1.1 miles away",
        slotAvailableTime: "10:00am",
        slotAvailableDate: "29/07/20",
        maxPrice: 45,
        minPrice: 15,
        rating: 4,
        totalReview: 56,
        profilePic: images.favoruite
      },
    ]
  },
  {
    id: 2,
    title: 'Favourite Tyre Shops',
    active:false,
    list:[
      {
        id: 1,
        name: "Super Cutz",
        category: "Barber Shop",
        type: "unisex",
        location: "12 Condell Street, Wembley, \nHA6 2LA, London",
        distance: "1.1 miles away",
        slotAvailableTime: "10:00am",
        slotAvailableDate: "29/07/20",
        maxPrice: 45,
        minPrice: 15,
        rating: 4,
        totalReview: 56,
        profilePic: images.vendorProfilePic1
      },
    ]
  },
  {
    id: 3,
    title: 'Favourite Computer Shops',
    active:false,
    list:[
      {
        id: 1,
        name: "Super Cutz",
        category: "Barber Shop",
        type: "unisex",
        location: "12 Condell Street, Wembley, \nHA6 2LA, London",
        distance: "1.1 miles away",
        slotAvailableTime: "10:00am",
        slotAvailableDate: "29/07/20",
        maxPrice: 45,
        minPrice: 15,
        rating: 4,
        totalReview: 56,
        profilePic: images.vendorProfilePic1
      },
    ]
  },
]

const Reviews = [
  {
    id: 1,
    buttonTitle: localization.reviewPosted,
    title: localization.shopName,
    address: localization.shopAddress,
    reviewFor: localization.job,
    reviewDate: localization.reviewDate,
    ratingStar: images.reviewsRating,
    shopImage: images.vendorProfilePic1
  },
  {
    id: 2,
    buttonTitle: localization.reviewPending,
    title: localization.shopName,
    address: localization.shopAddress,
    reviewFor: localization.job,
    reviewDate: localization.reviewDate,
    ratingStar: images.reviewsRating,
    shopImage: images.vendorProfilePic1
  },
  {
    id: 3,
    buttonTitle: localization.reviewPosted,
    title: localization.shopName,
    address: localization.shopAddress,
    reviewFor: localization.job,
    reviewDate: localization.reviewDate,
    ratingStar: images.reviewsRating,
    shopImage: images.vendorProfilePic1
  },
  {
    id: 4,
    buttonTitle: localization.reviewPosted,
    title: localization.shopName,
    address: localization.shopAddress,
    reviewFor: localization.job,
    reviewDate: localization.reviewDate,
    ratingStar: images.reviewsRating,
    shopImage: images.vendorProfilePic1
  },
  {
    id: 5,
    buttonTitle: localization.reviewPosted,
    title: localization.shopName,
    address: localization.shopAddress,
    reviewFor: localization.job,
    reviewDate: localization.reviewDate,
    ratingStar: images.reviewsRating,
    shopImage: images.vendorProfilePic1
  },
]

const ReviewsDetails = [
  {
    id: 1,
    title: localization.shopName,
    address: localization.shopAddress,
    reviewFor: localization.job,
    reviewDate: localization.reviewDate,
    shopImage: images.vendorProfilePic1
  },
]

const settings = [
  {
    id: 1,
    title: localization.personalDetails,
    image: images.settingsPersonalDetails,
  },
  {
    id: 2,
    title: localization.payments,
    image: images.payments,
  },
  {
    id: 3,
    title: localization.chat,
    image: images.chat,
  },
  {
    id: 4,
    title: localization.reviews,
    image: images.reviews,
  },
  {
    id: 5,
    title: localization.appSettings,
    image: images.setting,
  },
  {
    id: 6,
    title: localization.legal,
    image: images.legal,
  },
  {
    id: 7,
    title: localization.HelpSupport,
    image: images.help,
  },
  {
    id: 8,
    title: localization.aboutBuukit,
    image: images.aboutUs,
  },
  {
    id: 9,
    title: localization.switchTo+ localization.BusinessProfile,
    image: images.switch,
  },
  {
    id: 10,
    title: localization.logOut,
    image: images.logout,
  },
]

const favouritesList = [
  {
    id: 1,
    name: "Super Cutz",
    category: "Barber Shop",
    type: "unisex",
    location: "12 Condell Street, Wembley, \nHA6 2LA, London",
    distance: "1.1 miles away",
    slotAvailableTime: "10:00am",
    slotAvailableDate: "29/07/20",
    maxPrice: 45,
    minPrice: 15,
    rating: 4,
    totalReview: 56,
    profilePic: images.vendorProfilePic1
  },
]

const legal = [
  {
    id: 1,
    title: localization.termsConditionText,
  },
  {
    id: 2,
    title: localization.privacyText,
  },
  {
    id: 3,
    title: localization.consents,
  },
  {
    id: 4,
    title: localization.userContentPolicy,
  }
]

const appSetting = [
  {
    id: 1,
    title: localization.language,
    icon: images.languageIcon,
    options: [
      {
        id: 1,
        text: localization.english,
        value: "",
        goTo: images.goToIcon,
        actionButton: false
      },
    ]
  },
  {
    id: 2,
    title: localization.countryCurrency,
    icon: images.currencyIcon,
    options: [
      {
        id: 1,
        text: localization.countryName,
        value: "",
        goTo: images.goToIcon,
        actionButton: false
      },
    ]
  },
  {
    id: 3,
    title: localization.appPermissions,
    icon: images.appPermissionIcon,
    options: [
      {
        id: 1,
        text: localization.noIssues,
        value: "",
        goTo: images.goToIcon,
        actionButton: false
      },
    ]
  },
  {
    id: 4,
    title: localization.appVersion,
    icon: images.appversionIocn,
    options: [
      {
        id: 1,
        text: localization.version,
        value: "",
        goTo: "",
        actionButton: false
      },
      {
        id: 2,
        text: "",
        value: "",
        goTo: "",
        actionButton: true
      },
    ]
  }

]

const slots=[
  {
    id: 1,
    time: '09:00',
    rate: '£15:00',
    active:false
  },
  {
    id: 2,
    time: '10:00',
    rate: '£15:00',
    active:false
  },
  {
    id: 3,
    time: '11:00',
    rate: '£15:00',
    active:false

  },
  {
    id: 4,
    time: '12:00',
    rate: '£15:00',
    active:false

  },
  {
    id: 5,
    time: '13:00',
    rate: '£15:00',
    active:false

  },
  {
    id: 6,
    time: '14:00',
    rate: '£15:00',
    active:false

  },
  {
    id: 7,
    time: '15:00',
    rate: '£15:00',
    active:false

  },
  {
    id: 8,
    time: '16:00',
    rate: '£15:00',
    active:false

  },
  {
    id: 9,
    time: '17:00',
    rate: '£15:00',
    active:false

  },
  {
    id: 10,
    time: '18:00',
    rate: '£15:00',
    active:false

  }
]
export {
  schools,
  clientName,
  studentAttendanceSummary,
  studentAttendances,
  studentAttendanceDetails,
  beacons,
  staffAttendanceSummary,
  staffHotspots,
  staffClasses,
  staffStudents,
  staffConfirmedStudents,
  staffClassSnapshot,
  staffClassesHistory,
  hotspotConfigurations,
  categoryList,
  vendorList,
  subCategory,
  vendorServices,
  vendorAbout,
  paymentmode,
  settingpaymentmode,
  paymentHistory,
  settings,
  favouritesList,
  payemntAccordian,
  Reviews,
  legal,
  ReviewsDetails,
  slots,
  favouritesAccordion,
  appSetting
};
