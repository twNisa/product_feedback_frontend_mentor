import {toast} from "react-toastify"

const style = {
  position: "top-right",
  theme: "dark"
}

export const addSuccess = ()=>{
  toast.success("Feedback added.", style)
}
export const editSuccess = ()=>{
  toast.success("Feedback updated.", style)
}
export const feedbackExists = ()=>{
  toast.error("Feedback title clash.", style)
}