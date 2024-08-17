import styles from "./item.module.css";
function Item({fooditem , itemRemove})
{   
    return <div className={styles.container}><li className={` ${styles.product} list-group-item`}>{fooditem}</li>
    <button type="button" className={`btn btn-danger ${styles.btn}` } onClick={()=>itemRemove(fooditem)}>Delete</button>
    </div>;
}export default Item;