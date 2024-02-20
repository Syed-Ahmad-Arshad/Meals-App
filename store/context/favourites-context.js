import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id)=>{},
    removeFavourite: (id)=> {} 
});

function FavouritesContextProvider ({children}){
    const [favoriteMealIds, setFavoriteMealIds]= useState([])

    function addFavourite(id){
        setFavoriteMealIds((currentFavIds)=>[...currentFavIds, id]);
    }

    function removeFavourite(id){
        setFavoriteMealIds((currentFavIds)=>currentFavIds.filter((mealId)=>mealId!==id));
    }

    const value = {
        ids: favoriteMealIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    }
    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
} 

export default FavouritesContextProvider;