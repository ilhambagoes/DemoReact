/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';

const About = () => {
  return (
    <ScrollView>
      <Text style={styles.title}>Seol In Ah</Text>
      <View>
        <Image
          source={{ uri: 'https://assets.pikiran-rakyat.com/crop/0x202:1080x881/x/photo/2022/03/11/4171911473.jpg' }}
          style={styles.image}
        />
        <Text style={styles.description}>
          Seol In-Ah, juga dikenal sebagai Seorina,
          adalah aktris asal Korea Selatan yang paling dikenal karena perannya
          sebagai peran pendukung dalam dua serial televisi populer Mr. Queen dan Business Proposal
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 12,
    fontSize: 25,
    textAlign: 'center',
    color: 'black'
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 12,
    marginHorizontal: 12,
    alignSelf: 'center'
  },
  description: {
    marginHorizontal: 12,
    textAlign: 'justify',
    color: 'black'
  }
})

export default About;