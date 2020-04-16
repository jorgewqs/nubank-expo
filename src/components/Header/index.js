import React from 'react';
import { View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

import logo from '../../assets/Nubank_Logo.png';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={logo} />
        <Text style={styles.title}>Jorge</Text>
      </View>
      <Feather name="chevron-down" size={20} color="#FFF" />
    </View>
  )
}
