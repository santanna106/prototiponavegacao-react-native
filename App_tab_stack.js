import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import Home from './src/pages/Home'
import Sobre from './src/pages/Sobre'
import Contato from './src/pages/Contato'
import Icon from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const icons = {
     Home: {
         name: 'ios-home'
     },
     Sobre: {
         name:'ios-people'

     },
     Contato : {
         name: 'ios-call'
     }
}



function Tabs() {
  return (
  
      <Tab.Navigator

        screenOptions={({route}) => ({
          tabBarIcon: ({color,size}) => {
            const {name} = icons[route.name]
            return <Icon name={name} color={color} size={size} />
          }
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#121212'
          },
          activeTintColor: '#FFF',
          inactiveTintColor: '#FF0000'
        }}
      
          
      >

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sobre" component={Sobre} />
      </Tab.Navigator>
    
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Tabs} options={{headerShown:false}}/>
        <Stack.Screen name="Contato" component={Contato}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
