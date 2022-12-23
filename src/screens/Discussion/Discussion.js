import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { messages as mockMessages } from '../../mock';
import Message from '../../Components/Message';
import styles from './Discussion.styles';
import { io } from "socket.io-client";

const socket = io("http://localhost:3000")
const Discussion = () => {
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState(Math.floor(Math.random() * 1000));
  const [messages, setMessages] = useState([]);
  const [joined, setJoined] = useState(0);

  useEffect(() => {
    socket.on('connect', () => { })
    socket.emit("join", { userId })
  }, [])

  useEffect(() => {
  }, [messages])
  socket.on("sendAll", (data) => {
    setMessages([...messages, data])
  })
  socket.on("joined", (joined) => {
    setJoined(joined)
  })
  socket.on("connected", id => {
    setSocketId(id)
  })
  const sendMessage = (message) => {
    socket.emit("sendmessage", { userId, message, })
  }
git 
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ backgroundColor: '#E5E5E5' }}
        data={messages}
        renderItem={({ item, index }) =>
          <Message isSelf={item.userId==userId} key={index} item={item} />
        } />
      <View style={{flexDirection:'row',justifyContent:'space-evenly',padding:10}}>
        <Text>socketId: {userId ? userId : "Henüz atanmadı"}</Text>
        <Text>joined: {joined}</Text>
      </View>
      <View style={styles.bottom_container}>
        <View style={styles.left_container} >
          <Image source={require('../../assets/images/Smile.png')} style={{ width: 28, height: 28, margin: 10 }} />
          <TextInput
            value={message}
            autoCapitalize={'none'}
            onChangeText={message => setMessage(message)}
            style={styles.input}
            placeholder="Type Message"
          />
        </View>
        <TouchableOpacity onPress={() => { sendMessage(message), setMessage("") }} style={styles.right_container}>
          <Image style={styles.image} source={require('../../assets/images/Send.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Discussion