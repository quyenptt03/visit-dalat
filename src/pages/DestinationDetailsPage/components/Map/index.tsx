import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { URL } from "../../../../api/axiosClient";
import { useAppSelector } from "../../../../redux/hook";
import { Container, Image, PopUpContent, Title } from "./styles";
import Loading from "../../../../components/Loading";
import { useTranslation } from "react-i18next";

const Map = () => {
  const { t } = useTranslation("destination");
  const { isLoading, destination } = useAppSelector(
    (state) => state.destination
  );
  const lat = destination?.latitude || 0;
  const long = destination?.longitude || 0;

  const MarkIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/450/450016.png",
    iconSize: [40, 40],
  });
  return (
    <Container>
      <Title>{t("map")}</Title>
      {isLoading ? (
        <Loading loading={isLoading} color="#1d764a" size={50} />
      ) : (
        <MapContainer center={[lat, long]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, long]} icon={MarkIcon}>
            <Popup>
              <PopUpContent>
                <b>{destination?.name}</b>
                <br />
                {destination?.address}
                <Image
                  src={URL + destination?.images[0]}
                  alt={destination?.name}
                />
              </PopUpContent>
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </Container>
  );
};
export default Map;
