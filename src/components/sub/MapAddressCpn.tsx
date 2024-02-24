// MapContainer.tsx
import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useGoogleMap } from "src/context/GoogleMapContext";
interface IMapProp {
  lat: number;
  lng: number;
}
const MapAddressCpn: React.FC<IMapProp> = ({ lat, lng }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const { map, setMap } = useGoogleMap();
  const [marker, setMarker] = useState({ lat: lat, lng: lng });
  useEffect(() => {
    if (window.google && window.google.maps) {
      setScriptLoaded(true);
    }
    setMarker({ lat: lat, lng: lng });
  }, [lat, lng]);

  const onMountMap = (map: google.maps.Map) => {
    setMap(map);
  };

  const onUnmountMap = () => {
    setMap(undefined);
    setScriptLoaded(false);
  };

  return (
    <>
      {scriptLoaded && (
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          zoom={9}
          center={marker}
          onLoad={onMountMap}
          onUnmount={onUnmountMap}>
          {<Marker position={marker} />}
        </GoogleMap>
      )}
    </>
  );
};

export default MapAddressCpn;
