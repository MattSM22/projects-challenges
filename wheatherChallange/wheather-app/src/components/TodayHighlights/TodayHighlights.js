import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import theme from '../../../globals';

const TodayHighlights = () => {
  return (
    <View style = {styles.containerToday}>
      <Text style = {styles.titleToday}>Today Highlight's</Text>
      <View style = {styles.cardsContainer}>
        <View style = {styles.cards}>
          <Text style = {styles.titleCards}>Wind status</Text>
          <Text style = {styles.textCards}>7 MPH</Text>
        </View>
        <View style = {styles.cards}>
          <Text style = {styles.titleCards}>Humidity</Text>
          <Text style = {styles.textCards}>84%</Text>
        </View>
        <View style = {styles.cards}>
          <Text style = {styles.titleCards}>Visibility</Text>
          <Text style = {styles.textCards}>6,4 Miles</Text>
        </View>
        <View style = {styles.cards}>
          <Text style = {styles.titleCards}>Air Pressure</Text>
          <Text style = {styles.textCards}>988 mb</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerToday: {
    backgroundColor: theme.colors.background2,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
  titleToday: {
    color: theme.colors.textColorPrimary,
    fontSize: 32,
    paddingHorizontal: 15
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 15,
  },
  cards: {
    backgroundColor: theme.colors.background,
    width: "85%",
    height: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 15,
    borderRadius: 15,
    borderColor: theme.colors.shadow,
    borderWidth: 1  
  },
  titleCards: {
    color: theme.colors.textColorPrimary,
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 1.5
  },
  textCards: {
    color: theme.colors.textColorSecondary,
    fontSize: 22,
    letterSpacing: 1
  }
});

export default TodayHighlights;