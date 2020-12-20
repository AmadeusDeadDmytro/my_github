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
import {DEFAULT_THEME} from "./src/utils/constants/defaults";
import {loadTheme} from "./src/utils/helpers";
import {Settings} from "./src/containers/Settings";

const composeEnhancers = composeWithDevTools({ realtime: true })
const store = createStore(reducer, composeEnhancers(autoRehydrate()))
persistStore(store, {storage: AsyncStorage, blacklist: ['theme']})

const theme = loadTheme(DEFAULT_THEME)

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
                                    return <Octicons size={24} name={'mark-github'} color={focused ? theme.base04 : theme.base03}/>
                                case 'Discover':
                                    return <Octicons size={24} name={'flame'} color={focused ? theme.base04 : theme.base03}/>
                                case 'Notifications':
                                    return <Octicons size={24} name={'globe'} color={focused ? theme.base04 : theme.base03}/>
                                case 'More':
                                    return <Octicons size={24} name={'gear'} color={focused ? theme.base04 : theme.base03}/>
                            }
                        },

                    })}
                    tabBarOptions={{
                        activeTintColor: theme.base07,
                        inactiveTintColor: theme.base05,
                        inactiveBackgroundColor: theme.base07,
                        activeBackgroundColor: theme.base05,
                        style: {
                            backgroundColor: theme.base00,
                            borderTopWidth: 0
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