/**
 * Stack Navigator
 */
import React from 'react';
import {
    createStackNavigator, 
    createBottomTabNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetail from "../screens/MealDetailScreen";
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import MealDetailScreen from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: 
        'white'
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerTintColor: 'white'
}


const MealsNavigator = createStackNavigator({
    Categories: {
        screen:CategoriesScreen,
    },
    CategoryMeals: {
        screen: CategoryMealScreen,
    },
    MealDetail: MealDetail
},{
    defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
    Favorites: {
        screen:FavoritesScreen
    },
    MealDetail: {
        screen: MealDetailScreen
    }
},{
    defaultNavigationOptions: defaultStackNavOptions
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
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons 
                name={"ios-star"}
                size={25}
                color={tabInfo.tintColor}
                />
            },
            tabBarColor:  Colors.accentColor,
            tabBarLabel: 'Meals'
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
        labelStyle: {
            fontFamily: 'open-sans-bold'
        },
        activeTintColor: Colors.accentColor
    }
});

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    navigationOptions: {
        drawerLabel: 'Filters!!'
    },
    defaultNavigationOptions: defaultStackNavOptions
});


const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavNavigator, 
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle:  {
            fontFamily: 'open-sans'
        }
    }
}); 



export default createAppContainer(MainNavigator);

