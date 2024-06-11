
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
    
  ];

  const markers = {
    Dust2: [
      { className: 'circle', top: '35%', left: '47%', text: 'Inuman Reactions by Hiko!', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qFGpLdGEL9k?si=QGySOoL0XstbAapU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { top: '25%', left: '45%', text: 'Scream 1 tap Ace.', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/M-xaT0DzpNM?si=bBnD6rtY_Y9wZ3R8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { top: '35%', left: '14%', text: 'Stewie2K MP9 Ace.', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cAz2lh9UlDM?si=eujRla-E6Msqu5lY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { top: '87%', left: '45%', text: 'Fnatic 4 AWP Hold', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/asDtlvn7N5U?si=kt641PFxHOj-TZpW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { top: '13%', left: '26%', text: 'S1mple Fake Flash', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/FuvMNVbuE1g?si=ssloAuvva8mzkyDr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { top: '12%', left: '14%', text: 'Shroud 3 second Ace', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xw6FKPvGrRo?si=IYg9xzvk2fn0MbO-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
    ],

    Mirage: [
        { top: '19%', left: '28%', text: 'Coldzera jumping AWP', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cjOVXdarUTs?si=zGb3PhxEDN6jIdQi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
        { top: '59%', left: '52%', text: 'Cadian 1v4 Finals', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/m2U1zkHdOP8?si=vg1A06vFTjLe0lNv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
        { top: '24%', left: '56%', text: 'Snax sneaky beaky.', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9WV1-AklbEQ?si=LuyTaaVManecFswi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
        { top: '52%', left: '49%', text: 'Dupreeh 2k Collat Clutch', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LzoHMDVrSaM?si=4OfpKLO4oHa-SCVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
        { top: '81%', left: '45%', text: 'Stewie2k pistol clip FPL', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LLvcGiTH48k?si=F4A9J-6ZlyBXOuSZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      ],
      Inferno: [
        { top: '25%', left: '43%', text: 'Stewie2k b hold major win', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ri5zxSy_9yM?si=kqJfV-Un9m6SRv50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
        { top: '23%', left: '60%', text: 'Happy with the one deag', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dg6TQy6pGfs?si=4gIvkT19GDJujJ9m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
        { top: '45%', left: '47%', text: 'friberg vs fnatic', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zqrSh-ULwiI?si=1zHG5o9rGaqHv450" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
        { top: '70%', left: '80%', text: 'KennyS noscope 1v3', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cSU1LMAsVwg?si=F0pbf3gtgNa8XeQV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
        { top: '55%', left: '90%', text: 'JW Ace', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/stP0Owdfue4?si=FW1InZuAM0OzeTcR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      ],
      Nuke: [
        { top: '57%', left: '58%', text: 'S1mple insane flick', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UdnpJZzYMBw?si=NAGvrI5YIOAWt04I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
        { top: '57%', left: '48%', text: 'Get Right falling 1 tap', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4QQye2jTVj4?si=s3rAs7sdOrec-Pyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
        { top: '40%', left: '55%', text: 'Scream vs NiP', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZfkgdYGGsKA?si=k6LNMqby9Dopx850" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
        { top: '45%', left: '55%', text: 'Shroud 1v5 ace', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/i8p8VKsQLpU?si=KD-rpmApE_BiiXcS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      ],
      Overpass: [
        { top: '44%', left: '50%', text: 'Olof 3 man Boost', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DqB95s47f1w?si=_u8UxDqvxdRat3Pe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
        { top: '32%', left: '68%', text: 'Olof on fire', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sky3WydyiX8?si=xRT5AtKt7864h4zB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
        { top: '50%', left: '60%', text: 'Stewie2k vs astalis', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6JwfHWZ799w?si=LOuVOQqPTOw5pR5z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
        { top: '20%', left: '50%', text: 'Shroud 1v3 A site', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/U0R6IO3HPrA?si=KNQSPl4-isR1egsw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
        { top: '33%', left: '75%', text: 'Shroud Insane clutch', videoEmbedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/X9zUzl9-ZmY?si=fPUpd5Peg__bQV7x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      ],
     
    
  };


  const ArtWorkPage = () => {
    const [selectedMap, setSelectedMap] = useState(maps[0].name); //Sets default map to Dust 2
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [popupPosition, setPopupPosition] = useState({ top: '0', left: '0' });// Popup window to be set to be next to circle
    const [popupVisible, setPopupVisible] = useState(false);// sets the popup window to not show by defualt, only when clicked
  
    //used to change map
    const handleMapChange = (event) => {
      setSelectedMap(event.target.value);
      setSelectedMarker(null); 
      setPopupVisible(false); 
    };
  
    //used for pop up window when clicking on a circle marker
    const handleMarkerClick = (marker, event) => {
      const markerRect = event.target.getBoundingClientRect();
      setPopupPosition({ top: `${markerRect.top + window.scrollY}px`, left: `${markerRect.left + window.scrollX}px` });// finds marker that was clicked on's position
      setSelectedMarker(marker);
      setPopupVisible(true); //endbales visibility of pop up window
    };
  
    //handles when user presses on x to close window
    const handleClosePopup = () => {
      setPopupVisible(false); 
    };
  
    //JSX
    return (
      <div className="csgo-section">
        <h2>CS:GO Maps</h2>
        <div className="csgo-text">
          <p>Although we here at game bring the latest news on the latest games. Sometimes it pays off to go back and reminisce on the past legendary gaming moments. 
            This time we are looking at the history of e-sports in csgo. Counter strike has always been a staple in e-sports history and we want to celebrate it!
            Check out our interactive artwork below. Choose the map you wish to view and then click on the small golden circles to check out the memorable clip from that position!</p>
        </div>


        <div className="dropdown-container">  {/*Container for drop down map menu*/ }
          <select onChange={handleMapChange} value={selectedMap} className="map-dropdown"> {/*Sets map depending on what user selects*/ }
            {maps.map((map, index) => ( 
              <option key={index} value={map.name}>{map.name}</option> 
            ))} {/*Iterates over maps and gives selection of different maps*/ }
          </select>
        </div>


        <div className="map-container"> {/*Displays the image of the selected map*/ }
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
          <div className="marker-info" style={{ top: popupPosition.top, left: popupPosition.left }}> {/*Changes position of popup window to be next to marker*/ }
            <button className="close-button" onClick={handleClosePopup}>X</button> {/*Button to close popup window*/ }
            <p>{selectedMarker.text}</p>
            <div dangerouslySetInnerHTML={{ __html: selectedMarker.videoEmbedCode }} /> {/*Inserts RAW HTML of video embeds for memorable clips from youtube*/ }
          </div>
        )}
      </div>


    );
  };
    
    export default ArtWorkPage;

