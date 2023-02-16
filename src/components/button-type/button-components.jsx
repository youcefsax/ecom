import './button-type.style.scss'
const buttonType={
    google:'google-sign-in',
    inverte:'inverte'
}
const Button=({children,buttonT,...other})=>{

   
    return(
        <button className={`button-container ${buttonType[buttonT]}`} {...other}>{children}</button>
    )
}
export default Button;