import React ,{Component} from 'react';

import {InputItem,Button} from 'antd-mobile';
class Amtend extends Component{

    render(){
        let {modal3,name,amtend,changeName,changeModal3}=this.props;
        return    <div className="amtend" style={{display:modal3?"block":"none"}}>
                    <InputItem 
                    clear
                    value={name}
                    placeholder="请输入用户姓名"
                    onChange={(ev)=>{
                       changeName(ev)
                    }}></InputItem>
                    <Button className="btn" type="primary" inline size="small" style={{ marginRight: '4px' }} onClick={()=>{amtend()}}>修改</Button>
                    <Button type="warning" inline size="small"  
                        onClick={()=>{
                            changeModal3(false)
                        }}
                >取消</Button>
                </div>
    }
}
export default Amtend;