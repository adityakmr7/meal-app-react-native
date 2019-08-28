/**
 * Stack Navigator
 */
import {createStackNavigator, createAppContainer} from 'react-navigation';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetail from "../screens/MealDetailScreen";
import { Platform } from 'react-native';
import Colors from '../constants/Colors';


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




export default createAppContainer(MealsNavigator);