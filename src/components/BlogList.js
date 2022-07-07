import React from "react";
import BlogPostPreview from "./BlogPostPreview";
import Pagination from "./Pagination";
import blogs from "../blogposts/blogposts.json";
import usePagination from "../hooks/usePagination"

const pageSizes = [15, 25, 50, 100];

function BlogList({
  onPageSizeOptionChange,
  totalCount,
  pageSizeOptions,
}) {
  const {pageNumbers, lastPage, currentPaginationData, pageSize, updateRowsPerPage, currentPage, onPageChange, onNext, onPrev} = usePagination({ totalCount})

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
        pageSizeOptions={pageSizes}
        onPageChange={onPageChange}
        onNext={onNext}
        onPrev={onPrev}
        onPageSizeOptionChange={updateRowsPerPage}
        pageNumbers={pageNumbers}
        lastPage={lastPage}
      />
      <ul>
        {currentPaginationData.map((blog) => {
return (
          <BlogPostPreview
          key={blog.id}
            id={blog.id}
            author={blog.author}
            title={blog.title}
            preview={blog.preview}
            featureImage={blog.image}
          />
)}
        )} 
      </ul>
    </div>
  );
}

export default BlogList;
