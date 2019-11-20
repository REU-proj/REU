import React from 'react'

// Redux
import { connect } from 'react-redux'
import { slideMenu } from '../../redux/reducer'

// Import font-awesome icons
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Stylesheet
import './MobileMenu.css'

const MobileMenu = (props) => {
    const { slideMenu, menu } = props
    return (
        <div className='mobileMenu-main'>
            <section className='mobileMenu-header'>
                <FontAwesomeIcon 
                    icon={faTimes}
                    size='lg'
                    onClick={() => slideMenu(menu)}
                    className='mobileMenu-close'
                />
            </section>
            <section className='mobileMenu-nav'>
                <button className='mobileMenu-nav-btn'>Buy</button>
                <button className='mobileMenu-nav-btn'>Rent</button>
                <button className='mobileMenu-nav-btn'>Find an Agent</button>
                <div className='mobileMenu-auth'>
                    <button className='mobileMenu-auth-btn auth-signup'>Sign Up</button>
                    <button className='mobileMenu-auth-btn auth-login'>Login</button>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {slideMenu})(MobileMenu)