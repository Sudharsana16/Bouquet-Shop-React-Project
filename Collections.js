import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import './Collections.css';
import fib from '../image/fib.png';
import fiv from '../image/fiv.png';
import luxury from '../image/luxury.png';
import handtied from '../image/handtied.png';
import classics from '../image/Classics.png';
function Collections(){
    const [box1,setBox1]=useState(0)  
    const [box2,setBox2]=useState(0)
    const [box3,setBox3]=useState(0)
    const [box4,setBox4]=useState(0) 
    const [box5,setBox5]=useState(0)
    const [vase1,setVase1]=useState(0)  
    const [vase2,setVase2]=useState(0)
    const [vase3,setVase3]=useState(0)
    const [vase4,setVase4]=useState(0) 
    const [vase5,setVase5]=useState(0)
    const [luxury1,setLuxury1]=useState(0)  
    const [luxury2,setLuxury2]=useState(0)
    const [luxury3,setLuxury3]=useState(0)
    const [luxury4,setLuxury4]=useState(0) 
    const [luxury5,setLuxury5]=useState(0)
    const [hand1,setHand1]=useState(0)  
    const [hand2,setHand2]=useState(0)
    const [hand3,setHand3]=useState(0)
    const [hand4,setHand4]=useState(0) 
    const [hand5,setHand5]=useState(0)
    const [classic1,setClassic1]=useState(0)  
    const [classic2,setClassic2]=useState(0)
    const [classic3,setClassic3]=useState(0)
    const [classic4,setClassic4]=useState(0) 
    const [classic5,setClassic5]=useState(0) 


    const Navigate=useNavigate()
    const collectionpage=()=>
    {
        Navigate('/flowerinBox')
    }
    const collectionpage1=()=>
    {
        Navigate('/flowerinvase')
    }
    const collectionpage2=()=>
    {
        Navigate('/luxury')
    }
    const collectionpage3=()=>
    {
        Navigate('/handtied')
    }
    const collectionpage4=()=>
    {
        Navigate('/classic')
    }
    return(
        <div>
            <h2>By Collections</h2>
            <div className="collectgroup">
                <div className="collect">
                    <img src={fib} onClick={()=>collectionpage()}></img>
                </div>
                <div className="collect">
                    <img src={fiv} onClick={()=>collectionpage1()}></img>
                </div>
                <div className="collect">
                    <img src={luxury} onClick={()=>collectionpage2()}></img>
                </div>
                <div className="collect">
                    <img src={handtied} onClick={()=>collectionpage3()}></img>
                </div>
                <div className="collect">
                    <img src={classics} onClick={()=>collectionpage4()}></img>
                </div>
            </div>

            <br></br>

            <div className="flowergroups">
            <div className="flower_item">
                    <img src={require('../image/box.jpg')}></img>
                    <h3>Floral Fiona</h3>
                    <h3>Rs.2225</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBox1(box1+1)}>Add to Cart</button>
                    <div className="additem">{box1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/box1.jpg')}></img>
                    <h3>Aphrodite Blooms</h3>
                    <h3>Rs.2245</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBox2(box2+1)}>Add to Cart</button>
                    <div className="additem">{box2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/box2.jpg')}></img>
                    <h3>The Crescent</h3>
                    <h3>Rs.2295</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBox3(box3+1)}>Add to Cart</button>
                    <div className="additem">{box3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/box3.jpg')}></img>
                    <h3>Meadow in a Box</h3>
                    <h3>Rs.2395</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBox4(box4+1)}>Add to Cart</button>
                    <div className="additem">{box4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/box4.jpg')}></img>
                    <h3>Dreamy Cloud Flower Box</h3>
                    <h3>1745</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setBox5(box5+1)}>Add to Cart</button>
                    <div className="additem">{box5}</div>
                    </div>
                </div>
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
                <img src={require('../image/luxury1.jpg')}></img>
                <h3>Divine Beauty</h3>
                <h3>Rs.3240</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setLuxury1(luxury1+1)}>Add to Cart</button>
                    <div className="additem">{luxury1}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/luxury2.jpg')}></img>
                <h3>Unforgettable 50 White Roses Hand-Tied</h3>
                <h3>Rs.4500</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setLuxury2(luxury2+1)}>Add to Cart</button>
                    <div className="additem">{luxury2}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/luxury3.jpg')}></img>
                <h3>Artic Desire</h3>
                <h3>Rs.6045</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setLuxury3(luxury3+1)}>Add to Cart</button>
                    <div className="additem">{luxury3}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/luxury4.jpg')}></img>
                <h3>Unicorn Hues Bouquet</h3>
                <h3>Rs.3499</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setLuxury4(luxury4+1)}>Add to Cart</button>
                    <div className="additem">{luxury4}</div>
                    </div>
            </div>
            <div className="flower_item">
                <img src={require('../image/luxury5.jpg')}></img>
                <h3>Santini's Secret</h3>
                <h3>Rs.4999</h3>
                <div className="addtocard">
                    <button className="btn" onClick={()=>setLuxury5(luxury5+1)}>Add to Cart</button>
                    <div className="additem">{luxury5}</div>
                    </div>
            </div>
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
                </div>
        </div>
    )
}
export default Collections;