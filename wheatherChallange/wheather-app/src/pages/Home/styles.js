import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1E213A",
    overflow: "scroll",
  },
  rowButtons: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 45 
  },
});

export default styles;