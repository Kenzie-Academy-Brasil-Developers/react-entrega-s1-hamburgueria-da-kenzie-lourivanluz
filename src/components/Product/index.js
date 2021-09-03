//{ id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
export function Product({ item: { name, category, price } }) {
  return (
    <div>
      <h3>{name}</h3>
      <p> {category} </p>
      <p> {price} </p>
    </div>
  );
}
