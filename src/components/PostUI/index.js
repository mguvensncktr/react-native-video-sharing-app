import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './style'
import { AntDesign, FontAwesome, Fontisto } from '@expo/vector-icons';

const PostUI = (props) => {
    const [post, setPost] = useState(props.post)
    const [isLiked, setIsLiked] = useState(false)
    const onPressLike = () => {
        const count = isLiked ? -1 : +1;
        setPost({
            ...post,
            likes: post.likes + count,
        })
        setIsLiked(!isLiked);
    }
    return (
        <View style={styles.container}>
            <View style={styles.sideContainer}>
                <Image style={styles.image} source={{ uri: post?.user?.imageUri }} />
                <TouchableOpacity onPress={onPressLike}>
                    <AntDesign name="heart" size={35} color={isLiked ? "red" : 'white'} />
                </TouchableOpacity>
                <Text style={styles.numbers}>{post.likes}</Text>
                <FontAwesome name="commenting-o" size={35} color="white" />
                <Text style={styles.numbers}>{post?.comments}</Text>
                <Fontisto name="share-a" size={35} color="white" />
                <Text style={styles.numbers}>{post?.shares}</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View>
                    <Text style={styles.username}>@{post.user.username}</Text>
                    <Text style={styles.desc}>{post.desc}</Text>
                    <View style={styles.songContainer}>
                        <Text style={styles.songTitle}>{post.song.name}</Text>
                    </View>
                </View>
                <Image style={styles.songimage} source={{ uri: post.song.imageUri }} />
            </View>
        </View>
    )
}

export default PostUI
