import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import AllButton from '../components/Buttons';

const Details = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Driver profile</Text>
        <View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        <View>
          <AllButton
            title="bask"
            handlePress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 30,
    marginTop: 10,
  },
  text: {
    textAlign: 'justify',
    marginVertical: 15,
    fontSize: 18,
  },
});
