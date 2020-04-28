import * as React from "react";
import { View, ScrollView } from "react-native";
import PageStyles from "../style/Page";

interface IPageProps {
  header?: any;
  children: any;
  footer?: any;
}

const Page: React.FunctionComponent<IPageProps> = (props) => {
  return (
    <View style={PageStyles.root}>
      <View style={PageStyles.header}>{props.header}</View>
      <ScrollView style={PageStyles.body}>{props.children}</ScrollView>
      <View style={PageStyles.footer}>{props.footer}</View>
    </View>
  );
};

export default Page;
