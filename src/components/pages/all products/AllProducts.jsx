import React, { useContext } from "react";
import BreadCrum from "../../layout/breadcrum/BreadCrum";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import ItemCard from "../home/Items/ItemCard";
import "./AllProducts.css";
import TopBack from "./top back/TopBack";
import { FaTh, FaAlignJustify, FaFilter } from "react-icons/fa";
import ReactPaginate from "react-paginate";

import ProductContext from "../../../context/ProductContext";
import { useState } from "react";

const AllProducts = () => {
  let { products } = useContext(ProductContext);

  // static content
  const brands = ["apple", "samsung"];
  const accs = ["ear pod", "Watches", "charging devices", "headphone"];

  let [pRange, setPRange] = useState(0);
  let [brand, setBrand] = useState("");
  let [acc, setAcc] = useState("");

  // mobile filter show
  let [mFilter, setMFilter] = useState(false);

  // states for pagination
  let [perPage, setPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  // count brands
  const countBrand = (brand) => {
    return products.filter((p) => p.brand.toLowerCase() === brand).length;
  };

  // count Accessories
  const countAcc = (acc) => {
    return products.filter(
      (p) => p.accessory.toLowerCase() === acc.toLowerCase()
    ).length;
  };

  const filterBrand = (products) => {
    if (!brand) {
      return products;
    }

    const filteredItems = products.filter((p) => {
      return p.brand.toLowerCase() === brand;
    });

    return filteredItems;
  };

  const filterPrice = (products) => {
    if (!pRange) {
      return products;
    }

    const filteredItems = products.filter((p) => {
      return p.discounted_price <= Number(pRange);
    });

    return filteredItems;
  };

  const filterAcc = (products) => {
    if (!acc) {
      return products;
    }

    const filteredItems = products.filter((p) => {
      return p.accessory.toLowerCase() === acc.toLowerCase();
    });

    return filteredItems;
  };

  // filtering products
  let filteredItems = [...products];
  filteredItems = filterBrand(filteredItems);
  filteredItems = filterPrice(filteredItems);
  filteredItems = filterAcc(filteredItems);

  // Pagination logic
  const offset = currentPage * perPage;
  const currentPageData = filteredItems.slice(offset, offset + perPage);
  const pageCount = Math.ceil(filteredItems.length / perPage);

  // clear filter
  const clearFilter = () => {
    setPRange(0);
    setBrand("");
    setAcc("");
    setPerPage(3);
    setMFilter(false);
  };

  //  change page
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // select perPage
  const handleShow = (e) => {
    setPerPage(Number(e.target.value));
    setCurrentPage(0);
  };

  // mobile-navigation
  const changePage = (text) => {
    if (text === "prev") {
      setCurrentPage(currentPage - 1);
    } else if (text === "next") {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Header />
      <BreadCrum path="store / Accessories" />
      <div className="container">
        <div className="all-products">
          <div className="filters">
            <div className="accesory-filter">
              <h4 className="acc-head">ACCESORIES</h4>
              {accs.map((accs, index) => {
                return (
                  <div
                    key={index}
                    className={acc === accs ? "filter-active" : ""}
                  >
                    <div
                      className="acc-name"
                      onClick={() => {
                        setAcc(accs);
                        setCurrentPage(0);
                      }}
                    >
                      {accs}
                    </div>
                    <div className="acc-count">{countAcc(accs)}</div>
                  </div>
                );
              })}
            </div>

            <div className="price-filter">
              <h3 className="price-head">Prices</h3>
              <div className="range">
                <h3>Range</h3>
                <h3 className="range-value">$ {pRange}</h3>
              </div>
              <input
                type="range"
                min={0}
                max={2000}
                value={pRange}
                onChange={(e) => setPRange(e.target.value)}
              />
            </div>

            <div className="brand-filter">
              <h3 className="brand-head">brand</h3>
              {brands.map((b, index) => {
                return (
                  <div
                    className={brand === b ? "filter-active brands" : "brands"}
                    key={index}
                  >
                    <div
                      className="brand"
                      onClick={() => {
                        setBrand(b);
                        setCurrentPage(0);
                      }}
                    >
                      {b}
                    </div>
                    <div className="brand-count">{countBrand(b)}</div>
                  </div>
                );
              })}
            </div>

            <button className="clr-filtr" onClick={clearFilter}>
              clear filters
            </button>
          </div>
          <div className="products">
            <TopBack />
            <div className="filter-sub">
              <div className="filter-sub-div">
                <div className="filtered-items-count">
                  {filteredItems.length} items
                </div>
                <div className="filtered-sort">
                  <h5>Sort By</h5>
                  <select>
                    <option value="name">Name</option>
                  </select>
                </div>
                <div className="filtered-sort sub2">
                  <h4>Show</h4>
                  <select onChange={handleShow} value={perPage}>
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                  </select>
                </div>
                <div className="mobile-filters">
                  <FaFilter />{" "}
                  <span onClick={() => setMFilter(!mFilter)}>Filter</span>
                  {mFilter && (
                    <div className="mobile-filter-dropdown">
                      <div className="m-d-filter">
                        <select
                          onChange={(e) => setBrand(e.target.value)}
                          value={brand}
                        >
                          <option value="">Select Brand</option>
                          {brands.map((brand) => {
                            return <option value={brand}>{brand}</option>;
                          })}
                        </select>
                      </div>
                      <div className="m-d-filter">
                        <select
                          onChange={(e) => setAcc(e.target.value)}
                          value={acc}
                        >
                          <option value="">Select Accessory</option>
                          {accs.map((acc) => {
                            return <option value={acc}>{acc} </option>;
                          })}
                        </select>
                      </div>
                      <button
                        className="close-mobile-filter-dropdown"
                        onClick={() => setMFilter(!mFilter)}
                      >
                        close
                      </button>
                      <button
                        className="close-mobile-filter-dropdown"
                        onClick={clearFilter}
                      >
                        clear filter
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <FaTh size={"4rem"} className="mr-1 filter-icon" />
                <FaAlignJustify size={"4rem"} className="mr-1 filter-icon" />
              </div>
            </div>
            <div className="filtered-items">
              {currentPageData.map((p) => {
                return <ItemCard product={p} key={p.id} />;
              })}
            </div>

            <ReactPaginate
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              pageLinkClassName={"page-link"}
              previousLinkClassName={"page-link"}
              nextLinkClassName={"page-link"}
              breakLinkClassName={"page-link"}
              activeClassName={"page-active"}
              breakLabel={"..."}
            />

            <div className="pagination-mobile">
              <button
                className="pbtn"
                onClick={() => changePage("prev")}
                disabled={currentPage === 0 ? true : false}
              >
                Previous
              </button>
              <button
                className="pbtn next-btn"
                onClick={() => changePage("next")}
                disabled={currentPage === pageCount - 1 ? true : false}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
