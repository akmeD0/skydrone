import React, { Component } from 'react'
import ClientsList from './ClientsList'

export class Clients extends Component {
    render() {
        return (
            <section className='clients'>
                {/* Clients container */}
                <div className='clients__cont cont'>
                    {/* Clients title */}
                    <h2 className='clients__title'>Used by the world's most innovative companies</h2>
                    {/* Clients list */}
                    <ClientsList />
                </div>
            </section>
        )
    }
}

export default Clients