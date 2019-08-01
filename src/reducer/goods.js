const initState={
    num:10,
    nav:""
}   
const reducer=(state=initState,action)=>{
    let temp={...state}//当使用react-redux时别直接改变state否则无法监听同步
    switch(action.type){
        case 'CDD':
            temp.nav=action.payload.v
            break
        case 'ADD':       
        // console.log(action.payload.i) 
        temp.num+=1
        break
        case 'REDUCE':
            temp.num-=1
        break
        default:
            break
    }
    return  temp
}
export default reducer