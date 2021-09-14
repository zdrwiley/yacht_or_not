import {
    Slider,
    SliderInput,
    SliderTrack,
    SliderRange,
    SliderHandle,
    SliderMarker,
  } from "@reach/slider";
import "@reach/slider/styles.css";
import "./Slider.css";

export const SliderBar = () => { 
    return (
        <div class="slider">
            <Slider min={0} max={10} step={1} value={1} handleAlignment="center">
                <SliderInput>
                    <SliderTrack>
                        <SliderRange value={10}/>
                        <div className="sliderMarkers">
                            <SliderMarker value={0} className="number">0</SliderMarker>
                            <SliderMarker value={10} className="number">1</SliderMarker>
                            <SliderMarker value={20} className="number">2</SliderMarker>
                            <SliderMarker value={30} className="number">3</SliderMarker>
                            <SliderMarker value={40} className="number">4</SliderMarker>
                            <SliderMarker value={50} className="number">5</SliderMarker>
                            <SliderMarker value={60} className="number">6</SliderMarker>
                            <SliderMarker value={70} className="number">7</SliderMarker>
                            <SliderMarker value={80} className="number">8</SliderMarker>
                            <SliderMarker value={90} className="number">9</SliderMarker>
                            <SliderMarker value={100} className="number">10</SliderMarker>
                        </div>
                        <SliderHandle />    
                    </SliderTrack>   
                </SliderInput>
            </Slider> 
        </div>
      );
}

