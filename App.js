import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Drivers',
    },
  },
  Detail: {
    screen: Details,
    navigationOptions: {
      title: 'Drivers Details',
    },
  },
});

const App = createAppContainer(MainNavigator);

export default App;
