import React from 'react';
import './FlowersinBox.css';
import { useState } from 'react';
function Classic(){
    const [classic1,setClassic1]=useState(0)  
    const [classic2,setClassic2]=useState(0)
    const [classic3,setClassic3]=useState(0)
    const [classic4,setClassic4]=useState(0) 
    const [classic5,setClassic5]=useState(0) 
    const [classic6,setClassic6]=useState(0)  
    const [classic7,setClassic7]=useState(0)
    const [classic8,setClassic8]=useState(0)
    const [classic9,setClassic9]=useState(0) 
    const [classic10,setClassic10]=useState(0) 
    return(
        <div>
            <h2>Classic Flower Collections</h2>
            <div className="flowergroups">
                <div className="flower_item">
                    <img src={require('../image/classic1.jpg')}></img>
                    <h3>Oh So White Flower Bunch</h3>
                    <h3>Rs.2449</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setClassic1(classic1+1)}>Add to Cart</button>
                    <div className="additem">{classic1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/classic2.jpg')}></img>
                    <h3>Mixed Flowers In Wooden Tray</h3>
                    <h3>Rs.2599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setClassic2(classic2+1)}>Add to Cart</button>
                    <div className="additem">{classic2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/classic3.jpg')}></img>
                    <h3>Hydrangea & Pink Daisy Bunch</h3>
                    <h3>Rs.3199</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setClassic3(classic3+1)}>Add to Cart</button>
                    <div className="additem">{classic3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/classic4.jpg')}></img>
                    <h3>Pink Carnations & White Roses Bunch</h3>
                    <h3>Rs.1599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setClassic4(classic4+1)}>Add to Cart</button>
                    <div className="additem">{classic4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/classic5.jpg')}></img>
                    <h3>Exotic Ema Roses & Pink Daisies Bouquet</h3>
                    <h3>Rs.2999</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setClassic5(classic5+1)}>Add to Cart</button>
                    <div className="additem">{classic5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/classic6.jpg')}></img>
                    <h3>Peach & Aqua Roses Bouquet</h3>
                    <h3>Rs.2999</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setClassic6(classic6+1)}>Add to Cart</button>
                    <div className="additem">{classic6}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/classic7.jpg')}></img>
                    <h3>Sweet Pink Carnations Arrangement</h3>
                    <h3>Rs.1599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setClassic7(classic7+1)}>Add to Cart</button>
                    <div className="additem">{classic7}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/classic8.jpg')}></img>
                    <h3>Mixed Flowers In Square Wooden Box</h3>
                    <h3>Rs.4799</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setClassic8(classic8+1)}>Add to Cart</button>
                    <div className="additem">{classic8}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/classic9.jpg')}></img>
                    <h3>Beautiful Mixed Flowers In Round Box</h3>
                    <h3>Rs.3799</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setClassic9(classic9+1)}>Add to Cart</button>
                    <div className="additem">{classic9}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/classic10.jpg')}></img>
                    <h3>Peach Roses & White Lilies Handle Basket</h3>
                    <h3>Rs.3449</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setClassic10(classic10+1)}>Add to Cart</button>
                    <div className="additem">{classic10}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Classic;