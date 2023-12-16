import React from "react";
import "../globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Governements from "../assets/TN.json";
import { useParams } from "react-router-dom";
import Map, { GeolocateControl, Marker, NavigationControl } from "react-map-gl";
const GovDetail = () => {
  const { govId } = useParams();
  const gov = Governements.find((gov) => gov.id === govId);
  const { city, lat, lng, population, iso2, desc } = gov;

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <div>
              <Map
                mapboxAccessToken="pk.eyJ1IjoiemllZGJtIiwiYSI6ImNsY2VwenVtNzFsNDYzcW93N3lsMzNwem0ifQ.Ebg-E_M253-EWo4N6PEucg"
                style={{
                  width: "500px",
                  height: "500px",
                }}
                initialViewState={{
                  longitude: lng,
                  latitude: lat,
                  zoom: 12,
                }}
                mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
              >
                <Marker longitude={lng} latitude={lat} />
                <NavigationControl position="bottom-right" />
                <GeolocateControl />
              </Map>
            </div>
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>
            {city}, {iso2}
          </h1>
          <p>Latitude: {lat}</p>
          <p>Longitude: {lng}</p>
          <p>Population: {population}</p>
          <h4>Description :</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default GovDetail;
