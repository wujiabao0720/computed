import React ,{Component} from 'react';

class Mark extends Component{

    render(){
        let {markShow,markShow1}=this.props;
        return  <div className="mark" style={{display:markShow||markShow1?"block":"none"}}
                    onClick={()=>{this.props.changeMarkShow(false)}}
                ></div>
    }
}
export default Mark