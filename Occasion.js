import React from 'react';
import './Occasion.css';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import birthdays from '../image/birthdays.png';
import anniversarys from '../image/annivaersarys.png';
import congratulation from '../image/congratulation.png';
import love from '../image/love.png';
import sympathy from '../image/sympathy.png';
function Occasion(){
    const [birthday1,setBirthday1]=useState(0)  
    const [birthday2,setBirthday2]=useState(0)
    const [birthday3,setBirthday3]=useState(0)
    const [birthday4,setBirthday4]=useState(0) 
    const [birthday5,setBirthday5]=useState(0)
    const [anniversary1,setAnniversary1]=useState(0)  
    const [anniversary2,setAnniversary2]=useState(0)
    const [anniversary3,setAnniversary3]=useState(0)
    const [anniversary4,setAnniversary4]=useState(0) 
    const [anniversary5,setAnniversary5]=useState(0) 
    const [congrates2,setCongrates2]=useState(0)
    const [congrates3,setCongrates3]=useState(0)
    const [congrates4,setCongrates4]=useState(0) 
    const [congrates5,setCongrates5]=useState(0) 
    const [congrates6,setCongrates6]=useState(0) 
    const [affection1,setAffection1]=useState(0)  
    const [affection2,setAffection2]=useState(0)
    const [affection3,setAffection3]=useState(0)
    const [affection4,setAffection4]=useState(0) 
    const [affection5,setAffection5]=useState(0) 
    const [affection6,setAffection6]=useState(0)
    const [sympathi1,setSympathi1]=useState(0)  
    const [sympathi2,setSympathi2]=useState(0)
    const [sympathi3,setSympathi3]=useState(0)
    const [sympathi4,setSympathi4]=useState(0) 
    const [sympathi5,setSympathi5]=useState(0)
    const Navigate=useNavigate()
    const occasionpage=()=>
    {
        Navigate('/birthday')
    }
    const occasionpage1=()=>
    {
        Navigate('/anniversary')
    }
    const occasionpage2=()=>
    {
        Navigate('/congratulation')
    }
    const occasionpage3=()=>
    {
        Navigate('/affection')
    }
    const occasionpage4=()=>
    {
        Navigate('/sympathy')
    }
    return(
        <div>
            <h2>By Occasion</h2>
            <div className="occgroup">
                <div className="occ">
                    <img src={birthdays} onClick={()=>occasionpage()}></img>
                </div>
                <div className="occ">
                    <img src={anniversarys} onClick={()=>occasionpage1()}></img>
                </div>
                <div className="occ">
                    <img src={congratulation} onClick={()=>occasionpage2()}></img>
                </div>
                <div className="occ">
                    <img src={love} onClick={()=>occasionpage3()}></img>
                </div>
                <div className="occ">
                    <img src={sympathy} onClick={()=>occasionpage4()}></img>
                </div>
                 </div>

                 <br></br>

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
                <h3>Rs.599</h3>
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
                    <img src={require('../image/love1.jpg')}></img>
                    <h3>24 Red Color Roses Arrangement</h3>
                    <h3>Rs.1640</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAffection1(affection1+1)}>Add to Cart</button>
                    <div className="additem">{affection1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/love.jpg')}></img>
                    <h3>Romantic 10 Red Roses Bouquet</h3>
                    <h3>Rs.599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAffection2(affection2+1)}>Add to Cart</button>
                    <div className="additem">{affection2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/love2.jpg')}></img>
                    <h3>Heart in a Box Rose Arrangement</h3>
                    <h3>Rs.1199</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAffection3(affection3+1)}>Add to Cart</button>
                    <div className="additem">{affection3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/love3.jpg')}></img>
                    <h3>Only You Forever Floral Bouquet</h3>
                    <h3>Rs.6049</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAffection4(affection4+1)}>Add to Cart</button>
                    <div className="additem">{affection4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/love4.jpg')}></img>
                    <h3>Love U Forever Pink & Red Roses</h3>
                    <h3>Rs.999</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAffection5(affection5+1)}>Add to Cart</button>
                    <div className="additem">{affection5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/love5.jpg')}></img>
                    <h3>20 Red Roses Bouquet</h3>
                    <h3>Rs.929</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setAffection6(affection6+1)}>Add to Cart</button>
                    <div className="additem">{affection6}</div>
                    </div>
                </div>
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


            </div>
            </div>
    )
}
export default Occasion;