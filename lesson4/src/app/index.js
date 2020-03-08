import React from 'react';
import {observer} from 'mobx-react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import routes from '~/routes/index'

@observer class App extends React.Component{
    render(){
        let routesComponents = routes.map((routes)=>{
            return  <Route  path={routes.url} 
                            component={routes.component} 
                            exact={routes.exact}
                            key={routes.url}
                            />
        }) 
        return (
            <Router>
                <div className="container">
                    <Switch>
                        {routesComponents}
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;