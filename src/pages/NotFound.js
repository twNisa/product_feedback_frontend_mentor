import { FaAngleLeft } from "react-icons/fa"
import { BackButtonNavLink } from "../components/shared/BackButtonNavLink"
import { useNavigate } from "react-router-dom"

export default function NotFound(){

  const navigate = useNavigate()
  
  return (
    
    <>
    <BackButtonNavLink
        onClick={navigate("/product_feedback_frontend_mentor/")}
        lightBg
      >
        <FaAngleLeft />
        <span>Go Back</span>
    </BackButtonNavLink>
    404 Page not found
    </>
  )
}