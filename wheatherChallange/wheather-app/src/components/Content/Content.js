import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

import theme from '../../../globals';

import Rain from '../../assets/rainy-day.png';

const Content = () => {
  return (
    <View style = {styles.containerContent}>
        <Image source={Rain} style = {{ margin: 22 }}/>
        <Text style = {styles.textWheather}>15°</Text>
        <Text style = {styles.textTypeWheather}>Shower</Text>
        <View style = {styles.rowText}>
          <Text style = {styles.textLocation}>Today</Text>
          <Text style = {styles.textLocation}>Fri, 5 Jun</Text>
        </View>
        <View style = {styles.rowText}>
          <Icon name="location" size={32} color = {theme.colors.textColorSecondary}/>
          <Text style = {styles.textLocation}>Helsink</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  containerContent: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  rowText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 15,
  },
  textLocation: {
    color: theme.colors.textColorSecondary,
    fontSize: 16,
    paddingHorizontal: 12,
  },
  textWheather: {
    color: theme.colors.textColorSecondary,
    fontSize: 96,
    fontWeight: "bold",
  },
  textTypeWheather: {
    color: theme.colors.textColorSecondary,
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10
  }
});

export default Content;