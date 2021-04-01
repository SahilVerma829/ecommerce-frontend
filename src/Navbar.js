import React,{useState,useEffect}  from 'react';
import "./App.css"
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';

import Badge from '@material-ui/core/Badge';
import {Link,useHistory} from 'react-router-dom'

// import Cart from './Components/Cart'
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


const Navibar = (props) => {
  const [counts , setCounts]=useState(0)
    let history = useHistory()
    const onCart = ()=>{
      history.push("/cart")
        }

        

      useEffect((()=>{
       //var countBadges=localStorage.getItem("bedgesCount")
       
       setCounts(props.count)
      

      }),[props.count])
      
  return (
   <div>
    <nav className="navbar navc  navbar-light  border-bottom" >
        <h3 className="ecarth">
          <img className="logoimg" src="https://commerce-js.netlify.app/static/media/commerce.422fec10.png" height="30px" alt="logoimg"></img>
          <Link className="ecarta" to="/home">WholeMart</Link>
        </h3>
        <h3 className="cartbedges">
          <IconButton aria-label="cart" onClick={onCart}>
            <StyledBadge badgeContent={counts} color="primary">
              <ShoppingCartIcon />
              
            </StyledBadge>
          </IconButton>
        </h3>
    </nav>
       
  </div>
  );
}

export default Navibar;