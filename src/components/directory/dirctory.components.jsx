
import CategoryItem from "../category/categroy-item.components";
import './directory.style.scss';
const Dirctory=({derctories})=>{
    
    return(
        <div className="directory-container">
      {derctories.map((category)=>(
        <CategoryItem key={category.id} category={category} />
      
      ))}
        
    </div>
    )
}
export default Dirctory