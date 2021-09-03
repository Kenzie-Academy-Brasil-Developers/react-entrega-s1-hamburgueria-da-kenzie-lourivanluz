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
  const [totalPrice, setTotalPrice] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  const [isSearching, setIsSearching] = useState(false);

  const showProducts = (searchName) => {
    if (searchName !== "") {
      const item = products.filter((item) => item.name === searchName);
      if (item.length !== 0) {
        setFilteredProducts([item[0]]);
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
      //gambiarra, o setCurrentSale nao estava funcionando como eu esperava
      let gambiarra = [...currentSale, product];
      setCurrentSale(gambiarra);
      setTotalPrice(gambiarra.reduce((acc, item) => acc + item.price, 0));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button onClick={() => showProducts(searchInput)}>Buscar</button>

        <ListItens
          products={isSearching ? filteredProducts : products}
          handleClick={handleClick}
          typeList={"menu"}
        />

        <p>Preço total: {totalPrice.toFixed(2)}</p>
        <ListItens products={currentSale} typeList={"cart"} />
      </header>
    </div>
  );
}

export default App;
