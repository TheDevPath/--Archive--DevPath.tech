import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonButton,
  IonImg,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
  informationCircleOutline,
  informationCircleSharp,
  homeOutline,
  homeSharp,
  albumsOutline,
  albumsSharp,
  logoSlack,
  logoDiscord,
} from 'ionicons/icons';
import './Menu.css';
import { useMoralis } from 'react-moralis';
import { useEffect } from 'react';
import logo from '../assets/logo.png';
import BuyMeCoffee from '../components/BuyMeCoffee';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/Home',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: 'Blog',
    url: '/Blog',
    iosIcon: albumsOutline,
    mdIcon: albumsSharp,
  },
  {
    title: 'Resources',
    url: '/Resources',
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp,
  },
  {
    title: '../',
    url: '/LevelUp',
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  useEffect(() => {
    // console.log('authenticate: ', authenticate);
    console.log('isAuthenticated: ', isAuthenticated);
    console.log('isAuthenticating: ', isAuthenticating);
    console.log('user: ', user);
    console.log('account: ', account);
    // console.log('logout: ', logout);

    return () => {};
  }, [isAuthenticated, isAuthenticating, user, account]);

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: 'Log in using Moralis' })
        .then(function (user) {
          console.log('logged in user:', user);
          // console.log(user!.get('ethAddress'));
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (isAuthenticated) {
      console.log('already logged in');
      console.log(user!.get('ethAddress'));
    }
  };

  const logOut = async () => {
    await logout();
    console.log('logged out');
  };

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonImg
          src={logo}
          style={{ maxWidth: 200, margin: 'auto', paddingTop: 20 }}
        ></IonImg>
        <IonList id="inbox-list">
          <IonListHeader>Wallet Address:</IonListHeader>
          <IonNote> {user && user!.get('ethAddress')}</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? 'selected' : ''
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonList>
          <IonItem>
            <IonButton
              target="_blank"
              href="https://join.slack.com/t/devpath/shared_invite/zt-4dbke6dz-HtwrvMOoKqLNhVF1qrnN~w"
            >
              <IonIcon slot="start" ios={logoSlack} md={logoSlack} />
              DevPath Slack
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton target="_blank" href="https://discord.gg/snMw25v">
              <IonIcon slot="start" ios={logoDiscord} md={logoDiscord} />
              DevPath Discord
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton onClick={login}>Moralis Metamask Login</IonButton>
          </IonItem>
          <IonItem>
            <IonButton onClick={logOut} disabled={isAuthenticating}>
              Logout
            </IonButton>
          </IonItem>
        </IonList>
        <BuyMeCoffee />
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
