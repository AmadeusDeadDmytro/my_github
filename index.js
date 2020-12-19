import { registerRootComponent } from 'expo';
import React from 'react'
import {AsyncStorage} from 'react-native'
import App from './src/containers/App';
import {composeWithDevTools} from "remote-redux-devtools";
import {createStore} from "redux";
import reducer from './src/reducers'
import {persistStore, autoRehydrate} from "redux-persist";
import {Provider} from "react-redux";

const composeEnhancers = composeWithDevTools({ realtime: true })
const store = createStore(reducer, composeEnhancers(autoRehydrate()))
persistStore(store, {storage: AsyncStorage, blacklist: ['theme']})

const App2 = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

registerRootComponent(App2)