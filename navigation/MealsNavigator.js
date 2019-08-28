/**
 * Stack Navigator
 */
import {createStackNavigator, createBottomTabNavigator,createAppContainer} from 'react-navigation';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetail from "../screens/MealDetailScreen";
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';

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

const MealsFavNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
    },
    Favorites: FavoritesScreen
});


export default createAppContainer(MealsFavNavigator);