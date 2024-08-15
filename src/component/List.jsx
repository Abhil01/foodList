import Item from "./Item";
function List({ items })
{
    return <ul className="list-group"> 
    {items.map((item)=> 
      <Item fooditem={item}></Item> 
  )}
    </ul>
}
export default List;