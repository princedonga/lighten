import React, { useState, useEffect } from 'react';
import ComonSecation from '../Componets/ComonSecation';
import ProductCard from './Catoegory/ProductCard';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

function Product() {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100); // Assuming a default maximum price of 100
  const [range, setRange] = useState([0, 100]);
  const productsPerPage = 8;

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setAllProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleRangeChange = (e) => {
    const [min, max] = e.target.value.split(',').map(Number);
    setMinPrice(min);
    setMaxPrice(max);
    setRange([min, max]);
  };

  // Filter products based on price range
  const filteredProducts = allProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);

  // Get current products for the page
  const offset = currentPage * productsPerPage;
  const currentProducts = filteredProducts.slice(offset, offset + productsPerPage);

  return (
    <div>
      <ComonSecation title="OUR PRODUCT" />
      <div className='py-5'>
        <p className='text-center' style={{ fontSize: "2vw" }}>We package the products with best services to make you a happy customer.</p>
      </div>
      <div className='container'>
        <div className='row mb-4'>
          <div className='col-12'>
            <label htmlFor="customRange1" className="form-label">Price Range: ${minPrice} - ${maxPrice}</label>
            <input
              type="range"
              className="form-range w-25"
              id="customRange1"
              min="0"
              max="100"
              value={range}
              onChange={handleRangeChange}
              step="1"
              multiple
            />
          </div>
        </div>
      </div>
      <div className='bg1 mt-5'>
        <div className='product-set'>
          <section className='container '>
            <div className='row g-4 mt-2 m1-set'>
              {
                currentProducts.map((item) => (
                  <div className='col-lg-3 col-md-6 col-sm-6 col-12' key={item.id}>
                    <ProductCard items={item} />
                  </div>
                ))
              }
            </div>
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={Math.ceil(filteredProducts.length / productsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
              className=''
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Product;
