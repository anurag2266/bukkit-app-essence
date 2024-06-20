import React, { useState } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../utils";

import ConfirmClient from "./ConfirmClient";
import SpeechBubbleTitleBar from "../../../components/SpeechBubbleTitleBar";

import { localization, screens, mockData, types } from "../../../constants";
import { NavigationScreenProps } from "react-navigation";

interface Props extends NavigationScreenProps {
  Auth: any;
  sendOneTimePassword: Function;
}
const ConfirmClientContainer = ({
  navigation,
  Auth,
  sendOneTimePassword
}: Props) => {
  const [isLoaded, setLoaded] = useState(false);
  const handleSchoolChoose = (college: types.School) => {
    sendOneTimePassword(Auth.email, college.slug);
    setLoaded(false);
  };

  if (!isLoaded && !Auth.loading && Auth.slug.length > 0) {
    if (Auth.loaded) {
      setLoaded(true);
      navigation.navigate(screens.auth.loginEnterCode);
    } else if (Auth.error) {
      setLoaded(true);

      navigation.navigate(screens.auth.emailNotFound);
    }
  }

  return (
    <ConfirmClient
      schools={Auth.colleges}
      onSchoolChoose={handleSchoolChoose}
    />
  );
};

ConfirmClientContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={`${localization.hello}`} />
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmClientContainer);
