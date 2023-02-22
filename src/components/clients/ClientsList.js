import React, { Component } from 'react';

const images = [];
const imageFiles = require.context('../../img/clients', false, /\.(png|jpe?g|svg)$/);
imageFiles.keys().forEach((key) => {
    images.push(imageFiles(key));
});


export class ClientsList extends Component {
    render() {
        return (
            <div className='clients__list'>
                {/* Clients first section */}
                <div className='clients__sec'>
                    {images.slice(0, 4).map((src, index) => (
                        <img key={index} src={src} alt="client" className='clients__company'/>
                    ))}
                </div>
                {/* Clients seccond section */}
                <div className='clients__sec'>
                    {images.slice(4, 7).map((src, index) => (
                        <img key={index} src={src} alt="client" className='clients__company'/>
                    ))}
                </div>
            </div>
        )
    }
}

export default ClientsList