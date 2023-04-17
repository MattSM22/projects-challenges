import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import cold from '../../assets/geada.png';
import nublado from '../../assets/nublado.png';
import rainy from '../../assets/rainy-day.png';
import sun from '../../assets/sun.png';

import theme from '../../../globals';

const days = [
  {
    index: 1,
    weekday: "Tomorrow",
    typeImage: "cold",
    maximum: "16°",
    minimun: "11°",
  },
  {
    index: 2,
    weekday: "Sun, 7 Jun",
    typeImage: "cold",
    maximum: "16°",
    minimun: "11°",
  },
  {
    index: 3,
    weekday: "Mon, 8 Jun",
    typeImage: "rainy",
    maximum: "16°",
    minimun: "11°",
  },
  {
    index: 4,
    weekday: "Tue, 9 Jun",
    typeImage: "sunny",
    maximum: "16°",
    minimun: "11°",
  },
  {
    index: 5,
    weekday: "Wed, 10 Jun",
    typeImage: "rain",
    maximum: "16°",
    minimun: "11°",
  },
]

const WeekDays = () => {
  return (
    <View style = {styles.containerWeekDays}>
      { days.map(({index, weekday, typeImage, maximum, minimun }) => {
        return (
          <View key={index} style = {styles.cardWeekDays}>
            <Text style = {styles.title}>{weekday}</Text>
              { 
              typeImage === "cold" ? <Image source={cold} style = {styles.cardImage}/>  : 
              typeImage == "rainy" ? <Image source={rainy} style = {styles.cardImage}/> : 
              typeImage === "sunny" ? <Image source={sun} style = {styles.cardImage} /> : <Image source={nublado} style = {styles.cardImage} />
              }
            <View style = {styles.rowCardWheather}>
              <Text style = {styles.textMaximun}>{maximum}</Text>
              <Text style = {styles.textMinimun}>{minimun}</Text>
            </View>
          </View>
        );
      }) }
    </View>
  );
}

const styles = StyleSheet.create({
  containerWeekDays: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: theme.colors.background2,
  },
  cardWeekDays: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: theme.colors.background,
    height: 200,
    width: 150,
    margin: 30,
    shadowColor: theme.colors.shadow,
    shadowOffset: {width: 6, height: 6},
    elevation: 20
  },
  rowCardWheather: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  title: {
    fontSize: 24,
    color: theme.colors.textColorSecondary,
  },
  textMaximun: {
    fontSize: 18,
    color: theme.colors.textColorPrimary,
  },
  textMinimun: {
    fontSize: 18,
    color: theme.colors.textColorSecondary,
  },
  cardImage: {
    width: 50,
    height: 50
  }
});

export default WeekDays;