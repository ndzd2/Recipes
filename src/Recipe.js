import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';

const Recipe = () => {
    const [recipe, setRecipe] = useState({});
    const {container, imageRecipe, textRecipe, textError} = styles;

    const fetchRecipe = async () => {
        try {
            const response = await axios.get('https://recipes-4aa27-default-rtdb.europe-west1.firebasedatabase.app/recipes.json');
            const recipes = Object.values(response.data);
            const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
            setRecipe(randomRecipe);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchRecipe();
    }, []);

    return (
        <SafeAreaView style={container}>
            {recipe ? ( //I am doing this statement, because my database is free trial for 30 days and sometimes while refreshing it is not taking img and text
                        // so to avoid not displaying anything I am checking if database is fine and then if it is fine I am displaying image from URL and text from database
                        // and if something is wrong I am displaying text to tell user to refresh the page again, it would not be neccessary with local db or more stable one 
                <TouchableOpacity onPress={fetchRecipe}>
                    <Image source={{ uri: recipe.image }} style={imageRecipe} />
                    <Text style={textRecipe}>{recipe.text}</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={fetchRecipe}>
                    <Text style={textError}>Since our database is not stable online service, {"\n"}sometimes we are loosing connection. {"\n"}Please, refresh this page again...</Text>
                </TouchableOpacity>
            )}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        width: 400
    },
    imageRecipe: {
        width: 300,
        height: 300,
        marginBottom: 30,
        borderRadius: 8
    },
    textRecipe: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20
    },
    textError: {
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});

export default Recipe;