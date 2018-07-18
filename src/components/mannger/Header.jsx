import React ,{Component} from 'react';
class Header extends Component{

    render(){
        return   <header className="manngerHeader">
                        <span onClick={()=>{
                            this.props.history.go(-1)
                        }}>返回</span>
                        <span>用户管理</span>
                        <span onClick={()=>{this.props.addUserList(true)}}>添加</span>
                </header>
    }
}
export default Header;