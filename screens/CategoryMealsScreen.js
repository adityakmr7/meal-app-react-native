import React from 'react';
import {View, Text ,StyleSheet, Platform} from 'react-native';
import {CATEGORIES} from  '../data/dummy-data';
import Colors from '../constants/Colors';


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
        headerStyle: {
            backgroundColor: Platform .OS === 'android' ? Colors.primaryColor: 
            'white'
        },
        headerTintColor: 'white'
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