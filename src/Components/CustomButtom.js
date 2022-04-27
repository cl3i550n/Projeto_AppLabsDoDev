import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import Icon from 'react-native-vector-icons/FontAwesome5';


export const CustomButtonProgress = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textButton}>{props.aboutButton}</Text>
            </View>
            <View style={styles.alignButtons}>
                <AwesomeButton
                    progress
                    backgroundColor={props.backgroundColor}
                    onPress={props.onPress}
                    width={props.width}
                    height={props.height}
                    paddingHorizontal={0}
                    borderRadius={10}
                >
                    <Icon name={props.iconName} size={20} color={'#fff'} />
                    <Text style={{ color: '#fff' }}>{props.label}</Text>
                </AwesomeButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 6,
        marginTop: -10,
        marginBottom: 5
    },

    alignButtons: {
        // alignItems: 'center'
    },

    textButton: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000'
    }
})