import React ,{Component} from 'react';

export let LoadAsyncCom=(AsyncAbled,Loading)=>{
      return class AsyncAble extends Component{
          constructor(props){
               super(props);
               this.state={
                   Load:Loading
               }
          };
          render(){
              let {Load} =this.state;
              return <Load {...this.props} />
          };
          componentDidMount(){
              AsyncAbled().then((com)=>{
                      this.setState({Load:com.default})
              }) 
          };
      }
}

export function Loading () {

    return <div>
          <img style={{width:"100%",height:"100%"}} alt="" src={require("../img/loading.gif")} />
    </div>
}