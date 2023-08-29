import React from 'react';
import {useState} from 'react';
import './Birthday.css';
function Birthday(){
    const [birthday1,setBirthday1]=useState(0)  
    const [birthday2,setBirthday2]=useState(0)
    const [birthday3,setBirthday3]=useState(0)
    const [birthday4,setBirthday4]=useState(0) 
    const [birthday5,setBirthday5]=useState(0) 
    const [birthday6,setBirthday6]=useState(0)  
    const [birthday7,setBirthday7]=useState(0)
    const [birthday8,setBirthday8]=useState(0)
    
    return(
        <div>
            <h2>Birthday Collections</h2>
            <div className="flowertypes">
                <div className="flower_item">
                    <img src={require('../image/birthday1.jpg')}></img>
                    <h3>Birthday Blossoms</h3>
                    <h3>Rs.2795</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBirthday1(birthday1+1)}>Add to Cart</button>
                    <div className="additem">{birthday1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/birthday2.jpg')}></img>
                    <h3>Floral Confetti</h3>
                    <h3>Rs.2545</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBirthday2(birthday2+1)}>Add to Cart</button>
                    <div className="additem">{birthday2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/birthday3.jpg')}></img>
                    <h3>Midnight Cheers</h3>
                    <h3>Rs.4095</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBirthday3(birthday3+1)}>Add to Cart</button>
                    <div className="additem">{birthday3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/birthday4.jpg')}></img>
                    <h3>Silver Savvy Birthday Arrangement</h3>
                    <h3>Rs.3295</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBirthday4(birthday4+1)}>Add to Cart</button>
                    <div className="additem">{birthday4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/birthday5.jpg')}></img>
                    <h3>Sweet Indulgence</h3>
                    <h3>Rs.1745</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBirthday5(birthday5+1)}>Add to Cart</button>
                    <div className="additem">{birthday5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/birthday6.jpg')}></img>
                    <h3>The Juliet Hand-Tied</h3>
                    <h3>Rs.3245</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBirthday6(birthday6+1)}>Add to Cart</button>
                    <div className="additem">{birthday6}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/birthday7.jpg')}></img>
                    <h3>Wishful Blooms</h3>
                    <h3>Rs.2145</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBirthday7(birthday7+1)}>Add to Cart</button>
                    <div className="additem">{birthday7}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/birthaday8.jpg')}></img>
                    <h3>Wish Upon a Sweet Tooth</h3>
                    <h3>Rs.5445</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBirthday8(birthday8+1)}>Add to Cart</button>
                    <div className="additem">{birthday8}</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Birthday;