import React, { Component } from 'react'
import Banner from './banner/Banner'
import Clients from './clients/Clients'
import Future from './future/Future'
import Header from './header/Header'
import Hero from './heroBlock/Hero'
import Reviews from './reviews/Reviews'

import avatar1 from '../img/reviews/avatar1.svg'
import avatar2 from '../img/reviews/avatar2.svg'
import avatar3 from '../img/reviews/avatar3.svg'
import email from '../img/contacts/email.svg'
import phone from '../img/contacts/phone.svg'
import address from '../img/contacts/address.svg'
import Features from './Features/Features'
import Cta from './CTA/Cta'
import Aplication from './app/Aplication'
import Contact from './contact/Contact'
import Footer from './footer/Footer'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headerNav: [
                "Clients",
                "Features",
                "Download App"
            ],
            reviews: [
                {
                    id: 1,
                    photo: avatar1,
                    name: "Customer name",
                    positionCompany: "Position, Company name",
                    text: "\"A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.\""
                },
                {
                    id: 2,
                    photo: avatar2,
                    name: "Customer name",
                    positionCompany: "Position, Company name",
                    text: "\"A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.\""
                },
                {
                    id: 3,
                    photo: avatar3,
                    name: "Customer name",
                    positionCompany: "Position, Company name",
                    text: "\"A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.\""
                }
            ],
            contacts: [
                {
                    id: 1,
                    img: email,
                    title: "Email",
                    link: "contact@skydrone.com.br",
                    linkTo: "mailto:contact@skydrone.com.br"
                },
                {
                    id: 2,
                    img: phone,
                    title: "Phone",
                    link: "+55 51 99999-9999",
                    linkTo: "tel:5551999999999"
                },
                {
                    id: 3,
                    img: address,
                    title: "Address",
                    link: "451-487 Quincy St, Maywood, IL 60153, USA",
                    linkTo: "https://goo.gl/maps/J9tYNTijWqBhcpSz9"
                }
            ]
        }
    }
    render() {
        return (
            <div className='wrapper'>
                {/* Header */}
                <Header headerNav={this.state.headerNav} />
                {/* Main section */}
                <main>
                    {/* Hero */}
                    <Hero />
                    {/* Clients */}
                    <Clients />
                    {/* Banner */}
                    <Banner />
                    {/* Future */}
                    <Future />
                    {/* Reviews */}
                    <Reviews reviews={this.state.reviews} />
                    {/* Features */}
                    <Features />
                    {/* CTA */}
                    <Cta />
                    {/* Aplication */}
                    <Aplication />
                    {/* Contact */}
                    <Contact contacts={this.state.contacts} />
                </main>
                {/* Footer */}
                <Footer footerNav={this.state.headerNav} />
            </div>
        )
    }
}

export default App