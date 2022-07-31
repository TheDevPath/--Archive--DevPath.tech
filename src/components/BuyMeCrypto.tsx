import { IonFab, IonFabButton, IonIcon, IonNote, IonTitle } from '@ionic/react';
import { logInOutline, logOutOutline, walletOutline } from 'ionicons/icons';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';

const BuyMeCrypto: React.FC = () => {
  const {
    authenticate,
    isAuthenticating,
    isAuthenticated,
    user,
    account,
    logout,
  } = useMoralis();

  useEffect(() => {
    // console.log('authenticate: ', authenticate);
    // console.log('isAuthenticated: ', isAuthenticated);
    // console.log('isAuthenticating: ', isAuthenticating);
    // console.log('user: ', user);
    // console.log('account: ', account);
    // // console.log('logout: ', logout);

    return () => {};
  }, [isAuthenticated, isAuthenticating, user, account]);

  const moralisLogin = async () => {
    console.log('FAB Wallet Button Clicked');
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

  return (
    <>
      <h4>Connected Wallet Address:</h4>
      <p> {user && user!.get('ethAddress')}</p>
      <IonFab vertical="bottom" horizontal="start" slot="fixed">
        <p>Sign In</p>
        <IonFabButton>
          <IonIcon icon={logInOutline} onClick={moralisLogin} />
        </IonFabButton>
      </IonFab>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <p>Sign Out</p>
        <IonFabButton>
          <IonIcon icon={logOutOutline} onClick={moralisLogout} />
        </IonFabButton>
      </IonFab>
    </>
  );
};

export default BuyMeCrypto;
