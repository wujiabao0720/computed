import React ,{Component} from 'react';
import {Modal} from 'antd-mobile';
class MyModal extends Component {

    render(){
        let {changeModal1,modal1}=this.props;
        return  <Modal
                    visible={modal1}
                    transparent
                    maskClosable={false}
                    title="提示"
                    footer={[{ text: 'Ok', onPress: () => {changeModal1(false) } }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                    >
                    <div>
                    密码错误
                    </div>
                </Modal>
    }
}
export default MyModal;