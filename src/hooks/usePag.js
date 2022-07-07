export const DOTS = "...";
import React, { useState, useEffect, useMemo } from "react";
import blogs from "../data/blogs.json";

function usePagination({pageNumber}) {
  const totalCount = blogs.posts.length;
  const defaultPageSize = 15;
  const defaultPaginationData = blogs.posts.slice(0, 15)
  const defaultLastPage = Math.ceil(totalCount / defaultPageSize)

  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPaginationData, setCurrentPaginationData] = useState(defaultPaginationData);

  /* This hook was written to handle all state changes in the Pagination and Bloglist components in this application.

  The essential functionality of this hook is as follows:
  1) Change which blog posts are displayed on the current page depending on which page the user has navigated to (taken from the local blogs.json file).
  2) Change the number of blog posts displayed per page depending on the pageSize selected from the dropdown options menu.
  3. Change which pagination numbers are displayed when navigating through the different pages; change the total number of available pages to navigate through depending on which pageSize is selected.

  These three pieces of functionality are accomplished using React's useState, useMemo and useEffect hooks, as well as several arrow functions. For a more detailed explanation of the hook's functionality, please see the inline commments below.
  */

// returns starting index for pagination data slicing
  const getIndexStart = (currentPage, pageSize) => {
    let indexStart = (currentPage - 1) * pageSize 
    return indexStart
  }

// memoizes computed starting index 
  const indexStart = useMemo(() => getIndexStart(currentPage, pageSize), [currentPage, pageSize]);

// returns currentLastPage number for pagination numbers array
  const getLastPage = (totalCount, pageSize) => {
    const currentLastPage = Math.ceil(totalCount / pageSize)
    return currentLastPage
  }

 // memoizes computed currentLastPage
  const currentLastPage = useMemo(() => getLastPage(totalCount, pageSize), [totalCount, pageSize]);

  // returns array of page numbers to be used in the pagination component
  const getPageNumbers = (pageSize, currentPage, currentLastPage) => {
    const prevSib = currentPage - 1;
    const nextSib = currentPage + 1;
    let currentPageNumbers;
    // if only one page
    if (pageSize === 1) {
      currentPageNumbers = [1];
    }
    // if on last page
    else if (currentPage === currentLastPage) {
      currentPageNumbers = [1, DOTS, currentLastPage - 2, currentLastPage - 1, currentLastPage];
      // setcurrentLastPage(currentPage);
    }
    // if on 2nd last page
    else if (currentPage === currentLastPage - 1) {
      currentPageNumbers = [1, DOTS, currentLastPage - 2, currentLastPage - 1, currentLastPage];
    }
    // if navigate back to 1st page
    else if (currentPage === 1) {
      currentPageNumbers = [1, 2, 3, DOTS, currentLastPage];
    }
    // if on 2nd page ** edited to follow same rule as when on 2nd last page **
    else if (currentPage === 2) {
      currentPageNumbers = [1, currentPage, nextSib, DOTS, currentLastPage];
    }
    // in any other case
    else {
      currentPageNumbers = [1, DOTS, prevSib, currentPage, nextSib, DOTS, currentLastPage];
    }
    return currentPageNumbers
   };

    // memoizes computed currentPageNumbers array
   const currentPageNumbers = useMemo(() => getPageNumbers(pageSize, currentPage, currentLastPage), [pageSize, currentPage, currentLastPage]);

// slices blog data array; sets currentPaginationData state to sliced array
const getPaginationData = (indexStart, pageSize) => {
  const currentPaginationData = blogs.posts.slice((indexStart), (indexStart + pageSize))
  setCurrentPaginationData(currentPaginationData);
}

// when currentPage or pageSize change, call getPaginationData to change currentPaginationData state 
   useEffect(() => {
    getPaginationData(indexStart, pageSize)
  }, [currentPage, pageSize]);


  // returns the next page (unless on the last page)
  const getNextPage = (currentPage) => {
    if (currentPage === currentLastPage) {
      return currentPage
    } else {
      return currentPage + 1;
    }
  }

  // memoizes the next page returned by getNextPage
  const nextPage = useMemo(() => getNextPage(currentPage), [currentPage]);

  // onClick 'next' button in Pagination component, set currentPage state
  const onNext = () => {
    setCurrentPage(nextPage);
  }
  
    // returns the previous page (unless on the first page)
    const getPrevPage = (currentPage) => {
    if (currentPage === 1) {
     return 1
    } else {
     return currentPage - 1
    }
    }
  // memoizes the previous page returned by getPrevPage
    const prevPage = useMemo(() => getPrevPage(currentPage), [currentPage]);

   // onClick 'previous' button in Pagination component, currentPage state - 1
    const onPrev = () => {
      setCurrentPage(prevPage);
    }
    
  // onClick page number selection in Paginaton, set currentPage state
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // onPageSizeOptionChange in Pagination - when option changes, set pageSize state
  const onPageSizeChange = (pageSize) => {
    setPageSize(pageSize);
  };

  //  when pageSize state changes, set currentPage state to 1
  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize]);

  return {
    currentPageNumbers,
    currentLastPage,
    pageSize,
    onPageSizeChange,
    currentPaginationData,
    currentPage,
    onPageChange,
    onNext,
    onPrev,
  };
}

export default usePagination;
