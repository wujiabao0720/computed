import React, { Component } from 'react';
import store from './store';
import {Provider} from 'react-redux';
import Root from './router/index'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
             <div className="App">
                 <Root></Root>
             </div>
      </Provider>
    );
  }
}

export default App;
