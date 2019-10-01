import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenOptions } from 'react-navigation';

interface SingleBlogProps {}
interface SingleBlogState {}

export default class SingleBlog extends React.Component<SingleBlogProps, SingleBlogState> {
    
    static navigationOptions: NavigationScreenOptions = {
        headerTitle: 'Single Blog'
    };
 
    render() {
     return (
    <View style={styles.container}>
      <Text>SingleBlog screen</Text>
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
