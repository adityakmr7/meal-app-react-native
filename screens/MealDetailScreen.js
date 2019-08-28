import React from 'react';
import {View, Button,Text, StyleSheet} from 'react-native';



const MealDetail = (props) => {
    return (
        <View style={styles.screen}>
            <Text>MealDetail Screen</Text>
            <Button
                onPress={() => props.navigation.popToTop()}
                title={'Go Back to Categories'}/>
        </View>
    )
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetail;