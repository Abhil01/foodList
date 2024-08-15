import styles from "./item.module.css";
function Item({fooditem})
{
    return <li className={`list-group-item ${styles.product}`}>{fooditem}</li>;
}export default Item;