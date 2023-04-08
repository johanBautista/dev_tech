/* eslint-disable jsx-a11y/img-redundant-alt */
import { ApiProduct } from "../../shared/ApiProducts";
import "./ListProducts.css";
import Spinner from "../spinner/Spinner";

export interface ProductList {
  products: ApiProduct[];
}

const ListCards = ({ products }: ProductList) => {
  return (
    <div className="listProducts">
      {products.length === 0 ? (
        <Spinner />
      ) : (
        products.map((product: ApiProduct) => (
          <div key={product.id} className="card">
            <img
              src={product.image}
              alt={`this is a image of ${product.title}`}
            />
            <div className="card--body">
              <div>
                <h5 className="card--title">{product.title}</h5>
                <span className="card--price">{product.price}€</span>
              </div>
              <hr />
              <p className="card--description">{product.description}</p>
              <div className="btn-group">
                <div className="btn">
                  <a href="/">Buy Now</a>
                </div>
                <a href="/"> Cancel</a>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ListCards;
