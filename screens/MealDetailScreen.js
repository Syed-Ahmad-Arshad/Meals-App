import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect, useContext } from "react";
import IconButton from "../components/IconButton";
// import { FavouritesContext } from "../store/context/favourites-context";
import {useSelector, useDispatch} from 'react-redux';
import { addFavourite, removeFavourite } from "../store/redux/favourites";

function MealDetailScreen({route, navigation}){
    // const favouriteMealsContext = useContext(FavouritesContext);
    const dispatch = useDispatch();
    const favouriteMealIds = useSelector((state)=>state.favouriteMeals.ids)
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const mealIsFavourite = favouriteMealIds.includes(mealId);

    function changeFavStatusHandler(){
        if (mealIsFavourite) {
            // favouriteMealsContext.removeFavourite(mealId);
            dispatch(removeFavourite({id: mealId}));
        }
        else{
            // favouriteMealsContext.addFavourite(mealId);   
            dispatch(addFavourite({id: mealId}));
        }
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavourite ? "star" : "star-outline"} color="white" onPress={changeFavStatusHandler}/>
            }
        })
    }, [navigation, changeFavStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails textStyle={styles.detailText}complexity={selectedMeal.complexity} duration={selectedMeal.duration} affordability={selectedMeal.affordability}/>
            <View style={styles.listeOuterContainer}>
                <View style={styles.listContainer}> 
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'

    },
    detailText: {
        color: 'white',
    },
    listContainer: {
        width: '80%'
    },
    listeOuterContainer: {
        alignItems: 'center'
    }
})

export default MealDetailScreen; 