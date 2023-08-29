import React from 'react';
import './Rose.css';
import { useState } from 'react';
function Gerbera(){
    const [gerbera1,setGerbera1]=useState(0)  
    const [gerbera2,setGerbera2]=useState(0)
    const [gerbera3,setGerbera3]=useState(0)
    const [gerbera4,setGerbera4]=useState(0) 
    const [gerbera5,setGerbera5]=useState(0) 
    const [gerbera6,setGerbera6]=useState(0)  
    const [gerbera7,setGerbera7]=useState(0)
    const [gerbera8,setGerbera8]=useState(0)
    const [gerbera9,setGerbera9]=useState(0) 
    const [gerbera10,setGerbera10]=useState(0) 
    return(
        <div>
            <h2>Gerbera Flowers</h2>
            <div className="flowertypes">
                <div className="flower_item">
                    <img src={require('../image/gerbera1.jpg')}></img>
                    <h3>Elegant Gerberas In Glass Vase</h3>
                    <h3>Rs.949</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setGerbera1(gerbera1+1)}>Add to Cart</button>
                    <div className="additem">{gerbera1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/gerbera2.jpg')}></img>
                    <h3>Father's Day Gerbera Medley</h3>
                    <h3>Rs.699</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setGerbera2(gerbera2+1)}>Add to Cart</button>
                    <div className="additem">{gerbera2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/gerbera3.jpg')}></img>
                    <h3>Beautiful Red & Yellow Gerberas Arrangement</h3>
                    <h3>Rs.1199</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setGerbera3(gerbera3+1)}>Add to Cart</button>
                    <div className="additem">{gerbera3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/gerbera4.jpg')}></img>
                    <h3>Flowers Of Paradise Gerberas Vase</h3>
                    <h3>Rs.899</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setGerbera4(gerbera4+1)}>Add to Cart</button>
                    <div className="additem">{gerbera4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/gerbera5.jpg')}></img>
                    <h3>Bright Hues Floral Bouquet</h3>
                    <h3>Rs.599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setGerbera5(gerbera5+1)}>Add to Cart</button>
                    <div className="additem">{gerbera5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/gerbera6.jpg')}></img>
                    <h3>Mixed Elegance Gerberas Bouquet</h3>
                    <h3>Rs.779</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setGerbera6(gerbera6+1)}>Add to Cart</button>
                    <div className="additem">{gerbera6}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/gerbera7.jpg')}></img>
                    <h3>Mixed Gerberas Anniversary Vase</h3>
                    <h3>Rs.749</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setGerbera7(gerbera7+1)}>Add to Cart</button>
                    <div className="additem">{gerbera7}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/gerbera8.jpg')}></img>
                    <h3>Beautiful Pink Gerberas Vase</h3>
                    <h3>Rs.649</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setGerbera8(gerbera8+1)}>Add to Cart</button>
                    <div className="additem">{gerbera8}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/gerbera9.jpg')}></img>
                    <h3>Red Color Elegance Gerbera Blossoms</h3>
                    <h3>Rs.599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setGerbera9(gerbera9+1)}>Add to Cart</button>
                    <div className="additem">{gerbera9}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/gerbera10.jpg')}></img>
                    <h3>Serene White Gerbera Vase</h3>
                    <h3>Rs.899</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setGerbera10(gerbera10+1)}>Add to Cart</button>
                    <div className="additem">{gerbera10}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Gerbera;