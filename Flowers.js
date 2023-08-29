import React from 'react';
import './Flowers.css';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import roses from '../image/roses.jpg';
import liliess from '../image/liliess.jpg';
import carnations from '../image/carnations.jpg';
import gerberas from '../image/gerberas.jpg';
import mixeds from '../image/mixeds.jpg';
function Flowers(){
    const [rose1,setRose1]=useState(0)  
    const [rose2,setRose2]=useState(0)
    const [rose3,setRose3]=useState(0)
    const [rose4,setRose4]=useState(0) 
    const [rose5,setRose5]=useState(0) 
    const [lily1,setLily1]=useState(0)  
    const [lily2,setLily2]=useState(0)
    const [lily3,setLily3]=useState(0)
    const [lily4,setLily4]=useState(0) 
    const [lily5,setLily5]=useState(0)
    const [carnation1,setCarnation1]=useState(0)  
    const [carnation2,setCarnation2]=useState(0)
    const [carnation3,setCarnation3]=useState(0)
    const [carnation4,setCarnation4]=useState(0) 
    const [carnation5,setCarnation5]=useState(0)
    const [gerbera1,setGerbera1]=useState(0)  
    const [gerbera2,setGerbera2]=useState(0)
    const [gerbera3,setGerbera3]=useState(0)
    const [gerbera4,setGerbera4]=useState(0) 
    const [gerbera5,setGerbera5]=useState(0) 
    const [mixed1,setMixed1]=useState(0)  
    const [mixed2,setMixed2]=useState(0)
    const [mixed3,setMixed3]=useState(0)
    const [mixed4,setMixed4]=useState(0) 
    const [mixed5,setMixed5]=useState(0)


    const Navigate=useNavigate()
    const flowerpage=()=>
    {
        Navigate('/rose')
    }
    const flowerpage1=()=>
    {
        Navigate('/lilies')
    }
    const flowerpage2=()=>
    {
        Navigate('/carnation')
    }
    const flowerpage3=()=>
    {
        Navigate('/gerbera')
    }
    const flowerpage4=()=>
    {
        Navigate('/mixed')
    }
    return(
        <div>
            <h2>Types of Flowers</h2>
            <div className="flowergroup">
                <div className="flower">
                    <img src={roses} onClick={()=>flowerpage()}></img>
                </div>
                <div className="flower">
                    <img src={liliess} onClick={()=>flowerpage1()}></img>
                </div>
                <div className="flower">
                    <img src={carnations} onClick={()=>flowerpage2()}></img>
                </div>
                <div className="flower">
                    <img src={gerberas} onClick={()=>flowerpage3()}></img>
                </div>
                <div className="flower">
                    <img src={mixeds} onClick={()=>flowerpage4()}></img>
                </div>
            </div>

            <br></br>

             <div className="flowertypes">
             <div className="flower_item">
                    <img src={require('../image/rose1.jpg')}></img>
                    <h3>15 Pink Roses Vase Arrangement </h3>
                    <h3>Rs.1099</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setRose1(rose1+1)}>Add to Cart</button>
                    <div className="additem">{rose1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/rose2.jpg')}></img>
                    <h3>16 Red Roses Arrangement inWooden Base</h3>
                    <h3>Rs.949</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setRose2(rose2+1)}>Add to Cart</button>
                    <div className="additem">{rose2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/rose3.jpg')}></img>
                    <h3>Adorable Aura Roses Bouquet</h3>
                    <h3>Rs.1499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setRose3(rose3+1)}>Add to Cart</button>
                    <div className="additem">{rose3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/rose4.jpg')}></img>
                    <h3>Appealing Red Roses Double Wrapped Bouquet</h3>
                    <h3>Rs.649</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setRose4(rose4+1)}>Add to Cart</button>
                    <div className="additem">{rose4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/rose5.jpg')}></img>
                    <h3>Blissful Love Roses Arrangement</h3>
                    <h3>Rs.1499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setRose5(rose5+1)}>Add to Cart</button>
                    <div className="additem">{rose5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/lily1.jpg')}></img>
                    <h3>Passionate Oriental Pink Lilies Bouquet</h3>
                    <h3>Rs.2349</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setLily1(lily1+1)}>Add to Cart</button>
                    <div className="additem">{lily1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/lily2.jpg')}></img>
                    <h3>Attractive Mixed Asiatic Lilies Bunch</h3>
                    <h3>Rs.1349</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setLily2(lily2+1)}>Add to Cart</button>
                    <div className="additem">{lily2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/lily3.jpg')}></img>
                    <h3>5 Pink Oriental Lilies In Glass Vase</h3>
                    <h3>Rs.2249</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setLily3(lily3+1)}>Add to Cart</button>
                    <div className="additem">{lily3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/lily4.jpg')}></img>
                    <h3>Blooming Asiatic Lilies In Black Ribbon Glass Vase</h3>
                    <h3>Rs.1649</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setLily4(lily4+1)}>Add to Cart</button>
                    <div className="additem">{lily4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/lily5.jpg')}></img>
                    <h3>Blissful Orange Lilies In Fishbowl Vase</h3>
                    <h3>Rs.2349</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setLily5(lily5+1)}>Add to Cart</button>
                    <div className="additem">{lily5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/carnation.jpg')}></img>
                    <h3>Soothing 6 Yellow Carnations Bouquet</h3>
                    <h3>Rs.449</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setCarnation1(carnation1+1)}>Add to Cart</button>
                    <div className="additem">{carnation1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/carnation1.jpg')}></img>
                    <h3>Beautiful Pink Carnations Bouquet</h3>
                    <h3>Rs.499</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setCarnation2(carnation2+1)}>Add to Cart</button>
                    <div className="additem">{carnation2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/carnation2.jpg')}></img>
                    <h3>Blush & Love Floral Arrangement</h3>
                    <h3>Rs.2649</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setCarnation3(carnation3+1)}>Add to Cart</button>
                    <div className="additem">{carnation3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/carnation3.jpg')}></img>
                    <h3>Mixed Carnations Bouquet With Green Fillers</h3>
                    <h3>Rs.549</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setCarnation4(carnation4+1)}>Add to Cart</button>
                    <div className="additem">{carnation4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/carnation4.jpg')}></img>
                    <h3>White Carnations & Orchids In Vase</h3>
                    <h3>Rs.1849</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setCarnation5(carnation5+1)}>Add to Cart</button>
                    <div className="additem">{carnation5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/gerbera1.jpg')}></img>
                    <h3>Elegant Gerberas In Glass Vase</h3>
                    <h3>Rs.949</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setGerbera1(gerbera1+1)}>Add to Cart</button>
                    <div className="additem">{gerbera1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/gerbera2.jpg')}></img>
                    <h3>Father's Day Gerbera Medley</h3>
                    <h3>Rs.699</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setGerbera2(gerbera2+1)}>Add to Cart</button>
                    <div className="additem">{gerbera2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/gerbera3.jpg')}></img>
                    <h3>Beautiful Red & Yellow Gerberas Arrangement</h3>
                    <h3>Rs.1199</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setGerbera3(gerbera3+1)}>Add to Cart</button>
                    <div className="additem">{gerbera3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/gerbera4.jpg')}></img>
                    <h3>Flowers Of Paradise Gerberas Vase</h3>
                    <h3>Rs.899</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setGerbera4(gerbera4+1)}>Add to Cart</button>
                    <div className="additem">{gerbera4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/gerbera5.jpg')}></img>
                    <h3>Bright Hues Floral Bouquet</h3>
                    <h3>Rs.599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setGerbera5(gerbera5+1)}>Add to Cart</button>
                    <div className="additem">{gerbera5}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/mixed1.jpg')}></img>
                    <h3>Golden Sunrise</h3>
                    <h3>Rs.2599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMixed1(mixed1+1)}>Add to Cart</button>
                    <div className="additem">{mixed1}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/mixed2.jpg')}></img>
                    <h3>Pink Roses & Daisies Bouquet</h3>
                    <h3>Rs.1399</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMixed2(mixed2+1)}>Add to Cart</button>
                    <div className="additem">{mixed2}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/mixed3.jpg')}></img>
                    <h3>Exotic Flowers Bouquet</h3>
                    <h3>Rs.649</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMixed3(mixed3+1)}>Add to Cart</button>
                    <div className="additem">{mixed3}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/mixed4.jpg')}></img>
                    <h3>Asiatic Lilies N Red Roses Cane Basket Arrangement</h3>
                    <h3>Rs.1599</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMixed4(mixed4+1)}>Add to Cart</button>
                    <div className="additem">{mixed4}</div>
                    </div>
                </div>
                <div className="flower_item">
                    <img src={require('../image/mixed5.jpg')}></img>
                    <h3>Mesmerising Orchids And Carnations Arrangement</h3>
                    <h3>Rs.2549</h3>
                    <div className="addtocard">
                    <button className="btn" onClick={()=>setMixed5(mixed5+1)}>Add to Cart</button>
                    <div className="additem">{mixed5}</div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default Flowers;