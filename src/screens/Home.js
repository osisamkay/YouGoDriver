import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AllButton from '../components/Buttons';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Driver home screen</Text>
      <AllButton
        title="driver detail"
        handlePress={() => {
          navigation.navigate('Detail');
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontWeight: 'bold',
  },
});
