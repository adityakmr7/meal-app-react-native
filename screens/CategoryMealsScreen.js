import React from 'react';
import {View, Text ,StyleSheet, FlatList} from 'react-native';
import {CATEGORIES, MEALS} from  '../data/dummy-data';
import MealItem from '../components/MealItem';



const CategoryMealScreen = (props) => {

    const renderMealItem = itemData => {
        return (
            <MealItem 
                title={itemData.item.title}
                duration={itemData.item.duration}
                image={itemData.item.imageUrl}
                complexity = {itemData.item.complexity}
                affordibility={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        param: {
                            mealId: itemData.item.id
                        }
                    })
                }}
            />
        )
    }

    const catId = props.navigation.getParam('categoryId');
    // const seletedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0 
    );
    return (
        <View style={styles.screen}>
            <FlatList 
            data={displayedMeals} 
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealItem}
            style={{width: '100%'}}
            />
        </View>
    )
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const seletedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: seletedCategory.title,
        
    };
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;