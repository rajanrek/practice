import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {setItemsLogin, updateTextLogin} from '../redux/actions/login';
// import {login} from '../redux/actions/login';

function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const dummyData = [
    {
      id: '1',
      title: 'new york',
      image: 'https://loremflickr.com/320/240/brazil,rio',
      des: 'lorem sljfoisnf ljlsi ,ksjd lkjsfl  lkjios',
    },
    {
      id: '2',
      title: 'new delhi',
      image: 'https://loremflickr.com/320/240/brazil,rio',
      des: 'lorem sljfoisnf lkjjs ljsl lsj  pkdspk odda',
    },
    {
      id: '3',
      title: 'Noida',
      image: 'https://loremflickr.com/320/240/brazil,rio',
      des: 'lorem sljfoisnf dijd jndsddd m,dnllksjdfl',
    },
    // Add more items here
  ];
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="User Id"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <Button
        title="Login"
        onPress={() => {
          // Handle login here
          dispatch(setItemsLogin(dummyData));
          dispatch(updateTextLogin(email));
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});

export default LoginScreen;
