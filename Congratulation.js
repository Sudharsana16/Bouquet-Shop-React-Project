import React from 'react';
import './Birthday.css';
import { useState } from 'react';
function Congratulation(){
      
    const [congrates2,setCongrates2]=useState(0)
    const [congrates3,setCongrates3]=useState(0)
    const [congrates4,setCongrates4]=useState(0) 
    const [congrates5,setCongrates5]=useState(0) 
    const [congrates6,setCongrates6]=useState(0)  
    const [congrates7,setCongrates7]=useState(0)
    const [congrates8,setCongrates8]=useState(0)
    const [congrates9,setCongrates9]=useState(0) 
    const [congrates10,setCongrates10]=useState(0)  
    const [congrates11,setCongrates11]=useState(0)
     return(
        <div>
            <h2>Congrates Someone with Flowers</h2>
            <div className="flowertypes">
            <div className="flower_item">
                <img src={require('../image/congrates1.jpg')}></img>
                <h3>Harmony Hues Floral Arrangement</h3>
                <h3>Rs.2949</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setCongrates2(congrates2+1)}>Add to Cart</button>
                    <div className="additem">{congrates2}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/congrates2.jpg')}></img>
                <h3>Fabulous In Marve</h3>
                <h3>Rs.1895</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setCongrates3(congrates3+1)}>Add to Cart</button>
                    <div className="additem">{congrates3}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/congrates3.jpg')}></img>
                <h3>Happy Vibes Floral Arrangement</h3>
                <h3>Rs.1399</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setCongrates4(congrates4+1)}>Add to Cart</button>
                    <div className="additem">{congrates4}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/congrates4.jpg')}></img>
                <h3>Collection of Roses Bouquet</h3>
                <h3>Rs.1299</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setCongrates5(congrates5+1)}>Add to Cart</button>
                    <div className="additem">{congrates5}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/congrates5.jpg')}></img>
                <h3>Mixed Carnations</h3>
                <h3>Rs.599</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setCongrates6(congrates6+1)}>Add to Cart</button>
                    <div className="additem">{congrates6}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/congrates7.jpg')}></img>
                <h3>Sunshine Yellow Roses Bouquet</h3>
                <h3>Rs.1049</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setCongrates7(congrates7+1)}>Add to Cart</button>
                    <div className="additem">{congrates7}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/congrates8.jpg')}></img>
                <h3>Gerberas & Carnations Sleeve Bag</h3>
                <h3>Rs.599</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setCongrates8(congrates8+1)}>Add to Cart</button>
                    <div className="additem">{congrates8}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/congrates9.jpg')}></img>
                <h3>Vibrant Roses Bouquet</h3>
                <h3>Rs.1149</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setCongrates9(congrates9+1)}>Add to Cart</button>
                    <div className="additem">{congrates9}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/congrates10.jpg')}></img>
                <h3>Beautiful Red & Yellow Gerberas Arrangement</h3>
                <h3>Rs.1199</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setCongrates10(congrates10+1)}>Add to Cart</button>
                    <div className="additem">{congrates10}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/congrates11.jpg')}></img>
                <h3>Colours Of Galaxy Orchids Bouquet</h3>
                <h3>Rs.1649</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setCongrates11(congrates11+1)}>Add to Cart</button>
                    <div className="additem">{congrates11}</div>
                    </div>
            </div>
            </div>

        </div>
    )
}
export default Congratulation;