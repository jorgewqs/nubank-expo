import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

import qrcode from '../../assets/qrcode.png';

export default function Menu({ translateY }) {
  return(
    <Animated.ScrollView style={
      [{
        opacity: translateY.interpolate({
          inputRange: [0, 200],
          outputRange: [0, 1],
        })
      },
      styles.container ]
      }>
      <View style={styles.code}>
        <Image style={styles.qrcode} source={qrcode} />
      </View>

      <View style={styles.containerConta}>
        <View style={styles.contentConta}>
          <Text style={styles.contentContaText}>Banco </Text>
          <Text style={styles.contentContaTextValue}>260 - Nu Pagamentos S.A</Text>
        </View>
        <View style={styles.contentConta}>
          <Text style={styles.contentContaText}>Agência </Text>
          <Text style={styles.contentContaTextValue}>0001</Text>
        </View>
        <View style={styles.contentConta}>
          <Text style={styles.contentContaText}>Conta </Text>
          <Text style={styles.contentContaTextValue}>79869400-6</Text>
        </View>


      </View>

      <View style={styles.nav}>
        <View style={styles.navItem}>
          <Feather name="help-circle" size={20} color="#FFF" />
          <TouchableOpacity onPress={() =>{}}>
            <Text style={styles.navText}>Me ajude</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navItem}>
          <Feather name="user" size={20} color="#FFF" />
          <TouchableOpacity onPress={() =>{}}>
            <Text style={styles.navText}>Perfil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navItem}>
          <Feather name="dollar-sign" size={20} color="#FFF" />
          <TouchableOpacity onPress={() =>{}}>
            <Text style={styles.navText}>Configurar conta</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navItem}>
          <Feather name="credit-card" size={20} color="#FFF" />
          <TouchableOpacity onPress={() =>{}}>
            <Text style={styles.navText}>Configurar cartão</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navItem}>
          <Feather name="smartphone" size={20} color="#FFF" />
          <TouchableOpacity onPress={() =>{}}>
            <Text style={styles.navText}>Configurações do app</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.btnSair} onPress={() => {}}>
        <Text style={styles.btnText}>SAIR DO APP</Text>
      </TouchableOpacity>
    </Animated.ScrollView>
  )
}
