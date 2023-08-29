import React from 'react';
import './FlowersinBox.css';
import { useState } from 'react';
function Luxury(){
    const [luxury1,setLuxury1]=useState(0)  
    const [luxury2,setLuxury2]=useState(0)
    const [luxury3,setLuxury3]=useState(0)
    const [luxury4,setLuxury4]=useState(0) 
    const [luxury5,setLuxury5]=useState(0) 
    const [luxury6,setLuxury6]=useState(0)  
    const [luxury7,setLuxury7]=useState(0)
    const [luxury8,setLuxury8]=useState(0)
    const [luxury9,setLuxury9]=useState(0) 
    const [luxury10,setLuxury10]=useState(0) 
    return(
        <div>
        <h2>Luxury Collections</h2>
        <div className="flowergroups">
            <div className="flower_item">
                <img src={require('../image/luxury1.jpg')}></img>
                <h3>Divine Beauty</h3>
                <h3>Rs.3240</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setLuxury1(luxury1+1)}>Add to Cart</button>
                    <div className="additem">{luxury1}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/luxury2.jpg')}></img>
                <h3>Unforgettable 50 White Roses Hand-Tied</h3>
                <h3>Rs.4500</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setLuxury2(luxury2+1)}>Add to Cart</button>
                    <div className="additem">{luxury2}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/luxury3.jpg')}></img>
                <h3>Artic Desire</h3>
                <h3>Rs.6045</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setLuxury3(luxury3+1)}>Add to Cart</button>
                    <div className="additem">{luxury3}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/luxury4.jpg')}></img>
                <h3>Unicorn Hues Bouquet</h3>
                <h3>Rs.3499</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setLuxury4(luxury4+1)}>Add to Cart</button>
                    <div className="additem">{luxury4}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/luxury5.jpg')}></img>
                <h3>Santini's Secret</h3>
                <h3>Rs.4999</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setLuxury5(luxury5+1)}>Add to Cart</button>
                    <div className="additem">{luxury5}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/luxury6.jpg')}></img>
                <h3>The Juliet Hand-Tied</h3>
                <h3>Rs.6049</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setLuxury6(luxury6+1)}>Add to Cart</button>
                    <div className="additem">{luxury6}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/luxury7.jpg')}></img>
                <h3>Purple Haze</h3>
                <h3>Rs.5099</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setLuxury7(luxury7+1)}>Add to Cart</button>
                    <div className="additem">{luxury7}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/luxury8.jpg')}></img>
                <h3>Rustic Charm Hand-Tied</h3>
                <h3>Rs.3045</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setLuxury8(luxury8+1)}>Add to Cart</button>
                    <div className="additem">{luxury8}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/luxury9.jpg')}></img>
                <h3>100 Days of Love</h3>
                <h3>Rs.7699</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setLuxury9(luxury9+1)}>Add to Cart</button>
                    <div className="additem">{luxury9}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/luxury10.jpg')}></img>
                <h3>The Royal Wish</h3>
                <h3>Rs.6099</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setLuxury10(luxury10+1)}>Add to Cart</button>
                    <div className="additem">{luxury10}</div>
                    </div>
            </div>
        </div>
    </div>
    )
}
export default Luxury;