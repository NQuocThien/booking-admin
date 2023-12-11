// MapContainer.tsx
import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useGoogleMap } from "src/context/GoogleMapContext";
import { ILocation } from "src/assets/contains/item-interface";
import { geocodeByAddress } from "react-google-places-autocomplete";

interface IMapProp {
  marker?: ILocation | undefined;
  setMarker: (pos: ILocation) => void;
  address: string | undefined;
}
const MapContainer: React.FC<IMapProp> = ({ marker, setMarker, address }) => {
  const [center, setCenter] = useState<ILocation>({
    lat: 10.376941,
    lng: 105.441729,
  });
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const { map, setMap } = useGoogleMap();
  useEffect(() => {
    if (window.google && window.google.maps) {
      setScriptLoaded(true);
      handleFindLocation();
    }
  }, [address]);

  const onMountMap = (map: google.maps.Map) => {
    setMap(map);
  };

  const onUnmountMap = () => {
    setMap(undefined);
    setScriptLoaded(false);
  };

  const handleSetMarkerCenter = (pos: ILocation) => {
    if (pos.lat && pos.lng) {
      setMarker({
        lat: pos.lat,
        lng: pos.lng,
      });
      setCenter({
        lat: pos.lat,
        lng: pos.lng,
      });
    }
  };

  const handleFindLocation = () => {
    address &&
      geocodeByAddress(address)
        .then((res) => {
          if (
            res[0].geometry.location.lat() &&
            res[0].geometry.location.lng()
          ) {
            handleSetMarkerCenter({
              lat: res[0].geometry.location.lat(),
              lng: res[0].geometry.location.lng(),
            });
          }
        })
        .catch((error) => console.error(error));
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
            if (e.latLng?.lat() && e.latLng.lng())
              setMarker({ lat: e.latLng.lat(), lng: e.latLng.lng() });
          }}>
          {map && marker && <Marker position={marker} />}
        </GoogleMap>
      )}
    </>
  );
};

export default MapContainer;
