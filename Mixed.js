import React from 'react';
import './Rose.css';
import { useState } from 'react';
function Mixed(){
    const [mixed1,setMixed1]=useState(0)  
    const [mixed2,setMixed2]=useState(0)
    const [mixed3,setMixed3]=useState(0)
    const [mixed4,setMixed4]=useState(0) 
    const [mixed5,setMixed5]=useState(0)
    const [mixed6,setMixed6]=useState(0)  
    const [mixed7,setMixed7]=useState(0)
    const [mixed8,setMixed8]=useState(0)
    const [mixed9,setMixed9]=useState(0) 
    const [mixed10,setMixed10]=useState(0)
    return(
        <div>
            <h2>Mixed Flower Collections</h2>
            <div className="flowertypes">
                <div className="flower_item">
                    <img src={require('../image/mixed1.jpg')}></img>
                    <h3>Golden Sunrise</h3>
                    <h3>Rs.2599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMixed1(mixed1+1)}>Add to Cart</button>
                    <div className="additem">{mixed1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/mixed2.jpg')}></img>
                    <h3>Pink Roses & Daisies Bouquet</h3>
                    <h3>Rs.1399</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMixed2(mixed2+1)}>Add to Cart</button>
                    <div className="additem">{mixed2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/mixed3.jpg')}></img>
                    <h3>Exotic Flowers Bouquet</h3>
                    <h3>Rs.649</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMixed3(mixed3+1)}>Add to Cart</button>
                    <div className="additem">{mixed3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/mixed4.jpg')}></img>
                    <h3>Asiatic Lilies N Red Roses Cane Basket Arrangement</h3>
                    <h3>Rs.1599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMixed4(mixed4+1)}>Add to Cart</button>
                    <div className="additem">{mixed4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/mixed5.jpg')}></img>
                    <h3>Mesmerising Orchids And Carnations Arrangement</h3>
                    <h3>Rs.2549</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMixed5(mixed5+1)}>Add to Cart</button>
                    <div className="additem">{mixed5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/mixed6.jpg')}></img>
                    <h3>Beautiful Roses & Chrysanthemums Bouquet</h3>
                    <h3>Rs.1749</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMixed6(mixed6+1)}>Add to Cart</button>
                    <div className="additem">{mixed6}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/mixed7.jpg')}></img>
                    <h3>Autumn Garden Floral Love Bouquet</h3>
                    <h3>Rs.2949</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMixed7(mixed7+1)}>Add to Cart</button>
                    <div className="additem">{mixed7}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/mixed8.jpg')}></img>
                    <h3>Mesmerising Mixed Floral Fish Bowl</h3>
                    <h3>Rs.1499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMixed8(mixed8+1)}>Add to Cart</button>
                    <div className="additem">{mixed8}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/mixed9.jpg')}></img>
                    <h3>Hello Sunshine 3 Sunflowers Bouquet</h3>
                    <h3>Rs.1999</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMixed9(mixed9+1)}>Add to Cart</button>
                    <div className="additem">{mixed9}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/mixed10.jpg')}></img>
                    <h3>Blooming Mixed Flowers Wooden Basket</h3>
                    <h3>Rs.2799</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMixed10(mixed10+1)}>Add to Cart</button>
                    <div className="additem">{mixed10}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Mixed;