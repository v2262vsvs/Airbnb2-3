import React, { useState } from 'react'
import ReactMapGl from "react-map-gl"
import Map, { Marker, Popup } from 'react-map-gl';
import getCenter from "geolib/es/getCenter"
import CityPin from "../city-pin"

function Mapp({ searchResult }) {
    const coordinates = searchResult.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }))
    const [energodar, setEnergodar] = useState(34.6574)
    const [energodar2, setEnergodar2] = useState(47.49865)
    const center = getCenter(coordinates)

    return (
        <Map
            initialViewState={{
                longitude: center.longitude,
                latitude: center.latitude,
                zoom: 12,
            }}
            style={{ width: '100%', height: '100%' }}
            mapStyle="mapbox://styles/314l0t/cl1v0xghf000o14p6rl8azbrx"
            mapboxAccessToken="pk.eyJ1IjoiMzE0bDB0IiwiYSI6ImNsMXYwc200ODA1MGczY21wdWNiaXpxb2wifQ.xr3Rv9jOTF6a5aL1RzTZTw"
        >
            {searchResult.map(res => (
                <div key={res.long}> 
                    <Marker  longitude={res.long} latitude={res.lat} offsetRight={-20} offsetLeft={-20} >
                    {/*<p>🧨</p>
                    <CityPin size={20} />
                    */}
                    <p>🧨</p>
                    
                    </Marker>
                </div>
            ))}
        </Map>
    )
}

export default Mapp