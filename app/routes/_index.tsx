import type { Route } from "../+types/root";
import Layout from "~/components/Layout";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Limpieza Urbana" },
    { name: "description", content: "" },
  ];
}

export default function Home() {
  return (
    <>
      <Layout>
        <section className="hero has-decoration has-substract-light is-fullheight is-dark">
          <div className="hero-body">
            <div className="container is-max-desktop has-text-centered">
              <div className="columns level">
                <div className="column is-half">
                  <h1 className="title is-1">Servicios <br /><span className="has-text-weight-bold">especiales</span></h1>
                  <h2 className="subtitle is-4">Intervención técnica<br></br> de poda de árboles</h2>
                  <a href="#" className="button is-warning is-outlined">Costos a Convenir</a>
                </div>
                <div className="column is-half">
                  <img src="/app/assets/images/servicespng.png"></img>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="section pt-6">
          <div className="container is-relative">
            <div className="is-overlay">
              <img src="/app/assets/images/clouds.png" alt="" />
            </div>
            <div className="columns is-multiline pt-6 pb-6">
              <div className="column is-6 is-offset-3">
                <figure className="is-relative has-box-decorations" style={{ width: "100%" }}>
                  <div className="box-decoration-left">
                    <img src="/app/assets/images/leaf-2.svg" height={"188px"} width={"166px"} alt="" />
                  </div>
                  <div className="box-decoration-right">
                    <img src="/app/assets/images/leaf-1.svg" height={"188px"} width={"166px"} alt="" />
                  </div>
                  <div className="iframe-container is-rounded mt-6 mb-6 is-relative" style={{ zIndex: 2 }}>
                    <iframe style={{ width: "100%", height: "400px" }} src="https://www.youtube.com/embed/2OG35ThY1og" title="Limpieza Urbana - Video Institucional 2022" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                  </div>
                  <div className="columns is-gapless level">
                    <div className="column is-half">
                      <h2 className="title is-5 has-text-weight-bold has-text-dark">Nuestros servicios especiales</h2>
                    </div>
                    <div className="column is-half has-text-right">
                      <a className="button is-small has-text-weight-bold is-primary has-text-dark">Solicítalos en la Línea Verde: 607 700 0020</a>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
          <div className="container mt-6">
            <img src="/app/assets/images/cards.svg" alt="" />
          </div>
        </section>

        <section className="section has-background-grey">
          <div className="container has-text-centered">
            <img className="mt-6" src="/app/assets/images/juntos.svg" alt="Juntos por un presente sostenible" />
            <div className="columns has-text-left mt-6 has-text-dark">
              <div className="column is-3 is-offset-3">
                Desde 2005, brindamos el Servicio Público de Aseo en Bucaramanga, Floridablanca, Girón y Piedecuesta. Nos encargamos de la recolección, transporte de residuos sólidos, barrido y limpieza de vías y espacios públicos, en colaboración con otras empresas de aseo, y gestionamos la disposición final de residuos en el lugar autorizado.
              </div>
              <div className="column is-3">
                Operamos bajo la Ley 142, que regula los servicios públicos domiciliarios, y el Decreto 2981 de 2013, que define cómo debe prestarse el servicio de aseo. Además, cumplimos con la Resolución CRA 720 de 2015, que establece la metodología para calcular las tarifas en municipios con más de 5,000 suscriptores en áreas urbanas.
              </div>
            </div>

            <div className="buttons is-centered mt-6">
              <div className="button is-dark has-text-weight-bold is-inverted">Tarifas</div>
              <div className="button is-dark has-text-weight-bold is-inverted">Comunicados</div>
              <div className="button is-dark has-text-weight-bold is-inverted">Galería</div>
              <div className="button is-dark has-text-weight-bold is-inverted">Pagos</div>
            </div>
          </div>
        </section>
      </Layout>

    </>
  )
}
