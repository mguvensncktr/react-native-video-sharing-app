import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    uiContainer: {
        justifyContent: 'flex-end',
        height: '100%'
    },
    videoPlay: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        position: 'absolute',
        zIndex: 100
    }
})

export default styles;
