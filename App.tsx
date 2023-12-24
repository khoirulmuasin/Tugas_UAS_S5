import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Produk from './src/component/Produk';
import Home from './src/component/Home';
import Akun from './src/component/Akun';
import PromoScreen from './src/component/Promo';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Produk') {
              iconName = focused ? 'file-tray-full-outline' : 'file-tray-outline';
            } else if (route.name === 'Akun') {
              iconName = focused ? 'person-circle-outline' : 'person-outline';
            } else if (route.name === 'Promo') {
              iconName = focused ? 'flame-outline' : 'flame-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          showLabel: false,
          style: {
            backgroundColor: '#FAD390',
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{ tabBarStyle: { backgroundColor: '#FAD390' }, headerShown: false }}
        />
        <Tab.Screen
          name='Produk'
          component={Produk}
          options={{ tabBarStyle: { backgroundColor: '#FAD390' }, headerShown: false }}
        />
        <Tab.Screen
          name='Promo'
          component={PromoScreen}
          options={{ tabBarStyle: { backgroundColor: '#FAD390' }, headerShown: false }}
        />
        <Tab.Screen
          name='Akun'
          component={Akun}
          options={{ tabBarStyle: { backgroundColor: '#FAD390' }, headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
