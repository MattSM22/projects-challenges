import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ButtonComponent from '../../components/Button/ButtonComponent';
import Content from '../../components/Content/Content';

import styles from './styles';
import WeekDays from '../../components/WeekDays/WeekDays';
import TodayHighlights from '../../components/TodayHighlights/TodayHighlights';

const Home = ({ navigation }) => {
  function handleNavigationToSearch(){
    navigation.navigate("Search");
  }

  return (
    <ScrollView style = {styles.container}>
      <View style = {styles.rowButtons}>
        <ButtonComponent roundedButton="soft" schemaColors="primary" textButton="Search for places" iconButton={false} icon={null} handleClick = {handleNavigationToSearch} />
        <ButtonComponent roundedButton="circle" schemaColors="primary" textButton="" iconButton={true} icon="locate"/>
      </View>
      <Content />
      <WeekDays />
      <TodayHighlights />
    </ScrollView>
  );
}

export default Home;