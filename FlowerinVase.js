import React, { useState } from 'react';
import './FlowersinBox.css';
function FlowerinVase(){
    const [vase1,setVase1]=useState(0)  
    const [vase2,setVase2]=useState(0)
    const [vase3,setVase3]=useState(0)
    const [vase4,setVase4]=useState(0) 
    const [vase5,setVase5]=useState(0) 
    const [vase6,setVase6]=useState(0)  
    const [vase7,setVase7]=useState(0)
    const [vase8,setVase8]=useState(0)
    const [vase9,setVase9]=useState(0)
    const [vase10,setVase10]=useState(0)

    return(
        <div>
            <h2>Flowers in vase </h2>
            <div className="flowergroups">
            <div className="flower_item">
                    <img src={require('../image/vase1.jpg')}></img>
                    <h3>Mavre Me More</h3>
                    <h3>Rs.2845</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setVase1(vase1+1)}>Add to Cart</button>
                    <div className="additem">{vase1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/vase2.jpg')}></img>
                    <h3>Fresh From The Meadows</h3>
                    <h3>Rs.3545</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setVase2(vase2+1)}>Add to Cart</button>
                    <div className="additem">{vase2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/vase3.jpg')}></img>
                    <h3>Peach Radiance</h3>
                    <h3>Rs.2345</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setVase3(vase3+1)}>Add to Cart</button>
                    <div className="additem">{vase3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/vase4.jpg')}></img>
                    <h3>Sunshine Radiance</h3>
                    <h3>Rs.2795</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setVase4(vase4+1)}>Add to Cart</button>
                    <div className="additem">{vase4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/vase5.jpg')}></img>
                    <h3>A saga of Roses</h3>
                    <h3>Rs.2345</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setVase5(vase5+1)}>Add to Cart</button>
                    <div className="additem">{vase5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/vase6.jpg')}></img>
                    <h3>Vase of Serenity</h3>
                    <h3>Rs.2245</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setVase6(vase6+1)}>Add to Cart</button>
                    <div className="additem">{vase6}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/vase7.jpg')}></img>
                    <h3>Amethyst Dream</h3>
                    <h3>Rs.2495</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setVase7(vase7+1)}>Add to Cart</button>
                    <div className="additem">{vase7}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/vase8.jpg')}></img>
                    <h3>Blooming Romance</h3>
                    <h3>Rs.2295</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setVase8(vase8+1)}>Add to Cart</button>
                    <div className="additem">{vase8}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/vase9.jpg')}></img>
                    <h3>Pouring Love in Vase</h3>
                    <h3>Rs.2995</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setVase9(vase9+1)}>Add to Cart</button>
                    <div className="additem">{vase9}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/vase10.jpg')}></img>
                    <h3>Rosey Gradenia</h3>
                    <h3>Rs.4295</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setVase10(vase10+1)}>Add to Cart</button>
                    <div className="additem">{vase10}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FlowerinVase;