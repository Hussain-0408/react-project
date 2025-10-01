import CarIcon from "./CartIcon"
import classes from '../styles/HeaderCardButton.module.css'

const HeaderCardButton =(props)=>{
    return <button className={classes.button}>
        <span className={classes.icon}><CarIcon/></span>
        <span> Your Cart</span>
        <span className={classes.badge}>5</span>
    </button>
}

export default HeaderCardButton;