import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
} from '@ionic/react';
import { logInOutline, logOutOutline, walletOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useMoralis, useWeb3Transfer } from 'react-moralis';

const BuyMeCrypto: React.FC = () => {
  const [name, setName] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [number, setNumber] = useState<number>();
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
      <IonContent>
        <IonList>
          <IonItemDivider color="primary">From:</IonItemDivider>
          <IonItem>
            <IonInput
              value={name}
              placeholder="Anonymous"
              onIonChange={(e) => setName(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>
          <IonItemDivider color="primary">Message:</IonItemDivider>
          <IonItem>
            <IonInput
              value={message}
              placeholder="Anonymous"
              onIonChange={(e) => setMessage(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>

          <IonItemDivider color="primary">Amount</IonItemDivider>
          <IonItem>
            <IonInput
              type="number"
              value={number}
              placeholder="Enter Number"
              onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
            ></IonInput>
          </IonItem>
        </IonList>
      </IonContent>
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
