import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

import theme from '../../../globals';

const ButtonComponent = ({ roundedButton, iconButton, textButton, icon, handleClick, schemaColors }) => {
  return (
    <>
    {
      roundedButton === "soft" ?
      <TouchableOpacity 
        style={[
                styles.button, { borderRadius: 10 }, 
                {backgroundColor: schemaColors === "primary" ? theme.colors.buttonColorPrimary : theme.colors.buttonColorSecondary }
              ]} 
        onPress={() => {handleClick()}}
      >
        { iconButton ? <Icon name={icon} size={32} color = {theme.colors.textColorPrimary}/> : <Text style={styles.buttonText}>{textButton}</Text>}
      </TouchableOpacity>

      :

      <TouchableOpacity style={[styles.button, { borderRadius: 50 }, {backgroundColor: schemaColors === "primary" ? theme.colors.buttonColorPrimary : theme.colors.buttonColorSecondary }]}>
        { iconButton ? <Icon name={icon} size={32} color = {theme.colors.textColorPrimary}/> : <Text style={styles.buttonText}>{textButton}</Text>}
      </TouchableOpacity>
    }
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 22,
    color: theme.colors.textColorPrimary
  }
});

export default ButtonComponent;