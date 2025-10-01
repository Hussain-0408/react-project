import  { Fragment } from "react"
import meels1 from '../image/meels1.jpg';
import classes from '../styles/Header.module.css'
import HeaderCardButton from "./HeaderCardButton";

const Header = props =>{
    return(
         <Fragment>
            <header className = {classes.header}>
                       <h1 className="fw-bold fs-1 ">React Meals</h1> 
                       <HeaderCardButton/>
            </header>
            <div className={classes['main-image']}> 
                <img src={meels1} alt="a table full of delicious meal" />
            </div>

         </Fragment>
         );
         };

export default Header