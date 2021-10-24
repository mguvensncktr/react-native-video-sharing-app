import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

const RecordScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null)
    const [recording, setRecording] = useState(false)
    const [type, setType] = useState(Camera.Constants.Type.back);
    const navigation = useNavigation();
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type} ref={ref => {
                setCameraRef(ref);
            }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        justifyContent: 'flex-end',
                        marginBottom: 15
                    }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly'
                    }}>
                        <TouchableOpacity
                            style={{
                                flex: 0.1,
                                alignSelf: 'flex-start',
                            }}
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}>
                            <Ionicons style={{ width: 40 }} name={Platform.OS === 'ios' ? "ios-camera-reverse" : 'md-camera-reverse'} size={40} color="white" />

                        </TouchableOpacity>

                        <TouchableOpacity style={{ alignSelf: 'center' }} onPress={async () => {
                            if (!recording) {
                                setRecording(true)
                                let video = await cameraRef.recordAsync();
                                navigation.navigate('CreatePost', { videoUri: video.uri })
                            } else {
                                setRecording(false)
                                cameraRef.stopRecording()
                            }
                        }}>
                            <View style={{
                                borderWidth: 2,
                                borderRadius: 25,
                                borderColor: 'red',
                                height: 50,
                                width: 50,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            >
                                <View style={{
                                    borderWidth: 2,
                                    borderRadius: 25,
                                    borderColor: recording ? "blue" : 'red',
                                    height: 40,
                                    width: 40,
                                    backgroundColor: recording ? "blue" : 'red'
                                }} >
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Camera>
        </View>
    );
}

export default RecordScreen;
