
import './styles/ArtWork.css'
import React, { useState } from 'react';
import Dust2 from './styles/Images/Dust2.png'
import Mirage from './styles/Images/mirage_2.png'
import Inferno from './styles/Images/Inferno.png'
import Nuke from './styles/Images/Nuke.png'
import Overpass from './styles/Images/Overpass.png'
import Train from './styles/Images/Train.png'
import Cache from './styles/Images/Cache.png'

const maps = [
    { name: 'Dust2', image: Dust2 },
    { name: 'Mirage', image: Mirage },
    { name: 'Inferno', image: Inferno },
    { name: 'Nuke', image: Nuke },
    { name: 'Overpass', image: Overpass },
    { name: 'Train', image: Train },
    { name: 'Cache', image: Cache },
  ];

  const markers = {
    Dust2: [
      { top: '30%', left: '40%', text: 'Memorable Moment 1', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qFGpLdGEL9k?si=QGySOoL0XstbAapU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      
    ],

    Mirage: [
        { top: '25%', left: '60%', text: 'Memorable Moment 1', videoEmbedCode: 'https://www.youtube.com/embed/VIDEO_ID' },
        
      ],
      Inferno: [],
      Nuke: [],
      Overpass: [],
      Train: [],
      Cache: [],
    
  };


  const ArtWorkPage = () => {
    const [selectedMap, setSelectedMap] = useState(maps[0].name);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [popupPosition, setPopupPosition] = useState({ top: '0', left: '0' });
    const [popupVisible, setPopupVisible] = useState(false);
  
    const handleMapChange = (event) => {
      setSelectedMap(event.target.value);
      setSelectedMarker(null); // Reset marker selection on map change
      setPopupVisible(false); // Close popup when map changes
    };
  
    const handleMarkerClick = (marker, event) => {
      const markerRect = event.target.getBoundingClientRect();
      setPopupPosition({ top: `${markerRect.top + window.scrollY}px`, left: `${markerRect.left + window.scrollX}px` });
      setSelectedMarker(marker);
      setPopupVisible(true); // Show popup when marker is clicked
    };
  
    const handleClosePopup = () => {
      setPopupVisible(false); // Close popup when close button is clicked
    };
  
    return (
      <div className="csgo-section">
        <h2>CS:GO Maps</h2>
        <select onChange={handleMapChange} value={selectedMap}>
          {maps.map((map, index) => (
            <option key={index} value={map.name}>{map.name}</option>
          ))}
        </select>
  
        <div className="map-container">
          <img src={maps.find(map => map.name === selectedMap).image} alt={selectedMap} className="map-image" />
          {markers[selectedMap].map((marker, index) => (
            <div
              key={index}
              className="marker"
              style={{ top: marker.top, left: marker.left }}
              onClick={(event) => handleMarkerClick(marker, event)}
            ></div>
          ))}
        </div>
  
        {selectedMarker && popupVisible && (
          <div className="marker-info" style={{ top: popupPosition.top, left: popupPosition.left }}>
            <button className="close-button" onClick={handleClosePopup}>X</button>
            <p>{selectedMarker.text}</p>
            <div dangerouslySetInnerHTML={{ __html: selectedMarker.videoEmbedCode }} />
          </div>
        )}
      </div>
    );
  };
    
    export default ArtWorkPage;

