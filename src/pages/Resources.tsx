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
            <p>Card Content</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Resources;
