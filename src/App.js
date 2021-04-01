import React,{useState} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navibar from "./Navbar"
import Coverimage from "./CoverImage"
import GridView from "./Components/GridView"
import CssBaseline from '@material-ui/core/CssBaseline';

import WelcomePage from './Components/WelcomePage'
import Cart from './Components/Cart'

const App = ()=>{
    const [count,setCount ] = useState(0)
    const bedges = () =>{
        // console.log(count);
        // var bedgesCount = (count + 1);
        // localStorage.setItem("bedgesCount",parseInt(bedgesCount))
        // setCount(parseInt(localStorage.getItem("bedgesCount")));
        // console.log(bedgesCount);
    }
    const [cartProduct, setCartProduct]= useState([])
    const addCart = (item)=>{
        const isAlreadyAdded = cartProduct.findIndex(function(array){
                return array.pro_id === item.pro_id;
        });
        if(isAlreadyAdded !== -1){
            alert("Already Added in Cart");
            return;
        }
        const temp = [...cartProduct,item];
        setCartProduct(temp);
        setCount(temp.length);
        localStorage.setItem("cartProduct",JSON.stringify(temp))
            };
            
        const removeFromCart=(id)=>{
                console.log(id);
                // var removeItem =[]
                var removeItem = JSON.parse(localStorage.getItem("cartProduct"))
                console.log("RI",removeItem);
                 var afterRemove = removeItem.filter(item=>item.pro_id !== id)
                 console.log("after remove" , afterRemove);
                 localStorage.setItem("cartProduct",JSON.stringify(afterRemove))
                 setCartProduct(afterRemove)
                // setCartProduct(cartProduct.filter(singleItem => singleItem.pro_id !== id))
            }
         const buyNow=()=>{
             localStorage.setItem("cartProduct",JSON.stringify([]))
             setCartProduct([])
             setTimeout(() => {
                alert("Hurray! Purchase Successful")
             }, 1000); 
         }   

    return (
        <div><Router>
            <CssBaseline />
            <Switch>
            {/* <Route component={Navibar}/> */}
            <Route exact path="/" component={WelcomePage}/>
            <Route exact path="/home" >
            
            <Navibar count={count}/>
            
            <Coverimage />
            
            <div className="  overflow-hidden w-100 bg-light m-0">
            <div className="row ml-3 mt-5 h-50 w-100 ">
               
                <GridView className=" col-sm-12 " bedgeincrease={bedges} addProducts={addCart}/>
            </div>
            <div style={{height:"50px"}} className="bg-light">
            </div>    
            </div></Route>
            <Route exact path="/cart"  >
            <Navibar count={count}/>
            <Cart removeFromCart={removeFromCart} buyNow={buyNow} />
            </Route>
            </Switch>
        </Router>
        </div> 
    )
};
export default App;