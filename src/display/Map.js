import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapWithAddress = () => {
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
    const mapContainerStyle = { width: "100%", height: "500px" };

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?address=5601+Bridge+St+STE+300,Fort+Worth,TX+76112&key=YOUR_GOOGLE_MAPS_API_KEY`
                );
                const data = await response.json();
                console.log(data)
                if (data.results[0]) {
                    setCoordinates(data.results[0].geometry.location);
                } else {
                    console.error("Address not found");
                }
            } catch (error) {
                console.error("Error fetching geocode data: ", error);
            }
        };

        fetchCoordinates();
    }, []);

    return (
        <LoadScript googleMapsApiKey="AIzaSyCDKz0nTNMAO-0rUNo8WH6pibfg8HUU-14">
            <GoogleMap mapContainerStyle={mapContainerStyle} center={coordinates} zoom={15}>
                <Marker position={coordinates} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapWithAddress;
