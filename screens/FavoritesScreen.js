import MealsList from '../components/MealsList/MealsList';
// import { useContext } from 'react';
// import { FavouritesContext } from '../store/context/favourites-context';
import { MEALS } from '../data/dummy-data';
import { StyleSheet, View, Text } from 'react-native';
import {useSelector} from 'react-redux';

function FavouritesScreen(){
    // const favouriteMealsContext = useContext(FavouritesContext);
    const favoriteMealIds = useSelector((state)=>state.favouriteMeals.ids)
    const favoriteMeals = MEALS.filter((meal)=>favoriteMealIds.includes(meal.id))

    if (favoriteMeals.length === 0){
        return (<View style={styles.rootContainer}>
            <Text style={styles.text}>
                You have no favourites yet!
            </Text>
        </View>)
    }

    return <MealsList items={favoriteMeals}/>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default FavouritesScreen;