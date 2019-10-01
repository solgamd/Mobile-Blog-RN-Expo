import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationScreenOptions } from 'react-navigation';
import { NavigationStackScreenProps } from 'react-navigation-stack';

interface AllBlogsProps extends NavigationStackScreenProps { }
interface AllBlogsState { }

export default class AllBlogs extends React.Component<AllBlogsProps, AllBlogsState> {

  static navigationOptions: NavigationScreenOptions = {
    headerTitle: 'All Blogs'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>AllBlogs screen</Text>
        <Button
          title="Get Single Blog"
          onPress={() => this.props.navigation.navigate("SingleBlog")} />
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
