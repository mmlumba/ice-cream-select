import React from 'react'
import { CirclePicker } from "react-color";
import { flavors } from './flavors'

const FlavorPicker = (props) => {
    const { flavor, setFlavor } = props
    const flavorColors = flavors.map(flavor => flavor.color)
    return <CirclePicker 
            circleSize={50} 
            colors={flavorColors} 
            width={400} 
            onSwatchHover={(color, event) => {
                const newFlavor = flavors.find(
                  selection => selection.color === color.hex
                );
                setFlavor(newFlavor)
            }}
            // use below to actually change flavor
            // onChangeComplete={() => {}}
    />;
}

export default FlavorPicker