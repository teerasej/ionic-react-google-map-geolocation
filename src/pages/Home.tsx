import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
import { locate } from "ionicons/icons";
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

const Home: React.FC = () => {

  const [showLoading, setshowLoading] = useState(false);

  const startGetGPS = async () => {
    console.log('getting gps');
    setshowLoading(true);
    const coordinates = await Geolocation.getCurrentPosition();
    setshowLoading(false);
    console.log('Current', coordinates);
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Location</IonTitle>
          <IonButtons slot="end">
            <IonButton
              onClick={startGetGPS}
            >
              <IonIcon icon={locate} slot="icon-only"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonLoading
        isOpen={showLoading}
        message={'Getting GPS...'}
        duration={5000}
      />
      </IonContent>
    </IonPage>
  );
};

export default Home;
