import React from 'react'
import {useState} from 'react'
import services1 from '../../images/services1.png'
import services2 from '../../images/services2.png'
import services3 from '../../images/services3.png'
import services4 from '../../images/services4.png'
import styles from './Services.module.css'


export default function Services() {
    const [flag, setFlag] = useState("Products")
    const [cardData, setCardData] = useState([
        {
            "id" : "1",
            "title" : "Products",
            "image" :services1,
            "icon" : "https://uploads-ssl.webflow.com/5eb0899d8fc87851be175c44/611b7dcfba86759ad5467e0a_bf-1.svg",
            "heading":"1000+ products",
            "paragraph":"Fulfill all your store requirements from the widest assortment of products at the best prices and with rewarding discounts."
        },
        {
            "id" : "2",
            "title" : "services",
            "image" :services3,
            "icon" : "https://uploads-ssl.webflow.com/5eb0899d8fc87851be175c44/611b7d63de61303767597205_bf-5.svg",
            "heading":"24 hour service",
            "paragraph":"Avail our speedy service with next day delivery for all orders received before midnight to ensure your store is fully stocked round the clock."
        },
        {
            "id" : "3",
            "title" : "wallet",
            "image" :services2,
            "icon" : "https://uploads-ssl.webflow.com/5eb0899d8fc87851be175c44/610cd3caacbdd5dd8cb2ca3d_bf-5.svg",
            "heading":"Wallet",
            "paragraph":"Utilise the in-app wallet in your account to collect coins and avail discounts, facilitating your daily business activities."
        },
        {
            "id" : "4",
            "title" : "Business",
            "image" :services4,
            "icon" : "https://uploads-ssl.webflow.com/5eb0899d8fc87851be175c44/610cd3caaa58307487ce0b8e_bf-4.svg",
            "heading":"Business Cards",
            "paragraph":"Create customised business cards and share them with your customers, friends and family to boost your network instantly.            "
        }
    ])
    return (
        <div className={styles.services_wrapper}>
            {servicesHeading()}
            <div className={styles.content_wrapper}>
            {servicesNav()}
            {servicesRendring()}
            </div>
        </div>
    )

function servicesHeading () {
    return(
        <div className={styles.heading_wrapper}>
                <h3 className={styles.heading}>B2B e-commerce marketplace</h3>
            </div>
    )
}
function servicesNav() {
    return(
        <nav>
                        <ul className={styles.services_links_wrapper}>
                            <li><a className={styles.services_links} onClick={()=>setFlag("Products")}><img src={"https://uploads-ssl.webflow.com/5eb0899d8fc87851be175c44/611b7dcfba86759ad5467e0a_bf-1.svg"}/>1000+ <br/>Products </a></li>
                            <li><a className={styles.services_links} onClick={()=>setFlag("services")}><img src={"https://uploads-ssl.webflow.com/5eb0899d8fc87851be175c44/611b7d63de61303767597205_bf-5.svg"}/>24 hours <br/> services </a></li>                                                     
                            <li><a className={styles.services_links} onClick={()=>setFlag("wallet")}><img src={"https://uploads-ssl.webflow.com/5eb0899d8fc87851be175c44/610cd3caacbdd5dd8cb2ca3d_bf-5.svg"}/>wallet </a></li>
                            <li><a className={styles.services_links} onClick={()=>setFlag("Business")}><img src={"https://uploads-ssl.webflow.com/5eb0899d8fc87851be175c44/610cd3caaa58307487ce0b8e_bf-4.svg"}/>Business <br/>Cards </a></li>
                        </ul>
                    </nav>
    )
}
function servicesRendring() {
    return(
      <>
        {
            cardData.map((element) => {
                if(element.title==flag){
                    return(
                            <div className={styles.content} > 
                        <div className={styles.services_img_wrapper}><img src={element.image}  className={styles.services_img} /></div>
                        <div className={styles.content_text}>
                            <div className={styles.services_icon}><img src={element.icon} /></div>
                        <h3 className={styles.services_heading}>{element.heading}</h3>
                        <p className={styles.services_para}>{element.paragraph}</p>
                        </div>
                        </div>
                    )
                }
            })
        }
      </>
    )
}
    
}
