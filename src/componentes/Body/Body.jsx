import React, { useState, useEffect } from "react";
import "./Body.scss";
import { useGoogleMaps } from "react-hook-google-maps";
const Body = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/ditto";

  const [contador, setContador] = useState(0);
  const [pokemon, setPokemon] = useState(null);
  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "AIzaSyBwwziWSTx390Rttg21Yn-TGa3iCSh1DaE",
    // NOTE: even if you change options later
    {
      center: { lat: -12.098991, lng: -77.017461 },
      zoom: 11,
    }
  );
  //console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
  //console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <>
      <div ref={ref} style={{ width: 800, height: 400 }} />
      <div>
        <button onClick={() => setContador(contador + 1)}>Aumentar(+)</button>
        {contador}
        <button onClick={() => setContador(contador - 1)}>Disminuir(-)</button>
      </div>
      {pokemon && <div>{pokemon.name}</div>}
    </>
  );
};

export default Body;
