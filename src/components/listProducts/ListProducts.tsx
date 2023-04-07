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
        products.map((product: any) => (
          <div key={product.id} className="card">
            <img
              src={product.image}
              alt={`this is a image of ${product.title}`}
            />
            <div className="card-body">
              <div className="ro">
                <div className="card-title">
                  <h5 className="title">{product.title}</h5>
                  <div className="prices">
                    <span className="">{product.price}€</span>
                  </div>
                </div>
              </div>
              <hr />
              <p className="description">{product.description}</p>
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
