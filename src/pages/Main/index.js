import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Card from '../../components/Card';

import styles from './styles';

export default function Main() {

  return (
    <View style={styles.container}>
      <Header />
      <Card />
    </View>
  );
}