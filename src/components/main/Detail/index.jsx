import React ,{Component} from 'react';
import './index.css';
import List from './List';
import axios from 'axios';
import {testPORT} from '../../../api/port';
class Detail extends Component{
    constructor(props){
         super(props);
         this.state={
             listData:[]
         }
    }
    render(){
        let names=this.props.history.location.state&&this.props.history.location.state.name;
        let {listData}=this.state;
        return <div>
                {
                names?<div className="choice">{names}</div>:<div className="choice">
                    请选择一名用户
                </div>
                }
                <List listData={listData} />
            </div>
    };
    componentDidMount(){
        let id=this.props.history.location.state&&this.props.history.location.state.id;
        axios.get(testPORT+"/singleDetail",{params:{id}}).then((res)=>{
            this.setState({listData:res.data.data})
        })
    }
  
}
export default Detail