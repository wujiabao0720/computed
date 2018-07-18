import React ,{Component} from 'react';


class TBody extends Component{

    render(){
        let {userList,allPrice}=this.props;
        return   <tbody>
                    <tr>
                        <td>姓名</td>
                        <td>个人总计</td>
                        <td>平均</td>
                        <td>应付</td>
                        <td>应收</td>
                    </tr>
                    {
                        userList.map((item,key)=>{
                            let n=allPrice/userList.length;
                    return  <tr key={key}>
                                <td>{item.name}</td>
                                <td>{item.money*1}</td>
                                <td>{n}</td>
                                <td>{(item.money*1-n)<0?Math.abs((item.money*1-n)):0}</td>
                                <td>{(item.money*1-n)>0?item.money*1-n:0}</td>
                            </tr>
                        })
                    }
                </tbody>
    }
}
export default TBody;