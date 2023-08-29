import React from 'react';
import './Plants.css';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import bamboop from '../image/bamboop.jpg';
import bonsaip from '../image/bonsaip.jpg';
import jadep from '../image/jadep.jpg';
import moneyp from '../image/moneyp.jpg';
import snakep from '../image/snakep.jpg';
function Plants(){

    const [bamboo1,setBamboo1]=useState(0)  
    const [bamboo2,setBamboo2]=useState(0)
    const [bamboo3,setBamboo3]=useState(0)
    const [bamboo4,setBamboo4]=useState(0) 
    const [bamboo5,setBamboo5]=useState(0) 
    const [bamboo6,setBamboo6]=useState(0) 
    const [bonsai1,setBonsai1]=useState(0)  
    const [bonsai2,setBonsai2]=useState(0)
    const [bonsai3,setBonsai3]=useState(0)
    const [bonsai4,setBonsai4]=useState(0) 
    const [bonsai5,setBonsai5]=useState(0) 
    const [jade1,setJade1]=useState(0)  
    const [jade2,setJade2]=useState(0)
    const [jade3,setJade3]=useState(0)
    const [jade4,setJade4]=useState(0) 
    const [jade5,setJade5]=useState(0) 
    const [jade6,setJade6]=useState(0) 
    const [money1,setMoney1]=useState(0)  
    const [money2,setMoney2]=useState(0)
    const [money3,setMoney3]=useState(0)
    const [money4,setMoney4]=useState(0) 
    const [money5,setMoney5]=useState(0)
    const [snake1,setSnake1]=useState(0)  
    const [snake2,setSnake2]=useState(0)
    const [snake3,setSnake3]=useState(0)
    const [snake4,setSnake4]=useState(0) 
    const [snake5,setSnake5]=useState(0)

    const Navigate=useNavigate()
    const plantpage1=()=>
    {
        Navigate('/bamboo')
    }
    const plantpage2=()=>
    {
        Navigate('/bonsai')
    }
    const plantpage3=()=>
    {
        Navigate('/jade')
    }
    const plantpage4=()=>
    {
        Navigate('/money')
    }
    const plantpage5=()=>
    {
        Navigate('/snake')
    }
    return(
        <div>
            <h2>Different Types of Indoor Plants</h2>
            <div className="plantsgrp">
            <div className="plant">
                    <img src={bamboop} onClick={()=>plantpage1()}></img>
                </div>
                <div className="plant">
                    <img src={bonsaip} onClick={()=>plantpage2()}></img>
                </div>
                <div className="plant">
                    <img src={jadep} onClick={()=>plantpage3()}></img>
                </div>
                <div className="plant">
                    <img src={moneyp} onClick={()=>plantpage4()}></img>
                </div>
                <div className="plant">
                    <img src={snakep} onClick={()=>plantpage5()}></img>
                </div>
        </div>

        <br></br>

        <div className="plantgroup">
        <div className="plant_item">
                    <img src={require('../image/bamboo1.jpg')}></img>
                    <h3>Bringing Good Luck 2 Layer Bamboo</h3>
                    <h3>Rs.599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBamboo1(bamboo1+1)}>Add to Cart</button>
                    <div className="additem">{bamboo1}</div>
                    </div>
                    </div>
                <div className="plant_item">
                    <img src={require('../image/bamboo2.jpg')}></img>
                    <h3>Two Layer Bamboo Plant Standard</h3>
                    <h3>Rs.389</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBamboo2(bamboo2+1)}>Add to Cart</button>
                    <div className="additem">{bamboo2}</div>
                    </div>
                    </div>
                <div className="plant_item"> 
                    <img src={require('../image/bamboo3.jpg')}></img>
                    <h3>Exquisite three Layer Bamboo Terrarium</h3>
                    <h3>Rs.1049</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBamboo3(bamboo3+1)}>Add to Cart</button>
                    <div className="additem">{bamboo3}</div>
                    </div>
                    </div>
                    
                <div className="plant_item">
                    <img src={require('../image/bamboo4.jpg')}></img>
                    <h3>2 Layer Bamboo plant in Elephant Ceramic Pot</h3>
                    <h3>Rs.999</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBamboo4(bamboo4+1)}>Add to Cart</button>
                    <div className="additem">{bamboo4}</div>
                    </div>
                   </div>
                <div className="plant_item">
                    <img src={require('../image/bamboo5.jpg')}></img>
                    <h3>Set of 2 Bambooo Plants in red pot</h3>
                    <h3>Rs.799</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBamboo5(bamboo5+1)}>Add to Cart</button>
                    <div className="additem">{bamboo5}</div>
                    </div>
                </div>
                
                <div className="plant_item">
                    <img src={require('../image/bambo.jpg')}></img>
                    <h3>Lucky Bamboo in Bottle pot</h3>
                    <h3>Rs.699</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBamboo6(bamboo6+1)}>Add to Cart</button>
                    <div className="additem">{bamboo6}</div>
                    </div>
                   </div>
                   <div className="plant_item">
                    <img src={require('../image/bonsai1.jpg')}></img>
                    <h3>Potted Ficus Bonsai plant</h3>
                    <h3>Rs.1499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBonsai1(bonsai1+1)}>Add to Cart</button>
                    <div className="additem">{bonsai1}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/bonsai2.jpg')}></img>
                    <h3>Ficus Bonsai in Blue pot</h3>
                    <h3>Rs.1699</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBonsai2(bonsai2+1)}>Add to Cart</button>
                    <div className="additem">{bonsai2}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/bonsai3.jpg')}></img>
                    <h3>Nolina Palm Plant in Sky Blue Ceramic Pot</h3>
                    <h3>Rs.1749</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBonsai3(bonsai3+1)}>Add to Cart</button>
                    <div className="additem">{bonsai3}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/bonsai4.jpg')}></img>
                    <h3>Adenium Desert Rose & Money Plant combo</h3>
                    <h3>Rs.2899</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBonsai4(bonsai4+1)}>Add to Cart</button>
                    <div className="additem">{bonsai4}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/bonsai5.jpg')}></img>
                    <h3>Ficus Bonsai in Sea House Planter</h3>
                    <h3>Rs.1749</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBonsai5(bonsai5+1)}>Add to Cart</button>
                    <div className="additem">{bonsai5}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/jade1.jpg')}></img>
                    <h3>Jade Plant 4 Glass Terrarium</h3>
                    <h3>Rs.399</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setJade1(jade1+1)}>Add to Cart</button>
                    <div className="additem">{jade1}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/jade2.jpg')}></img>
                    <h3>Happy Birthday Jade Plant Terrarium</h3>
                    <h3>Rs.499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setJade2(jade2+1)}>Add to Cart</button>
                    <div className="additem">{jade2}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/jade3.jpg')}></img>
                    <h3>Beautyful Jade Plant in White Plastic Pot</h3>
                    <h3>Rs.199</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setJade3(jade3+1)}>Add to Cart</button>
                    <div className="additem">{jade3}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/jade4.jpg')}></img>
                    <h3>Jade Plant Mason Jar Terrarium</h3>
                    <h3>Rs.399</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setJade4(jade4+1)}>Add to Cart</button>
                    <div className="additem">{jade4}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/jade5.jpg')}></img>
                    <h3>Jade Plant Beauty</h3>
                    <h3>Rs.399</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setJade5(jade5+1)}>Add to Cart</button>
                    <div className="additem">{jade5}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/jade6.jpg')}></img>
                    <h3>Forever Greateful to mon Jade Plant</h3>
                    <h3>Rs.499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setJade6(jade6+1)}>Add to Cart</button>
                    <div className="additem">{jade6}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/money.jpg')}></img>
                    <h3>Golden Money plant in Green Plastic pot</h3>
                    <h3>Rs.249</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMoney1(money1+1)}>Add to Cart</button>
                    <div className="additem">{money1}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/money1.jpg')}></img>
                    <h3>Money Plant in Lucky to Have You Glass Pot</h3>
                    <h3>Rs.499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMoney2(money2+1)}>Add to Cart</button>
                    <div className="additem">{money2}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/money2.jpg')}></img>
                    <h3>Money Plant in Black Plastic pot</h3>
                    <h3>Rs.549</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMoney3(money3+1)}>Add to Cart</button>
                    <div className="additem">{money3}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/money3.jpg')}></img>
                    <h3>Fashionable Money Plant Terrarium</h3>
                    <h3>Rs.799</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMoney4(money4+1)}>Add to Cart</button>
                    <div className="additem">{money4}</div>
                    </div>
                </div>
                <div className="plant_item">
                    <img src={require('../image/money4.jpg')}></img>
                    <h3>Golden Money Plant in mosaic Metal Pot</h3>
                    <h3>Rs.649</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMoney5(money5+1)}>Add to Cart</button>
                    <div className="additem">{money5}</div>
                    </div>
                </div>
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
export default Plants;