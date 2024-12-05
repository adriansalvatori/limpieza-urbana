import React, { useState } from 'react';

const MegaMenu = () => {
    const menu = [
        {
            "label": "Quiénes Somos",
            "link": "/about/"
        },
        {
            "label": "Canales de Atención",
            "link": "/canales-de-atencion/"
        },
        {
            "label": "Nuestras Áreas de Prestación",
            "sub_menu": [
                {
                    "label": "Tarifas",
                    "link": "/tarifas/"
                },
                {
                    "label": "Servicios CLUS",
                    "link": "/servicios-clus/"
                },
                {
                    "label": "Comunicados",
                    "link": "/comunicados/"
                },
                {
                    "label": "Rutas",
                    "sub_menu": [
                        {
                            "label": "Barrido",
                            "sub_menu": [
                                {
                                    "label": "Área Metropolitana de Bucaramanga",
                                    "link": "https://www.arcgis.com/apps/instant/sidebar/index.html?appid=1c286a4c770b4e6f8c737b4dc37f01b6"
                                },
                                {
                                    "label": "Valledupar",
                                    "link": "https://limpiezaurbana.com.co/wp-content/uploads/2024/02/Ruta-de-Barrido.pdf"
                                }
                            ]
                        },
                        {
                            "label": "Recolección",
                            "sub_menu": [
                                {
                                    "label": "Área Metropolitana de Bucaramanga",
                                    "link": "https://www.arcgis.com/apps/instant/sidebar/index.html?appid=f6968d3e75624a87819e7a81dae4b5f9"
                                },
                                {
                                    "label": "Valledupar",
                                    "link": "https://limpiezaurbana.com.co/wp-content/uploads/2024/02/Ruta-de-Recoleccion.pdf"
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "Bucaramanga",
                    "sub_menu": [
                        {
                            "label": "Contrato de Condiciones Uniformes",
                            "link": "https://limpiezaurbana.com.co/wp-content/uploads/2023/03/contrato_de_condiciones_uniformes_lusa_22062021_bucaramanga.pdf"
                        },
                        {
                            "label": "Programa de Prestación del Servicio",
                            "link": "https://limpiezaurbana.com.co/wp-content/uploads/2024/05/PPSA-BUCARAMANGA-2023-2024.pdf"
                        }
                    ]
                },
                {
                    "label": "Floridablanca",
                    "sub_menu": [
                        {
                            "label": "Contrato de Condiciones Uniformes",
                            "link": "https://limpiezaurbana.com.co/wp-content/uploads/2023/03/contrato_de_condiciones_uniformes_lusa_22062021_floridablanca.pdf"
                        },
                        {
                            "label": "Programa de Prestación del Servicio",
                            "link": "https://limpiezaurbana.com.co/wp-content/uploads/2024/05/PPSA-FLORIDABLANCA.pdf"
                        }
                    ]
                },
                {
                    "label": "Girón",
                    "sub_menu": [
                        {
                            "label": "Contrato de Condiciones Uniformes",
                            "link": "https://limpiezaurbana.com.co/wp-content/uploads/2023/06/contrato_de_condiciones_uniformes_lusa_22062021_giron.pdf"
                        },
                        {
                            "label": "Programa de Prestación del Servicio",
                            "link": "https://limpiezaurbana.com.co/wp-content/uploads/2024/05/PPSA-GIRON-2023-2024.pdf"
                        }
                    ]
                },
                {
                    "label": "Piedecuesta",
                    "sub_menu": [
                        {
                            "label": "Contrato de Condiciones Uniformes",
                            "link": "https://limpiezaurbana.com.co/wp-content/uploads/2023/03/contrato_de_condiciones_uniformes_lusa_22062021_piedecuesta.pdf"
                        },
                        {
                            "label": "Programa de Prestación del Servicio",
                            "link": "https://limpiezaurbana.com.co/wp-content/uploads/2024/05/PPSA-PIEDECUESTA.pdf"
                        }
                    ]
                },
                {
                    "label": "Los Santos",
                    "sub_menu": [
                        {
                            "label": "Contrato de Condiciones Uniformes",
                            "link": "https://limpiezaurbana.com.co/wp-content/uploads/2024/06/CCU_LOS-SANTOS1.pdf"
                        },
                        {
                            "label": "Programa de Prestación del Servicio",
                            "link": "https://limpiezaurbana.com.co/wp-content/uploads/2024/05/PPSA-LOS-SANTOS-2023-2024.pdf"
                        }
                    ]
                },
                {
                    "label": "Valledupar",
                    "sub_menu": [
                        {
                            "label": "Contrato de Condiciones Uniformes",
                            "link": "https://limpiezaurbana.com.co/wp-content/uploads/2024/02/CONTRATO-DE-CONDICIONES-UNIFORMES-LUSA_02012024_VALLEDUPAR.pdf"
                        },
                        {
                            "label": "Programa de Prestación del Servicio",
                            "link": "https://limpiezaurbana.com.co/wp-content/uploads/2024/05/PPSA-VELLADUPAR-2023-2024.pdf"
                        }
                    ]
                }
            ]
        },
        {
            "label": "Políticas de la empresa",
            "link": "/politicas-de-la-empresa/"
        },
        {
            "label": "Nuestra Filosofía",
            "link": "/nuestra-filosofia/"
        },
        {
            "label": "Valores Corporativos",
            "link": "/valores-corporativos/"
        },
        {
            "label": "Organigrama",
            "link": "/organigrama/"
        },
        {
            "label": "Normatividad",
            "link": "/normatividad/"
        },
        {
            "label": "Informe Control Social",
            "link": "https://limpiezaurbana.com.co/wp-content/uploads/2024/05/INFORME-CONTROL-SOCIAL-2023.pdf"
        },
        {
            "label": "Políticas de tratamiento de la información",
            "link": "https://limpiezaurbana.com.co/wp-content/uploads/2023/03/politica_tratamientos_de_datos_2023.pdf"
        }
    ]

    const [currentMenu, setCurrentMenu] = useState<any>(menu); // Start with top-level menu
    const [breadcrumb, setBreadcrumb] = useState<string[]>([]); // Track the breadcrumb

    // Recursive function to render the menu
    const renderMenu = (menuItems: any) => {
        return menuItems.map((item:any, index:number) => (
            <div key={index}>
                {/* If it's a link, render the link */}
                {item.link ? (
                    <a href={item.link} className="menu-item">
                        {item.label}
                    </a>
                ) : (
                    <>
                        {/* If there's a submenu, handle it */}
                        <div
                            className="menu-item cursor-pointer"
                            onClick={() => handleSubmenuClick(item, item.label)}
                        >
                            {item.label + '>'} 
                        </div>
                        {item.sub_menu && currentMenu === item.sub_menu && (
                            <div className="submenu">
                                {renderMenu(item.sub_menu)}
                            </div>
                        )}
                    </>
                )}
            </div>
        ));
    };

    // Handle when a menu item with a submenu is clicked
    const handleSubmenuClick = (item: any, label: string) => {
        setBreadcrumb((prevBreadcrumb) => [...prevBreadcrumb, label]); // Update breadcrumb
        setCurrentMenu(item.sub_menu); // Show the submenu
    };

    // Handle going back to the previous level in the breadcrumb
    const handleBreadcrumbClick = (index: number) => {
        setBreadcrumb(breadcrumb.slice(0, index + 1)); // Slice breadcrumb to the selected level
        setCurrentMenu(
            breadcrumb[index] ? findMenuByLabel(menu, breadcrumb[index]) : menu
        ); // Find and set the corresponding menu
    };

    // Helper function to find a menu by its label
    const findMenuByLabel:any = (menu: any, label: string) => {
        for (const item of menu) {
            if (item.label === label) {
                return item.sub_menu || menu; // Return the submenu or the original menu
            }
            if (item.sub_menu) {
                const found = findMenuByLabel(item.sub_menu, label);
                if (found) return found;
            }
        }
        return null;
    };

    return (
        <div className="box is-shadowless is-outlined menu-container">
            {/* Render Breadcrumbs */}
            <div className="breadcrumb">
                <button onClick={() => handleBreadcrumbClick(0)}>Home</button>
                {breadcrumb.map((label, index) => (
                    <React.Fragment key={index}>
                        <span> &gt; </span>
                        <button onClick={() => handleBreadcrumbClick(index)}>
                            {label}
                        </button>
                    </React.Fragment>
                ))}
            </div>

            {/* Render the current menu */}
            <div className="current-menu">{renderMenu(currentMenu)}</div>
        </div>
    );
};


export default MegaMenu;
