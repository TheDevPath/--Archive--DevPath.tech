import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { rocketOutline } from 'ionicons/icons';

const Resources: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>DevPath Resources</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">DevPath Resources</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h2>Resources</h2>
        <IonCard>
          <IonItem>
            <IonIcon icon={rocketOutline} slot="start" />
            <IonCardTitle>
              Helpful Resouces to Level Up ../ your skills.
            </IonCardTitle>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>

          <IonCardContent>
            <p>
              If there is just one thing you have to get good at to level up
              your coding skills the most, I would say learning to read
              documentation and then effectively implementing something using
              the tech in the docs you just read. It doesn't sound all that
              glamorous but practicing reading documentation and implementing
              even just the example code will make you a better programmer every
              time you do it. And it's 100% Free!
            </p>
            <p>
              Stay Tuned on the DevPath YouTube channel for Walks through the
              Docs.
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Resources;
