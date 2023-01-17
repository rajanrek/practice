import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

const Card = ({id, title, des, image, onPress, navigation}) => {
  console.log('image', image);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImagewrap}>
        <Image source={{uri: image}} style={styles.cardImage} />
      </View>

      <View style={styles.fl1}>
        <Text style={styles.desTxt}>{des}</Text>
      </View>
      <View style={styles.titleWrap}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Button
          title="View city"
          onPress={() => {
            onPress(id);
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 110,
    borderRadius: 5,
    marginBottom: 10,
  },
  cardImagewrap: {
    width: '30%',
    height: 100,
    borderRadius: 5,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDes: {
    fontSize: 13,
    color: 'black',
  },
  desTxt: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    color: 'black',
  },
  titleWrap: {
    justifyContent: 'space-between',
  },
  fl1: {
    flex: 1,
  },
});

export default Card;
