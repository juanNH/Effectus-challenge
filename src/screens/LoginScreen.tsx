import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, View, Dimensions} from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import auth from '@react-native-firebase/auth';

//hooks
import useLogin from './../hooks/useLogin';

const {width: screenWidth} = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation();

  const {
    login,
    changeEmail,
    changePassword,
    sendData,
    userInfo,
    onAuthStateChanged,
    eye,
    changeEyeVisibility,
  } = useLogin();
  useEffect(() => {
    if (userInfo.data) {
      return navigation.navigate('MoviesScreen');
    }
    if (userInfo.email !== '' && userInfo.password !== '') {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      console.log(userInfo);
      return subscriber;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemsContainer}>
        <Image
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAABQCAMAAACuwVATAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFPj4+gICA7+/vLCws0NDQBwcHYGBgwMDAoKCg4ODgGhoacXFxkJCQsbGxT09PAAAA////8HUiggAAABF0Uk5T/////////////////////wAlrZliAAADwElEQVR42uya6ZqrIAyGw2IAV+7/ag8oIC64dGx7ygO/ZihLXhM+Ago67wKFr/AVvsJX+Apf4St8ha/w/Rd8VGXNR1nFM+ajbBhyAIQ0XhaAh3wZAB7FZw6AB/qSBeAOH6UZAcKO41hGgLAXlxkBwu6yywcQ9lVF5SIycCyaPw8IJ3vCrwNCGi+LNQhJPMxCZCCJl4eKQhovC0A4wJtX4u8CwgW8zbb4c3wneJpXYw2eDifBFTnP4EpzoWaxWwmszZz9PJJuQjvwtnE/lVx0Fr3tKhzfY3iaDK6QUOVr4ELNEA2FoRkNjyG0G4QH8VORuLN0rZqR7zk8Owt7wX9murX/rANYQ2CWucl/xqex//b5jMFA7Agd3MWj9IRPvLBKYl+GgapxJGWsa5c/LIJ4j09M1namJ9zFY4x+gq+KxFvo+3xj/Eil4S5eFC5v5Ovs2knNcMqnDIFbIHAb7xAwrL+oyhVxUOPXnzx/Tlf4xsVbN5YC8DbeCd9aCNOKelCzorjLR5txuLoz+okP4u357xrf1n/8D3wmRNvRWGkMwefw9uLK9Be2qMOa1fqTS9G8z2cRrQbbcdVjePt85ELN+p7EBFfY9egVPozru9bXwSpf+BveY3zR8QyHqkvzafcgqNlQInmZMGK+R/Ds7Dhqo7zJV0+SOjvQ5ClV0wlSr84taz5jdy1FW8f5lQ3MRnT2J3gUb9ZPuMm3kV3OfN3yWLbmU5VrFtlGQ98uxfca3oN8mlrXGZOQHumLAZxMXzSjpAr7wy4gfQ3v4cKNyF5oRk2zjWlOn1P6Iv8DvIfvzzaAGeAt7j9XgDngLe+vcUevfhtv9f4BU/fzv4q3fn+UuDh7P57gsWyG6VRIU9WcsSrqvj7yfSiP2vNYfelOXrS9+Hw7HmWI3hJeI6n9BknQHxMFQXB/tia7JKY57302Xuu5Pfr7KDD5kNq8v8XkNfY7vWcO661L85mdGl1+F52BDaF3kjHaXpOEJJD1vpltL0kUmtv375h4DfHOouqQQnfN5NADPl1T1bdSe8N4z/E63xrwI9KikDmryHS0cYcBwuZD78zXdK1UvX8GGjvtD1M2PpmaryF3v3/Br7xtcBfVAn0Ipv0nEJSuvZ90RYh/CKQVDdHH/vsC4KgY7sDOpA3P7ojPrD7jxDokIkJ0czxTH3Bpvo8DUjBx6MyiyMDjpfj61p5w/D82Hns+rz+c45Mnvs/CIe/vBz+1MXyN70Mbw/f4PrQxfI8vj1L4Cl/hK3yFr/AVvsJX+Apf4Xuu/BNgADS0JSBforCwAAAAAElFTkSuQmCC',
          }}
          style={styles.image}
          resizeMode="contain"
          resizeMethod="resize"
        />
        <AppTextInput
          value={login.email}
          placeholder="Email"
          onChange={changeEmail}
        />
        <AppTextInput
          value={login.password}
          placeholder="Password"
          onChange={changePassword}
          typePassword={true}
          eye={eye}
          changeEyeVisibility={changeEyeVisibility}
        />
        <AppButton text="Login" sendData={sendData} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  itemsContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: '#000000',
  },
  image: {
    width: screenWidth * 0.7,
    height: 100,
  },
});

export default LoginScreen;
