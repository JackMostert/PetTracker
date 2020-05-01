import * as React from "react";
import { View, Text } from "react-native";

interface IPetScreenProps {}

const PetScreen: React.FunctionComponent<IPetScreenProps> = (props) => {
  return (
    <View>
      <Text>Pets Stats</Text>
    </View>
  );
};

export default PetScreen;
