import React ,{Component} from 'react';
import {Button,InputItem} from 'antd-mobile';
class AddUser extends Component {

    render (){
        let {markShow,id,name,money,addClick,changeAddName,changeAddMoney,changeAddId,changeCancle}=this.props;
        return   <div className="add" style={{display:markShow?"block":"none"}}>
                    <InputItem
                        type="number"
                        clear
                        value={id}
                        placeholder="请输入用户ID"
                        onChange={(ev)=>{
                            changeAddId(ev)
                        }}
                    >用户ID</InputItem>
                    <InputItem
                        clear
                        value={name}
                        placeholder="请输入用户姓名"
                        onChange={(ev)=>{
                           changeAddName(ev)
                    }}
                    >姓名</InputItem>
                    <InputItem
                        clear
                        value={money}
                        placeholder="请输入金钱基数"
                        onChange={(ev)=>{
                            changeAddMoney(ev)
                    }}
                    >金钱基数</InputItem>
                    <Button className="btn" type="primary" inline size="small" style={{ marginRight: '4px' }} onClick={()=>{addClick()}}>添加</Button>
                    <Button type="warning" inline size="small"  
                            onClick={()=>{
                                changeCancle(false,'')
                            }}
                    >取消</Button>
                </div>
    }
}
export default AddUser;