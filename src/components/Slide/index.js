import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Slide = () => {
    return (
        <div className='container-fluid slide-wrap'>
            <div className='container slide-content'>
                <h1>Vai divulgar seu negócio na internet</h1>
                <h2>Precisa de um site profissional?</h2>
                <div className='link-area'>
                    <Link className="slide-button" to="">Faça um orçamento sem compromisso</Link>
                </div>
            </div>
        </div>
    )
}

export default Slide
