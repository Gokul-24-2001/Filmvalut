import { IoMdFastforward } from "react-icons/io";
import { AiOutlineBackward } from "react-icons/ai";
function Pagination({prev,next,pagenumber}){
    return(
        <div className="bg-dark fs-5 d-flex text-white justify-content-center p-2 mt-4">
          <div onClick={prev} className="px-3 "><AiOutlineBackward/></div> 
          <div>{pagenumber}</div>
          <div onClick={next}className="px-3"><IoMdFastforward/></div>
        </div>
    )
}
export default Pagination;