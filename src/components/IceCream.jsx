import React from 'react'
import { IceCream } from "react-kawaii";

const IceCreamComponent = (props) => {
    const { color } = props
    return <IceCream size={300} mood="happy" color={color || "#6b3e26"} />;
}

export default IceCreamComponent