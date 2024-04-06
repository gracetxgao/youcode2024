import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Image } from 'react-native';

const Logo = require('../assets/DareVentureLogo.png');

const OpeningScreen = ({ navigation }) => {
    
    return (


        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} resizeMode="contain" />
            <Text style={styles.title}>DareVenture</Text>
            <Button style={styles.button}
                title="Login"
                onPress={() =>
                    navigation.navigate('Login')
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        paddingBottom: 20,
        fontFamily: 'Verdana',
    },
    button: {
        margin: 20,
        borderRadius: 50,
        backgroundColor: '#5DB075',
    },
    logo: {
        width: 300, // Adjust the width as needed
        height: 200,
        marginTop:-50,
    }
  });

export default OpeningScreen;