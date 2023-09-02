import React from 'react'
import { NavLink } from 'react-router-dom'
import css from "./footer.module.scss";

function Footer () {
    return (
        <div className={css['footer']}>
            <section className={css['footer-nav']}>
                <div className={css["footer-nav-item"]} >
                    <h3>GET HELP</h3>
                    <div className={css['footer-contact']}>
                        <NavLink to=''>Home</NavLink>
                        <NavLink to=''>Nike</NavLink>
                        <NavLink to=''>Adidas</NavLink>
                        <NavLink to=''>Contact</NavLink>
                    </div>
                </div>
                <div className={css["footer-nav-item"]}>
                <div className={css["footer-border"]}>
                    <h3>SUPPORT</h3>
                    <div className={css['footer-contact']}>
                        <NavLink to=''>About</NavLink>  
                        <NavLink to=''>Contact</NavLink>
                        <NavLink to=''>HelNavLink</NavLink>
                        <NavLink to=''>NavLinkhone</NavLink>
                    </div>
                </div>
                </div>
                <div className={css["footer-nav-item"]}>
                    <h3>REGISTER</h3>
                    <div className={css['footer-contact']}>
                        <NavLink to='/register'>Register</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                    </div>
                </div>
            </section>
            <section className={css['footer-copyright']}>
                <span>© 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải.</span>
            </section>
        </div>
    )
}

export default Footer