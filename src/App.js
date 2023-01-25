import React from "react";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import Roadmap from "./pages/Roadmap/Roadmap";
import Home from "./pages/Home/Home";
import FeedbackViewPage from "./pages/Feedback/FeedbackViewPage"
import FeedbackEdit from "./pages/Feedback/FeedbackEdit"
import FeedbackAddPage from "./pages/Feedback/FeedbackAddPage"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/NotFound";

export default function App(){

  const navigate = useNavigate()
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/product_feedback_frontend_mentor/" element={<Home /> } />
        <Route path="product_feedback_frontend_mentor/roadmap" element={<Roadmap />} />
        <Route path="product_feedback_frontend_mentor/feedback/:id/" element={<FeedbackViewPage />} />
        <Route exact path="product_feedback_frontend_mentor/feedback/edit/:id" element={<FeedbackEdit />} />
        <Route path="product_feedback_frontend_mentor/add" element={<FeedbackAddPage />} />
        <Route path="*" element={<NotFound /> } />
      </Routes>
      
    </>

  )
}