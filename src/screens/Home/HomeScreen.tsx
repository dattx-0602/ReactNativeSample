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
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { UserStore } from 'stores';
import { StackRoute } from 'constants/Routes';

type Props = {
  navigation: any;
};

type ExampleComponent = {
  stackRoute: string;
  title: string;
};

const EXAMPLE_COMPONENTS: ExampleComponent[] = [
  {
    stackRoute: StackRoute.AnimationNavigation1Screen,
    title: 'Animation Navigation Example',
  },
  {
    stackRoute: StackRoute.BottomNavigation1ScreenScreen,
    title: 'Bottom Navigation Example',
  },
  {
    stackRoute: StackRoute.ModalNavigation1Screen,
    title: 'Modal Navigation Example',
  },
  {
    stackRoute: StackRoute.SwipeSampleScreen,
    title: 'Swipe Modal Example',
  },
];

const HomeScreen = (props: Props) => {
  const { navigation } = props;
  const renderItem = (item: ExampleComponent, i: number) => (
    <TouchableOpacity
      key={i}
      style={styles.touchable}
      onPress={() => navigation.navigate(item.stackRoute)}>
      <Text style={styles.item}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <SafeAreaView style={styles.body}>
        <View style={styles.body}>
          <Button
            title="Logout"
            onPress={() => {
              UserStore.setHasLogin(false);
            }}
          />
          <ScrollView>{EXAMPLE_COMPONENTS.map(renderItem)}</ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  touchable: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, .06)',
  },
  item: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default observer(HomeScreen);
