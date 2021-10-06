import React from 'react'
import Header from '../../Components/Header'
import About from '../../Components/About'
import styles from './Home.module.css'

export default function index() {
    return (
        <div className={styles.container}>
            <Header />
            <About />
        </div>
    )
}
