import React from 'react'

const Footer = () => {
    return (
        <footer className="footer has-text-white has-background-dark has-substract-rotated is-relative pt-6">
            <div className="container">
                <div className="is-logo-outline">
                    <img src="/app/assets/images/logo-outline.png" alt="" />
                </div>
                <div className="columns is-gapless level-to-bottom mt-6 is-on-front">
                    <div className="column is-2">
                        <div className="logo"><img src="/app/assets/images/logo-white.png" alt="" /></div>
                    </div>
                    <div className="column is-7">
                        <div className="buttons">
                            <a className="button is-primary has-text-right has-text-dark" href="tel:6077000020">
                                <strong className="has-text-weight-bold"><span className="is-size-7">Línea Verde:</span><br />607 700 0020</strong>
                            </a>
                            <a className="button is-success has-text-right has-text-dark" href="tel:6077000020">
                                <strong className="has-text-weight-bold"><span className="is-size-7">Línea Verde Valledupar:</span><br />301 126 7087 - 301 657 4183</strong>
                            </a>
                            <a className="button is-warning has-text-right has-text-warning-dark" href="tel:6077000020">
                                <strong className="has-text-weight-bold"><span className="is-size-7">PQR (Peticiones, Quejas y Recursos):</span><br />pqr@limpiezaurbana.com.co</strong>
                            </a>
                        </div>
                    </div>
                    <div className="column is-3 has-text-right">
                        Todos los derechos Reservados. 2024
                        <div className="has-text-right">
                            <a href="https://api.whatsapp.com/send?phone=+573157011188" target="_blank" rel="noopener noreferrer">
                                <img src="/app/assets/images/Whatsapplogo.svg" alt="" />
                            </a>
                            <a href="https://www.facebook.com/LimpiezaUrbanaSAS" target="_blank" rel="noopener noreferrer">
                                <img src="/app/assets/images/Facebooklogo.svg" alt="" />
                            </a>
                            <a href="https://www.instagram.com/limpiezaurbanasas/" target="_blank" rel="noopener noreferrer">
                                <img src="/app/assets/images/Instagramlogo.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer