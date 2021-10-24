import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    sideContainer: {
        alignSelf: 'flex-end',
        height: 275,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    username: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 5
    },
    desc: {
        color: 'white',
        fontSize: 16,
        paddingBottom: 5
    },
    songContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    songTitle: {
        color: 'white',
        fontSize: 16
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white'
    },
    songimage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'gray'
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    numbers: {
        color: 'white',
        alignSelf: 'center',
        marginBottom: 5
    }

})

export default styles;