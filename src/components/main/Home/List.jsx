import React ,{Component} from 'react';

class List extends Component {

    render(){
        let {arr,click}=this.props;
        return   <ul className="list">
                        {
                        arr&& arr.map((item,key)=>{
                                return <li key={key} onClick={()=>{click(item.id,item.name)}}><span>{item.name}</span><span>{item.money}</span></li>
                            })
                        }
                </ul>
    }
}
export default List;