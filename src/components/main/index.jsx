import React ,{Component} from 'react';
import {Route,NavLink} from 'react-router-dom';
// import {fromJS} from 'immutable';
let menu=require('../../img/list.png');
// class Components extends Component{
//     shouldComponentUpdate(nextProps,nextState){
//          return !fromJS(this.props).equals(fromJS(nextProps))
//     }
// }
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            top:0,
            left:0
        }
    }
    render(){
        let {child,match} =this.props;
        let {top,left} =this.state;
        return <div>
                 {
                     child.map((item,key)=>{
                         return <Route key={key} path={`${match.url}${item.path}`} render={({history})=>{
                             let Child=item.component;
                                 return <div className="content" onClick={()=>{
                                     this.setState({
                                         left:0,
                                         top:0
                                     })
                                 }} style={{marginTop:top+"px",marginLeft:left+"px"}}>
                                         <header className="header"><img onClick={(ev)=>{
                                             ev.stopPropagation();
                                             let top=this.state.top>0?0:60;
                                             let left=this.state.left>0?0:200;
                                             this.setState({
                                                 top,
                                                 left
                                             })
                                         }} src={menu} alt=""/></header>
                                        <Child history={history}></Child>
                                        <div className="footer">
                                            {
                                                child.map((item,key)=>{
                                                    return <NavLink key={key} to={`${match.url}${item.path}`} activeClassName="active" >{item.title}</NavLink>
                                                })
                                            }
                                        </div>
                                 </div>
                         }}></Route>
                     })
                 }
            </div>
    }
}
// export {
//     Components
// }
export default Main