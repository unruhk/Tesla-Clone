import React from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import CarItem from './CarItem'
import cars from './cars'

const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                /* hide the scroll inicator */
                showsVerticalScrollIndicator={false}
                /* start at the component */
                snapToAlignment={'start'}
                /* animation speed */
                decelerationRate={'fast'}
                /* size value of one Item */
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarsList

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
})
