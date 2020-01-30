import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
import { locate } from "ionicons/icons";


const Home: React.FC = () => {

  const startGetGPS = async () => {
  
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
      <IonContent>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
