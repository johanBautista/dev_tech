import { useEffect } from "react";
import { fetchProducts } from "./features/products/productSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./app/store";
import "./App.css";
import ListCards from "./components/listProducts/ListProducts";
import Dropdown from "./components/dropdown/Dropdown";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const filterProducts = useSelector(
    (state: RootState) => state.products.leakedProducts
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <header>
        <h1>Edatalia test</h1>
      </header>
      <main className="container">
        <h1>Lista de productos</h1>
        <section className="selector">
          <p>Filter:</p>
          <Dropdown />
        </section>
        <section>
          <ListCards products={filterProducts} />
        </section>
      </main>
      <footer>
        <p>© Tu Tienda en Línea 2023. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
