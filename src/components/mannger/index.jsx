import React ,{Component} from 'react';
import './index.css';
import {Modal} from 'antd-mobile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ADD_DATA,DEL_DATA,AMTEND_USER,GET_ALL_USER} from '../../store/actions/index';
import Header from './Header';
import MyModal from './MyModal';
import Mark from './Mark';
import List from './List'
import Amtend from './Amtend';
import AddUser from './AddUser';
import {testPORT} from '../../api/port';
class Mannger extends Component{
    constructor(props){
       super(props);
       this.state={
           markShow:false,
           modal2:false,
           hintTitle:'',
           name:"",
           money:'',
           id:'',
           modal3:false,
           markShow1:false,
       }
    }
    render(){
        let {markShow,hintTitle,name,money,id,modal3,markShow1}=this.state;
        let {history,data}=this.props;
        return <div>
                <Header
                 addUserList={this.addUserList.bind(this)}
                 history={history}
                  />
                <Amtend 
                changeName={this.changeName.bind(this)} 
                changeModal3={this.changeModal3.bind(this)} 
                modal3={modal3}
                name={name}
                amtend={this.amtend.bind(this)} />
                <List 
                changeAmtend={this.changeAmtend.bind(this)} 
                data={data}
                disData={this.props.disData.bind(this)} />
                <MyModal
                changeModal2={this.changeModal2.bind(this)} 
                hintTitle={hintTitle}
                modal2={this.state.modal2} />
                <AddUser
                changeAddId={this.changeAddId.bind(this)}
                changeAddMoney={this.changeAddMoney.bind(this)}
                changeAddName={this.changeAddName.bind(this)}
                changeCancle={this.changeCancle.bind(this)}
                id={id}
                name={name}
                money={money}
                addClick={this.addClick.bind(this)}
                markShow={markShow} />
                <Mark changeMarkShow={this.changeMarkShow.bind(this)} markShow={markShow} markShow1={markShow1} />
            </div>
    };
    changeModal2(bool){
        this.setState({modal2:bool})
    };
    addUserList(bool){
        this.setState({markShow:bool})
    }
    changeMarkShow(bool){
        this.setState({markShow:bool})
    }
    changeAmtend(bool,name,id){
        this.setState({markShow1:bool,modal3:bool,name,id});
        this.id=id;
    }
    changeName(ev){
        this.setState({name:ev})
    }
    changeModal3(bool){
        this.setState({markShow1:bool,modal3:bool})
    }
    changeCancle(bool,val){
        this.setState({markShow:bool,name:val,money:val,id:val})
    }
    changeAddName(name){
       this.setState({name})
    }
    changeAddId(id){
        this.setState({id})
    }
    changeAddMoney(money){
        this.setState({money})
    }
    delete(key){
      this.setState({hintTitle:"确认删除吗？",modal2:true});
      this.props.disData(key);
    };
    addClick(){
        let {name,money,id}=this.state;
        this.setState({hintTitle:"添加成功"})
        axios.get(testPORT+"/createUser",{params:{name,money,id}}).then((res)=>{
            if(res.data.code===1){
                this.props.addData({name,money,id})
                this.setState({markShow:false,modal2:true});
                this.setState({name:'',money:'',id:''})
            }else{
                Modal.alert("提示","创建失败",[{text:"ok"}]);
                this.setState({markShow:false})
                this.setState({name:'',money:'',id:''})
            }
        })
    };
    amtend(){
        let {name}=this.state;
        axios.get(testPORT+"/amendUser",{params:{name,userID:this.id}}).then((res)=>{
            if(res.data.msg==="修改成功"){
                 this.props.amtendUser(name,this.id)
                 this.setState({markShow1:false,modal3:false})
                 Modal.alert("提示","修改成功",[{text:"ok"}])
            }
        })
    };
    componentDidMount(){
        axios.get(testPORT+"/getAllUser").then((res)=>{
            let data=res.data.data;
             this.props.allData(data);
        })
    }
}
let mapState=(state)=>{
    return {
       data:state.info.userInfo
    }
}
let mapDispatch=(dispatch)=>{
    return {
        addData(data){
            console.log(data);
            dispatch({type:ADD_DATA,data})
        },
        disData(key){
           dispatch({type:DEL_DATA,key})
        },
        amtendUser(name,id){
            dispatch({type:AMTEND_USER,name,id})
        },
        allData(data){
            dispatch({type:GET_ALL_USER,data})
        }
    }
}
Mannger=connect(mapState,mapDispatch)(Mannger)
export default Mannger