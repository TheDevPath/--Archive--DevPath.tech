import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { flameOutline, rocketOutline, serverOutline } from 'ionicons/icons';
import logo from '../assets/logo.png';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonImg
            slot="start"
            src={logo}
            style={{ maxWidth: 80, margin: 5 }}
          ></IonImg>
          <IonTitle>Welcome To DevPath</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Welcome To DevPath</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Start page Content */}
        <IonCard>
          <IonItem>
            <IonIcon icon={rocketOutline} slot="start" />
            <IonLabel>Quick Tips to Help Begginers Start a New Path</IonLabel>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>

          <IonCardContent>
            <p>
              We all had the same questions no matter when or what you learn to
              code there is so many options what do I start with?
            </p>
            <p>
              First question you have to ask yourself is what do you enjoy
              doing?
            </p>
            <p>
              I'll elaborate on this point to help give it more relavance. Your
              on DevPath so clearly you have some interest in tech and possibly
              building apps or games or something in the digital world. The key
              perspective of the question here is do you want to draw or animate
              or do you want to program the physics engines in video games.
              Maybe you want to get into crypto, web3, Defi, create your own
              DAO. There are a lot of aspects of development that can be focused
              on as specializations. I suggest you find a specialization that
              interests you and get as good as possible at that one thing. Once
              you are good enough at that to decide you are bored, and this
              means such an expert there is no challenge left. Then you look at
              learning something different. So this is why you need to ask
              yourself right from the start what aspect you are most excited by.
            </p>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={flameOutline} slot="start" />
            <IonLabel>Bleeding Edge Tech to Learn Now!</IonLabel>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>

          <IonCardContent>
            <p>
              Trying to figure out what the next hot new tech to blow up is
              going to be but don't even know whats used now! check this section
              to find out from industry vetrans what they think will be next top
              tech that young devs should learn.
            </p>
            <ul>
              <li>Web3 Distributed Web</li>
              <li>Blockchain</li>
              <li>PWA Progressive Web Apps</li>
              <li>3D</li>
            </ul>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={serverOutline} slot="start" />
            <IonLabel>Top Tech Stacks for Web3!</IonLabel>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>

          <IonCardContent>
            <p>
              Trying to figure out what a web3 tech stack looks like? I know I
              went through the same thing there's a lot of new things coming out
              fast and it's challenging to find some of it if you don't alrady
              know what it's called. That's why in this article I'm going to
              share all the fruits of my latest journey down the rabbit hole of
              What's the best Web3 Stack Ready for Production and Scaling.
            </p>
            <ul>
              <li>Moralis</li>
              <li>Alchemy</li>
              <li>Ethers.js</li>
              <li>Hardhat</li>
              <li>IPFS</li>
              <li>Metamask</li>
              <li>web3.js</li>
              <li>thirdweb</li>
              <li>OpenZeppelin</li>
            </ul>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
