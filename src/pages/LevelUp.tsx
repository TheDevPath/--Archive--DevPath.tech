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

const LevelUp: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>DevPath LevelUp</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">DevPath LevelUp</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h2>../ LevelUp</h2>
        <IonCard>
          <IonItem>
            <IonIcon icon={rocketOutline} slot="start" />
            <IonCardTitle>
              Short Tutorials to Level Up ../ your tech skills.
            </IonCardTitle>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>

          <IonCardContent>
            <p>Card Content</p>
          </IonCardContent>
        </IonCard>

        {/* advanced topics */}
        <IonCard>
          <IonItem>
            <IonIcon icon={rocketOutline} slot="start" />
            <IonCardTitle>Advanced Topics to Level Up ../</IonCardTitle>
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

export default LevelUp;
