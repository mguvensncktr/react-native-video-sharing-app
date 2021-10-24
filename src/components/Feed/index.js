import React, { useEffect, useState } from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import PostItem from '../PostItem';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';


const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await API.graphql(graphqlOperation(listPosts));
                setPosts(res.data.listPosts.items)
            } catch (e) {
                console.log(e);
            }
        }
        fetchPost();
    }, [])

    return (
        <View style={{ backgroundColor: 'black' }}>
            <FlatList
                data={posts}
                renderItem={({ item }) => <PostItem post={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
            />
        </View>
    )
}

export default Feed;

