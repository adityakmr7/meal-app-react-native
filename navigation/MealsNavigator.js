/**
 * Stack Navigator
 */
import {createStackNavigator, createAppContainer} from 'react-navigation';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetail from "../screens/MealDetailScreen";


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetail
});

export default createAppContainer(MealsNavigator);