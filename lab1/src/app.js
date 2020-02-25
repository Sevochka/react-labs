import React, {useState} from 'react'
import ItemBag from './components/itemBag'

export default function(){
    let [min, setMin] = useState(0);
    let [max, setMax] = useState(10);

    return(
        <div>
            <ItemBag min={min} max={max}/>
        </div>
    )
}