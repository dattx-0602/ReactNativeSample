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
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';

type Props = {
  navigation: any;
};

const ModalNavigation2Screen = (props: Props) => {
  const { navigation } = props;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.blankView} />
        <View style={styles.body}>
          <Button
            title="Go Back Modal 1"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body: {
    flex: 3,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  blankView: {
    flex: 1,
  },
});

export default observer(ModalNavigation2Screen);
