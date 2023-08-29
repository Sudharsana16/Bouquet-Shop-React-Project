import React from 'react';
import './Bamboo.css';
import { useState } from 'react';
function Snake(){
    const [snake1,setSnake1]=useState(0)  
    const [snake2,setSnake2]=useState(0)
    const [snake3,setSnake3]=useState(0)
    const [snake4,setSnake4]=useState(0) 
    const [snake5,setSnake5]=useState(0)
    return(
        <div>
            <h2>Snake Plants</h2>
            <div className="plantgroup">
            <div className="plant_item">
                    <img src={require('../image/snake.jpg')}></img>
                    <h3>Soothing Sanserieria Trifasciata Terrarium</h3>
                    <h3>Rs.499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setSnake1(snake1+1)}>Add to Cart</button>
                    <div className="additem">{snake1}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/snake1.jpg')}></img>
                    <h3>Sanserieria Snake Plant in Stay Strong pot</h3>
                    <h3>Rs.1499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setSnake1(snake2+1)}>Add to Cart</button>
                    <div className="additem">{snake2}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/snake2.jpg')}></img>
                    <h3>Milt Sanserieria Plant in Cute Heart Planter</h3>
                    <h3>Rs.1299</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setSnake3(snake3+1)}>Add to Cart</button>
                    <div className="additem">{snake3}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/snake3.jpg')}></img>
                    <h3>Sanserieria & 2 Red Hearts Votive Holders</h3>
                    <h3>Rs.1349</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setSnake4(snake4+1)}>Add to Cart</button>
                    <div className="additem">{snake4}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/snake4.jpg')}></img>
                    <h3>Milt Sanserieria Plant in Iron Embossed Brass Pot</h3>
                    <h3>Rs.949</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setSnake5(snake5+1)}>Add to Cart</button>
                    <div className="additem">{snake5}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Snake;