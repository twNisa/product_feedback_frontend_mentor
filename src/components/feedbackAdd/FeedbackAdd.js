import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import {FeedbackAddContainer} from "./FeedbackAddElements"
export default function FeedbackAdd(){

  return (
    <FeedbackAddContainer>
      <NavLink
        to="/"
      >
        <FaAngleLeft />
        <span>Go Back</span>
      </NavLink>

    </FeedbackAddContainer>
  )


}
