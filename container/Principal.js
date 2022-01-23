import React, {useEffect, useState} from 'react';
import {Text, View, RefreshControl, Image} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const RED = props => <Text style={{color: 'red'}}>{props.children}</Text>;

export default function PrincipalScreen() {
  const [fruits, setFruits] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const wait = timeout => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false), getFruits());
  }, []);

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

  function renderItem({item}) {
    if (item.name === 'Piña') {
      return (
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <View>
            <Image
              style={{width: 120, height: 100, marginRight: 50}}
              source={require('../assets/pina.jpg')}
            />
          </View>

          <View>
            <Text style={{fontWeight: 'bold'}}>
              {item.name}
              {'\t'}
              {item.price}€
            </Text>
          </View>
        </View>
      );
    }

    if (item.name === 'Manzana') {
      return (
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <View>
            <Image
              style={{width: 120, height: 100, marginRight: 50}}
              source={require('../assets/manzana.jpg')}
            />
          </View>

          <View>
            <Text style={{fontWeight: 'bold'}}>
              {item.name}
              {'\t'}
              {item.price}€
            </Text>
          </View>
        </View>
      );
    }
    if (item.name === 'Melocotón') {
      return (
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <View>
            <Image
              style={{width: 120, height: 100, marginRight: 50}}
              source={require('../assets/melocoton.jpg')}
            />
          </View>

          <View>
            <Text style={{fontWeight: 'bold'}}>
              {item.name}
              {'\t'}
              {item.price}€
            </Text>
          </View>
        </View>
      );
    }
    if (item.name === 'Uvas') {
        return (
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <View>
              <Image
                style={{width: 120, height: 100, marginRight: 50}}
                source={require('../assets/uvas.jpg')}
              />
            </View>
    
            <View>
              <Text style={{fontWeight: 'bold'}}>
                {item.name}
                {'\t'}
                {item.price}€
              </Text>
            </View>
          </View>
        );
      }
      if (item.name === 'Naranja') {
        return (
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <View>
              <Image
                style={{width: 120, height: 100, marginRight: 50}}
                source={require('../assets/naranja.jpg')}
              />
            </View>
    
            <View>
              <Text style={{fontWeight: 'bold'}}>
                {item.name}
                {'\t'}
                {item.price}€
              </Text>
            </View>
          </View>
        );
      }
      if (item.name === 'Kiwi') {
        return (
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <View>
              <Image
                style={{width: 120, height: 100, marginRight: 50}}
                source={require('../assets/Kiwi.jpg')}
              />
            </View>
    
            <View>
              <Text style={{fontWeight: 'bold'}}>
                {item.name}
                {'\t'}
                {item.price}€
              </Text>
            </View>
          </View>
        );
      }
      if (item.name === 'Plátano') {
        return (
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <View>
              <Image
                style={{width: 120, height: 100, marginRight: 50}}
                source={require('../assets/platano.jpg')}
              />
            </View>
    
            <View>
              <Text style={{fontWeight: 'bold'}}>
                {item.name}
                {'\t'}
                {item.price}€
              </Text>
            </View>
          </View>
        );
      }
      if (item.name === 'Pera') {
        return (
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <View>
              <Image
                style={{width: 120, height: 100, marginRight: 50}}
                source={require('../assets/pera.jpg')}
              />
            </View>
    
            <View>
              <Text style={{fontWeight: 'bold'}}>
                {item.name}
                {'\t'}
                {item.price}€
              </Text>
            </View>
          </View>
        );
      }




  }

  // terminaaaaaaar

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{fontWeight: 'bold', textAlign: 'center', margin: 10}}>
          Nombre {'\t'} Precio
        </Text>
        <FlatList
          style={{
            minHeight: 500,
            backgroundColor: '#FFEB3B',
          }}
          data={fruits}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}
