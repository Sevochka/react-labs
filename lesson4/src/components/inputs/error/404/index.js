import React from "react"

import { Link } from 'react-router-dom'
import { routesMap } from '~/routes'

export default function(){
    return (
    <React.Fragment>
        <h1>Данная страница не существует</h1>
        <Link to={routesMap.home} className="bnt btn-success">Go to HomePage</Link>
    </React.Fragment>)
}