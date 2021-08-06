import React from "react";
import pic from './IMG.jpg';

const About = () =>{
    return(
 <div className="box-area">
<div className="banner-area">
                <h2>About </h2>
 </div>
   <div className="content-area"> 
<div className="resumes">
    <div className="lef">
        <div className = "img_holder">
            <img src={pic} alt="log" />
        </div>
        <div className = "contact_wrap">
            <div className="title">
                Contact
            </div>
            <div className="contact">
                <ul>
                    <li>
                        <div className="li_wrap">
                          <div className="icon"></div>
                             <div className="text">96096828258558</div>
                        </div>
                    </li>
                    <li>
                        <div className="li_wrap">
                          <div className="icon"></div>
                             <div className="text">96096828258558</div>
                        </div>
                    </li>
                    <li>
                        <div className="li_wrap">
                          <div className="icon"></div>
                             <div className="text">96096828258558</div>
                        </div>
                    </li>
                    <li>
                        <div className="li_wrap">
                          <div className="icon"></div>
                             <div className="text">96096828258558</div>
                        </div>
                    </li> 
                </ul>
            </div>
        </div>
    </div>
    <div className="rig"></div>
</div>
     
</div>  
</div>


 )
}

export default About;