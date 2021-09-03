import { Product } from "../Product";
import "./style.css";
export function ListItens({ products, handleClick, typeList }) {
  return (
    <ul>
      {products.map((item, index) => {
        return (
          <li key={index}>
            <Product item={item} />
            {typeList !== "cart" ? (
              <button onClick={() => handleClick(item.id)}>Adicionar</button>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
