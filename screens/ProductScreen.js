import React, {Component} from 'react';
import {Text, View} from 'react-native';

function ProductScreen({navigation, route}) {
  const cardId = route.params.id;
  return (
    <View>
      <Text>products : {cardId}</Text>
    </View>
  );
}

export default ProductScreen;
