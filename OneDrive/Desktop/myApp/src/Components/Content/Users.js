import React from "react";
import "../../Styles/Users.css"



const Users = ({users}) => {
    return (
        <>
            <div className="contentBody2">
                <div className="contentContainer2">

                { 
                    users.map(({id,src,title,text}) => {

                    return (
                        <div key={id} className="pictureContainer2">
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

export default Users;