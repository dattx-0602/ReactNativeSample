/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { observer } from 'mobx-react';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

type Props = {
  title: string;
};

const BottomNavigationScreen = (props: Props) => {
  const { title } = props;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.text}> {title} </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  body: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    color: 'red',
    textAlign: 'center',
  },
});

export default observer(BottomNavigationScreen);
