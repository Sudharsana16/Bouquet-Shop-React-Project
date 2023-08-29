import React from 'react';
import './Rose.css';
import { useState } from 'react';
function Rose(){
    const [rose1,setRose1]=useState(0)  
    const [rose2,setRose2]=useState(0)
    const [rose3,setRose3]=useState(0)
    const [rose4,setRose4]=useState(0) 
    const [rose5,setRose5]=useState(0) 
    const [rose6,setRose6]=useState(0)  
    const [rose7,setRose7]=useState(0)
    const [rose8,setRose8]=useState(0)
    const [rose9,setRose9]=useState(0) 
    const [rose10,setRose10]=useState(0) 
    return(
        <div>
            <h2>Different Colors of Roses</h2>
            <div className="flowertypes">
                <div className="flower_item">
                    <img src={require('../image/rose1.jpg')}></img>
                    <h3>15 Pink Roses Vase Arrangement </h3>
                    <h3>Rs.1099</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setRose1(rose1+1)}>Add to Cart</button>
                    <div className="additem">{rose1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/rose2.jpg')}></img>
                    <h3>16 Red Roses Arrangement inWooden Base</h3>
                    <h3>Rs.949</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setRose2(rose2+1)}>Add to Cart</button>
                    <div className="additem">{rose2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/rose3.jpg')}></img>
                    <h3>Adorable Aura Roses Bouquet</h3>
                    <h3>Rs.1499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setRose3(rose3+1)}>Add to Cart</button>
                    <div className="additem">{rose3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/rose4.jpg')}></img>
                    <h3>Appealing Red Roses Double Wrapped Bouquet</h3>
                    <h3>Rs.649</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setRose4(rose4+1)}>Add to Cart</button>
                    <div className="additem">{rose4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/rose5.jpg')}></img>
                    <h3>Blissful Love Roses Arrangement</h3>
                    <h3>Rs.1499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setRose5(rose5+1)}>Add to Cart</button>
                    <div className="additem">{rose5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/rose6.jpg')}></img>
                    <h3>Colourful 12 Mixed Roses Bouquet</h3>
                    <h3>Rs.699</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setRose6(rose6+1)}>Add to Cart</button>
                    <div className="additem">{rose6}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/rose7.jpg')}></img>
                    <h3>Delicate Love 6 Pink Roses Bunch</h3>
                    <h3>Rs.449</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setRose7(rose7+1)}>Add to Cart</button>
                    <div className="additem">{rose7}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/rose8.jpg')}></img>
                    <h3>Enticing 8 Yellow Roses Bouquet</h3>
                    <h3>Rs.449</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setRose8(rose8+1)}>Add to Cart</button>
                    <div className="additem">{rose8}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/rose9.jpg')}></img>
                    <h3>Enticing 12 Red Roses Bunch</h3>
                    <h3>Rs.749</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setRose9(rose9+1)}>Add to Cart</button>
                    <div className="additem">{rose9}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/rose10.jpg')}></img>
                    <h3>Majestic 50 Red Roses Bouquet</h3>
                    <h3>Rs.2199</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setRose10(rose10+1)}>Add to Cart</button>
                    <div className="additem">{rose10}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Rose;