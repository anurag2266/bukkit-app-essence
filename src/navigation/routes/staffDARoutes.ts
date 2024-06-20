import { staff as screens } from '../../constants/screens';
import { auth as screensAuth } from '../../constants/screens';
import { Attendance, ConfigureHotspot,
   Welcome,
   Category,
   Vendors,
   VendorsMapView,
   VendorDetails,
   BookingTerms,
   BookAppointment,
   PaymentConfirmation,
   Cart,
   FullMap,
   VendorAboutFullMap,
   Settings,
   PersonalDetails,
   Payments,
   MyFavourites,   
   MyAppointment,
   MyReviews,
   Legal,
   AppSettings,
   MyReviewsDetails,
   Chat,
  } from '../../screens/staff/da';

  import {
    LoginOptions,
    Login,
    Activation,
    LoginEnterCode,    
  } from '../../screens/auth';

const routes = {
  [screens.da.attendance]: Attendance,
  [screens.da.configureHotspot]: ConfigureHotspot,

  // new added
  [screens.da.welcome]:Welcome,
  [screens.da.category]:Category,
  [screens.da.vendors]: Vendors,
  [screens.da.vendorsMapView]:VendorsMapView,
  [screens.da.vendorDetails]: VendorDetails,
  [screens.da.bookingTerms]: BookingTerms,
  [screens.da.bookAppointment]:BookAppointment,
  [screens.da.paymentConfirmation]:PaymentConfirmation,
  [screens.da.cart]: Cart,
  [screens.da.fullMap]:FullMap,
  [screens.da.vendorAboutFullMap]:VendorAboutFullMap,
  [screens.da.settings]: Settings,
  [screens.da.personalDetails]:PersonalDetails,
  [screens.da.payments]:Payments,
  [screens.da.myFavourites]:MyFavourites,
  [screens.da.myAppointment]: MyAppointment,
  [screens.da.myReviews]: MyReviews,
  [screens.da.legal]:Legal,
  [screens.da.appSettings]:AppSettings,
  [screens.da.myReviewsDetails]: MyReviewsDetails,
  [screens.da.chat]:Chat,

  // AUTH modules
  [screensAuth.login]: Login,
  [screensAuth.loginOptions]: LoginOptions,
  [screensAuth.activation]: Activation,
  [screensAuth.loginEnterCode]: LoginEnterCode,


};

export default routes;
