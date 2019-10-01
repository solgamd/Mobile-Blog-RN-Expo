import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import AllBlogs from '../screens/AllBlogs';
import SingleBlog from '../screens/SingleBlog';

const AppNavigator = createStackNavigator({
    //screens
    AllBlogs,
    SingleBlog
}, {
    //generic styling
    initialRouteName: 'AllBlogs',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#44355B'
        },
        headerTintColor: '#31263E',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        }
    }
});

export default createAppContainer(AppNavigator);