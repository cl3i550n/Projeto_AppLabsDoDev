import React from 'react';

// Dependencias
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5'

// Imports Locais
import { HomeStacks, FeedStacks, AboutMeStacks } from './StacksScreens'

const Tab = createBottomTabNavigator();

export function NavigationTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: '#031319' }
            }}
        >
            <Tab.Screen
                name='TabHome'
                component={HomeStacks}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => {
                        return <Icon name='home' size={22} color={focused ? '#08aabe' : '#fff'} />;
                    }
                }}
            />
            <Tab.Screen
                name='TabFeed'
                component={FeedStacks}
                options={{
                    title: 'Atualizações',
                    tabBarIcon: ({ focused }) => {
                        return <Icon name='rss' size={22} color={focused ? '#08aabe' : '#fff'} />;
                    }
                }}
            />
            <Tab.Screen
                name='TabAbout'
                component={AboutMeStacks}
                options={{
                    title: 'Sobre LabsDev',
                    tabBarIcon: ({ focused }) => {
                        return <Icon name='address-card' size={22} color={focused ? '#08aabe' : '#fff'} />;
                    }
                }}
            />
        </Tab.Navigator>
    )
}