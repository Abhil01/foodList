import Container from "./component/Container";
import Head from "./component/Head";
import List from "./component/List";
import Error from "./component/Error";
import Input from "./component/Input";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import styles from "./app.module.css";
function App() {
   
    
    let [foodlist, setTextAdd] = useState(['Ghee','Sabzi','Roti','Salad']);
    
   const Render = (item)=>{
    let arr = [...foodlist,item];
    setTextAdd(arr);
   }
    
    // const onKeyDown =(event) =>
    // { if (event.key === "Enter") {
    //   let newFoodItem = event.target.value;
    //   event.target.value="";
    //   let newfoodlist =[...textAdd,newFoodItem]
    //   setTextAdd(newfoodlist);
    // }
    const Delete=(product) => {
       let value  = product;  
      let filter = foodlist.filter(item => item!==value);
        setTextAdd(filter);
    }
    
  return (
    <div className={styles.con}>   <Container>
    <Head></Head>
    <Input toAdd={Render} ></Input>
    <Error items={foodlist}></Error>
    <List items={foodlist} toRemove={Delete}></List>
   </Container>
   </div>

  )
}

export default App
