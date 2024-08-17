import Item from "./Item";
function List({ items , toRemove })
{  
    return <ul className="list-group"> 
    {items.map((item)=> 
      <Item fooditem={item} itemRemove={toRemove}></Item> 
  )}
    </ul>
}
export default List;