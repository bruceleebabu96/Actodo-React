
import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom"

function Landing()

{

    const data = useLocation();
    return (

        <div className="bg-black p-16">
        <div className="bg-slate-50 p-10 rounded-md">
          <Header name={data.state.user}></Header>
          <div className="flex flex-wrap gap-7 my-5">
            <Card color={"#8272DA"} title={"23"} subtitle={"chennai"}></Card>
            <Card color={"#FD6663"} title={"December"} subtitle={"12:33"}></Card>
            <Card color={"#FCA201"} title={"Built Using"} subtitle={"React"}></Card>
          </div>
          
          <TodoContainer></TodoContainer>
          
          </div>
  
  
      </div>
    )
}


export default Landing