import React, { useState, useEffect } from "react";
import blogs from "../blogposts/blogposts.json";

export const DOTS = "...";


function usePagination({pageNumber}) {
  const totalCount = blogs.posts.length;
  const defaultPaginationData = blogs.posts.slice(0, 15)
  const defaultPageSize = 15;
  const defaultLastPage = Math.ceil(totalCount / defaultPageSize)

  const [isSettingPage, setIsSettingPage] = useState(false);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [lastPage, setLastPage] = useState(defaultLastPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, DOTS, lastPage]);
  const [currentPaginationData, setCurrentPaginationData] = useState(defaultPaginationData);

  // call this function to conditionally change the displayed pageNumbers used in Pagination based on the currentPage currently being viewed.
  const changePageNumbers = () => {
    let prevSib = currentPage - 1;
    let nextSib = currentPage + 1;
    let updatedPageNumbers;
    if (totalCount <= pageSize) {
      updatedPageNumbers = [1];
    }
        // if total blog posts 25 or less...
   else if (totalCount <= 25) {
      updatedPageNumbers = [1, 2];
  }

  // if total blog posts less than 50, more than 25...
  else if (totalCount <= 50 && totalCount > 25) {
    if (lastPage === 2){
    updatedPageNumbers = [1, lastPage];
    }
    else if (lastPage === 4){
      updatedPageNumbers = [1, 2, 3, lastPage];
      }
      else {
        updatedPageNumbers = [1]
      }
}

  // if total blog posts more than 50, less than 75...
 else if (totalCount <= 75 && totalCount > 50) {
  if (lastPage === 5){
    updatedPageNumbers = [1, 2, 3, lastPage -1, lastPage];
    }
    else if (lastPage === 3){
      updatedPageNumbers = [1, 2, lastPage];
      }
       else if (lastPage === 2){
      updatedPageNumbers = [1, 2];
      }
      else {
        updatedPageNumbers = [1]
      }
}

    else {
      // if the totalCount is 75 and the lastPage is 2 (50 per page selected)
      if (lastPage === 2){
        updatedPageNumbers = [1, 2];
        }
    // if on last page
     else if (currentPage === lastPage) {
      updatedPageNumbers = [1, DOTS, lastPage - 2, lastPage - 1, lastPage];
      setLastPage(currentPage);
    }
    // if on 2nd last page
    else if (currentPage === lastPage - 1) {
      updatedPageNumbers = [1, DOTS, lastPage - 2, lastPage - 1, lastPage];
    }
    // if navigate back to 1st page
    else if (currentPage === 1) {
      updatedPageNumbers = [1, 2, 3, DOTS, lastPage];
    }
    // if on 2nd page
    else if (currentPage === 2) {
      updatedPageNumbers = [1, DOTS, currentPage, nextSib, nextSib + 1, DOTS, lastPage];
    }
    // in any other case
    else {
      updatedPageNumbers = [1, DOTS, prevSib, currentPage, nextSib, DOTS, lastPage];
    }
  }
  console.log(updatedPageNumbers, totalCount)
    setPageNumbers(updatedPageNumbers)
  };

  //  when either currentPage or pageSize are changed, call changePageNumbers to update them to reflect the current position in navigation / the current pageSize.
  useEffect(() => {
    changePageNumbers();
  }, [currentPage, pageSize]);

  // onClick 'next' button in Pagination component, currentPage state + 1
  const onNext = () => {
    setCurrentPage(currentPage + 1);
  };

  // onClick 'previous' button in Pagination component, currentPage state - 1
  const onPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  // when currentPage state changes, set currentPaginationData to the following data sliced from blog.posts array
  useEffect(() => {
    let indexStart = (currentPage - 1) * pageSize;
    const updatedPaginationData = blogs.posts.slice((indexStart), (indexStart) + (pageSize))
    setCurrentPaginationData(updatedPaginationData);
  }, [currentPage]);

  // onClick of page number in Paginaton, set currentPage state to the number clicked on. Set isSettingPage boolean to 'true'.
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setIsSettingPage(true);
  };

  // when isSettingPage set to true by onPageChange function, set currentPaginationData to the following data sliced from blog.posts array. Then, re-set the same boolean to false.
  useEffect(() => {
    if (isSettingPage) {
      let indexStart = (currentPage - 1) * pageSize;
      const updatedPaginationData = blogs.posts.slice((indexStart), (indexStart) + (pageSize))
      setCurrentPaginationData(updatedPaginationData);
      setIsSettingPage(false);
    }
  }, [isSettingPage]);

  // onPageSizeOptionChange in Pagination component. When option changed, call this function with the current size as an argument.
  // Set page size to this size, then call changePageNumbers() to trigger a change in the number of pages that contain data.
  const updateRowsPerPage = (size) => {
    setPageSize(size);
    changePageNumbers();
  };

  //  when pageSize state changes, set 'indexStart' variable to get correct starting index to slice array based on pageSize.
  // slice currentPaginationData to reflect changed pageSize.
  useEffect(() => {
    let indexStart = (currentPage - 1) * pageSize;
    const updatedPaginationData = blogs.posts.slice((indexStart), (indexStart) + (pageSize))
    setCurrentPaginationData(updatedPaginationData);
    // set currentPage state to 1 to display 1st page; set lastPage state to change lastPage icon.
    setCurrentPage(1);
    setLastPage(Math.ceil(totalCount / pageSize));
  }, [pageSize]);

  // when lastPage set in the above useEffect, call changePageNumbers to refresh the pageNumbers state and immediately change the rendered pageSize.
  useEffect(() => {
    changePageNumbers();
  }, [lastPage]);

  return {
    pageNumbers,
    lastPage,
    pageSize,
    updateRowsPerPage,
    currentPage,
    currentPaginationData,
    onPageChange,
    onNext,
    onPrev,
  };
}

export default usePagination;
