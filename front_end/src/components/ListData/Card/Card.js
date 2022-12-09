
import "./Card.css"
    function Card({ title, description, poster_path}){
    return (
        <div className="card_container">
            <div className= "card">
                <h3 >{title}</h3>
                <p>{description}</p>
                <img alt="soc" width={"100%"} src={poster_path}/>
                    <div className="Button_Container">
                      
                    </div>
            </div>
            
        </div>
        )
    }
    export default Card;