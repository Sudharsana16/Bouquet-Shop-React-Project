import React from 'react';
import './Rose.css';
import { useState } from 'react';
function Carnation(){
    const [carnation1,setCarnation1]=useState(0)  
    const [carnation2,setCarnation2]=useState(0)
    const [carnation3,setCarnation3]=useState(0)
    const [carnation4,setCarnation4]=useState(0) 
    const [carnation5,setCarnation5]=useState(0) 
    const [carnation6,setCarnation6]=useState(0)  
    const [carnation7,setCarnation7]=useState(0)
    const [carnation8,setCarnation8]=useState(0)
    const [carnation9,setCarnation9]=useState(0) 
    const [carnation10,setCarnation10]=useState(0) 
    return(
        <div>
            <h2>Carnation Flowers</h2>
            <div className="flowertypes">
                <div className="flower_item">
                    <img src={require('../image/carnation.jpg')}></img>
                    <h3>Soothing 6 Yellow Carnations Bouquet</h3>
                    <h3>Rs.449</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setCarnation1(carnation1+1)}>Add to Cart</button>
                    <div className="additem">{carnation1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/carnation1.jpg')}></img>
                    <h3>Beautiful Pink Carnations Bouquet</h3>
                    <h3>Rs.499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setCarnation2(carnation2+1)}>Add to Cart</button>
                    <div className="additem">{carnation2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/carnation2.jpg')}></img>
                    <h3>Blush & Love Floral Arrangement</h3>
                    <h3>Rs.2649</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setCarnation3(carnation3+1)}>Add to Cart</button>
                    <div className="additem">{carnation3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/carnation3.jpg')}></img>
                    <h3>Mixed Carnations Bouquet With Green Fillers</h3>
                    <h3>Rs.549</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setCarnation4(carnation4+1)}>Add to Cart</button>
                    <div className="additem">{carnation4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/carnation4.jpg')}></img>
                    <h3>White Carnations & Orchids In Vase</h3>
                    <h3>Rs.1849</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setCarnation5(carnation5+1)}>Add to Cart</button>
                    <div className="additem">{carnation5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/carnation5.jpg')}></img>
                    <h3>Mystic Spell Of Love Floral Arrangement</h3>
                    <h3>Rs.4049</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setCarnation6(carnation6+1)}>Add to Cart</button>
                    <div className="additem">{carnation6}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/carnation6.jpg')}></img>
                    <h3>Only You Forever Floral Bouquet</h3>
                    <h3>Rs.6049</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setCarnation7(carnation7+1)}>Add to Cart</button>
                    <div className="additem">{carnation7}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/carnation7.jpg')}></img>
                    <h3>Colourful Bouquet Of Mixed Flowers</h3>
                    <h3>Rs.1199</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setCarnation8(carnation8+1)}>Add to Cart</button>
                    <div className="additem">{carnation8}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/carnation8.jpg')}></img>
                    <h3>12 White Carnations Two Layered Bouquet</h3>
                    <h3>Rs.599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setCarnation9(carnation9+1)}>Add to Cart</button>
                    <div className="additem">{carnation9}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/carnation9.jpg')}></img>
                    <h3>White Carnations Cane Basket Arrangement</h3>
                    <h3>Rs.999</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setCarnation10(carnation10+1)}>Add to Cart</button>
                    <div className="additem">{carnation10}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Carnation;