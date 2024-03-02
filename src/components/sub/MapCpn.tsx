// MapContainer.tsx
import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useGoogleMap } from "src/context/GoogleMapContext";
import { ILocation } from "src/assets/contains/item-interface";
import { geocodeByAddress } from "react-google-places-autocomplete";

interface IMapProp {
  marker: ILocation;
  setMarker: (pos: ILocation) => void;
  address: string | undefined;
}
const MapComponent: React.FC<IMapProp> = ({ marker, setMarker, address }) => {
  const [center, setCenter] = useState<ILocation>({
    lat: marker.lat,
    lng: marker.lng,
  });
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const { map, setMap } = useGoogleMap();

  const onMountMap = (map: google.maps.Map) => {
    setMap(map);
  };

  const onUnmountMap = () => {
    setMap(undefined);
    setScriptLoaded(false);
  };

  const handleSetMarkerCenter = useCallback(
    (pos: ILocation) => {
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
    },
    [setMarker]
  );

  const handleFindLocation = useCallback(() => {
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
  }, [address, handleSetMarkerCenter]);
  useEffect(() => {
    if (window.google && window.google.maps) {
      setScriptLoaded(true);
      handleFindLocation();
    }
  }, [address, handleFindLocation]);
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

export default MapComponent;