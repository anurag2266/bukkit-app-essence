import { sortBy } from "lodash";

const localization = {
  // LaunchImage
  edular: 'edular',

  // LoginOptions
  hiThere: 'hi\nthere!',
  introMessage:
    'All your favourite appointments\n in one place',
  activateAccount: 'activate account',
  logMeIn: 'log me in',
  getStart:'GET STARTED',

  // Login
  welcomeBack: 'welcome\nback!',
  enterPinOrFingerprint: 'Enter your Email to login',
  forgotMy: 'Forgot my ',
  pin: 'PIN',
  incorrectPin: 'Incorrect PIN',
  password:'Password',
  loginAction:'Login',

  // ForgotPin
  oopsForgotten: "oops, i've\nforgotten!",
  notAProblem:
    "Not a problem, we'll send a temporary Password to your email address",
  resetMyPin: 'reset my PIN',
  resetMyPassword: 'reset my PASSWORD',


  // FingerprintLogin
  fingerprintLogin: 'fingerprint\nLogin',
  touchFingerprint: 'Touch the fingerprint icon to login',
  loginWith: 'Login with a ',

  // Activation
  getToKnowYou: "let's get to\nknow you",
  activationEnterEmail: 'Please enter your registered email address',
  myEmail: 'My email address is',
  email: 'Email',
  confirm: 'confirm',

  // EmailNotFound
  cantFindYou: "we can't\nfind you",
  didWeGetYourEmail: 'Did we get your email address correctly?',
  editYourAddress:
    "Please edit your address if it looks wrong\n\nIf you still can't sign up you will need to ask your instructor or administration staff for help",
  tryAgain: 'try again',
  attendance: 'Attendance',
  attendanceHelpInfo:
    'Inside Attendance you can track all aspects of your school attendance record\n\nDepending on your school type, you can see how many hours, days or lessons you have been given credit for as well as an overall attendance score\n\nAttendance is also where you checkin and checkout at the start of the day, for lessons or break times using the large round action button with the flash on it',
  sampleEmail: 'anglea.roberts@anu.edu',

  // CheckInbox
  youGotMail: "you've got\nm@il",
  sentYouEmail:
    'We sent you an email\n\nPlease find the message and tap the confirmation link it contains to continue',
  didntReceiveEmail:
    "Didn't receive the email?\n\nCheck your Junk / Spam folder or we can ",
  resendIt: 'resend it',

  // ConfirmClient
  hello: 'hello',
  recordsFound:
    'Our records found you at the following locations\n\nPlease choose the school you are currently enrolled at',

  // RequestLoginCode
  letsGetSetup: "ok let's get\nyou setup",
  needToVerify: 'We just need to verify your device',
  country: 'Country',
  phoneCountryCode: '+44',
  enterMobileNumber: 'Enter your mobile number',
  changedMyNumber: "I've changed my phone number",
  sendMyCode: 'send my code',

  // LoginEnterCode
  crackTheCode: 'crack the\ncode',
  enterVerificationCode:
    'Enter the verification code that we sent you via Email message',
  didntReceiveCode: "Didn't receive a code? ",

  // CreatePasscode
  magicNumbers: 'magic\nnumbers',
  thinkOfPin: "Ok, let's think of a PIN to protect your account",
  forPinConfirmation: 'For confirmation, please re-enter your chosen PIN',
  pinDoesntMatch: "PIN doesn't match",
  reEnterPin: 'Please re-enter your PIN and try again',

  // SuggestFingerprint
  unlockWithTouch: 'unlock with\na touch',
  whyNotFingerprint:
    "Why not use your fingerprint to login next time?\n\nIt's quick, easy and there's no password or PIN to remember",
  noThanks: 'no thanks',
  useFingerprint: 'use fingerprint',
  confirmFingerprint: 'Confirm fingerprint',
  touchFingerprintReader: "Touch your device's fingerprint reader",

  // SelfieLogin
  timeForSelfie: 'time for a\nselfie',
  needsToKnowFace:
    "Our Attendance feature needs to know your face, so you can prove who you are.\n\nIt only takes a second to add a photo to your profile and it's a one- time task",
  takeMyPhoto: 'take my photo',

  // CaptureSelfieLogin
  takeAPhoto: 'take a photo',
  takePhoto: 'take photo',
  positionYourFaceAutoGrab:
    "Position your face in the window so it fills the space available, we'll automatically grab a photo as soon as it's a decent shot",

  // ConfirmSelfie
  confirmation: 'confirmation',
  lookingGood: 'Looking good! But you can have another go if you want to',
  usePhoto: 'use this photo',

  cancel: 'Cancel',
  ok: 'Ok',

  tasks: 'Tasks',
  financial: 'Financial',

  hour: 'hour',
  hours: 'hours',
  checkIn: 'check in',
  createClass: 'Create class',

  // Face recognition
  identification: 'Identification',
  cameraPermission: {
    title: 'Permission to use camera',
    message: 'We need your permission to use your camera',
    buttonPositive: 'Ok',
    buttonNegative: 'Cancel'
  },

  positionYourFace:
    'Position your face in the window so it fills the space available, then tap the camera icon',

  chooseClass: 'Choose a class',
  cantSeeLesson:
    "If you can't see the lesson you need, try using Refresh from the action button below and make sure you are in the correct location",
  refresh: 'refresh',
  label: 'select',
  noActivity: 'No activity to show',
  confirmCheckIn: 'Confirm checkin',
  confirmed: 'Confirmed',

  day: 'day',
  days: 'days',
  noAttendance: 'No Attendance',

  chooseHotspot: 'Choose hotspot',
  cantSeeHotspot:
    "If you can't see the hotspot you need, try using Refresh from the action button below and make sure you are in the correct location",

  myLessons: 'My\nLessons',
  myStudents: 'My\nStudents',
  approvalRequired: 'Approval\nRequired',
  classes: 'Classes',
  students: 'Students',
  select: 'select',

  confirmedToday: 'Confirmed Today',
  classSnapshot: 'Class Snapshot',
  configure: 'configure',
  startClassNow: 'start class now',
  endClass: 'end class',
  updateSnapshot: 'update snapshot',
  deleteSnapshot: 'delete snapshot',

  enterStaffPin: 'Enter Staff PIN',
  selectHotspot: 'Select hotspot',
  chooseConfiguration: 'Choose configuration',
  myDevice: 'My Device',
  currentLocation: 'Current Location',
  manage: 'Manage',

  manageConfigs: 'Manage configurations',
  new: 'New',
  use: 'Use',

  newConfig: 'New configuration',
  save: 'Save',

  configureHotspot: 'Configure your hotspot',
  title: 'Title',
  instructor: 'Instructor',
  classStart: 'Class start',
  classEnd: 'Class end',
  gracePeriodStart: 'Start grace period',
  gracePeriodEnd: 'End grace period',
  hotspotName: 'Hotspot name',
  location: 'Location',
  dayStart: 'Day start',
  dayEnd: 'Day end',

  reject: 'Reject',
  approve: 'Approve',
  attendanceApproval: 'Attendance Approval',
  classTitle: 'Class title',
  checkin: 'Checkin',
  checkout: 'Checkout',

  campusCheckins: 'Campus\ncheckins',
  campusApprovals: 'Campus\napprovals',
  overallApprovals: 'Overall\napprovals',
  hotspots: 'Hotspots',

  weekOf: (date: string) => `WEEK OF ${date}`,
  createLesson: 'create a lesson',
  lesson: 'Lesson',
  in: 'in',
  out: 'out',
  lessonHours: (hours: number) =>
    `${hours} LESSON HOUR${hours === 1 ? '' : 'S'}`,

  event: 'Event',
  with: 'With',
  time: 'Time',
  attendanceHours: (hours: number) =>
    `${hours} ATTENDANCE HOUR${hours === 1 ? '' : 'S'}`,

  programHours: (hours: number) =>
    `${hours} PROGRAM HOUR${hours === 1 ? '' : 'S'}`,
  date: 'Date',
  attended: 'Attended',
  performance: 'Performance',
  approvals: 'Approvals',
  upcoming: 'Upcoming',
  previous: 'Previous',
  outstandingApprovals: 'Outstanding approvals',
  myAttendanceRating: (rating: number) =>
    `My attendance rating: ${Math.floor(rating * 100)}%`,

  history: 'History',
  lessons: 'Lessons',

  /* New Lesson */
  newLesson: 'New Lesson',
  chooseLessonType: 'Choose a Lesson Type',
  configureLesson: 'Configure the Lesson',
  selectCourse: 'Select course',
  selectDay: 'Select day',
  recurring: 'Recurring',
  pleaseSelect: 'Please Select',
  onlineVideoUrl: 'Online video URL',
  classBegins: 'Class begins',
  classBeginsPlaceholder: '9:30am',
  classEnds: 'Class ends',
  classEndsPlaceholder: '10:30am',
  tenMinutes: '10 minutes',
  beginGracePeriod: 'Grace period (beginning)',
  endGracePeriod: 'Grace period (end)',
  onlineVerificationFreq: 'Online verification frequency',

  /* Lesson Detail */
  endThisLesson: 'end this lesson',
  sendReminder: 'send reminder',
  checkOnlineAttendance: 'check online attendance',
  all: 'All',
  present: 'Present',
  absent: 'Absent',
  minutes: (minutes: number) => `${minutes} minute${minutes === 1 ? '' : 's'}`,

  /* Approvals */
  courses: 'Courses',
  approvalsByCourse: 'Approvals by course',
  verified: 'Verified',
  notVerified: 'Not verified',
  approveAttendance: 'Approve attendance',
  reasonRejectAttendance: 'Reason for rejecting Attendance',
  enterReasonRejecting: 'Enter a reason for rejecting',
  submit: 'Submit',
  studentAttendance: 'Student Attendance',
  outstanding: 'Outstanding',
  rate: 'Rate',

  today: 'Today',

  break1Start: 'Break 1 start',
  break1End: 'Break 1 end',
  lunchStart: 'Lunch start',
  lunchEnd: 'Lunch end',
  break2Start: 'Break 2 start',
  break2End: 'Break 2 end',
  daysHashTable: {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday'
  },
  monthArray: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],

  // Select
  selectAnItemPlaceholder: 'Select an item...',

  // online verification frequency
  manual: 'Manual',
  random: 'Random',
  interval15Mins: '15 mins',
  interval30Mins: '30 mins',
  interval45Mins: '45 mins',
  interval60Mins: '60 mins',

  // CATEGORY LIST SCREEN
categoryHeading:"Find and book appointments \nin your area",
categorySubHeading:"or browse by category",
vendorHeading:'Find an appointment',

// REVIEWS SCREEN

ratingNum: "4.7",
basedOn: "Based on 55 reviews",
reviewDate: "02 June 2020",
job: "Haircut",
customerName: "Jane Doe",
reviewText: "This is a 4 star review. This is a 4 star review. This is a 4 star review. This is a 4 star review. This is a 4 star review. This is a 4 star review. This is a 4 star review. This is a 4 star review. This is a 4 star review. This is a 4 star review.",
reviewRply: "Venue reply",
reviewReplyDate: "02 June 2020",
reviewReplyText: "Thank you very much. See you soon. Thank you very much. see you soon. Thank you very much. See you soon. Thank you very much. See you soon. Thank you very much. see you soon. Thank you very much. see you soon.",
readMore:'Read More',

// BOOKING TERMS LIST SCREEN

bookingTermsHeading: "Booking Terms",
paymentTerms: "Payment terms",
paymentTermsText: "- No payment required in advance.",
cancelationAmendmends: "Cancellation & Amendments",
cancelationAmendmendsText: "- Appointments can only be cancelled no less than 24hrs before appointments",
otherTerms: "Other terms",
otherTermsText: "- A travel fee will be incurred for mobile appointments",

// ABOUT TAB

facilitites: "facilities",
contact: "Contact",
openingHours: "Opening Hours",

// OTHER OPTIONS LOGIN SCREEN

firstTime: "First time? Register to save time on your next booking!",
emailPhone: "Email / Mobile",
loginText: "Please sign in below to continue",
facebook: "Facebook",
google: "Google",
continue: "Continue",
signin: "Sign In",
termsCondition: "By signing in you agree to the BUUKIT",
termsConditionText: "Terms & Conditions",
and: "and",
privacyText: "Privacy Policy",
signupText: "By creating an account you agree to the BUUKIT",
firstName: "First Name",
lastName: "Last Name",
mobileNum: "Mobile Number",
createAcc: "Create Account",
register: "Register",
varificationText: "Waiting to automatically detect SMS code sent to",
verificationHeaing: "Verification",
phoneNum: "07777 777 777",
wrong: "Wrong number?",
digit: "Enter 6-digit code",
resendText: "Resend SMS",
done: "Done",
signupup: "Please complete your details and set a password",
forgotPassword: "Forgot your password?",

// CART SCREEN

cartTitle: "Confirm details and checkout",
shopName: "Extreme Barbers",
shopAddress: "12 Condell Street, Wembley, HA6 2LA, London",
payMentDate: "Saturday, 06 May 2020",
payTo: "With John Doe",
creditcard: "Debit / Credit Card",
paypal: "Paypal",
bookingConfirm: "Confirm Booking",
googlePay: "Google Pay",
payCash:'Pay At Venue (Cash / Card)',

// PERSONAL DETAILS

personalDetails: "Personal Details",
uploadPicture: "Upload Picture",
dobLabel: "Date of Birth (DD / MM / YYYY)",
changePass: "Change Password",
address : "Address",
saveChanges: "Save Changes",
payments: "Payments",

//PAYMENT HISTORY

paymentMethod: "PAYMENT METHODS",
paymentDate: "05/02/2020",
payFor: "Haircut at Xtreme Barbers",
payedAmount: "£10.00",
newcard: "+ Add new Card",
edit: "+ Edit ",
cardNum: "****4559",
newCard2: "add new Card",
payPalId: "jameslucas@gmail.com",
transaction:'TRANSACTION HISTORY',
// settings module
chat:'Chat',
newMessage:'new message',
reviews:'Reviews',
appSettings:'App Settings',
legal:'Legal',
HelpSupport:'Help & Support',
aboutBuukit:'About BUUKIT',
switchTo:'Switch to',
BusinessProfile:'BUUKIT Business Profile',
logOut:'Log Out',
// CONFIRMED APPOINTMENTS

confirmedAppointment: "Confirmed Appointments",
confirmAddress: "12 Condell Street, Wembley,",
city: "HA6 2LA, London",
call : "Call",
pendingAppointments: "Pending Appointments",
completedAppointments: "Completed Appointments",
bestTyres: "The Best Tyres",
appointmentAddress: "155 Station Road, Harrow, HA12 6TY",

// MY REVIEWS
reviewsHeading: "Your Reviews",
reviewPosted: "Review Posted",
reviewPending: "Review Pending",

// LEGAL
consents:'Consents',
userContentPolicy:'User Content Policy',

// FILTER MODEL
sortby: 'SORT BY',
filterResult: 'FILTER RESULTS:',
clearFilter: 'Clear all filters',
nextAppointment: 'Next available appointment:',
serviceType: 'Service type:',
bookingType: 'Booking type [Manual / Automatic]:',
showServices: 'Show services for Men / Women:',
babyChanging: 'Baby changing area',
disabled: 'Disabled access',
freeParking: 'Free Parking',
toilets: 'Toilets:',
apply: "Apply",

// APPOINTMENT MODEL
appointmentWith: 'Appointment with',
noappointmentBottomText:'to the next\navailable appointment.',

// APP SETTING

notification: "Notifications",
sms: "SMS",
app: "App",
language: "Language",
english: "English (UK)",
countryCurrency: "Country (Currency)",
countryName: "United Kingdom (GBP)",
appPermissions: "App Permissions",
noIssues: "No issues found",
appVersion: "App Version",
version: "2.0.5 (Up To Date)",
updateApp: "Update App",

};


export default localization;
