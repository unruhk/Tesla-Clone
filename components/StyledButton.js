import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

const StyledButton = (props) => {

    const { type, content, onPress } = props
    //console.warn(type)

    const myBackgraoundColor = type === 'primary' ? 'black' : 'white'
    const myTextColor = type === 'primary' ? 'white' : 'black'


    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, { backgroundColor: myBackgraoundColor }]}
                onPress={() => onPress()} /* {console.warn( console.warn('Hey there') )} */
            >
                <Text style={[styles.text, { color: myTextColor }]}>{content}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StyledButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
    },
    button: {
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8,
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
})
