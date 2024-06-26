import {transact} from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';
import React, {ComponentProps} from 'react';
import {Button} from 'react-native';

import {useAuthorization} from '../../providers/AuthorizationProvider';

type Props = Readonly<ComponentProps<typeof Button>>;

const DisconnectButton = (props: Props) => {
  const {deauthorizeSession} = useAuthorization();
  return (
    <Button
      {...props}
      color="#FF6666"
      onPress={() => {
        transact(async wallet => {
          await deauthorizeSession(wallet);
        });
      }}
    />
  );
};

export default DisconnectButton;
