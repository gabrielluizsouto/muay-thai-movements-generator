const ListMovements = (movements) => {
  return (
    <ul> {console.log('###', movements.movements)}
      {movements && movements.movements && movements.movements.map(item => {
        return (<li>{item.name}</li>)
      })}
    </ul>
  );
}

export default ListMovements