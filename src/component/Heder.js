import  { Fragment } from "react"
import meels1 from '../image/meels1.jpg';
import classes from '../styles/Header.module.css'

const Header = props =>{
    return(
         <Fragment>
            <header className = {classes.header}>
                       <h1>React Meals</h1> 
            </header>
            <div className={classes['main-image']}> 
                <img src={meels1} alt="a table full of delicious meal" />
            </div>

         </Fragment>
         );
         };

export default Header