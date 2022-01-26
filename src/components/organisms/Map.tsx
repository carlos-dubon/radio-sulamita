import { FC, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface Coordinates {
  lat: number;
  lng: number;
}

interface MapOptions {
  center: Coordinates;
  zoom: number;
  styles: object[];
}

const Map: FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadMap = async (): Promise<void> => {
      const styles: object[] = [
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

      const radioSulamita: Coordinates = { lat: 17.058607, lng: -89.155815 };

      const loader: Loader = new Loader({
        apiKey: "AIzaSyD371NP3PWp4akEJB0HfE6hGDXN7AjItvI",
        version: "weekly",
        libraries: ["places"],
      });

      const mapOptions: MapOptions = {
        center: radioSulamita,
        zoom: 16,
        styles: styles,
      };

      const google = await loader.load();

      const map = new google.maps.Map(mapContainer.current, mapOptions);

      new google.maps.Marker({
        position: radioSulamita,
        map: map,
        label: "<h1>RASDASDSDA</h1>"
      });
    };

    loadMap();
  }, []);

  return <div ref={mapContainer} className="h-[680px] w-full"></div>;
};

export { Map };
