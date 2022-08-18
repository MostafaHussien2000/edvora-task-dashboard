import ProductsTable from "./ProductsTable";

import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

function ProductsPagination({ products = [] }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ProductsTable products={currentItems} />
      <div className="products-table-pagination">
        <ReactPaginate
          breakLabel={"..."}
          nextLabel={<NextButton />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<PreviousButton />}
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}

export default ProductsPagination;

function PreviousButton() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19.608"
        height="9.779"
        viewBox="0 0 19.608 9.779"
      >
        <path
          id="Icon_ionic-ios-arrow-round-back"
          data-name="Icon ionic-ios-arrow-round-back"
          d="M13.194,11.439a.666.666,0,0,1,.005.937l-3.092,3.1H26.833a.662.662,0,0,1,0,1.324H10.108l3.1,3.1a.67.67,0,0,1-.005.937.659.659,0,0,1-.932-.005l-4.2-4.227h0a.744.744,0,0,1-.138-.209.632.632,0,0,1-.051-.255.664.664,0,0,1,.188-.463l4.2-4.227A.649.649,0,0,1,13.194,11.439Z"
          transform="translate(-7.882 -11.252)"
          fill="#9ca9b6"
        />
      </svg>
      <span style={{ color: "inherit" }}>Previous</span>
    </>
  );
}

function NextButton() {
  return (
    <>
      <span style={{ color: "inherit" }}>Next</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19.608"
        height="9.779"
        viewBox="0 0 19.608 9.779"
      >
        <path
          id="Icon_ionic-ios-arrow-round-back"
          data-name="Icon ionic-ios-arrow-round-back"
          d="M13.194,11.439a.666.666,0,0,1,.005.937l-3.092,3.1H26.833a.662.662,0,0,1,0,1.324H10.108l3.1,3.1a.67.67,0,0,1-.005.937.659.659,0,0,1-.932-.005l-4.2-4.227h0a.744.744,0,0,1-.138-.209.632.632,0,0,1-.051-.255.664.664,0,0,1,.188-.463l4.2-4.227A.649.649,0,0,1,13.194,11.439Z"
          transform="translate(27.49 21.031) rotate(180)"
          fill="#9ca9b6"
        />
      </svg>
    </>
  );
}
