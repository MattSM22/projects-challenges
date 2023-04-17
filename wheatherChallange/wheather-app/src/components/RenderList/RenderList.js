import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../../globals';

const RenderList = ({ uf }) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.textList}>{uf}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 6,
    width: "100%",
    height: 90,
    marginTop: 20,
    borderWidth: 1,
    borderColor: theme.colors.textColorSecondary,
    marginBottom: 10
  },
  textList: {
    fontSize: 22,
    color: theme.colors.textColorSecondary
  }
})

export default RenderList;