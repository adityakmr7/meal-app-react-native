import React from 'react';
import { FlatList, StyleSheet,View } from 'react-native';
import MealItem from './MealItem';


const MealList = (props) => {
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
    return (
        <View style={styles.list}>
            <FlatList 
            data={props.listData} 
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealItem}
            style={{width: '100%'}}
            />
        </View>    
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealList;