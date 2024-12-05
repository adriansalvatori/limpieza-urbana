import { useState } from 'react';
import MegaMenu from './MegaMenu';

const Navigation = () => {
    const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

    const toggleMegaMenu = (e: any) => {
        e.preventDefault();
        setMegaMenuOpen(!isMegaMenuOpen);
    };

    return (
        <div className="container is-fixed-top">
            <nav className="navbar is-rounded is-outlined is-spaced is-transparent mt-6 pt-2 pb-2" role="navigation" aria-label="main navigation">
                <div className="navbar-brand ">
                    <a href="/">
                        <img src="/app/assets/images/logo.svg" alt="Logo" className="logo-bleed" width="80" height="80"></img>
                    </a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarMenu" className="navbar-menu has-text-weight-bold">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/">Inicio</a>
                        <a className="navbar-item open-menu" href="/about" onClick={(e) => toggleMegaMenu(e)}>Empresa</a>
                        <a className="navbar-item" href="/notificaciones">Notificaciones</a>
                        <a className="navbar-item" href="/soy-ambiental">Soy Ambiental</a>
                        <a className="navbar-item" href="/pqr">PQR</a>
                        <a className="navbar-item" href="/encuesta-satisfaccion">Encuesta de satisfacción</a>
                    </div>

                    <div className="navbar-end">
                        <img src="/app/assets/images/logos_calidad_2024.png" className="quality-logos" alt="" />
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary has-text-right has-text-dark" href="tel:6077000020">
                                    <strong className="has-text-weight-bold"><span className="is-size-7">Línea Verde:</span><br /> 607 700 0020</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {isMegaMenuOpen && (
                <MegaMenu/>
            )}
        </div>
    );
};

export default Navigation;
