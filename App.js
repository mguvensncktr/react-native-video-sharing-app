import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import RootNavigator from './src/navigation';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'
import { createUser } from './src/graphql/mutations';
import config from './src/aws-exports'
import { getUser } from './src/graphql/queries';
Amplify.configure(config);

const randomImages = [
  'https://static.wikia.nocookie.net/naruto/images/3/3c/Obito.png/revision/latest?cb=20170329175507&path-prefix=tr',
  'https://nobleorderbrewing.com/img/lists/97/boruto-5-ways-sasuke-losing-his-rinnegan-makes-sense.jpg',
  'https://www.merlininkazani.com/images/games/12350/108680_640.jpg'
]

const getImage = () => {
  return randomImages[Math.floor(Math.random() * randomImages.length)]
}

const App = () => {

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if (!userInfo) {
        return;
      }
      const getUserData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
      if (getUserData.data.getUser) {
        console.log('Kullanıcı mevcut');
        return;
      }
      const newUser = {
        id: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        imageUri: getImage()
      }
      await API.graphql(graphqlOperation(createUser, { input: newUser }))
    };


    fetchUser()
  }, [])

  return (
    <>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        <RootNavigator />
      </View>
    </>
  );
}

export default withAuthenticator(App);
