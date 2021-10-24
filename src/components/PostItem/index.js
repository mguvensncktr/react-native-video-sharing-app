import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import { Video, AVPlaybackStatus } from 'expo-av'
import PostUI from '../PostUI';
import { Storage } from 'aws-amplify';

const PostItem = (props) => {
    const { post } = props;
    const video = useRef(null);
    const [videoUri, setVideoUri] = useState();
    const [status, setStatus] = useState({});
    const getVideoUri = async () => {
        if (post.videoUri.startsWith('http')) {
            setVideoUri(post.videoUri)
            return;
        }
        setVideoUri(await Storage.get(post.videoUri))
    }

    useEffect(() => {
        getVideoUri()
    }, [])

    return (

        <View style={styles.container}>
            <TouchableWithoutFeedback style={styles.videoPlay} onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
                <View style={{ marginBottom: 49 }}>
                    <Video
                        ref={video}
                        source={{ uri: videoUri }}
                        style={styles.video}
                        shouldPlay
                        isLooping
                        resizeMode='stretch'
                        onError={(e) => console.log(e)}
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                    <View style={styles.uiContainer}>
                        <PostUI post={post} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default PostItem
