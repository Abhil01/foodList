import { useState } from "react";
import styles from "./input.module.css";
function Input({toAdd})
{    let [item,setItem] = useState("");
     let product= "";
     const itemGet=(event)=>{
        product = event.target.value;
    
        setItem(product);
     }
     const handle=()=>{
          toAdd(item);
          setItem("");
     }
     return <>
      <input className={styles.input}type="text" value={item}  placeholder="Enter item"
      onChange={itemGet}/>
      <button className={styles.btn} onClick={handle}  >ADD</button>
     </>
}
export default Input;