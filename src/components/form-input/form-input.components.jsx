import './form.style.scss'
const FormInput=({label,...otherInput})=>{
    return(
        <div className="group">
                         <input className="form-input" {...otherInput}></input>

            {label && (
                <label className={`${otherInput.value.length ?'shrink':''}form-input-label`}>
            {label}
            </label>
            )}
            
        </div>
    )
}
export default FormInput