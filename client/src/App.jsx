import Card from "./components/Card";
import Header from "./components/Header";
import Slider from "./components/Slider";

export default function App(){
  return (
    <div>
      <Header/>
      <Slider/>
      <div className="container my-4">
        <h1>
          courses
        </h1>
      </div>
      <div className="my-4 d-flex justify-content-space-between">
        <Card title="card1" desc="new card"/>
        <Card title="card2" desc="new card"/>
        <Card title="card3" desc="new card"/>
      </div>
      <div style={{backgroundColor: "black", width: "100%", height: "50px"}}></div>
    </div>
  )
}