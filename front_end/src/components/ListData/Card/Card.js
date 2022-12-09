// import data from "../../../data.json";
import { useContext } from "react";
import { dataContext } from "../../App";
import "./Card.css";
function Card() {
  const data = useContext(dataContext);
  // console.log(data);
  return (
    <>
      {data.map((data) => {
        return (
          <div className="card_container">
            <div className="card">
              <h3>{data.dino_name}</h3>
              <img
                alt="soc"
                width={"100%"}
                referrerPolicy="no-referrer"
                src={data.dino_image}
              />
              <p>{data.discovered}</p>
              <p>{data.height}</p>
              <p>{data.dietary}</p>
              <p>{data.discovery_date}</p>
            </div>
          </div>
        );
      })}
    </>
    // <div className="card_container">
    //   <div className="card">
    //     {data.map((data) => {
    //       return (<><h3> {data.Name}</h3></>)
    //     })}
    //     {/* <h3>{title}</h3>
    //     <p>{description}</p>
    //     <img alt="soc" width={"100%"} src={poster_path} />
    //      <div className="Button_Container"></div> */}
    //   </div>
    // </div>
  );
}
export default Card;
