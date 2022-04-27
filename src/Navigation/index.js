import React from 'react';
import { StyleSheet, Platform, SafeAreaView, StatusBar } from 'react-native'

// Dependencias
import { NavigationContainer } from '@react-navigation/native';

// Imports Locais
import { NavigationTabs } from './TabsScreens'

export default props => (
    <>
        <SafeAreaView style={styles.SafeArea}>
            <StatusBar backgroundColor={'#031319'} />
            <NavigationContainer>
                <NavigationTabs />
            </NavigationContainer>
        </SafeAreaView>
    </>
);

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : 0
    }
})