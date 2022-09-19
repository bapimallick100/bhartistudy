const counterReducer=(state=0,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return state +action.payload;
        case "DECREMENT":
            return state -1;
        default:
            return state;
    };
};
export default counterReducer;


// Frontent


// import {useSelector,useDispatch} from "react-redux";
// import {increment,decrement} from "./actions";

// const counter=useSelector(state=>state.counter);
// const isLogged=useSelector(state=>state.isLogged);
// const dispatch=useDispatch();

// <h1>counter {counter}</h1>
// <button onClick={()=>dispatch(increment(5))}>+</button>
// <button onClick={()=>dispatch(decrement())}>-</button>
// {!isLogged && <h2>This is not shown on screen</h2>}