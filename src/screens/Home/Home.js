import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../Components/Header';

const Home = () => {
  return (
    <SafeAreaView>
        <View>
            <Header />
            <Text>Home</Text>
        </View>
    </SafeAreaView>
  );
}

export default Home