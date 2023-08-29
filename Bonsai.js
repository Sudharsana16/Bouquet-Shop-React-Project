import React from 'react';
import './Bamboo.css';
import { useState } from 'react';
function Bonsai(){
    const [bonsai1,setBonsai1]=useState(0)  
    const [bonsai2,setBonsai2]=useState(0)
    const [bonsai3,setBonsai3]=useState(0)
    const [bonsai4,setBonsai4]=useState(0) 
    const [bonsai5,setBonsai5]=useState(0) 
    return(
        <div>
            <h2>Bonsai plants</h2>
            <div className="plantgroup">
            <div className="plant_item">
                    <img src={require('../image/bonsai1.jpg')}></img>
                    <h3>Potted Ficus Bonsai plant</h3>
                    <h3>Rs.1499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBonsai1(bonsai1+1)}>Add to Cart</button>
                    <div className="additem">{bonsai1}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/bonsai2.jpg')}></img>
                    <h3>Ficus Bonsai in Blue pot</h3>
                    <h3>Rs.1699</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBonsai2(bonsai2+1)}>Add to Cart</button>
                    <div className="additem">{bonsai2}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/bonsai3.jpg')}></img>
                    <h3>Nolina Palm Plant in Sky Blue Ceramic Pot</h3>
                    <h3>Rs.1749</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBonsai3(bonsai3+1)}>Add to Cart</button>
                    <div className="additem">{bonsai3}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/bonsai4.jpg')}></img>
                    <h3>Adenium Desert Rose & Money Plant combo</h3>
                    <h3>Rs.2899</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBonsai4(bonsai4+1)}>Add to Cart</button>
                    <div className="additem">{bonsai4}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/bonsai5.jpg')}></img>
                    <h3>Ficus Bonsai in Sea House Planter</h3>
                    <h3>Rs.1749</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBonsai5(bonsai5+1)}>Add to Cart</button>
                    <div className="additem">{bonsai5}</div>
                    </div>
                </div>
        </div>
        </div>
    )
}
export default Bonsai;