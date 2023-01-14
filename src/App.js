import React from "react";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import Roadmap from "./pages/Roadmap/Roadmap";
import Home from "./pages/Home/Home";
import FeedbackView from "./pages/Feedback/FeedbackView"
import FeedbackEdit from "./pages/Feedback/FeedbackEdit"
import FeedbackAddPage from "./pages/Feedback/FeedbackAddPage"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App(){

  const navigate = useNavigate()
  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/feedback/:id" element={<FeedbackView />} />
      {/* <Route exact path="/feedback/:id/edit" element={<FeedbackEdit />} /> */}
      <Route path="/add" element={<FeedbackAddPage />} />
    </Routes>

    </>
    
      
  )
}