import { Filters, ProductList, Sort } from "./components";
import "./ProductsPage.scss";

const ProductsPage = () => {
  return (
    <main className="section">
      <div className="section-center products">
        <Filters className="products" />
        <div>
          <Sort />
          <ProductList />
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
