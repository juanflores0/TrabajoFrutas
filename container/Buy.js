import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Alert,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';

const B = props => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;
const RED = props => <Text style={{color: 'red'}}>{props.children}</Text>;

export default function BuyScreen() {
  const [fruits, setFruits] = useState(null);
  const [price, setPrices] = useState(null);
  const styles = StyleSheet.create({
    boton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'grey',
      marginRight: 100,
      marginLeft: 100,
      marginTop: 250,
    },

    cajas: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginRight: 100,
      marginLeft: 100,
    },

    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },

    mainContainer: {


      backgroundColor: '#FFEB3B',
    },
  });

  const wait = timeout => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  };

  const addFruits = () => {
    if (fruits != "" && price != null) {
      fetch('http://10.0.2.2:8080/fruits', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fruits,
          price: price,
        }),
      })
        .then(responseJson => {
          console.log('getting data from fetch', responseJson);
          Alert.alert('Fruta añadida correctamente');
          setFruits(null);
          setPrices(null);
        })
        .catch(error => console.log(error));
    }

  };

  function getFruits() {
    fetch('http://10.0.2.2:8080/fruits')
      .then(response => response.json())
      .then(responseJson => {
        setFruits(responseJson);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    getFruits();
  }, []);
  const DATA = [
    'Piña',
    'Manzana',
    'Melocotón',
    'Uvas',
    'Naranja',
    'Kiwi',
    'Plátano',
    'Pera'
    ];
  return (
    <SafeAreaView  style={styles.mainContainer}>
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 10,
            color: 'black',
          }}>
          Nombre de la fruta
        </Text>
        
        <ModalDropdown           style={{alignSelf: 'center'}}
          onSelect={x => setFruits(DATA[x])} options={DATA}/>
        
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 10,
            color: 'black',
          }}>
          Precio
        </Text>
        <TextInput
          value={price}
          style={{textAlign: 'center'}}
          placeholder="añade precio"
          style={styles.cajas}
          onChangeText={x => setPrices(x)}
        />
        <TouchableOpacity onPress={addFruits} style={styles.boton}>
          <Text style={styles.text}>Press Here</Text>
        </TouchableOpacity>     

      </ScrollView>

    </SafeAreaView>
  );
}
