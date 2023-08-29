import React from "react";
import './Home.css';
import logo1 from '../image/logo1.jpg';
import {useNavigate} from 'react-router-dom';
import birthdays from '../image/birthdays.png';
import anniversarys from '../image/annivaersarys.png';
import congratulation from '../image/congratulation.png';
import love from '../image/love.png';
import sympathy from '../image/sympathy.png';
import roses from '../image/roses.jpg';
import liliess from '../image/liliess.jpg';
import carnations from '../image/carnations.jpg';
import gerberas from '../image/gerberas.jpg';
import mixeds from '../image/mixeds.jpg';
import fib from '../image/fib.png';
import fiv from '../image/fiv.png';
import luxury from '../image/luxury.png'
import handtied from '../image/handtied.png';
import classics from '../image/Classics.png';
import bamboop from '../image/bamboop.jpg';
import bonsaip from '../image/bonsaip.jpg';
import jadep from '../image/jadep.jpg';
import moneyp from '../image/moneyp.jpg';
import snakep from '../image/snakep.jpg';
import { Link } from "react-router-dom";
function Home(){
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
           <div className="navbar">
            <ul>
                <li><img src={logo1} width={100} height={40} className="nav"></img></li>
                <li><Link to="/home" className="nav">Home</Link></li>
                <li><Link to="/occasion" className="nav">Occasion</Link></li>
                <li><Link to="/flowers" className="nav">Flowers</Link></li>
                <li><Link to="/collections" className="nav">Collections</Link></li>
                <li><Link to="/plants" className="nav">Plants</Link></li>
            </ul>
            </div>
            
            
            <div className="homepage">
             <div className="backgrd">
                <img src={require('../image/background1.jpg')}></img>
             </div>

             <br></br>
            
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
            <div className="backgrd2">
                <img src={require('../image/background2.jpg')}></img>
             </div>
             <br></br>
             
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

            </div>
            </div>
    )
}
export default Home;