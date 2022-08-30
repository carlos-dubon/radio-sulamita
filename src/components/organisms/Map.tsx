import { FC, MutableRefObject, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import ReactDOMServer from "react-dom/server";
import ReactGA from "react-ga4";
import { analyticsConfig } from "@app/analytics";

const InfoWindow: JSX.Element = (
  <div className="flex flex-col w-full">
    <div className="font-medium text-[14px]">Radio Sulamita 90.1 FM</div>
    <div>Calle de la Sulamita</div>
    <div>Barrio Fallabon</div>
    <div>Melchor de Mencos</div>
    <div>Guatemala</div>
  </div>
);

const Map: FC = () => {
  const mapContainer: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadMap = async (): Promise<void> => {
      const styles: google.maps.MapTypeStyle[] = [
        {
          featureType: "administrative",
          elementType: "all",
          stylers: [
            {
              visibility: "on",
            },
            {
              lightness: 33,
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [
            {
              color: "#f2e5d4",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#c5dac6",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels",
          stylers: [
            {
              visibility: "on",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#c5c6c6",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#e4d7c6",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#fbfaf7",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#acbcc9",
            },
          ],
        },
      ];

      const radioSulamita: google.maps.LatLngLiteral = {
        lat: 17.058607,
        lng: -89.155815,
      };

      if (!process.env.GOOGLE_MAPS_API_KEY) {
        return;
      }

      const loader: Loader = new Loader({
        apiKey: process.env.GOOGLE_MAPS_API_KEY,
        version: "weekly",
        libraries: ["places"],
      });

      const mapOptions: google.maps.MapOptions = {
        center: radioSulamita,
        zoom: 16,
        styles: styles,
      };

      const google = await loader.load();

      const map: google.maps.Map = new google.maps.Map(
        mapContainer.current!,
        mapOptions
      );

      const infowindow: google.maps.InfoWindow = new google.maps.InfoWindow({
        content: ReactDOMServer.renderToString(InfoWindow),
      });

      const openInfoWindow = (): void => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      };

      map.addListener("click", () => {
        infowindow.close();
      });

      const marker: google.maps.Marker = new google.maps.Marker({
        position: radioSulamita,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: "/marker.png",
      });

      marker.addListener("click", async () => {
        openInfoWindow();

        ReactGA.event(analyticsConfig.customEvents.mapInfoWindowOpened);
      });
    };

    loadMap();
  }, []);

  return (
    <div
      ref={mapContainer}
      className="h-[680px] w-full relative z-10 -top-28"
    ></div>
  );
};

export { Map };
