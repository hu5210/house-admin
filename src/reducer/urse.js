const initState=[
    {id:1,title:'苹果',num:8,price:111.63},
    {id:2,title:'香蕉',num:6,price:11.63},
    {id:3,title:'橘子',num:2,price:112.63}
]
const reducer=(state=initState,action)=>{
    switch(action.type){
        case 'ADD':       
        // console.log(action.payload.i) 
        state[action.payload.i].num+=1
        break
        case 'REDUCE':
        state[action.payload.i].num-=1
        break
        default:
            break
    }
    return state
}
export default reducer