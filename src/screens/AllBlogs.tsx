import * as React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { NavigationScreenOptions, NavigationScreenProps } from 'react-navigation';
import { json } from '../utils/api';

interface AllBlogsProps extends NavigationScreenProps { }
interface AllBlogsState {
  blogs: {
    id: number,
    title: string,
    content: string,
    _created: Date
  }[];
}

export default class AllBlogs extends React.Component<AllBlogsProps, AllBlogsState> {

  static navigationOptions: NavigationScreenOptions = {
    headerTitle: 'All Blogs'
  };

  constructor(props: AllBlogsProps) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  async componentDidMount() {
    try {
      let blogs = await json('https://jsonplaceholder.typicode.com/users');
      this.setState({ blogs })
    } catch (error) {
      Alert.alert("Whoops! - Error occurred.");
    }
  }

  renderBlogs() {
    return this.state.blogs.map(blog => {
      return <Text key={blog.id}>{blog.title}</Text>
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderBlogs()}
        <Text>AllBlogs screen</Text>
        {/* <Button
          title="Get Single Blog"
          onPress={() => this.props.navigation.navigate("SingleBlog")} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECA72C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloglist: {
    color: 'black'
  }
});
