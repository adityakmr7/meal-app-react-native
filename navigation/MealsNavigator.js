/**
 * Stack Navigator
 */
import React from 'react';
import {createStackNavigator, createBottomTabNavigator,createAppContainer} from 'react-navigation';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetail from "../screens/MealDetailScreen";
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
const MealsNavigator = createStackNavigator({
    Categories: {
        screen:CategoriesScreen,
    },
    CategoryMeals: {
        screen: CategoryMealScreen,
    },
    MealDetail: MealDetail
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: 
            'white'
        },
        headerTintColor: 'white'
    }
});


const tabScreenConfig= {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons 
                name={"ios-restaurant"}
                size={25}
                color={tabInfo.tintColor}
                />
            },
            tabBarColor:  Colors.primaryColor
        }
    },
    Favorites:{
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons 
                name={"ios-star"}
                size={25}
                color={tabInfo.tintColor}
                />
            },
            tabBarColor:  Colors.accentColor
        }
    }
}

const MealsFavNavigator = Platform.OS === 'android' 
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true
    }) 
    :createBottomTabNavigator(
        tabScreenConfig,
    {
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
});


export default createAppContainer(MealsFavNavigator);