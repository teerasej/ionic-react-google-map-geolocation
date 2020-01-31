import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
import { locate } from "ionicons/icons";

import { Plugins } from "@capacitor/core";
const { Geolocation } = Plugins;

const Home: React.FC = () => {

  const [showLoading, setShowLoading] = useState(false);
  const [positionReady, setPositionReady] = useState(false);
  const [currentPosition, setCurrentPosition] = useState({lat:0, lng:0, acc:0});

  const startGetGPS = async () => {
    console.log('Getting geolocation...');
    setShowLoading(true);
    let coordinates = await Geolocation.getCurrentPosition();
    setShowLoading(false);
    setPositionReady(true);
    setCurrentPosition({
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude,
      acc: coordinates.coords.accuracy
    });
    console.log('Current: ', coordinates);
  }

  let positionTextJSX;

  if(positionReady == true) {
    positionTextJSX = <p>{currentPosition.lat}, {currentPosition.lng}, {currentPosition.acc}</p>
  } else {
    positionTextJSX = <p>กดปุ่มบนขวาเพื่อระบุพิกัดของเครื่อง</p>
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
        {positionTextJSX}
        <IonLoading isOpen={showLoading} message="กำลังขอพิกัด"/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
