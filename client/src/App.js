import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import './App.css';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import store from './store';
import ItemModal from './components/ItemModal';

import { loadUser } from './actions/authActions';
import { Component } from 'react';

import Main from './components/Main';

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser()); 
  }
  
  render() {
    return (
      <Provider store={store} >
        
          {/* <AppNavbar /> */}
          {/* <Container> */}
            
            <Main/>
            {/* <ShoppingList /> */}
          {/* </Container> */}
        
      </Provider>

    );
  }
}

export default App;
