import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { logInOutline, logOutOutline, walletOutline } from 'ionicons/icons';
import { useEffect } from 'react';
import { useMoralis, useWeb3Transfer } from 'react-moralis';

const BuyMeCrypto: React.FC = () => {
  const {
    authenticate,
    isAuthenticating,
    isAuthenticated,
    user,
    account,
    logout,
    Moralis,
  } = useMoralis();

  const moralisLogin = async () => {
    await authenticate({ signingMessage: 'Connect to BuyMeCrypto' })
      .then((user) => {
        console.log('BuyMeCrypto > user: ', user);
        console.log(user!.get('ethAddress'));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const moralisLogout = async () => {
    console.log('BuyMeCrypto > moralisLogout clicked ');
    await logout().then(() => {
      console.log('logged out: ', user);
    });
  };

  const { fetch, error, isFetching } = useWeb3Transfer({
    type: 'native',
    amount: Moralis.Units.ETH(0.005),
    receiver: '0xE9B2454a59f4989677196BBf4633eC688EC6b658',
  });

  return (
    <>
      <h4>Connected Wallet Address:</h4>
      <p> {user && account}</p>
      <IonFab vertical="bottom" horizontal="start" slot="fixed">
        <p>Sign In</p>
        <IonFabButton>
          <IonIcon icon={logInOutline} onClick={moralisLogin} />
        </IonFabButton>
      </IonFab>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <p>Send</p>
        <IonFabButton disabled={isFetching}>
          <IonIcon icon={walletOutline} onClick={() => fetch()} />
        </IonFabButton>
      </IonFab>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <p>Out</p>
        <IonFabButton>
          <IonIcon icon={logOutOutline} onClick={moralisLogout} />
        </IonFabButton>
      </IonFab>
    </>
  );
};

export default BuyMeCrypto;
