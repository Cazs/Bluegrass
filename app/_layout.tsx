import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { CartProvider } from './providers/CartContext';
import { CartScreen } from './screens/CartScreen';
import { ProductListingScreen } from './screens/ProductListingScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { SplashScreen } from './screens/SplashScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle:{ backgroundColor: 'rgba(98, 138, 20, 0.8)', paddingTop: 10} }}>
      <Tab.Screen
        name="Explore" component={ProductListingScreen} 
        options={{
          tabBarLabel: 'Explore',
          tabBarLabelStyle: {
            color: "#fff"
          },
          tabBarIconStyle: {
            color: "#fff"
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="storefront-outline" color={color || '#fff'} size={26} />
          ),
        }}/>

      <Tab.Screen
        name="Wishlist"
        component={ProductListingScreen} 
        options={{
          tabBarLabel: 'Wishlist',
          tabBarLabelStyle: {
            color: "#fff"
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color || '#fff'} size={26} />
          ),
        }}/>

      <Tab.Screen
        name="Search"
        component={ProductListingScreen} 
        options={{
          tabBarLabel: 'Search',
          tabBarLabelStyle: {
            color: "#fff"
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" color={color || '#fff'} size={26} />
          ),
        }}/>

      <Tab.Screen 
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarLabelStyle: {
            color: "#fff"
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color ?? '#fff'} size={26} />
          ),
        }}/>

      <Tab.Screen
        name="Profile"
        component={ProductListingScreen} 
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            color: "#fff"
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color || '#fff'} size={26} />
          ),
        }}/>
    </Tab.Navigator>
);

export function App() {
  return (
    <CartProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  splashIcon: {
    width: 100,
    height: 100,
  },
  registerContainer: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'olive',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginPrompt: {
    flexDirection: 'row',
    marginTop: 10,
  },
  loginLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#666',
  },
  gridContainer: {
    padding: 10,
  },
  gridItem: {
    flex: 1,
    aspectRatio: 1,
    margin: 5,
  },
  gridImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default App;