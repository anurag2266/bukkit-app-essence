import { auth as screens } from '../../constants/screens';
import {
  LoginOptions,
  Login,
  FingerprintLogin,
  ForgotPin,
  Activation,
  EmailNotFound,
  CheckInbox,
  ConfirmClient,
  RequestLoginCode,
  LoginEnterCode,
  CreatePasscode,
  ConfirmPasscode,
  SuggestFingerprint,
  SelfieLogin,
  CaptureSelfie,
  ConfirmSelfie
} from '../../screens/auth';

const routes = {

  [screens.login]: Login,
  [screens.loginOptions]: LoginOptions,
  [screens.fingerprintLogin]: FingerprintLogin,
  [screens.forgotPin]: ForgotPin,

  [screens.activation]: Activation,
  [screens.emailNotFound]: EmailNotFound,
  [screens.checkInbox]: CheckInbox,
  [screens.confirmClient]: ConfirmClient,
  [screens.requestLoginCode]: RequestLoginCode,
  [screens.loginEnterCode]: LoginEnterCode,
  [screens.createPasscode]: CreatePasscode,
  [screens.confirmPasscode]: ConfirmPasscode,
  [screens.suggestFingerprint]: SuggestFingerprint,

  [screens.selfieLogin]: SelfieLogin,
  [screens.captureSelfie]: CaptureSelfie,
  [screens.confirmSelfie]: ConfirmSelfie
};

export default routes;
