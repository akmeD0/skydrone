import React, { Component } from 'react'
import logo from '../../img/logo.svg';
import ContactButton from '../ContactButton';
import HeaderAside from './HeaderBurger';

export class Header extends Component {
    headerNav = this.props.headerNav;
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false,
        };

        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {
        const { isScrolled } = this.state;

        const headerClassName = isScrolled ? 'header scrolled' : 'header';
        return (
            <div className={headerClassName}>
                {/* Header container */}
                <div className='header__cont cont'>
                    {/* Header Logo */}
                    <a className='header__logo' href='index.html' ><img src={logo} alt="Home page" /></a>
                    {/* Header Left Side */}
                    <div className='header__left'>
                        {/* Header Nav */}
                        <nav className='header__nav'>
                            {this.headerNav.map((el) => (
                                <a href='index.html' className='header__link' key={el}>{el}</a>
                            ))}
                        </nav>
                        {/* Header Button */}
                        <ContactButton />
                    </div>
                    <div className='header__burger'><span></span></div>
                    <HeaderAside />
                </div>
            </div>
        )
    }
    handleScroll() {
        const point = 350;
        const isScrolled = window.scrollY >= point;
        this.setState({ isScrolled });
    }
}

export default Header