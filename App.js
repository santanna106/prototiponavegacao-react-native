import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home'
import Sobre from './src/pages/Sobre'
import Contato from './src/pages/Contato'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();


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



function App() {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="Contato" component={Contato} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
