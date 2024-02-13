import { useState } from "react";

const Card=({id,image,info,price,name,removeTour})=>{

    const[readmore,setreadmore]=useState(false);

    const description= readmore ? info:`${info.substring(0,150)}....`;
    
    function readmorehandler(){
        setreadmore(!readmore);
    }
    return(
        <div className="card">
            <img src={image} className="image" alt="img"/>
            <div className="tourInfo">
                <div className="tourDetails">
                    <h4 className="tourPrice">	₹{price}</h4>
                    <h4 className="tourName">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="readMore" onClick={readmorehandler}>
                        {readmore ? `Show less` : `Read more`}
                    </span>
                </div>
            </div>
            <button className="btnred" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div >
    );
};

export default Card;