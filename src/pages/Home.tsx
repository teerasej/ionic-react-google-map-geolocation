import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
import { locate } from "ionicons/icons";
import { Plugins } from '@capacitor/core';
import GoogleMapReact from 'google-map-react';
const { Geolocation } = Plugins;



const Home: React.FC = () => {

  const currentZoom = 15;
  const [positionReady, setPositionReady] = useState(false);
  const [currentPosition, setCurrentPosition] = useState({ lat: 0, lng: 0 });
  const [showLoading, setshowLoading] = useState(false);

  const startGetGPS = async () => {
    console.log('getting gps');
    setshowLoading(true);
    const coordinates = await Geolocation.getCurrentPosition();
    setshowLoading(false);
    console.log('Current', coordinates);
    setPositionReady(true);
    setCurrentPosition({lat: coordinates.coords.latitude, lng: coordinates.coords.longitude})

  }

  let googleMap;
  
  if(positionReady){
    console.log('Data is ready');
    googleMap = (
      <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBDqlW1EIlePcA48oLVV_kYQJXm9dQ75uw' }}
            defaultCenter={currentPosition}
            defaultZoom={currentZoom}
          >
          </GoogleMapReact>
    )
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
        <div style={{ height: '100vh', width: '100%' }}>
          {googleMap}
        </div>
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
