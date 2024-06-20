import React from "react";
import { View, FlatList } from "react-native";
import { Text } from "../../../components";
import SchoolListItem from "./components/SchoolListItem";

import styles from "./styles";
import { localization, types } from "../../../constants";
import { TextVariant } from "../../../components/Text";

type ConfirmClientProps = {
  schools?: Array<types.School>;
  onSchoolChoose?: (school: types.School) => void;
};

const ConfirmClient = ({
  schools = [],
  onSchoolChoose = () => null
}: ConfirmClientProps) => {
  const isScrollEnabled = schools.length > 4;

  return (
    <View style={styles.contentContainer}>
      <Text variant={TextVariant.Heading2GreyRegular}>
        {localization.recordsFound}
      </Text>

      <FlatList
        style={styles.schoolsList}
        data={schools}
        scrollEnabled={isScrollEnabled}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SchoolListItem {...item} onPress={() => onSchoolChoose(item)} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ConfirmClient;
