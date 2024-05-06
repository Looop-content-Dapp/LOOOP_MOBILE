import {TouchableOpacity, Button, Image, Text} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import {authenticate} from 'rn-okto-sdk';
import React, {ComponentProps} from 'react';

const webClientId =
  '923922876614-gtgqvmdjtsica4on7g17jtphhjr2o3ef.apps.googleusercontent.com';
GoogleSignin.configure({
  // Update scopes as needed in your app
  scopes: ['email', 'profile'],
  webClientId,
});

// interface Wallet {
//   network_name: string;
//   address: string;
// }

type Props = Readonly<ComponentProps<typeof Button>>;

const ConnectWithOkto = (props: Props) => {
  async function handleGoogleSignIn() {
    try {
      // await GoogleSignin.hasPlayServices();
      // const response = await GoogleSignin.signIn();
      // const {idToken} = response;
      // console.log(idToken);
      // if (idToken) {
      //   authenticate(idToken, (result, error) => {
      //     if (result) {
      //       const wallet: Wallet[] = JSON.parse(result);
      //       console.log(result);
      //     }
      //   });
      // }
    } catch (error) {
      console.log('Something went wrong. Please try again');
    }
  }
  return (
    <TouchableOpacity
      {...props}
      // disabled={authorizationInProgress}
      // onPress={handleConnectPress}
      className="bg-[#ffffff] h-[60px] w-[90%] flex-row space-x-9 items-center justify-center rounded-[48px]">
      <Image
        source={require('../../assets/images/okto.png')}
        className="w-[24px] h-[24px]"
      />
      <Text className="text-[16px] text-[#000] font-medium">
        Connect Okto Wallet
      </Text>
    </TouchableOpacity>
  );
};

export default ConnectWithOkto;
