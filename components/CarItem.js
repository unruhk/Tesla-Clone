import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native';
import StyledButton from './StyledButton';

const CarItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.car

  return (
    <View style={styles.carContainer}>

      <ImageBackground
        source={image}
        style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer} >
        <StyledButton
          type='primary'
          content={'Custom Order'}
          onPress={() => {
          }}
        />

        <StyledButton
          type='secondary'
          content={'Existing Inventory'}
          onPress={() => {
          }}
        />
      </View>

    </View>
  )
}

export default CarItem

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
    fontWeight: '500',
  },
  subtitleCTA: {
    textDecorationLine: 'underline',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
})