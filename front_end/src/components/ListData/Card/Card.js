import data from "../../../data.json";

import "./Card.css";
function Card() {
  console.log(data);
  return (
    <>
      {data.map((data) => {
        return (
          <div className="card_container">
            <div className="card">
              <h3>{data.Name}</h3>
              {console.log(data.Picture)}
              <img
                alt="soc"
                width={"100%"}
                referrerPolicy="no-referrer"
                src={data.Picture}
              />
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
