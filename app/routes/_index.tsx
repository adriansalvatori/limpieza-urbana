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
            <div className="container is-max-desktop">
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
      </Layout>

    </>
  )
}
