import React, { Component } from 'react'

export class HeaderAside extends Component {
    headerNav = this.props.headerNav;
    render() {
        return (
            <div id='aside' className='header__aside'>
                <nav className='header__nav--aside'>
                    {this.headerNav.map((el) => (
                        <a href={`#` + el} className='header__link--aside' key={el} onClick={() => {
                            document.querySelector('body').classList.remove('lock');
                            document.getElementById('burger').classList.remove('active')
                            document.getElementById('aside').classList.remove('active')
                        }}>{el}</a>
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