import styles from '../../styles/Home.module.css'

const ListMovements = (movements) => {
  return (
    <div className={styles.movements_list}>
      {movements && movements.movements && movements.movements.map(item => {
        return (<div className={styles.movements_list_item}>{item.name}</div>)
      })}
    </div>
  );
}

export default ListMovements