import Layout from '~/components/Layout'

const Poll = () => {
    return (
        <Layout>
            <section className="hero has-decoration has-substract-light is-medium is-white">
                <div className="hero-body">
                    <div className="container is-max-desktop">
                        <div className="container is-max-desktop has-text-centered pt-6">
                            <h1 className="title is-1">Encuesta de <span className="has-text-weight-bold">Satisfacción</span></h1>
                            <h2 className="subtitle is-4">Intervención técnica de poda de árboles</h2>
                        </div>
                    </div>
                </div>
            </section>
            <div className="section has-background-light">
                <div className="container is-max-desktop">
                    De conformidad con lo establecido por la Ley 1581 de 2012 y las demás normas que la modifiquen, reglamenten y/o adhieran, autorizo a LIMPIEZA URBANA SA E.S.P a realizar el tratamiento de los datos personales suministrados en el presente formato, conforme a las siguientes finalidades: a) realizar la percepción de la satisfacción en la prestación del servicio b) Transmitir y/o Transferir los datos personales a otras entidades con las que la ORGANIZACIÓN concierte directa o indirectamente la prestación de un servicio relativo a las funciones legítimas de la misma. LIMPIEZA URBANA SA E.S.P le informa que podrá ejercer sus derechos de acceso, rectificación, corrección, actualización, aclaración y supresión, mediante comunicación a la dirección datos.personales@limpiezaurbana.com.co . Lo invitamos a que consulte nuestra Política de Tratamiento de Información y Protección de Datos Personales en www.limpiezaurbana.com.co.
                </div>
            </div>
            <div className="section has-background-light">
                <div className="container is-max-desktop">
                    <form className='form box is-shadowless is-outlined'>
                        <div className="columns is-multiline">
                            <div className="column is-one-quarter">
                                <div className="field">
                                    <label className="label" >Dirección / Conjunto</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            id="direccionConjunto"
                                            name="direccionConjunto"
                                            className="input"
                                            placeholder="Dirección / Conjunto"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="column is-one-quarter">
                                <div className="field">
                                    <label className="label">Municipio</label>
                                    <div className="control">
                                        <div className="select is-fullwidth">
                                            <select id="municipio" name="municipio" required>
                                                <option value="">Seleccione uno</option>
                                                <option value="Bucaramanga">Bucaramanga</option>
                                                <option value="Floridablanca">Floridablanca</option>
                                                <option value="Piedecuesta">Piedecuesta</option>
                                                <option value="Girón">Girón</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-one-quarter">
                                <div className="field">
                                    <label className="label">Nombre</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            className="input"
                                            placeholder="Nombre"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="column is-one-quarter">
                                <div className="field">
                                    <label className="label">Teléfono</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            id="telefono"
                                            name="telefono"
                                            className="input"
                                            placeholder="Teléfono"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="column is-full">
                                <div className="notification is-info">
                                    En LIMPIEZA URBANA S.A. E.S.P. es importante conocer su percepción de
                                    cómo se está realizando la prestación de nuestros servicios. Por eso
                                    agradecemos su colaboración y tiempo en la realización de esta encuesta.
                                </div>
                            </div>

                            {/* */}
                            <div className="column is-full">
                                <div className="field">
                                    <label className="label">1. ¿Identifica usted fácilmente a los vehículos y operarios de Limpieza Urbana S.A. E.S.P?</label>
                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="pregunta_1" value="Si" required />
                                            Si
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_1" value="No" required />
                                            No
                                        </label>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">2. ¿Conoce el día y la hora en que Limpieza Urbana S.A. E.S.P debe realizar los servicios de recolección de residuos en su barrio o sector?</label>
                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="pregunta_2" value="Si" required />
                                            Si
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_2" value="No" required />
                                            No
                                        </label>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">3. ¿Ha solicitado servicios de poda, corte de césped, recolección de escombros, inservibles a LIMPIEZA URBANA S.A. E.S.P.?</label>
                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="pregunta_3" value="Si" required />
                                            Si
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_3" value="No" required />
                                            No
                                        </label>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">4. ¿Conoce los componentes que se liquidan en la tarifa de aseo (CRA 720/2015)?</label>
                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="pregunta_4" value="Si" required />
                                            Si
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_4" value="No" required />
                                            No
                                        </label>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">6. ¿Tiene conocimiento de la separación de residuos aprovechables?</label>
                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="pregunta_6" value="Si" required />
                                            Si
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_6" value="No" required />
                                            No
                                        </label>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">7. ¿Ha escuchado acerca de Limpieza Urbana SA E.S.P.? A través de qué medios:</label>
                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="pregunta_7" value="Radio" required />
                                            Radio
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_7" value="Televisión" required />
                                            Televisión
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_7" value="Redes Sociales" required />
                                            Redes Sociales
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_7" value="Otros" required />
                                            Otros
                                        </label>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">8. ¿Cómo considera usted el servicio que presta Limpieza Urbana S.A.S. E.S.P.?</label>
                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="pregunta_8" value="Excelente" required />
                                            Excelente
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_8" value="Bueno" required />
                                            Bueno
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_8" value="Regular" required />
                                            Regular
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_8" value="Malo" required />
                                            Malo
                                        </label>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">9. La frecuencia y la recolección de los residuos por parte de Limpieza Urbana S.A.E.S.P. ha sido:</label>
                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="pregunta_9" value="Suficiente" required />
                                            Suficiente
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_9" value="Insuficiente" required />
                                            Insuficiente
                                        </label>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">10. ¿Cómo considera el servicio y comportamiento de los colaboradores operativos de Limpieza Urbana S.A. E.S.P.?</label>
                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="pregunta_10" value="Excelente" required />
                                            Excelente
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_10" value="Bueno" required />
                                            Bueno
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_10" value="Regular" required />
                                            Regular
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_10" value="Malo" required />
                                            Malo
                                        </label>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">11. ¿Cómo considera la presentación personal de los operarios de Limpieza Urbana S.A E.S.P.?</label>
                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="pregunta_11" value="Excelente" required />
                                            Excelente
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_11" value="Bueno" required />
                                            Bueno
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_11" value="Regular" required />
                                            Regular
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_11" value="Malo" required />
                                            Malo
                                        </label>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">12. La atención y soluciones a las solicitudes que usted ha presentado a Limpieza Urbana S.A. E.S.P. han sido:</label>
                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="pregunta_12" value="Excelente" required />
                                            Excelente
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_12" value="Bueno" required />
                                            Bueno
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_12" value="Regular" required />
                                            Regular
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="pregunta_12" value="Malo" required />
                                            Malo
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* */}
                            <div className="column is-full">
                                <div className="field">
                                    <label className="label">Observaciones:</label>
                                    <div className="control">
                                        <textarea
                                            id="observaciones"
                                            name="observaciones"
                                            className="textarea"
                                            placeholder="Escriba sus observaciones aquí..."
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="column is-full">
                                <div className="notification is-info">
                                    En LIMPIEZA URBANA S.A. E.S.P trabajamos día a día para ofrecer a sus
                                    clientes y afiliados un servicio de calidad.
                                </div>
                            </div>

                            <div className="column is-full">
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button type="submit" className="button is-primary">Enviar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </Layout>
    )
}

export default Poll