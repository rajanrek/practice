import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

function ProductScreen({navigation, route}) {
  const dummy = useSelector(state => state.dummy);
  return (
    <View>
      <Text>City :{dummy.textIndummy}</Text>
    </View>
  );
}

export default ProductScreen;
