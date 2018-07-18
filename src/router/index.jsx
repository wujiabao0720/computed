import React ,{Component} from 'react';
import {rootData} from './router-config';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
class Root extends Component {

    render () {
        return <Router>
                <div className="wrap">
                    <Switch>
                        {
                            rootData.map((item,key)=>{
                                return <Route key={key} path={item.path} render={({match,history})=>{
                                    let Con = item.component;
                                    return <Con match={match} history={history} child={item.children}></Con>
                                }}></Route>
                            })
                        }
                        <Redirect from="/" to="/main/home" />
                    </Switch>
                </div>
           </Router>
    }
}
export default Root;