import React from 'react';
import './Rose.css';
import { useState } from 'react';
function Lilies(){
    const [lily1,setLily1]=useState(0)  
    const [lily2,setLily2]=useState(0)
    const [lily3,setLily3]=useState(0)
    const [lily4,setLily4]=useState(0) 
    const [lily5,setLily5]=useState(0) 
    const [lily6,setLily6]=useState(0)  
    const [lily7,setLily7]=useState(0)
    const [lily8,setLily8]=useState(0)
    const [lily9,setLily9]=useState(0) 
    const [lily10,setLily10]=useState(0) 
    return(
        <div>
            <h2>Different Colors of Lilies</h2>
            <div className="flowertypes">
                <div className="flower_item">
                    <img src={require('../image/lily1.jpg')}></img>
                    <h3>Passionate Oriental Pink Lilies Bouquet</h3>
                    <h3>Rs.2349</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setLily1(lily1+1)}>Add to Cart</button>
                    <div className="additem">{lily1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/lily2.jpg')}></img>
                    <h3>Attractive Mixed Asiatic Lilies Bunch</h3>
                    <h3>Rs.1349</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setLily2(lily2+1)}>Add to Cart</button>
                    <div className="additem">{lily2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/lily3.jpg')}></img>
                    <h3>5 Pink Oriental Lilies In Glass Vase</h3>
                    <h3>Rs.2249</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setLily3(lily3+1)}>Add to Cart</button>
                    <div className="additem">{lily3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/lily4.jpg')}></img>
                    <h3>Blooming Asiatic Lilies In Black Ribbon Glass Vase</h3>
                    <h3>Rs.1649</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setLily4(lily4+1)}>Add to Cart</button>
                    <div className="additem">{lily4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/lily5.jpg')}></img>
                    <h3>Blissful Orange Lilies In Fishbowl Vase</h3>
                    <h3>Rs.2349</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setLily5(lily5+1)}>Add to Cart</button>
                    <div className="additem">{lily5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/lily6.jpg')}></img>
                    <h3>Oriental Lilies & Carnations Mixed Bouquet</h3>
                    <h3>Rs.2999</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setLily6(lily6+1)}>Add to Cart</button>
                    <div className="additem">{lily6}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/lily7.jpg')}></img>
                    <h3>Paradise Shine Blooms Bouquet</h3>
                    <h3>Rs.2149</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setLily7(lily7+1)}>Add to Cart</button>
                    <div className="additem">{lily7}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/lily8.jpg')}></img>
                    <h3>Serene White Oriental Lilies Bouquet</h3>
                    <h3>Rs.2449</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setLily8(lily8+1)}>Add to Cart</button>
                    <div className="additem">{lily8}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/lily9.jpg')}></img>
                    <h3>Scintillating Pink Lilies Bouquet</h3>
                    <h3>Rs.2799</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setLily9(lily9+1)}>Add to Cart</button>
                    <div className="additem">{lily9}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/lily10.jpg')}></img>
                    <h3>Adding Sunshine Floral Bouquet</h3>
                    <h3>Rs.1399</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setLily10(lily10+1)}>Add to Cart</button>
                    <div className="additem">{lily10}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Lilies;