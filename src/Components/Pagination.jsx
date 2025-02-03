
import ReactPaginate from 'react-paginate'

function Pagination() {
  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
         onPageChange={(e)=>console.log('e', e)}
        pageRangeDisplayed={2}
        pageCount={10}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
  )
}

export default Pagination
