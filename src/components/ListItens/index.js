import { Product } from "../Product";
import "./style.css";
export function ListItens({ products, handleClick, typeList, deleteItem }) {
  return (
    <ul>
      {products.map((item, index) => {
        return (
          <li key={index}>
            <Product item={item} />

            {typeList !== "cart" ? (
              <button
                onClick={() => {
                  handleClick(item.id);
                }}
              >
                +
              </button>
            ) : (
              <button
                onClick={() => {
                  deleteItem(item.id);
                }}
              >
                -
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}
