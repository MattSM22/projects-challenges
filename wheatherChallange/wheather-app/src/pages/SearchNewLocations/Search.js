import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';

import ButtonComponent from '../../components/Button/ButtonComponent';
import RenderList from '../../components/RenderList/RenderList';

import Icon from '@expo/vector-icons/Ionicons';
import theme from '../../../globals';

import styles from './styles';
import apiCEP from '../../api/apiCEP';

const dataLocation = [
  {
    index: 1,
    uf: "São Paulo",
  },
  {
    index: 2,
    uf: "Minas Gerais",
  },
  {
    index: 3,
    uf: "Rio de Janeiro",
  },
  {
    index: 4,
    uf: "Rio grande do Sul",
  },
  {
    index: 5,
    uf: "Maranhão",
  },
  {
    index: 6,
    uf: "Amazonas",
  },
]

const Search = ({ navigation }) => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState([]);

  async function searchLocationByCEP(){
    await apiCEP.get("/" + location + "/json").then((response) => {setData(response.data)}, console.log(response.data)).catch((err) => { console.log(err) })
  }

  function handleBackToHomeScreen(){
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerButtonCloseDrawer}>
        <TouchableOpacity onPress={() => {handleBackToHomeScreen()}}>
          <Icon name="close-outline" size={32} color={theme.colors.textColorPrimary}/>
        </TouchableOpacity>
      </View>
      <View style={styles.containerSearchInput}>
        <TextInput
          placeholder="Digite o CEP da sua cidade"
          activeUnderlineColor="transparent"
          underlineColor="none"
          textColor={theme.colors.textColorPrimary}
          onChangeText={newlocation => setLocation(newlocation)}
          style={{ width: 250, height: 55, borderRadius: 10, backgroundColor: "transparent", borderWidth: 1, borderColor: theme.colors.textColorSecondary }}
          left={<TextInput.Icon icon="magnify" />}
        />
        <ButtonComponent roundedButton="soft" textButton="Search" iconButton={false} icon={null} schemaColors="secondary" handleClick={() => { searchLocationByCEP() }} />
      </View>
      <View style={styles.containerListLocation}>
        {
          useEffect(() => {
            console.log(data);
            <FlatList style = {{ width: "90%", padding: 10 }} data={data} keyExtractor={item => item.cep} 
                  renderItem={({ item }) => <RenderList uf={item.localidade} /> } 
            />
          }, [])
        }
      </View>
    </SafeAreaView>
  );
}

export default Search;