import { RxThickArrowLeft, RxThickArrowRight } from 'react-icons/rx'

function Pagination() {
  return (
    <div>
     <button onClick={()=> getPrevious()} className="previous">
        <RxThickArrowLeft/>
     </button>
     <div>
        {page}  of {totalPage}
     </div>
     <button onClick={()=> getNext()} className="previous">
        <RxThickArrowRight/>
     </button>
    </div>
  )
}

export default Pagination