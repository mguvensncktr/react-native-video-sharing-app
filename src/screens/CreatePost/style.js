import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    textInput: {
        margin: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        width: '100%',
        height: 50,
        borderRadius: 50,


    },
    button: {
        backgroundColor: '#4b6896',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 40,
        width: 100,
        borderRadius: 50
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }

})

export default styles;
