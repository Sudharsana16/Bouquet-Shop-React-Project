import React from 'react';
import './Birthday.css';
import { useState } from 'react';
function Sympathy(){
    const [sympathi1,setSympathi1]=useState(0)  
    const [sympathi2,setSympathi2]=useState(0)
    const [sympathi3,setSympathi3]=useState(0)
    const [sympathi4,setSympathi4]=useState(0) 
    const [sympathi5,setSympathi5]=useState(0) 
    const [sympathi6,setSympathi6]=useState(0)  
    const [sympathi7,setSympathi7]=useState(0)
    const [sympathi8,setSympathi8]=useState(0)
    const [sympathi9,setSympathi9]=useState(0) 
    const [sympathi10,setSympathi10]=useState(0) 
    return(
        <div>
            <h2>Sympathy and Funeral</h2>
            <div className="flowertypes">
                <div className="flower_item">
                    <img src={require('../image/sympathy1.jpg')}></img>
                    <h3>Heavenly White Roses Bunch</h3>
                    <h3>Rs.449</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setSympathi1(sympathi1+1)}>Add to Cart</button>
                    <div className="additem">{sympathi1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/sympathy2.jpg')}></img>
                    <h3>Ethereal Blooms Wishes</h3>
                    <h3>Rs.2699</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setSympathi2(sympathi2+1)}>Add to Cart</button>
                    <div className="additem">{sympathi2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/sympathy3.jpg')}></img>
                    <h3>Pristine Beauty Floral Basket</h3>
                    <h3>Rs.1599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setSympathi3(sympathi3+1)}>Add to Cart</button>
                    <div className="additem">{sympathi3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/sympathy11.jpg')}></img>
                    <h3>12 White Carnations Bouquet</h3>
                    <h3>Rs.599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setSympathi4(sympathi4+1)}>Add to Cart</button>
                    <div className="additem">{sympathi4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/sympathy5.jpg')}></img>
                    <h3>White Winter Roses Bouquet</h3>
                    <h3>Rs.1799</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setSympathi5(sympathi5+1)}>Add to Cart</button>
                    <div className="additem">{sympathi5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/sympathy6.jpg')}></img>
                    <h3>Elegant Pristine White Roses Bouquet</h3>
                    <h3>Rs.699</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setSympathi6(sympathi6+1)}>Add to Cart</button>
                    <div className="additem">{sympathi6}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/sympathy7.jpg')}></img>
                    <h3>White Carnations Cane Basket Arrangement</h3>
                    <h3>Rs.999</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setSympathi7(sympathi7+1)}>Add to Cart</button>
                    <div className="additem">{sympathi7}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/sympathy8.jpg')}></img>
                    <h3>Joyous Mixed Flowers Wreath</h3>
                    <h3>Rs.5400</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setSympathi8(sympathi8+1)}>Add to Cart</button>
                    <div className="additem">{sympathi8}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/sympathy9.jpg')}></img>
                    <h3>Serene 20 White Roses Bouquet</h3>
                    <h3>Rs.1099</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setSympathi9(sympathi9+1)}>Add to Cart</button>
                    <div className="additem">{sympathi9}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/sympathy12.jpg')}></img>
                    <h3>Serene White Oriental Lilies Bouquet</h3>
                    <h3>Rs.2449</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setSympathi10(sympathi10+1)}>Add to Cart</button>
                    <div className="additem">{sympathi10}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sympathy;