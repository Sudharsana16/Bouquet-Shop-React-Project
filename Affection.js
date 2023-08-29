import React from 'react';
import './Birthday.css';
import { useState } from 'react';
function Affection(){
    const [affection1,setAffection1]=useState(0)  
    const [affection2,setAffection2]=useState(0)
    const [affection3,setAffection3]=useState(0)
    const [affection4,setAffection4]=useState(0) 
    const [affection5,setAffection5]=useState(0) 
    const [affection6,setAffection6]=useState(0)  
    const [affection7,setAffection7]=useState(0)
    const [affection8,setAffection8]=useState(0)
    const [affection9,setAffection9]=useState(0) 
    const [affection10,setAffection10]=useState(0) 
    return(
        <div>
            <h2>With Love and Affection</h2>
            <div className="flowertypes">
                <div className="flower_item">
                    <img src={require('../image/love1.jpg')}></img>
                    <h3>24 Red Color Roses Arrangement</h3>
                    <h3>Rs.1640</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAffection1(affection1+1)}>Add to Cart</button>
                    <div className="additem">{affection1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/love.jpg')}></img>
                    <h3>Romantic 10 Red Roses Bouquet</h3>
                    <h3>Rs.599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAffection2(affection2+1)}>Add to Cart</button>
                    <div className="additem">{affection2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/love2.jpg')}></img>
                    <h3>Heart in a Box Rose Arrangement</h3>
                    <h3>Rs.1199</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAffection3(affection3+1)}>Add to Cart</button>
                    <div className="additem">{affection3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/love3.jpg')}></img>
                    <h3>Only You Forever Floral Bouquet</h3>
                    <h3>Rs.6049</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAffection4(affection4+1)}>Add to Cart</button>
                    <div className="additem">{affection4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/love4.jpg')}></img>
                    <h3>Love U Forever Pink & Red Roses</h3>
                    <h3>Rs.999</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAffection5(affection5+1)}>Add to Cart</button>
                    <div className="additem">{affection5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/love5.jpg')}></img>
                    <h3>20 Red Roses Bouquet</h3>
                    <h3>Rs.929</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAffection6(affection6+1)}>Add to Cart</button>
                    <div className="additem">{affection6}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/love6.jpg')}></img>
                    <h3>Sweet Pink Roses Bunch</h3>
                    <h3>Rs.949</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAffection7(affection7+1)}>Add to Cart</button>
                    <div className="additem">{affection7}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/love7.jpg')}></img>
                    <h3>Expressions Of Love Rose Bouquet</h3>
                    <h3>Rs.1229</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAffection8(affection8+1)}>Add to Cart</button>
                    <div className="additem">{affection8}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/love8.jpg')}></img>
                    <h3>Two Layered Love Rose Bouquet</h3>
                    <h3>Rs.1649</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAffection9(affection9+1)}>Add to Cart</button>
                    <div className="additem">{affection9}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/love9.jpg')}></img>
                    <h3>Tints Of Love Floral Bouquet</h3>
                    <h3>Rs.3099</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAffection10(affection10+1)}>Add to Cart</button>
                    <div className="additem">{affection10}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Affection;