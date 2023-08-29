import React from 'react';
import './Bamboo.css';
import { useState } from 'react';
function Money(){
    const [money1,setMoney1]=useState(0)  
    const [money2,setMoney2]=useState(0)
    const [money3,setMoney3]=useState(0)
    const [money4,setMoney4]=useState(0) 
    const [money5,setMoney5]=useState(0) 
    return(
        <div>
            <h2>Money plants</h2>
            <div className="plantgroup">
            <div className="plant_item">
                    <img src={require('../image/money.jpg')}></img>
                    <h3>Golden Money plant in Green Plastic pot</h3>
                    <h3>Rs.249</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMoney1(money1+1)}>Add to Cart</button>
                    <div className="additem">{money1}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/money1.jpg')}></img>
                    <h3>Money Plant in Lucky to Have You Glass Pot</h3>
                    <h3>Rs.499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMoney2(money2+1)}>Add to Cart</button>
                    <div className="additem">{money2}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/money2.jpg')}></img>
                    <h3>Money Plant in Black Plastic pot</h3>
                    <h3>Rs.549</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMoney3(money3+1)}>Add to Cart</button>
                    <div className="additem">{money3}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/money3.jpg')}></img>
                    <h3>Fashionable Money Plant Terrarium</h3>
                    <h3>Rs.799</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMoney4(money4+1)}>Add to Cart</button>
                    <div className="additem">{money4}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/money4.jpg')}></img>
                    <h3>Golden Money Plant in mosaic Metal Pot</h3>
                    <h3>Rs.649</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMoney5(money5+1)}>Add to Cart</button>
                    <div className="additem">{money5}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Money;