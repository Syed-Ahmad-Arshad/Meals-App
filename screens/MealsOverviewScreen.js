// import {} from '..data/dummy-data';
import { StyleSheet } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen({route, navigation}) {
    const catId = route.params?.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title: categoryTitle,
            headerBackTitle: 'Back',            
        })
    }, [catId, navigation]);

    return( 
        <MealsList items={displayedMeals} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})

export default MealsOverviewScreen;