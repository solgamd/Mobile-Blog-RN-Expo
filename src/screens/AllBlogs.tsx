import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenOptions } from 'react-navigation';

interface AllBlogsProps { }
interface AllBlogsState { }

export default class AllBlogs extends React.Component<AllBlogsProps, AllBlogsState> {

  static navigationOptions: NavigationScreenOptions = {
    headerTitle: 'All Blogs'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>AllBlogs screen</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
