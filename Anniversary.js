import React from 'react';
import { useState } from 'react';
import './Birthday.css';
function Anniversary(){
    const [anniversary1,setAnniversary1]=useState(0)  
    const [anniversary2,setAnniversary2]=useState(0)
    const [anniversary3,setAnniversary3]=useState(0)
    const [anniversary4,setAnniversary4]=useState(0) 
    const [anniversary5,setAnniversary5]=useState(0) 
    const [anniversary6,setAnniversary6]=useState(0)  
    const [anniversary7,setAnniversary7]=useState(0)
    const [anniversary8,setAnniversary8]=useState(0)
    const [anniversary9,setAnniversary9]=useState(0) 
    return(
        <div>
            <h2>Anniversary Collections</h2>
            <div className="flowertypes">
                <div className="flower_item">
                    <img src={require('../image/anniversary1.jpg')}></img>
                    <h3>Duchess of Blossom</h3>
                    <h3>Rs.7395</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAnniversary1(anniversary1+1)}>Add to Cart</button>
                    <div className="additem">{anniversary1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/anniversary2.jpg')}></img>
                    <h3>Pink Roses & Daisies Bouquet</h3>
                    <h3>Rs.1399</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAnniversary2(anniversary2+1)}>Add to Cart</button>
                    <div className="additem">{anniversary2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/anniversary3.jpg')}></img>
                    <h3>Rhapsody of Love</h3>
                    <h3>Rs.2995</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAnniversary3(anniversary3+1)}>Add to Cart</button>
                    <div className="additem">{anniversary3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/anniversary4.jpg')}></img>
                    <h3>Joyful Mixed Roses Bouquet</h3>
                    <h3>Rs.1299</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAnniversary4(anniversary4+1)}>Add to Cart</button>
                    <div className="additem">{anniversary4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/anniversary5.jpg')}></img>
                    <h3>Lilac Rhapsody</h3>
                    <h3>Rs.1795</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAnniversary5(anniversary5+1)}>Add to Cart</button>
                    <div className="additem">{anniversary5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/anniversary6.jpg')}></img>
                    <h3>12 White Carnations Two Layered Bouquet</h3>
                    <h3>Rs.599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAnniversary6(anniversary6+1)}>Add to Cart</button>
                    <div className="additem">{anniversary6}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/anniversary7.jpg')}></img>
                    <h3>Surprising 6 Yellow Roses Bouquet</h3>
                    <h3>Rs.499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAnniversary7(anniversary7+1)}>Add to Cart</button>
                    <div className="additem">{anniversary7}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/anniversary8.jpg')}></img>
                    <h3>Scarlet Rose Fantasy Bouquet</h3>
                    <h3>Rs.2049</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAnniversary8(anniversary8+1)}>Add to Cart</button>
                    <div className="additem">{anniversary8}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/anniversary9.jpg')}></img>
                    <h3>Exquisite Red Roses Bouquet</h3>
                    <h3>Rs.1299</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAnniversary9(anniversary9+1)}>Add to Cart</button>
                    <div className="additem">{anniversary9}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Anniversary;