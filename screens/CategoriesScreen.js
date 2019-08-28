import React from 'react';
import {View,Platform, Text, StyleSheet,TouchableOpacity, Button, FlatList} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";
import Colors from '../constants/Colors';


const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return( 
        <TouchableOpacity
            style={styles.gridItem}
            onPress={() => 
                props.navigation.navigate({
                    routeName: 'CategoryMeals', 
                    params: {
                        //passing data to CategoryMealsScreen
                        categoryId: itemData.item.id
                    }
                })}
            >
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
        )
    };
    return (
        <FlatList
            keyExtractor={(item, index) =>item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Category',
    headerStyle: {
        backgroundColor: Platform .OS === 'android' ? Colors.primaryColor: 
        'white'
    },
    headerTintColor: 'white'
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;