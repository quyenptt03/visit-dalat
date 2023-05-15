import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import img from "../../../../assets/places/places1.png";
import { Container, Title, PopUpContent, Image } from "./styles";
const Map = () => {
  const MarkIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/450/450016.png",
    iconSize: [40, 40],
  });
  return (
    <Container>
      <Title>Bản đồ</Title>
      <MapContainer
        center={[12.026171, 108.363654]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[12.026171, 108.363654]} icon={MarkIcon}>
          <Popup>
            <PopUpContent>
              <b>Làng Cù Lần</b>
              <br />
              ĐT722 Xã Lát, Huyện Lạc Dương, Tỉnh Lâm Đồng
              <Image src={img} alt="img" />
            </PopUpContent>
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};
export default Map;
