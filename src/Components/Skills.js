import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export const Skills = (props) => {
    return (
        <View style={styles.container}>
            <Icon name={props.iconName} size={props.iconSize} color={props.iconColor} />
            <Text style={styles.description}>
                {props.textSkill}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        flexDirection: 'row',
        backgroundColor: '#161b22',
        alignItems: 'center'
    },

    description: {
        color: '#fff',
        marginLeft: 5
    },
})

