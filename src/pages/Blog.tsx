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

const Blog: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>DevPath Blog</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">DevPath Blog</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h2>DevPath / Blog</h2>
        <IonCard>
          <IonItem>
            <IonIcon icon={rocketOutline} slot="start" />
            <IonCardTitle>Tech Talk to Level Up ../ Your Skills.</IonCardTitle>
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

export default Blog;
