import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Card from './components/Card';

const data = [
  {
    id: '1',
    title: 'new york',
    image: 'https://loremflickr.com/320/240/brazil,rio',
    des:'lorem sljfoisnf ljlsi ,ksjd lkjsfl  lkjios',
  },
  {
    id: '2',
    title: 'new delhi',
    image: 'https://loremflickr.com/320/240/brazil,rio',
    des:'lorem sljfoisnf lkjjs ljsl lsj  pkdspk odda',

  },
  {
    id: '3',
    title: 'Noida',
    image: 'https://loremflickr.com/320/240/brazil,rio',
    des:'lorem sljfoisnf dijd jndsddd m,dnllksjdfl',

  },
  // Add more items here
];
const HomeScreen = ({navigation}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardPress = id => {
    setSelectedCard(id);
    navigation.navigate('Product', {id});
    console.log(id);
  };

  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>List of Products:</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card
            id={item.id}
            title={item.title}
            image={item.image}
            des={item.des}
            onPress={handleCardPress}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  headingContainer: {
    paddingVertical: 10,
    paddingLeft: 10,
  },
  heading: {
    fontSize: 16,
    fontFamily: 'bold',
    color: 'black',
  },
});

export default HomeScreen;
