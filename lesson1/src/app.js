import React from 'react'
import CountersClass from "./counters/class"
import CountersFunction from "./counters/function"

export default function() {
    return(
        <div>
            <CountersClass/>
            <hr/>
            <CountersFunction/>
        </div>
    );
}