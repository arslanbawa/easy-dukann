import React from 'react'
import styles from './About.module.css'
import about1 from '../../images/about1.png'
import about2 from '../../images/about2.png'
import ED from '../../images/ED.png'


 const index = () => {
     
    return (
        <div className={styles.about_wrapper}>
                {aboutHeading()}
                {aboutImages()}
        </div>
    )
    function aboutHeading  () {
        return(
            <div className={styles.content_wrapper}>
                    <div className={styles.heading_wrapper}>
                        <h2 className={styles.main_heading}>What we do</h2>
                        <p className={styles.main_para}>Easy Dukaan’s suite of digital products empower merchants to simplify and grow their businesses.</p>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.content_image}>
                            <img src={ED} />
                        </div>
                        <div>
                        <h3 className={styles.content_heading}>Commerce</h3>
                        <p className={styles.content_para}>One stop shop to purchase thousands of products for your store.</p>
                        </div>
                    </div>
                    <div className={styles.content}>
                    <div className={styles.content_image}>
                            <img src={"https://uploads-ssl.webflow.com/5eb0899d8fc87851be175c44/6123307774417790916fe1db_easy-icon.svg"} />
                        </div>
                       <div>
                       <h3 className={styles.content_heading}>Fintech</h3>
                        <p className={styles.content_para}>Simple book-keeping platform for all your financial needs</p>
                       </div>
                    </div>
                </div>
        )
    }
    function aboutImages () {
        return(
            <div className={styles.image_wrapper}>
                <div className={styles.image_two}><img src={about1} className={styles.image}/></div>
                    <div className={styles.image_one}><img src={about2} className={styles.image}/></div>
                </div>
        )
    }
    
}
export default index;
