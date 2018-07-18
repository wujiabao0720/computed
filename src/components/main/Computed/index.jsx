import React ,{Component} from 'react';
import {connect} from 'react-redux';
import './index.css'
import TBody from './TBody';
class Computed extends Component{

    render(){
        let {allPrice,userList}=this.props;
        return <div>
                  <div className="computedPrice">
                         <div className="allPrice">{allPrice}</div>
                  </div>
                    <table className="table table-bordered">
                         <TBody userList={userList} allPrice={allPrice} />
                    </table>
            </div>
    };
    componentDidMount(){
       
    }
}
let mapState=(state)=>{
    return {
       allPrice:state.info.allPrice,
       userList:state.info.userInfo
    }
}
Computed=connect(mapState)(Computed)
export default Computed