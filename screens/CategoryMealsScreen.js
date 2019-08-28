import React from 'react';
import {View, Text ,StyleSheet} from 'react-native';
import {CATEGORIES} from  '../data/dummy-data';


const CategoryMealScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');
    const seletedCategory = CATEGORIES.find(cat => cat.id === catId);
    return (
        <View style={styles.screen}>
            <Text>{seletedCategory.title}</Text>
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