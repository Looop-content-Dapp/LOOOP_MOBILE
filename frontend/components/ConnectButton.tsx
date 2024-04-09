import {transact} from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';
import React, {ComponentProps, useState, useCallback} from 'react';
import {Button, Image} from 'react-native';

import {useAuthorization} from '../providers/AuthorizationProvider';
import {alertAndLog} from '../utils/alertAndLog';
import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native';

type Props = Readonly<ComponentProps<typeof Button>>;

const ConnectButton = (props: Props) => {
  const {authorizeSession} = useAuthorization();
  const [authorizationInProgress, setAuthorizationInProgress] = useState(false);
  const handleConnectPress = useCallback(async () => {
    try {
      if (authorizationInProgress) {
        return;
      }
      setAuthorizationInProgress(true);
      await transact(async wallet => {
        await authorizeSession(wallet);
      });
    } catch (err: any) {
      alertAndLog(
        'Error during connect',
        err instanceof Error ? err.message : err,
      );
    } finally {
      setAuthorizationInProgress(false);
    }
  }, [authorizationInProgress, authorizeSession]);
  return (
    <TouchableOpacity
      {...props}
      disabled={authorizationInProgress}
      onPress={handleConnectPress}
      className="bg-[#ffffff] h-[60px] w-[90%] flex-row space-x-9 items-center justify-center rounded-[48px]">
      <Image
        source={require('../assets/images/phanthom.png')}
        className="w-[24.02px] h-[20px]"
      />
      <Text className="text-[16px] text-[#000] font-medium">
        Connect Phanthom Wallet
      </Text>
    </TouchableOpacity>
  );
};

export default ConnectButton;
