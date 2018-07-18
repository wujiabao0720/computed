import React ,{Component} from 'react';
import {DatePicker,InputItem,Picker,Button,List,Modal} from 'antd-mobile';
import {connect} from 'react-redux';
import axios from 'axios';
import {ADD_DETAILlIST,SINGLE_PRICE,INIT_DATA} from '../../../store/actions/index'
import './index.css';
import {testPORT} from '../../../api/port';
class Submit extends Component{
    constructor(props){
        super(props);
        const nowTimeStamp = Date.now();
        const now=new Date(nowTimeStamp);
        let minDate = new Date(nowTimeStamp - 1e7);
        const maxDate = new Date(nowTimeStamp + 1e7);
        if (minDate.getDate() !== maxDate.getDate()) {
        minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
        }
        this.state={
            submit:false,
            date:now,
            district:[],
            asyncValue:[],
            price:'',
            Bz:'',
            markShow:false
        }
    }
    render(){
        let {date,asyncValue,price,Bz,district,markShow}=this.state;
        let {singleAllPrice}=this.props;
        return <div>
                    <DatePicker
                    mode="date"
                    title="Select Date"
                    extra="Optional"
                    value={date}
                    onChange={date => this.setState({ date })}
                    >
                    <List.Item arrow="horizontal">时间</List.Item>
                    </DatePicker>
                    <Picker 
                    data={district} 
                    cols={1} 
                    className="forss"
                    value={asyncValue}
                    onOk={v=>{this.setState({asyncValue:v});}}
                    >
                    <List.Item arrow="horizontal">姓名</List.Item>
                    </Picker>
                    <InputItem
                        placeholder="请输入金额"
                        value={price}
                        onChange={ev=>this.setState({price:ev})}
                    >金额</InputItem>
                    <InputItem
                    placeholder="请输入备注"
                    value={Bz}
                    onChange={ev=>this.setState({Bz:ev})}
                    >用途备注</InputItem>
                    <div className="button">
                     <Button type="primary" inline size="small" style={{ marginRight: '4px' }} onClick={this.click.bind(this)}>提交</Button>
                     <Button type="warning" inline size="small" style={{ marginRight: '4px' }}>取消</Button>
                    </div>
                    <div className="alertSubmit" style={{display:markShow?"block":"none"}}>
                            <List>
                                <List.Item><span>时间:</span><span>{11}</span></List.Item>
                                <List.Item><span>姓名:</span><span>{asyncValue}</span></List.Item>
                                <List.Item><span>金额:</span><span>{price}</span></List.Item>
                                <List.Item><span>用途备注:</span><span>{Bz}</span></List.Item>
                                <Button type="primary" inline size="small"  
                                        style={{ marginRight: '4px' }}
                                        onClick={()=>{
                                            this.setState({markShow:false});
                                            axios.get(testPORT+"/addUserDetail",{params:{date:date.toLocaleDateString(),asyncValue,price,Bz}}).then((res)=>{
                                                if(res.data.code===1){
                                                    Modal.alert('提示','提交成功,个人总计'+singleAllPrice+'元',[{text:"ok"}])
                                                    this.setState({asyncValue:[],price:'',Bz:''})
                                                }
                                          })
                                            
                                        }}
                                >添加</Button>
                                <Button type="warning" inline size="small"  
                                       onClick={()=>{
                                        this.setState({markShow:false});
                                        Modal.alert('提示','本次未提交',[{text:"ok"}])
                                       }}
                                >取消</Button>
                            </List>
                        </div>
                    <div className="mark" style={{display:markShow?"block":"none"}}>
                    </div>
              </div>
    };
    click(){
        let {date,price,Bz,asyncValue}=this.state;
        date=date.toLocaleDateString();
        if(date===''||price===''||Bz===''){
             Modal.alert('提示',"输入不能为空",[{text:'ok'}])
        }else{
            this.setState({submit:true,markShow:true})
        }
        this.props.singlePrice(asyncValue,price)
    };
    componentDidMount(){
        let arr=[];
        axios.get(testPORT+"/getAllUser").then((res)=>{
              this.props.initData(res.data.data)
              res.data.data.forEach((item)=>{
                arr.push({value:item.id,label:item.name})
              })
              this.setState({district:arr})
        })
    }

}
let mapState=(state)=>{
    return {
      singleAllPrice:state.info.singleAllPrice
    }
}
let mapDispatch=(dispatch)=>{
    return {
        addDetailLoist(obj){
           dispatch({type:ADD_DETAILlIST,obj})
        },
        singlePrice(asyncValue,price){
           dispatch({type:SINGLE_PRICE,asyncValue,price})
        },
        initData(arr){
            dispatch({type:INIT_DATA,arr})
        }
    }
}
Submit=connect(mapState,mapDispatch)(Submit)
export default Submit