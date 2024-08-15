import Container from "./component/Container";
import Head from "./component/Head";
import List from "./component/List";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
   
    let foodlist = ['Ghee','Sabzi','Roti','Salad','Carrot'];  
  return (
    <>   <Container>
    <Head></Head>
    <List items={foodlist}></List>
   </Container>
   <Container>
    <p>Above are list of good food Items</p>
   </Container>
   </>

  )
}

export default App
