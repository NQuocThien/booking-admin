// MapContainer.tsx
import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useGoogleMap } from "src/context/GoogleMapContext";
import { ILocation } from "src/assets/contains/item-interface";
interface IMapProp {
  lat?: number;
  lng?: number;
  onChange: (pos: ILocation) => void;
}
const MapInputCpn: React.FC<IMapProp> = ({ lat, lng, onChange }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const { map, setMap } = useGoogleMap();
  const [marker, setMarker] = useState({ lat: lat, lng: lng });
  const [center, setCenter] = useState({
    lat: lat || 10.275796634253519,
    lng: lng || 105.298391156358,
  });
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
          center={center}
          onLoad={onMountMap}
          onUnmount={onUnmountMap}
          onClick={(e) => {
            if (e.latLng) {
              setMarker({ lat: e.latLng.lat(), lng: e.latLng.lng() });
              onChange({ lat: e.latLng.lat(), lng: e.latLng.lng() });
            }
          }}>
          {marker.lat && marker.lng && (
            <Marker position={{ lat: marker.lat, lng: marker.lng }} />
          )}
        </GoogleMap>
      )}
    </>
  );
};

export default MapInputCpn;
