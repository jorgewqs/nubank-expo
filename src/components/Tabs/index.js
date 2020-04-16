import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, ScrollView, Text, Image, Animated, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Tabs({ translateY }) {
  return (
    <Animated.View style={
      [{
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp',
          }),
        }],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      },styles.container ]}
      >
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity onPress={() =>{}}>
          <View style={styles.TabsItem} >
            <Feather name="user-plus" size={24} color="#FFF" />
            <Text style={styles.TabsText} >Indicar amigos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{}}>
          <View style={styles.TabsItem} >
            <Feather name="smartphone" size={24} color="#FFF" />
            <Text style={styles.TabsText} >Recarga celular</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{}}>
          <View style={styles.TabsItem} >
            <Feather name="message-square" size={24} color="#FFF" />
            <Text style={styles.TabsText} >Cobrar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{}}>
          <View style={styles.TabsItem} >
            <Feather name="arrow-down-circle" size={24} color="#FFF" />
            <Text style={styles.TabsText} >Depositar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{}}>
          <View style={styles.TabsItem} >
            <Feather name="arrow-up-circle" size={24} color="#FFF" />
            <Text style={styles.TabsText} >Transferir</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{}}>
          <View style={styles.TabsItem} >
            <Feather name="help-circle" size={24} color="#FFF" />
            <Text style={styles.TabsText} >Me ajude</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{}}>
          <View style={styles.TabsItem} >
            <Feather name="unlock" size={24} color="#FFF" />
            <Text style={styles.TabsText} >Bloquear Cartão</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </Animated.View>
  )
}
