import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Card} from 'react-native-paper'
const HomeStack = createNativeStackNavigator();

const Card1 = () => (
    <Card style={styles.card} mode='outlined'>
      <Card.Title title="$10,000" subtitle="Balance" />
      <Card.Title title="Transactions"/>
      <Card.Content>
          <Text>GG               10</Text>
      </Card.Content>
    </Card>
  );

  const Card2 = () => (
    <Card style={styles.card2} mode='outlined'>
      <Card.Title title="$10,000" subtitle="Balance" />
      <Card.Title title="Transactions"/>
      <Card.Content>
          <Text>GG               10</Text>
      </Card.Content>
    </Card>
  );

const Homey = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Card1/>
            <Card2/>
        </View>
    )
}

const HomeScreen = ({navigation}) => {
    return (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#008080'
        },
        headerTintColor: 'black',
        headerTitleStyle: {
            fontWeight:'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={Homey} options={{title:"Expensio",
            headerLeft: () => (
                <Icon.Button name='menu' size={25} 
                    backgroundColor='#008080' color='black'
                    onPress={() => navigation.openDrawer()}></Icon.Button>
                    ),
            headerRight: () => (
                <Icon.Button name='cog' size={25}
                    backgroundColor='#008080' color='black'></Icon.Button>
            )
            }}/>
    </HomeStack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    card: {
        flex:1,
        marginTop: 20,
        marginBottom:100,
        width:370,
        shadowColor:'#000',
        backgroundColor: '#008080'
    },
    card2: {
        flex:1,
        marginTop: 20,
        marginBottom:500,
        width:370,
        shadowColor:'#000',
        backgroundColor: '#008080'
    },
    text1: {

    }
})

export default HomeScreen

