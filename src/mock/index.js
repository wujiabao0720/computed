import Mock from 'mockjs';
// function computedPrice(arr){
//     return  arr.reduce((pre,item)=>{
//                 return (pre*1+item.money*1)
           
//      },0)
// }
// function computedSinglePrice(arr){
//         return  arr.reduce((pre,item)=>{
//                 return (1*pre+item.price*1)
//          },0)
//     }
// let password="123";
// let userInfo=[{name:"吴加宝",id:12,money:0}];
// Mock.mock("/password",(req,res)=>{
//     let pwd=JSON.parse(req.body).password;
//     if(password===pwd){
//         return "ok"
//     }else{
//         return "密码不正确"
//     }
// });
// Mock.mock("/createUser",(req,res)=>{
//      userInfo.push(JSON.parse(req.body));
//      return  {code:200,msg:"ok"}
// })
// Mock.mock("/remove",(req,res)=>{
//       let id=JSON.parse(req.body).id;
//      let index = userInfo.findIndex((item)=>{
//            return item.id===id
//       })
//       userInfo.splice(index,1)
//        return {code:1}
// }) 
// Mock.mock("/allUser",(req,res)=>{
//        return {code:1,arr:userInfo}
// }) 
// Mock.mock("/amendUser",(req,res)=>{
//     let {name} =JSON.parse(req.body);
//     let userId=JSON.parse(req.body).userID;
//     let itemIndex =userInfo.findIndex((item)=>{
//             return item.id===userId
//     })
//     if(itemIndex!==-1){
//         userInfo[itemIndex].name=name;
//         return {msg:"成功",data:userInfo}
//     }
// })
// Mock.mock("/mangerInit",(req,res)=>{
//        return userInfo
// })
// Mock.mock("/addUserDetail",(req,res)=>{
//     let {asyncValue}=JSON.parse(req.body);
//     let index= userInfo.findIndex((item)=>{
//         return  item.id===asyncValue[0]
//      })
//      if(userInfo[index].list){
//         userInfo[index].list.push(JSON.parse(req.body))
//         userInfo[index].money= computedSinglePrice(userInfo[index].list)
//      }else{
//         userInfo[index].list=[JSON.parse(req.body)]
//         userInfo[index].money= computedSinglePrice(userInfo[index].list)
//      }
//      computedPrice(userInfo)
//      return {code:1,msg:"sucess"}
// }) 
export default Mock