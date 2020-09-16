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
import { Button, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationStore } from 'stores';

type Props = {
  navigation: any;
};

const AnimationNavigation2Screen = (props: Props) => {
  const { navigation } = props;
  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <Button
            title="Go Back"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <View style={styles.lockNavigationContent}>
            <Text
              style={
                styles.lockStatus
              }>{`Navigation is Lock status: ${NavigationStore.IsLockNavigation}`}</Text>
            <Button
              title="Toggle Lock Navigation"
              onPress={() => {
                NavigationStore.setLockNavigation(!NavigationStore.IsLockNavigation);
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  lockNavigationContent: {
    marginTop: 30,
  },
  lockStatus: {
    textAlign: 'center',
  },
});

export default observer(AnimationNavigation2Screen);
