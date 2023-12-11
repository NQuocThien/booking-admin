import React, { createContext, useContext, ReactNode, useState } from "react";

interface GoogleMapContextProps {
  children: ReactNode;
}

interface GoogleMapContextValue {
  map: google.maps.Map | undefined;
  setMap: React.Dispatch<React.SetStateAction<google.maps.Map | undefined>>;
}

const GoogleMapContext = createContext<GoogleMapContextValue | undefined>(
  undefined
);

export const GoogleMapProvider: React.FC<GoogleMapContextProps> = ({
  children,
}) => {
  const [map, setMap] = useState<google.maps.Map | undefined>(undefined);
  // console.log("sate map: ", map);
  return (
    <GoogleMapContext.Provider value={{ map, setMap }}>
      {children}
    </GoogleMapContext.Provider>
  );
};

export const useGoogleMap = () => {
  const context = useContext(GoogleMapContext);

  if (!context) {
    throw new Error("useGoogleMap must be used within a GoogleMapProvider");
  }

  return context;
};
