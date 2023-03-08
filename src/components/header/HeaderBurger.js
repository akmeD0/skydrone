import React, { Component } from 'react'

export class HeaderAside extends Component {
    headerNav = this.props.headerNav;
    render() {
        return (
            <div id='aside' className='header__aside'>
                <nav className='header__nav--aside'>
                    {this.headerNav.map((el) => (
                        <a href='index.html' className='header__link--aside' key={el}>{el}</a>
                    ))}
                    <button className='button--aside'>
                        Contact Us
                    </button>
                </nav>
            </div>
        )
    }
}

export default HeaderAside