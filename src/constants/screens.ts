const auth = {
  loginOptions: 'AUTH_LOGIN_OPTIONS',
  login: 'AUTH_LOGIN',
  fingerprintLogin: 'AUTH_FINGERPRINT_LOGIN',
  forgotPin: 'AUTH_FORGOT_PIN',
  activation: 'AUTH_ACTIVATION',
  emailNotFound: 'AUTH_EMAIL_NOT_FOUND',
  checkInbox: 'AUTH_CHECK_INBOX',
  confirmClient: 'AUTH_CONFIRM_CLIENT',
  requestLoginCode: 'AUTH_REQUEST_LOGIN_CODE',
  loginEnterCode: 'AUTH_LOGIN_ENTER_CODE',
  createPasscode: 'AUTH_CREATE_PASSCODE',
  confirmPasscode: 'AUTH_CONFIRM_PASSCODE',
  suggestFingerprint: 'AUTH_SUGGEST_FINGERPRINT',
  selfieLogin: 'AUTH_SELFIE_LOGIN',
  captureSelfie: 'AUTH_CAPTURE_SELFIE',
  confirmSelfie: 'AUTH_CONFIRM_SELFIE'
};

const student = {
  ca: {
    attendance: 'STUDENT_CA_ATTENDANCE',
    attendanceDetails: 'STUDENT_CA_ATTENDANCE_DETAILS',
    chooseClass: 'STUDENT_CA_CHOOSE_CLASS'
  },

  da: {
    attendance: 'STUDENT_DA_ATTENDANCE',
    attendanceDetails: 'STUDENT_DA_ATTENDANCE_DETAILS',
    chooseHotspot: 'STUDENT_DA_CHOOSE_HOTSPOT'
  }
};

const staff = {
  ca: {
    attendance: 'STAFF_CA_ATTENDANCE',
    configureClass: 'STAFF_CA_CONFIGURE_CLASS',
    newLesson: 'STAFF_CA_NEW_LESSON',
    lessonDetail: 'STAFF_CA_LESSON_DETAIL',
    approvals: 'STAFF_CA_APPROVALS',
    approvalsByCourse: 'STAFF_CA_APPROVALS_BY_COURSE',
    attendanceApproval: 'STAFF_CA_ATTENDANCE_APPROVAL',
    studentAttendance: 'STAFF_CA_STUDENT_ATTENDANCE'
  },

  da: {
    attendance: 'STAFF_DA_ATTENDANCE',
    configureHotspot: 'STAFF_CA_CONFIGURE_HOSTSPOT',
    // new add
    welcome: 'APP_WELCOME',
    category:'App_Category',
    vendors:'APP_VENDORS',
    vendorsMapView:'APP_VENDORSMAPVIEW',
    vendorDetails:'APP_VENDORDETAILS',
    bookingTerms:'APP_BOOKINGTERMS',
    fullMap:'APP_FULLMAP',
    vendorAboutFullMap:'APP_VENDORABOUTFULLMAP',
    settings: 'APP_SETTINGS',
    personalDetails: 'APP_PESRSONALDETAILS',
    bookAppointment:'APP_BOOKAPPOINTMENT',
    paymentConfirmation:'APP_PAYMENTCONFIRMATION',
    cart: 'APP_CART',
    payments: 'APP_PAYMENTS',
    myFavourites:'APP_MYFAVOURITES',
    myAppointment: 'APP_APPOINTMENT',
    myReviews: 'APP_REVIEWS',
    legal:'APP_LEGAL',
    appSettings:'APP_APPSETTINGS',
    myReviewsDetails: 'APP_REVIEWSDETAILS',
    chat:'APP_CHAT',

  }
};

export { auth, student, staff };
