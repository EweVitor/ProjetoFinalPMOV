import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function loginScreen(){
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Text>Tela de login</Text>

      <Button title="Sair" onPress={() =>{
        navigation.replace('homeTabNavigator')
     
        }}></Button>

  
    </View>
  );

}
function homeScreen(){
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Text>Tela de home</Text>
      <Button title="Sair" onPress={() =>{
        navigation.replace('login')
     
        }}>
      </Button>
    </View>
  );
}

function contatoScreen(){
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Text>fale com nosco</Text>
      <Button title="Informação" onPress={() => {navigation.navigate("info")}}>


      </Button>
    </View>
  );
}
function infoScreen(){
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Text>tela de informação</Text>
    
    </View>
  );
}//materias ====================
function materiasScreen(){
  const navigation = useNavigation();

  return(
    <View style={styles.materiasStyles}>
      <Text style={styles.title2}>Livros sobre educação financeira</Text>
      <Text style={styles.title3}>Abaixo temos alguns livros para estudo sobre a educação finaceira</Text>
    </View>
  );
}//Materias ==================
const ContateStackNavigator = createNativeStackNavigator();
function ContateStackNavigatorComponente(){
  return(
    <ContateStackNavigator.Navigator>
      <ContateStackNavigator.Screen name="Contato" component={contatoScreen}></ContateStackNavigator.Screen>
      <ContateStackNavigator.Screen name="info" component={infoScreen}></ContateStackNavigator.Screen>
   </ContateStackNavigator.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function homeTabNavigator(){
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Sobre nois') {
            iconName = focused ? 'list-outline' : 'list';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
    })}>

    <Tab.Screen name="home" component={homeScreen}></Tab.Screen>
    <Tab.Screen name="Materias" component={materiasScreen}></Tab.Screen>
    <Tab.Screen name="Sobre nois" component={ContateStackNavigatorComponente} options={{headerShown :false}}></Tab.Screen>
  </Tab.Navigator>
  );
}

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={loginScreen}></Stack.Screen>
      
        <Stack.Screen name="homeTabNavigator" component={homeTabNavigator} options={{headerShown :false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title2:{
    alignContent:'center',
    fontSize:25,
    margin:15,
    backgroundColor:'red',
    padding:10,
    borderRadius:20.0

  },
  title3:{
    fontSize:15,
    margin: 10,

  },
  materiasStyles:{
    margin:10,

  }
});