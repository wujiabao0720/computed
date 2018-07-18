import React ,{Component} from 'react';
import {Button,Modal} from 'antd-mobile';
import axios from 'axios';
class List extends Component{

    render(){
        let {data}=this.props;
        return  <ul className="userList">
                {
                    data.length>0?data.map((item,key)=>{
                        return <li key={key}><span onClick={()=>{this.props.changeAmtend(true,item.name,item.id)}}>修改</span> <span>{item.name}</span><span>{item.id}</span>
                        <Button
                        onClick={() =>
                            Modal.alert('警告', '确认删除吗???', [
                            { text: '取消', onPress: () => console.log('cancel') },
                            { text: '确定', onPress: () => {
                                axios.get("http://localhost:3000/remove",{params:{id:item.id}}).then((res)=>{
                                    if(res.data.code===1){
                                        this.props.disData(item.id)
                                        Modal.alert("提示","删除成功",[{text:"ok"}])
                                    }
                                })
                            } },
                            ])
                        }
                        >
                        删除
                        </Button></li>
                    }):null
                }
            </ul>
    }
}
export default List;