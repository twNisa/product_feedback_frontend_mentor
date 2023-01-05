import {HomeContainer} from "./HomeElements"
import Sidebar from "../../components/Home/Sidebar/Sidebar";
import Main from "../../components/Home/Main/Main"

export default function Home(){
  return (
    <HomeContainer>
      <Sidebar />
      <Main />
      
    </HomeContainer>

  )
}