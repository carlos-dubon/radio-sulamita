import { FC, MutableRefObject, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

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

      const loader: Loader = new Loader({
        apiKey: "AIzaSyD371NP3PWp4akEJB0HfE6hGDXN7AjItvI",
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

      new google.maps.Marker({
        position: radioSulamita,
        map: map,
        label: "Radio Sulamita",
      });
    };

    loadMap();
  }, []);

  return <div ref={mapContainer} className="h-[680px] w-full"></div>;
};

export { Map };
