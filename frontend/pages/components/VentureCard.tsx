import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VentureCard = ({ title, image, desc }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate('VenturePage' as never);
  };

  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.container}>
      <View>
        <Image 
          source={{uri: image}}
            style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 20,
        marginLeft:10,
    },
    image: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      width: 175, 
      height: 125,
      borderRadius: 25,
    },
    textContainer: {
      paddingLeft: 10,
      paddingTop: 5,
    },
    title: {
      fontSize: 15,
      fontWeight: 'bold',
      flexWrap: 'wrap',
    }
});

export default VentureCard;