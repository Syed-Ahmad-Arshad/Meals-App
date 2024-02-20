import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavouritesScreen from './screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons';
// import FavouritesContextProvider from './store/context/favourites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return <Drawer.Navigator screenOptions={
    {
      sceneContainerStyle: {backgroundColor: "#3f2f25"},
      headerTintColor: 'white',
      headerStyle:  {backgroundColor: "#451401"},
      drawerContentStyle: {backgroundColor: '#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1'
    }
  }>
    <Drawer.Screen 
      name="MealCategories" 
      component={CategoriesScreen} 
      options={{
        title: "Categories",
        drawerIcon: ({color, size}) => <Ionicons name="list" color={color} size={size} />
      }}
      />
    <Drawer.Screen 
      name="FavouritesScreen" 
      component={FavouritesScreen} 
      options={{
          title: "Favourites",
          drawerIcon: ({color, size}) => <Ionicons name="star" color={color} size={size} />
      }}/>
  </Drawer.Navigator>
}
 
export default function App() {
  return (
    <> 
    {/* <FavouritesContextProvider> */}
      <StatusBar style="light"/>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={
            {
              headerStyle: {
                backgroundColor: '#351401',
              },
              headerTintColor: 'white',
              contentStyle: {
                backgroundColor: "#3f2f25"
              }
            }
          }>
            <Stack.Screen name="Drawer" component={DrawerNavigator} options={{
              title: 'Categories',
              headerShown: false
            }}/>
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{title: "About the meal"}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavouritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
