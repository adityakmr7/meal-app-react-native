import React from 'react';
import { Platform,View, Text,TouchableOpacity, TouchableNativeFeedback,StyleSheet } from 'react-native';




const CategoryGridTile = (props) => {
    let TouchableCmp = TouchableOpacity;

    if(Platform.OS === "android" && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
        <TouchableCmp
            style={{flex: 1}}
            onPress={props.onSelect }
            >
            <View style={{ ...styles.container,...{backgroundColor: props.color}}}>
                <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
            </View>
        </TouchableCmp>
        </View>
    );
}


const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 15,
        color: 'white',
        textAlign: 'right'
    }
});

export default CategoryGridTile;