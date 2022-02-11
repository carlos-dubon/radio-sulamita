/* eslint-disable @next/next/no-img-element */
import { FC, MutableRefObject, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import ReactDOMServer from "react-dom/server";
import { Spinner } from "@lib/atoms";
import wait from "wait";

const LoadingInfoWindow: JSX.Element = (
  <div className="flex flex-col w-full">
    <div className="w-full justify-center items-center scale-50">
      <Spinner />
    </div>
  </div>
);

const LoadedInfoWindow: JSX.Element = (
  <div className="flex flex-col w-full">
    <div>
      <span className="font-medium">Dirección:</span> Calle de la Sulamita,
      Barrio Fallabon, Melchor de Mencos, Petén.
    </div>
    <div className="w-full flex justify-center mt-3">
      <img
        src="/radio-sulamita.jpg"
        alt="Radio Sulamita 90.1FM"
        className="w-[225px] h-[171px]"
      />
    </div>
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

      const infowindow: google.maps.InfoWindow = new google.maps.InfoWindow({
        content: ReactDOMServer.renderToString(LoadingInfoWindow),
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

        const content: string = ReactDOMServer.renderToString(LoadedInfoWindow);

        await wait(200);
        infowindow.close();
        infowindow.setContent(content);
        openInfoWindow();
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
