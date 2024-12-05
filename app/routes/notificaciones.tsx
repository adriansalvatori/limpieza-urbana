import React, { useState } from "react";
import Layout from "~/components/Layout";

const DataTable = () => {
    const [search, setSearch] = useState("");
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const data = [
        {
            "radicado": "solicitud",
            "peticionario": "DIEGO ANDRES HERRERA ALFONSO",
            "fecha_publicacion": "2023-12-05",
            "fecha_retiro": "2023-12-12",
            "descripcion": "SOLICITUD",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/20.pdf"
        },
        {
            "radicado": "55413",
            "peticionario": "JAIRO FRANCO ANGULO",
            "fecha_publicacion": "2024-11-14",
            "fecha_retiro": "2024-11-20",
            "descripcion": "NOTIFICACION POR AVISO 55413",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/42.pdf"
        },
        {
            "radicado": "55200",
            "peticionario": "OMAR CARRILLO QUIÑONES",
            "fecha_publicacion": "2024-09-26",
            "fecha_retiro": "2024-10-03",
            "descripcion": "COMUNICACION",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/40.pdf"
        },
        {
            "radicado": "55199",
            "peticionario": "MARIA EUGENIA SILVA",
            "fecha_publicacion": "2024-09-27",
            "fecha_retiro": "2024-09-27",
            "descripcion": "NOTIFICACION POR AVISO 55199",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/41.pdf"
        },
        {
            "radicado": "54625",
            "peticionario": "MARIA EUGENIA SILVA",
            "fecha_publicacion": "2024-08-21",
            "fecha_retiro": "2024-08-27",
            "descripcion": "NOTIFICACION POR AVISO",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/39.pdf"
        },
        {
            "radicado": "54582",
            "peticionario": "JOSIMAR JAIR GONZALEZ PINEDA",
            "fecha_publicacion": "2024-07-25",
            "fecha_retiro": "2024-07-31",
            "descripcion": "COMUNICACION 54582",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/38.pdf"
        },
        {
            "radicado": "54483",
            "peticionario": "MYRIAM LOPEZ",
            "fecha_publicacion": "2024-07-09",
            "fecha_retiro": "2024-07-15",
            "descripcion": "CITACION PARA NOTIFICACION PERSONAL 54483",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/36.pdf"
        },
        {
            "radicado": "54457",
            "peticionario": "SAUL LUNA",
            "fecha_publicacion": "2024-07-12",
            "fecha_retiro": "2024-07-18",
            "descripcion": "CITACION PARA NOTIFICACION PERSONAL54457",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/37.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-06-25",
            "fecha_retiro": "2024-07-03",
            "descripcion": "CITACION PARA NOTIFICACION PERSONAL 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/31.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-07-02",
            "fecha_retiro": "2024-07-09",
            "descripcion": "RESPUESTA A SOLICITUD – RADICADO LUSA 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/35.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-07-16",
            "fecha_retiro": "2024-07-23",
            "descripcion": "CITACION PARA NOTIFICACION PERSONAL 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/35.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-07-23",
            "fecha_retiro": "2024-07-30",
            "descripcion": "RESPUESTA A SOLICITUD – RADICADO LUSA 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/31.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-07-30",
            "fecha_retiro": "2024-08-06",
            "descripcion": "CITACION PARA NOTIFICACION PERSONAL 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/35.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-08-06",
            "fecha_retiro": "2024-08-13",
            "descripcion": "RESPUESTA A SOLICITUD – RADICADO LUSA 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/31.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-08-13",
            "fecha_retiro": "2024-08-20",
            "descripcion": "CITACION PARA NOTIFICACION PERSONAL 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/35.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-08-20",
            "fecha_retiro": "2024-08-27",
            "descripcion": "RESPUESTA A SOLICITUD – RADICADO LUSA 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/31.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-08-27",
            "fecha_retiro": "2024-09-03",
            "descripcion": "CITACION PARA NOTIFICACION PERSONAL 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/35.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-09-03",
            "fecha_retiro": "2024-09-10",
            "descripcion": "RESPUESTA A SOLICITUD – RADICADO LUSA 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/31.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-09-10",
            "fecha_retiro": "2024-09-17",
            "descripcion": "CITACION PARA NOTIFICACION PERSONAL 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/35.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-09-17",
            "fecha_retiro": "2024-09-24",
            "descripcion": "RESPUESTA A SOLICITUD – RADICADO LUSA 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/31.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-09-24",
            "fecha_retiro": "2024-10-01",
            "descripcion": "CITACION PARA NOTIFICACION PERSONAL 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/35.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-10-01",
            "fecha_retiro": "2024-10-08",
            "descripcion": "RESPUESTA A SOLICITUD – RADICADO LUSA 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/31.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-10-08",
            "fecha_retiro": "2024-10-15",
            "descripcion": "CITACION PARA NOTIFICACION PERSONAL 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/35.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-10-15",
            "fecha_retiro": "2024-10-22",
            "descripcion": "RESPUESTA A SOLICITUD – RADICADO LUSA 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/31.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-10-22",
            "fecha_retiro": "2024-10-29",
            "descripcion": "CITACION PARA NOTIFICACION PERSONAL 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/35.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-10-29",
            "fecha_retiro": "2024-11-05",
            "descripcion": "RESPUESTA A SOLICITUD – RADICADO LUSA 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/31.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-11-05",
            "fecha_retiro": "2024-11-12",
            "descripcion": "CITACION PARA NOTIFICACION PERSONAL 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/35.pdf"
        },
        {
            "radicado": "54406",
            "peticionario": "DORA AMPARO MOGOLLON PEREZ",
            "fecha_publicacion": "2024-11-12",
            "fecha_retiro": "2024-11-19",
            "descripcion": "RESPUESTA A SOLICITUD – RADICADO LUSA 54406",
            "archivo": "https://limpiezaurbana.com.co/modules/upload/31.pdf"
        },
    ]

    const filteredData = data.filter(
        (row) =>
            row.radicado.includes(search) ||
            row.peticionario.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const handleChangePage = (newPage: any) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const displayedData = filteredData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return (
        <Layout>
            <section className="hero has-decoration has-substract-light is-medium is-white">
                <div className="hero-body">
                    <div className="container is-max-desktop">
                        <div className="container is-max-desktop has-text-centered pt-6">
                            <h1 className="title is-1"><span className="has-text-weight-bold">Notificaciones</span></h1>
                            <h2 className="subtitle is-4">Intervención técnica de poda de árboles</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="table-responsive table-objects">
                        <div className="columns is-gapless">
                            <div className="column is-half">
                                <div>
                                    <label>
                                        Mostrando{" "}
                                        <div className="select is-small">
                                            <select
                                                value={rowsPerPage}
                                                onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
                                            >
                                                <option value="5">5</option>
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>
                                        </div>{" "}
                                        registros
                                    </label>
                                </div>
                            </div>
                            <div className="column is-half">
                                <div>
                                    <label>
                                        <input
                                            type="search"
                                            className="input is-small"
                                            value={search}
                                            placeholder="Buscar"
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <table className="table is-rounded is-clipped is-striped is-hoverable is-fullwidth">
                            <thead className="pt-4 pb-4">
                                <tr>
                                    <th className="is-size-7">#Radicado</th>
                                    <th className="is-size-7">Peticionario</th>
                                    <th className="is-size-7">Fecha de publicación</th>
                                    <th className="is-size-7">Fecha de retiro</th>
                                    <th className="is-size-7">Descripción</th>
                                    <th className="is-size-7">Archivo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayedData.map((row, index) => (
                                    <tr key={index}>
                                        <td className="has-text-grey-dark has-text-weight-bold">{row.radicado}</td>
                                        <td className="has-text-dark has-text-weight-bold">{row.peticionario}</td>
                                        <td className="has-text-grey-dark">{row.fecha_publicacion}</td>
                                        <td className="has-text-grey-dark">{row.fecha_retiro}</td>
                                        <td className="has-text-grey-dark has-text-weight-bold">{row.descripcion}</td>
                                        <td>
                                            <a href={row.archivo} target="_blank" className="button is-light is-small" rel="noopener noreferrer">
                                                Ver Archivo
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="columns is-centered">
                            <button
                                className="button is-small"
                                onClick={() => handleChangePage(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Anterior
                            </button>
                            <span className="mx-3">
                                Página {currentPage} de {totalPages}
                            </span>
                            <button
                                className="button is-small"
                                onClick={() => handleChangePage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            </section>


        </Layout>
    );
};

export default DataTable;
