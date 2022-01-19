import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';


const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
const RED = (props) => <Text style={{color: 'red'}}>{props.children}</Text>


export default function BuyScreen() {

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
            <Text style={{fontWeight: "bold", textAlign: "center", margin: 10}}>Nombre de la fruta</Text>
            <TextInput style={{ textAlign: "center"}} defaultValue="" onChangeText={x => setFruits(x)} />

            <Text style={{fontWeight: "bold", textAlign: "center", margin: 10}}>Precio</Text>
            <TextInput style={{ textAlign: "center"}} defaultValue="" onChangeText={x => setFruits(x)} />
            

         

            <View>
                <Text style={{fontWeight: "normal", textAlign: "center"}}>{item.name}                       {item.price}</Text>
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