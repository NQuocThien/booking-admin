// import MapComponent from "src/components/toasts/GoogleMap";
import { ILocation } from "src/assets/contains/item-interface";
import { useState } from "react";
import MapComponent from "src/components/toasts/MapCpn";
function DashboardPage() {
  const [maker, setMarker] = useState<ILocation>();
  const handleSetMarker = (croods: ILocation) => {
    setMarker(croods);
  };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <h3>Chọn vị trí trên bản đồ</h3>
      {/* <MapComponent visable={true} marker={maker} setMarker={handleSetMarker} /> */}
    </div>
  );
}

export default DashboardPage;
