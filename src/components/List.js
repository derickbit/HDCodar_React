import Item from "./Item";

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Motorola" lancamento={2015} />
        <Item marca="Apple" lancamento={2012} />
        <Item marca="Samsung" lancamento={2013} />
        <Item />
      </ul>
    </>
  );
}

export default List;
