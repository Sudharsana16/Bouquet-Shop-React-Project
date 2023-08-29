import React from 'react';
import './Bamboo.css';
import { useState } from 'react';
function Jade(){
    const [jade1,setJade1]=useState(0)  
    const [jade2,setJade2]=useState(0)
    const [jade3,setJade3]=useState(0)
    const [jade4,setJade4]=useState(0) 
    const [jade5,setJade5]=useState(0) 
    const [jade6,setJade6]=useState(0) 
    return(
        <div>
            <h2>Jade plants</h2>
            <div className="plantgroup">
            <div className="plant_item">
                    <img src={require('../image/jade1.jpg')}></img>
                    <h3>Jade Plant 4 Glass Terrarium</h3>
                    <h3>Rs.399</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setJade1(jade1+1)}>Add to Cart</button>
                    <div className="additem">{jade1}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/jade2.jpg')}></img>
                    <h3>Happy Birthday Jade Plant Terrarium</h3>
                    <h3>Rs.499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setJade2(jade2+1)}>Add to Cart</button>
                    <div className="additem">{jade2}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/jade3.jpg')}></img>
                    <h3>Beautyful Jade Plant in White Plastic Pot</h3>
                    <h3>Rs.199</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setJade3(jade3+1)}>Add to Cart</button>
                    <div className="additem">{jade3}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/jade4.jpg')}></img>
                    <h3>Jade Plant Mason Jar Terrarium</h3>
                    <h3>Rs.399</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setJade4(jade4+1)}>Add to Cart</button>
                    <div className="additem">{jade4}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/jade5.jpg')}></img>
                    <h3>Jade Plant Beauty</h3>
                    <h3>Rs.399</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setJade5(jade5+1)}>Add to Cart</button>
                    <div className="additem">{jade5}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/jade6.jpg')}></img>
                    <h3>Forever Greateful to mon Jade Plant</h3>
                    <h3>Rs.499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setJade6(jade6+1)}>Add to Cart</button>
                    <div className="additem">{jade6}</div>
                    </div>
                </div>
                
        </div>
        </div>
    )
}
export default Jade;