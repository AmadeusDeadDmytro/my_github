import { registerRootComponent } from 'expo';
import React from 'react'
import {AsyncStorage} from 'react-native'
import App from './src/containers/App';
import {composeWithDevTools} from "remote-redux-devtools";
import {createStore} from "redux";
import reducer from './src/reducers'
import {persistStore, autoRehydrate} from "redux-persist";
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Octicons from "react-native-vector-icons/Octicons";

const composeEnhancers = composeWithDevTools({ realtime: true })
const store = createStore(reducer, composeEnhancers(autoRehydrate()))
persistStore(store, {storage: AsyncStorage, blacklist: ['theme']})

const Tab = createBottomTabNavigator()

const Core = () => (
    <Provider store={store}>
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused }) => {
                            switch (route.name){
                                case 'Feed':
                                    return <Octicons size={24} name={'mark-github'} color={focused ? '#ffffff' : '#000000'}/>
                                case 'Discover':
                                    return <Octicons size={24} name={'flame'} color={focused ? '#ffffff' : '#000000'}/>
                                case 'Notifications':
                                    return <Octicons size={24} name={'globe'} color={focused ? '#ffffff' : '#000000'}/>
                                case 'More':
                                    return <Octicons size={24} name={'gear'} color={focused ? '#ffffff' : '#000000'}/>
                            }
                        },

                    })}
                    tabBarOptions={{
                        activeTintColor: '#ffffff',
                        inactiveTintColor: '#3f3f3f',
                        inactiveBackgroundColor: '#ffffff',
                        activeBackgroundColor: '#3f3f3f',
                        style: {
                            backgroundColor: '#111111'
                        }
                    }}
                >
                    <Tab.Screen name="Feed" component={App}/>
                    <Tab.Screen name="Discover" component={App} />
                    <Tab.Screen name="Notifications" component={App} />
                    <Tab.Screen name="More" component={App} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    </Provider>
)


registerRootComponent(Core)