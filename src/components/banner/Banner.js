import React, { Component } from 'react'

export class Banner extends Component {
    bannerList = [
        "Daily Updates",
        "Save Money",
        "Modern Technology",
        "Drones",
        "Farms"
    ]
    render() {
        return (
            <section className='banner'>
                {/* Banner container */}
                <div className='banner__cont cont'>
                    {/* Banner list */}
                    <ul className='banner__list'>
                        {/* Banner Items */}
                        {this.bannerList.map((el) => (
                            <li key={el} className="banner__item">
                                {el}
                                {/* Banner circle */}
                                <div className='banner__circle'></div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        )
    }
}

export default Banner