import { StyleSheet } from "react-native";
import theme from '../../../globals';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  containerButtonCloseDrawer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  containerSearchInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  containerListLocation: {
    display: "flex",
    flex: 1,
    height: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 60,
    paddingHorizontal: 20,
    width: "100%"
  }
});

export default styles;