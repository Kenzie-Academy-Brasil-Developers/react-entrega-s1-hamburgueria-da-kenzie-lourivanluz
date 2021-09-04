import { useState } from "react";
import "./App.css";
import { ListItens } from "./components/ListItens";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [isSearching, setIsSearching] = useState(false);

  const showProducts = (searchName) => {
    if (searchName !== "") {
      const item = products.filter((item) =>
        item.name.toLowerCase().includes(searchName)
      );
      setSearchInput("");
      if (item.length !== 0) {
        setFilteredProducts([...item]);
        setIsSearching(true);
      }
    } else {
      setIsSearching(false);
    }
  };

  const handleClick = (productId) => {
    const product = products.find((item) => item.id === productId);
    const includeThis = currentSale.includes(product);
    if (!includeThis) {
      setCurrentSale([...currentSale, product]);
    } else {
      alert("ja existe");
    }
  };

  const deleteItem = (productId) => {
    setCurrentSale(currentSale.filter((item) => item.id !== productId));
  };

  const teste = currentSale.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="App">
      <div className="App-header">
        <div className="countainer-search">
          <input
            placeholder="Buscar produto"
            type="text"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <button onClick={() => showProducts(searchInput)}>
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>

      <div className="listItens">
        <div>
          <h2 onClick={() => setIsSearching(false)}>Menu</h2>
          <ListItens
            products={isSearching ? filteredProducts : products}
            handleClick={handleClick}
            typeList={"menu"}
          />
        </div>
        <div>
          <h2 onClick={() => setCurrentSale([])}>Carrinho</h2>
          <ListItens
            products={currentSale}
            typeList={"cart"}
            deleteItem={deleteItem}
          />
        </div>
      </div>
      <h2 className="preco">Preço total: {teste.toFixed(2)}</h2>
    </div>
  );
}

export default App;
