import React from 'react';
import './FlowersinBox.css';
import { useState } from 'react';
function FlowerinBox(){
    const [box1,setBox1]=useState(0)  
    const [box2,setBox2]=useState(0)
    const [box3,setBox3]=useState(0)
    const [box4,setBox4]=useState(0) 
    const [box5,setBox5]=useState(0) 
    const [box6,setBox6]=useState(0)  
    const [box7,setBox7]=useState(0)
    const [box8,setBox8]=useState(0)
    const [box9,setBox9]=useState(0) 
    
    return(
        <div>
            <h2>Flower in Box</h2>
            <div className="flowergroups">
                <div className="flower_item">
                    <img src={require('../image/box.jpg')}></img>
                    <h3>Floral Fiona</h3>
                    <h3>Rs.2225</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBox1(box1+1)}>Add to Cart</button>
                    <div className="additem">{box1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/box1.jpg')}></img>
                    <h3>Aphrodite Blooms</h3>
                    <h3>Rs.2245</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBox2(box2+1)}>Add to Cart</button>
                    <div className="additem">{box2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/box2.jpg')}></img>
                    <h3>The Crescent</h3>
                    <h3>Rs.2295</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBox3(box3+1)}>Add to Cart</button>
                    <div className="additem">{box3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/box3.jpg')}></img>
                    <h3>Meadow in a Box</h3>
                    <h3>Rs.2395</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBox4(box4+1)}>Add to Cart</button>
                    <div className="additem">{box4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/box4.jpg')}></img>
                    <h3>Dreamy Cloud Flower Box</h3>
                    <h3>1745</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBox5(box5+1)}>Add to Cart</button>
                    <div className="additem">{box5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/box5.jpg')}></img>
                    <h3>The Gastby Beauty</h3>
                    <h3>Rs.3165</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBox6(box6+1)}>Add to Cart</button>
                    <div className="additem">{box6}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/box6.jpg')}></img>
                    <h3>Blue Beauty Flower Box</h3>
                    <h3>Rs.1699</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBox7(box7+1)}>Add to Cart</button>
                    <div className="additem">{box7}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/box7.jpg')}></img>
                    <h3>The Golden Moments</h3>
                    <h3>Rs.2599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBox8(box8+1)}>Add to Cart</button>
                    <div className="additem">{box8}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/box8.jpg')}></img>
                    <h3>The Soul of Rose Valentine Bouquet</h3>
                    <h3>Rs.3099</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBox9(box9+1)}>Add to Cart</button>
                    <div className="additem">{box9}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FlowerinBox;