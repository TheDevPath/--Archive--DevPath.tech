import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
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
  stopwatchSharp,
  stopwatchOutline,
} from 'ionicons/icons';
import './Menu.css';
import logo from '../assets/logo.png';
import BuyMeCrypto from '../components/BuyMeCrypto';

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
    title: 'Day One',
    url: '/DayOne',
    iosIcon: stopwatchOutline,
    mdIcon: stopwatchSharp,
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

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonImg src={logo} style={{ maxWidth: 80, margin: 'auto' }}></IonImg>
        <IonList id="inbox-list">
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
        </IonList>
        {/* <BuyMeCrypto /> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
