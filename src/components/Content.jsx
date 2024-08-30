const Content = () => {

    return (

        <section className="contenido">
            <h2>Nuestros Productos</h2>
            <p>Descubre el Producto que Transformará tu Vida
                Bienvenido a Mi tienda Oneline, donde la innovación se encuentra con la calidad. Nuestro producto está diseñado para ofrecerte soluciones efectivas y resultados sorprendentes.</p>

            <section className="orden">
                <div className="derecha">
                    <h2>Categorías</h2>
                    <ul>
                        <li><a href="https://www.mariohernandez.com.co/hombre/bolsos/portafolios"><h1>Portafolios</h1></a></li>
                        <li><a href="https://www.mariohernandez.com.co/mujer/bolsos/clutch"><h1>Clutch Para Mujer</h1></a></li>
                        <li><a href="https://www.mariohernandez.com.co/unisex/bolsos"><h1>Bolsos Unisex</h1></a></li>
                    </ul>

                    <h2>Ofertas Especiales</h2>

                </div>

                <div className="galeria-imagenes">
                    <h2>Galería de Imágenes</h2>
                    <img src="./public/maleta2.jpg" alt="Imagen prducto 1" />
                    <img src="./public/portafolios.jpg" alt="Imagen prducto 2" />
                </div>

            </section>
        </section>

    )

}

export default Content