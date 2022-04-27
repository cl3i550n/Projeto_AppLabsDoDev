import React from 'react';

// Dependencias
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Imports Locais
import { Home, Feed, AboutMe } from '../Screens'

const Stack = createNativeStackNavigator()

export function HomeStacks() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: '#031319'},
                headerTitleStyle: { fontFamily: 'SquadaOne-Regular', fontSize: 28, color: '#fff' }
            }}>
            <Stack.Screen
                name='HomeStack'
                component={Home}
                options={{
                    title: 'Laboratório do Dev'

                }}
            />
        </Stack.Navigator>
    );
}

export function FeedStacks() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: '#031319'},
                headerTitleStyle: { fontFamily: 'SquadaOne-Regular', fontSize: 28, color: '#fff' }
            }}>
            <Stack.Screen
                name='FeedStack'
                component={Feed}
                options={{
                    title: 'Novidades!'
                }}
            />
        </Stack.Navigator>
    );
}

export function AboutMeStacks() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: '#031319'},
                headerTitleStyle: { fontFamily: 'SquadaOne-Regular', fontSize: 28, color: '#fff' }
            }}>
            <Stack.Screen
                name='AboutStack'
                component={AboutMe}
                options={{
                    title: 'Quem é o DEV?'
                }}
            />
        </Stack.Navigator>
    );
}