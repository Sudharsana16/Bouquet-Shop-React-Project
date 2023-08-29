import React from 'react';
import './Bamboo.css';
import {useMemo,useState} from 'react'
function Bamboo(){
    const [bamboo1,setBamboo1]=useState(0)  
    const [bamboo2,setBamboo2]=useState(0)
    const [bamboo3,setBamboo3]=useState(0)
    const [bamboo4,setBamboo4]=useState(0) 
    const [bamboo5,setBamboo5]=useState(0) 
    const [bamboo6,setBamboo6]=useState(0) 
    return(
        <div>
            <h2>Bamboo Plants</h2>
            <div className="plantgroup">
            <div className="plant_item">
                    <img src={require('../image/bamboo1.jpg')}></img>
                    <h3>Bringing Good Luck 2 Layer Bamboo</h3>
                    <h3>Rs.599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBamboo1(bamboo1+1)}>Add to Cart</button>
                    <div className="additem">{bamboo1}</div>
                    </div>
                    </div>
                <div className="plant_item">
                    <img src={require('../image/bamboo2.jpg')}></img>
                    <h3>Two Layer Bamboo Plant Standard</h3>
                    <h3>Rs.389</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBamboo2(bamboo2+1)}>Add to Cart</button>
                    <div className="additem">{bamboo2}</div>
                    </div>
                    </div>
                <div className="plant_item"> 
                    <img src={require('../image/bamboo3.jpg')}></img>
                    <h3>Exquisite three Layer Bamboo Terrarium</h3>
                    <h3>Rs.1049</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBamboo3(bamboo3+1)}>Add to Cart</button>
                    <div className="additem">{bamboo3}</div>
                    </div>
                    </div>
                    
                <div className="plant_item">
                    <img src={require('../image/bamboo4.jpg')}></img>
                    <h3>2 Layer Bamboo plant in Elephant Ceramic Pot</h3>
                    <h3>Rs.999</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBamboo4(bamboo4+1)}>Add to Cart</button>
                    <div className="additem">{bamboo4}</div>
                    </div>
                   </div>
                <div className="plant_item">
                    <img src={require('../image/bamboo5.jpg')}></img>
                    <h3>Set of 2 Bambooo Plants in red pot</h3>
                    <h3>Rs.799</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBamboo5(bamboo5+1)}>Add to Cart</button>
                    <div className="additem">{bamboo5}</div>
                    </div>
                </div>
                
                <div className="plant_item">
                    <img src={require('../image/bambo.jpg')}></img>
                    <h3>Lucky Bamboo in Bottle pot</h3>
                    <h3>Rs.699</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBamboo6(bamboo6+1)}>Add to Cart</button>
                    <div className="additem">{bamboo6}</div>
                    </div>
                   </div>
            </div>
        </div>
    )
}
export default Bamboo;