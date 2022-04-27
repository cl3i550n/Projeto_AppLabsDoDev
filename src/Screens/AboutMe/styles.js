import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#161b22'
    },

    buttonRow: {
        flexDirection: 'row',
        backgroundColor: '#08aabe',
        justifyContent: 'center'
    },

    imgContainer: {
        flexDirection: 'row',
        backgroundColor: '#08aabe'
    },

    textImg: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 0
    },

    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000'
    },

    imgPerfil: {
        width: 120,
        height: 120,
        borderRadius: 200,
        margin: '2%',
        borderWidth: 5,
        borderColor: '#fff',
        backgroundColor: '#161b22',
        marginBottom: 0
    },

    containerPortifolio: {
        flex: 1,
        backgroundColor: '#161b22'
    },

    textHeader: {
        fontSize: 28,
        fontFamily: 'SquadaOne-Regular',
        marginLeft: 5,
        marginTop: 5,
        color: '#08aabe'
    },

    textInfo: {
        fontSize: 18,
        marginLeft: 5,
        marginTop: 5,
        color: '#fff'
    },

    schoolLogo: {
        width: 48,
        height: 48
    },

    titleCertif: {
        fontWeight: 'bold',
        color: '#fff'
    },

    subTitleCertif: {
        color: '#fff'
    }

});