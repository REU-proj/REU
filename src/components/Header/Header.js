import React from 'react'

// Components
import MobileMenu from '../MobileMenu/MobileMenu'

// Import font-awesome icons
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Redux
import { connect } from 'react-redux'
import { slideMenu } from '../../redux/reducer'

// Stylesheet
import './Header.css'

const Header = (props) => {
    const { slideMenu, menu } = props
    return (
        <div>
            <header className='header-main'>
                <section className='header-left'>
                    <FontAwesomeIcon 
                        icon={faBars}
                        size="lg"
                        onClick={() => slideMenu(menu)}
                        className='header-hamburger'
                    />
                    <h1
                        className='header-title'
                    >
                        REU
                    </h1>
                </section>
                <section className='header-right'>
                    <button
                        className='header-auth-btn header-btn-signUp header-btn-text'
                    >
                        Sign Up
                    </button>
                    <button
                        className='header-auth-btn header-btn-login header-btn-text'
                    >
                        Login
                    </button>
                </section>
            </header>
            <div className={menu ? 'header-menu-transparent' : 'header-menu-hide'} />
            <div className={menu ? 'header-menu header-menu-slide' : 'header-menu'}>
                <MobileMenu />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {slideMenu})(Header)