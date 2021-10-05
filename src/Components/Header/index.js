import React from 'react'
import ED from '../../images/ED.png'
import styles from './Header.module.css'


export default function index(props) {

    return (
        <div className={styles.background_image}>
            {navBar()}
            {headings()}
            {cards()}
        </div>
    )

    function navBar(){
        return <>
            <div className={styles.header_wrapper}>
                <div className={styles.logo_wrapper}>
                    <img src={ED} />
                </div>
            <nav>
                <ul className={styles.list_wrapper}>
                    <li className={styles.list}><a>Home</a></li>
                    <li className={styles.list}><a>About Us</a></li>
                    <li className={styles.list}><a>Careers</a></li>
                    <li className={styles.list}><a>Contact</a></li>
                </ul>
            </nav>
        </div>
        </>
    }

    function headings (){
        return <div className={styles.heading_wrapper}>
                <h1 className={styles.heading}>Serving Small Bussnisses to Grow <br/> <a className={styles.link}>EASY   DUKAAN</a></h1>
            </div>
    }

    function cards (){
        return <div className={styles.figure_wrapper}>
                <div className={styles.figure}>
                    <h5 className={styles.figure_heading}>Free Ship</h5>
                    <p>Orders over $100</p>
                </div>
                <div className={styles.figure}>
                    <h5 className={styles.figure_heading}>FREE RETURNS</h5>
                    <p>Withthin 30 Days</p>
                </div>
                <div className={styles.figure}>
                    <h5 className={styles.figure_heading}>100% SECURE</h5>
                    <p>Online Shopping</p>
                </div>
                <div className={styles.figure}>
                    <h5 className={styles.figure_heading}>BEST PRICE</h5>
                    <p>Guaranteed</p>
                </div>
            </div>
    }
}
