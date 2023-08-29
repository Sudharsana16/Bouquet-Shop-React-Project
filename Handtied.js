import React from 'react';
import './FlowersinBox.css';
import { useState } from 'react';
function Handtied(){
    const [hand1,setHand1]=useState(0)  
    const [hand2,setHand2]=useState(0)
    const [hand3,setHand3]=useState(0)
    const [hand4,setHand4]=useState(0) 
    const [hand5,setHand5]=useState(0) 
    const [hand6,setHand6]=useState(0)  
    const [hand7,setHand7]=useState(0)
    const [hand8,setHand8]=useState(0)
    const [hand9,setHand9]=useState(0) 
    const [hand10,setHand10]=useState(0)
    return(
        <div>
            <h2>Hand-tied Bouquet Collections</h2>
            <div className="flowergroups">
                <div className="flower_item">
                    <img src={require('../image/hand1.jpg')}></img>
                    <h3>Premium Red Color Roses Double Wrapped Bouquet</h3>
                    <h3>Rs.699</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setHand1(hand1+1)}>Add to Cart</button>
                    <div className="additem">{hand1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/hand2.jpg')}></img>
                    <h3>Special Mixed Roses Bouquet</h3>
                    <h3>Rs.449</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setHand2(hand2+1)}>Add to Cart</button>
                    <div className="additem">{hand2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/hand3.jpg')}></img>
                    <h3>Endearing Pink Roses Bouquet</h3>
                    <h3>Rs.549</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setHand3(hand3+1)}>Add to Cart</button>
                    <div className="additem">{hand3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/hand4.jpg')}></img>
                    <h3>Celebratory Bouquet</h3>
                    <h3>Rs.599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setHand4(hand4+1)}>Add to Cart</button>
                    <div className="additem">{hand4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/hand5.jpg')}></img>
                    <h3>Bright Hues Floral Bouquet</h3>
                    <h3>Rs.599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setHand5(hand5+1)}>Add to Cart</button>
                    <div className="additem">{hand5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/hand6.jpg')}></img>
                    <h3>Mesmerising Orchids Bouquet</h3>
                    <h3>Rs.799</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setHand6(hand6+1)}>Add to Cart</button>
                    <div className="additem">{hand6}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/hand7.jpg')}></img>
                    <h3>Wrapped In Elegances Roses Bouquets</h3>
                    <h3>Rs.799</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setHand7(hand7+1)}>Add to Cart</button>
                    <div className="additem">{hand7}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/hand8.jpg')}></img>
                    <h3>Bright Hues Floral Bouque</h3>
                    <h3>Rs.499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setHand8(hand8+1)}>Add to Cart</button>
                    <div className="additem">{hand8}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/hand9.jpg')}></img>
                    <h3>Poetic Pink Roses Bouquet</h3>
                    <h3>Rs.2199</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setHand9(hand9+1)}>Add to Cart</button>
                    <div className="additem">{hand9}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/hand10.jpg')}></img>
                    <h3>Bright Sunflowers Bouquet</h3>
                    <h3>Rs.2099</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setHand10(hand10+1)}>Add to Cart</button>
                    <div className="additem">{hand10}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Handtied;