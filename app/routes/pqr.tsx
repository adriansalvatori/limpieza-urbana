import { useState } from "react";
import Layout from "~/components/Layout"

const PQR = () => {
    const [formData, setFormData] = useState({
        nombres: "",
        apellidos: "",
        tipoDocumento: "",
        numeroDocumento: "",
        direccionInmueble: "",
        municipio: "",
        telefono: "",
        codigoSuscriptorCuenta: "",
        asunto: "",
        direccion: "",
        email: "",
        mensaje: "",
        terminos: false,
        comunicaciones: false,
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Formulario enviado:", formData);

    };
    return (
        <Layout>
            <section className="hero has-decoration has-substract-light is-medium is-white">
                <div className="hero-body">
                    <div className="container is-max-desktop">
                        <div className="container is-max-desktop has-text-centered pt-6">
                            <h1 className="title is-1"><span className="has-text-weight-bold">PQR</span> (Peticiones, Quejas y Recursos)</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">


                <form onSubmit={handleSubmit}>
                    <div className="columns is-multiline">
                        {/* Nombres */}
                        <div className="column is-one-quarter">
                            <div className="field">
                                <label className="label" htmlFor="nombres">Nombres</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        id="nombres"
                                        name="nombres"
                                        value={formData.nombres}
                                        onChange={handleChange}
                                        placeholder="Nombres"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Apellidos */}
                        <div className="column is-one-quarter">
                            <div className="field">
                                <label className="label" htmlFor="apellidos">Apellidos</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        id="apellidos"
                                        name="apellidos"
                                        value={formData.apellidos}
                                        onChange={handleChange}
                                        placeholder="Apellidos"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Tipo de Documento */}
                        <div className="column is-one-quarter">
                            <div className="field">
                                <label className="label" htmlFor="tipoDocumento">Tipo de Documento</label>
                                <div className="control">
                                    <div className="select">
                                        <select
                                            id="tipoDocumento"
                                            name="tipoDocumento"
                                            value={formData.tipoDocumento}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Seleccione uno</option>
                                            <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                                            <option value="Cédula de extranjería">Cédula de extranjería</option>
                                            <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                            <option value="Pasaporte">Pasaporte</option>
                                            <option value="NIT">NIT</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Número de Documento */}
                        <div className="column is-one-quarter">
                            <div className="field">
                                <label className="label" htmlFor="numeroDocumento">Número de Documento</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        id="numeroDocumento"
                                        name="numeroDocumento"
                                        value={formData.numeroDocumento}
                                        onChange={handleChange}
                                        placeholder="Número de Documento"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Dirección del Inmueble */}
                        <div className="column is-one-quarter">
                            <div className="field">
                                <label className="label" htmlFor="direccionInmueble">Dirección Inmueble</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        id="direccionInmueble"
                                        name="direccionInmueble"
                                        value={formData.direccionInmueble}
                                        onChange={handleChange}
                                        placeholder="Dirección Inmueble"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Municipio */}
                        <div className="column is-one-quarter">
                            <div className="field">
                                <label className="label" htmlFor="municipio">Municipio</label>
                                <div className="control">
                                    <div className="select">
                                        <select
                                            id="municipio"
                                            name="municipio"
                                            value={formData.municipio}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Seleccione uno</option>
                                            <option value="Bucaramanga">Bucaramanga</option>
                                            <option value="Floridablanca">Floridablanca</option>
                                            <option value="Piedecuesta">Piedecuesta</option>
                                            <option value="Girón">Girón</option>
                                            <option value="Valledupar">Valledupar</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Teléfono */}
                        <div className="column is-one-quarter">
                            <div className="field">
                                <label className="label" htmlFor="telefono">Teléfono</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        id="telefono"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        placeholder="Teléfono"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Mensaje */}
                        <div className="column is-full">
                            <div className="field">
                                <label className="label" htmlFor="mensaje">Mensaje</label>
                                <div className="control">
                                    <textarea
                                        className="textarea"
                                        id="mensaje"
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        placeholder="Escribe tu mensaje..."
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Términos y condiciones */}
                        <div className="column is-full">
                            <div className="field">
                                <div className="control">
                                    <label className="checkbox">
                                        <input
                                            type="checkbox"
                                            name="terminos"
                                            checked={formData.terminos}
                                            onChange={handleChange}
                                            required
                                        />{" "}
                                        Acepto los términos y condiciones
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button className="button is-primary" type="submit">
                                Enviar
                            </button>
                        </div>
                    </div>
                </form>
            </section>
            <section className="section has-background-grey">
                <div className="container">
                    <p>En cumplimiento de lo previsto por la Ley 1581 de 2012 (Ley de protección de datos personales) y sus decretos reglamentarios, con el ingreso al siguiente formulario autorizo expresamente a LIMPIEZA URBANA SA ESP, y a quien actúe en su nombre, para tratar mis datos personales, con la finalidad de Gestionar las peticiones, quejas, reclamos, denuncias, sugerencias presentados a la entidad, gestionar iniciativas de participación ciudadana y ofrecer nuevos productos y servicios e interactuar por medios electrónicos.</p>

                    <p>Entiendo expresamente que, para los efectos señalados, LIMPIEZA URBANA SA ESP podrá utilizar cualquier canal de comunicación y que podré conocer, actualizar y rectificar el uso de mi información y/o revocar esta autorización cuando expresamente le manifieste mi deseo en tal sentido; así como realizar peticiones o reclamos a través de los canales dispuesto por LIMPIEZA URBANA SA ESP  como el corporativo <a href="mailto:buzon@limpiezaurbana.com.co">buzon@limpiezaurbana.com.co</a>, línea telefónica <a href="tel:6076330970">6330970</a>.</p>

                    <p>Manifiesto además que fui informado acerca de la facultad para: solicitar prueba de esta autorización, conocer el uso que se le ha dado a mis datos personales en LIMPIEZA URBANA SA ESP y presentar ante la Superintendencia de Industria y Comercio quejas respecto al tratamiento de mis datos personales.</p>

                    <p><strong>Contacto</strong></p>

                    <p><strong>Email:</strong> <a href="mailto:buzon@limpiezaurbana.com.co">buzon@limpiezaurbana.com.co</a> <br />

                        <strong>Línea verde:</strong> <a href="tel:6076330970">6330970</a> </p>
                </div>
            </section>
        </Layout>
    )
}

export default PQR