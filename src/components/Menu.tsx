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
  logoYoutube,
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
        {/* <IonImg src={logo} style={{ maxWidth: 80, margin: 'auto' }}></IonImg> */}
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
                    color="dark"
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
              <IonIcon
                color="dark"
                slot="start"
                ios={logoSlack}
                md={logoSlack}
              />
              DevPath Slack
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton
              color={'tertiary'}
              target="_blank"
              href="https://discord.gg/snMw25v"
            >
              <IonIcon
                color="dark"
                slot="start"
                ios={logoDiscord}
                md={logoDiscord}
              />
              DevPath Discord
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton
              color={'danger'}
              target="_blank"
              href="https://www.youtube.com/channel/UCpprazufqp6UCSqwCv2ua6g"
            >
              <IonIcon
                color="dark"
                slot="start"
                ios={logoYoutube}
                md={logoYoutube}
              />
              DevPath Youtube
            </IonButton>
          </IonItem>
        </IonList>
        {/* <BuyMeCrypto /> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
