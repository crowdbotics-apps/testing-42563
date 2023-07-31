import { Switch } from "react-native";
import { ActivityIndicator } from "react-native";
import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Crowdbotics</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Why should you apply to Crowdbotics?</Text>
        <Text style={styles.description}>
          Crowdbotics offers a unique opportunity to work on cutting-edge projects with a global team of talented developers. With a focus on modern technologies and agile development practices, Crowdbotics provides an environment that fosters growth and innovation.
        </Text>
      <ActivityIndicator style={styles.TInmieLb}></ActivityIndicator><Switch style={styles.hyPIfLLM}></Switch></View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  header: {
    alignItems: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10
  },
  content: {
    flex: 1
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    lineHeight: 24
  },
  TInmieLb: {
    width: 50,
    height: 50
  },
  hyPIfLLM: {
    width: 50,
    height: 25
  }
});
export default ScreenComponent;