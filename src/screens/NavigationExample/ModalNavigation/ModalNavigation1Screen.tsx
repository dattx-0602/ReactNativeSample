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
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { StackRoute } from 'constants/Routes';

type Props = {
  navigation: any;
};

const ModalNavigation1Screen = (props: Props) => {
  const { navigation } = props;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Button
            title="Go to Navigation Modal Screen 2"
            onPress={() => {
              navigation.navigate(StackRoute.ModalNavigation2Screen);
            }}
          />
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
});

export default observer(ModalNavigation1Screen);
