import React ,{Component} from 'react';
import {Button,NoticeBar} from 'antd-mobile';
import axios from 'axios';
import {connect} from 'react-redux';
import {INIT_DATA} from '../../../store/actions/index';
import List from './List';
import MyModal from './MyModal';
import {testPORT} from '../../../api/port';
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            isShow:true,
            password:'',
            modal1:false,
            arr:[]
        }
    }
    render(){
        let {isShow,password,modal1}=this.state;
        let {arr,allPrice} =this.props;
        return <div>
            <div className="top">
            
                 <div>{allPrice}</div>
                 <p>嗨,亲爱的girl and boy</p>
                 {
                     isShow?<Button type="primary"><input value={password} onKeyDown={this.keyDown.bind(this)} onChange={(ev)=>{
                                this.setState({password:ev.target.value})
                     }} placeholder="请输入管理员密码" type="text"/></Button>:
                     <Button onClick={()=>{
                         this.props.history.push('/mannger')
                     }}>管理用户</Button>
                 }
            </div>
            <MyModal modal1={modal1} changeModal1={this.changeModal1.bind(this)} />
            <div>
            <NoticeBar marqueeProps={{ loop: true ,padding:"0 7.5px"}}>
               Notice: The arrival time of incomes and transfersadasdasdasdasdasdasd
            </NoticeBar>
            <List click={this.click.bind(this)} arr={arr} />
            </div>
        </div>
    };
    componentDidMount(){
        axios.get(testPORT+"/getAllUser").then((res)=>{
            this.props.initData(res.data.data)
        })
    };
    changeModal1(bool){
        this.setState({modal1:bool})
    };
    keyDown(ev){
       let {password} =this.state;
       if(ev.keyCode===13){
          axios.get(testPORT+"/password",{params:{password}}).then((res)=>{
                 if(res.data.code===1){
                       this.setState({isShow:false})
                 }else{
                     this.setState({modal1:true})
                 }
          })
          ev.target.value="";
          this.setState({password:""})
       }
    };
    click(id,name){
       this.props.history.push('/main/detail',{id,name})
    };
}
let mapState=(state)=>{
    return {
       arr:state.info.userInfo,
       allPrice:state.info.allPrice
    }
}
let mapDispatch=(dispatch)=>{
    return {
        initData(arr){
           dispatch({type:INIT_DATA,arr})
        }
    }
}
Home=connect(mapState,mapDispatch)(Home)
export default Home