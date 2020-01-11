import React,{Component} from 'react';
import {store,persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Loading from './src/splash';
import AppNavigatorWithState from './src/app-navigator-with-state';

type Props = {};
export default class App extends Component<Props> {
  
  render() {
    console.disableYellowBox=true;
    return (
        <Provider
            store={store}
        >  
          <PersistGate
            loading={<Loading/>}
            persistor={persistor}
          >
          <AppNavigatorWithState/>

          </PersistGate>
            
        </Provider>
        
    );
  }

}


