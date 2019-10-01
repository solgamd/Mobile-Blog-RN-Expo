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
    //load components like buttons, logos
    initialRouteName: 'SingleBlog',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#ECA72C'
        },
        headerTintColor: '#44355B',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
});

export default createAppContainer(AppNavigator);