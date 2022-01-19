import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const RED = (props) => <Text style={{color: 'red'}}>{props.children}</Text>


export default function PrincipalScreen() {

    const [fruits, setFruits] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);

    const wait = (timeout) => {
        return new Promise(resolve=> {
            setTimeout(resolve, timeout);
        });
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false), getFruits());
    }, []);

    function getFruits() {
        fetch("http://10.0.2.2:8080/fruits")
        .then(response => response.json())
        .then((responseJson) => {
            setFruits(responseJson);
            setLoading(false);
        })
        .catch(error => console.log(error));
    }

    useEffect(() => {
        getFruits();
    }, []);

    const renderItem = ({ item }) => (
        <View>
            <View>
                <Text style={{fontWeight: "bold", textAlign: "center", margin: 10}}>Nombre                      Precio</Text>
            </View>
            <View>
                <Text style={{fontWeight: "normal", textAlign: "center"}}>{item.name}                       <RED>{item.price}</RED></Text>
            </View>
        </View>
    );

        return(

            <SafeAreaView>
                <ScrollView>
                    <FlatList
                        data={fruits}
                        renderItem={renderItem}
                    />
                </ScrollView>
            </SafeAreaView>

        )

}