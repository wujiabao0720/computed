import React ,{Component} from 'react';
class List extends Component {

    render(){
        let {listData}=this.props;
        return  <ul className="detailList">
                    <li><span>时间</span><span>金额</span><span>备注</span></li>
                    {
                        listData.length>0?listData.map((item,key)=>{
                            let time=new Date(item.time).toLocaleDateString()
                            return <li key={key}><span>{time}</span><span>{item.singlemoney}</span><span>{item.dowhat}</span></li>
                        }):null
                    }
                </ul>
    };
}
export default List;