import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

const Pagination = ({info, pageNumber, setPageNumber}) => {
  let [width, setWidth] = useState(window.innerWidth);
  let updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
    
  return  (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
  <ReactPaginate 
  className="pagination justify-content-center my-4 gap-4"
  forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
  nextLabel="Next"
  previousLabel="Prev"
  nextClassName="btn btn-primary fs-5 next"
  previousClassName="btn btn-primary fs-5 prev"
  pageClassName="page-item"
  pageLinkClassName="page-link"
  marginPagesDisplayed={width < 576 ? 1 : 2}
  pageRangeDisplayed={width < 576 ? 1 : 2}
  activeClassName="active"
  onPageChange={(data)=> {
    setPageNumber(data.selected + 1)
  }}
  pageCount={info?.pages}/>
   </>
    

  
)}

export default Pagination