import React ,{Component} from 'react';
import {Modal} from 'antd-mobile';
class MyModal extends Component{

    render(){
       return  <Modal
                visible={this.props.modal2}
                transparent
                maskClosable={false}
                title="提示"
                footer={[{ text: 'Ok', onPress: () => { this.props.changeModal2(false)} }]}
                wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                <div>
                {this.props.hintTitle}
                </div>
                </Modal>
    }
}
export default MyModal