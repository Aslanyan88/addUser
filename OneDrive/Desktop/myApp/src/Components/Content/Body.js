import React from "react";
import "../../Styles/Body.css"
import dc1 from "../../Images/doctor1.webp"
import dc2 from "../../Images/doctor2.jpg"
import dc3 from "../../Images/doctor3.jpg"


const Body = () => {


    const obj = [
        {
            id:1,
            src: dc1,
            title: "Dr. Ramirez",
            text: "Neurology",
        },
        {
            id:2,
            src: dc2,
            title: "Dr. Jackobs" ,
            text: "Surgery",
        },
        {
            id:3,
            src: dc3,
            title: "Dr. Smith" ,
            text: "Psychiatry",
        },
    ]


    return (
        <>
            <div className="contentBody">
                <div className="contentContainer">

                { 
                    obj.map(({id,src,title,text}) => {

                    return (
                        <div key={id} className="pictureContainer">
                        <img src={src}></img>
                        <h2>{title}</h2>
                        <p>{text}</p>
                       </div>
                    )
                
                })
            }  
                </div>
            </div>
        </>
    )

}

export default Body;