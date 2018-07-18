import {ADD_DATA,DEL_DATA,INIT_DATA,AMTEND_USER,ADD_DETAILlIST,SINGLE_PRICE,GET_ALL_USER} from '../actions/index'
function computedPrice(arr){
    return  arr.reduce((pre,item)=>{
                return (pre*1+item.money*1)
           
     },0)
}
function computedSinglePrice(arr){
        return  arr.reduce((pre,item)=>{
                return (1*pre+item.price*1)
         },0)
    }
let obj={
    [INIT_DATA]:(state,action)=>{
            state.userInfo=action.arr;
            state.allPrice=computedPrice(state.userInfo)
    },
    [ADD_DATA]:(state,action)=>{
            state.userInfo.push(action.data)
            state.allPrice=computedPrice(state.userInfo)
    },
    [GET_ALL_USER]:(state,action)=>{
            state.userInfo=action.data;
            state.allPrice=computedPrice(state.userInfo);
    },
    [DEL_DATA]:(state,action)=>{
            let index=state.userInfo.findIndex((item)=>{
                   return action.key===item.id
            })
            state.userInfo.splice(index,1);
            state.userInfo.forEach(item => {
                item.money=item.money*1+(item.list?computedSinglePrice(item.list):0)
            });
            state.allPrice=computedPrice(state.userInfo)
    },
    [AMTEND_USER]:(state,action)=>{
        let index=state.userInfo.findIndex((item)=>{
                return action.id===item.id
         })
         state.userInfo[index].name=action.name
         state.allPrice=computedPrice(state.userInfo)
    },
    [ADD_DETAILlIST]:(state,action)=>{
        let index=state.userInfo.findIndex((item)=>{
                return action.obj.asyncValue[0]===item.id
         })
         if(state.userInfo[index].list){
                state.userInfo[index].list.push(action.obj)
         }else{
                state.userInfo[index].list=[action.obj]
         }
         state.userInfo.forEach(item => {
                item.money=item.money*1+(item.list?computedSinglePrice(item.list):0)
        });
         state.allPrice=computedPrice(state.userInfo)
    },
//     [ADD_ID]:(state,action)=>{
//             console.log(action)
//         let index=state.userInfo.findIndex((item)=>{
//                 return action.id===item.id
//          })
//          console.log(index)
//          state.listData=state.userInfo[index]
//          state.allPrice=computedPrice(state.userInfo)
//     },
    [SINGLE_PRICE]:(state,action)=>{
            console.log(state.userInfo)
        let item=state.userInfo.find((item)=>{
                return item.id===action.asyncValue[0]
        })
        state.singleAllPrice=item.money*1+action.price*1;
    }
};
let info =(state={userInfo:[],listData:{},allPrice:0,singleAllPrice:0},action)=>{
     obj[action.type]&&obj[action.type](state,action);
     return {...state,userInfo:[...state.userInfo],listData:{...state.listData}}
}

export {info}