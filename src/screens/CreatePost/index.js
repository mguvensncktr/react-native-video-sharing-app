import 'react-native-get-random-values';
import Storage from '@aws-amplify/storage';
import React, { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createPost } from '../../graphql/mutations';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';


const CreatePost = () => {
    const [description, setDescription] = useState("");
    const [videoKey, setVideoKey] = useState(null)
    const route = useRoute();
    const navigation = useNavigation();

    const upload = async (imagePath) => {
        try {
            const res = await fetch(imagePath);
            const blob = await res.blob();
            const file = `${uuidv4()}.mp4`;
            const s3res = await Storage.put(file, blob)
            setVideoKey(s3res.key);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        upload(route.params.videoUri);
    }, [])

    const onPressShare = async () => {
        if (!videoKey) {
            console.warn('Video yüklenmedi');
            return;
        }

        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const newPost = {
                userID: userInfo.attributes.sub,
                songID: '204986a7-5743-488e-9f22-d1a17ede84ea',
                desc: description,
                videoUri: videoKey,

            };

            await API.graphql(graphqlOperation(createPost, { input: newPost }))
            navigation.navigate('Home')
        } catch (e) {
            console.log(e);
        }

    }
    return (
        <View style={styles.container}>
            <TextInput
                value={description}
                onChangeText={setDescription}
                style={styles.textInput}
                numberOfLines={5}
                placeholder="Açıklama yaz..."

            />
            <TouchableOpacity onPress={onPressShare}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Paylaş</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default CreatePost;
