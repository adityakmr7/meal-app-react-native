import React from 'react';
import {View, Button,Text, StyleSheet} from 'react-native';

import {MEALS} from '../data/dummy-data';
import Meal from '../models/meal';


const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.Id === mealId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button
                onPress={() => props.navigation.popToTop()}
                title={'Go Back to Categories'}/>
        </View>
    )
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.Id === mealId);
    
    return {
        headerTitle: selectedMeal.title
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;