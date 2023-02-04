import "../styles/Footer.css"
function FooterInicio (){
    return <div className="footerInicio pt-5 d-flex flex-column align-items-center">
        <article className=" row container w-75  border-bottom pb-2   ">
        <section className=" row w-50">
          <div className=" col ">
            <a className="text-decoration-none text-light row" href="">Quienes somos</a>
            <a className="text-decoration-none text-light row" href="">Terminos y Condiciones</a>
            <a className="text-decoration-none text-light row" href="">Privacidad</a>
            <a className="text-decoration-none text-light row" href="">Sé parte de PedidosYa</a>
            <a className="text-decoration-none text-light row" href="">Blog</a>
          </div>
          <div className="col">
            <a className="text-decoration-none text-light row" href="">Top comidas</a>
            <a className="text-decoration-none text-light row" href="">Top cadenas</a>
            <a className="text-decoration-none text-light row" href="">Top ciudades</a>
          </div>
        </section>
        <section className="  w-50 row">
          <div className="col">
            <a className="text-decoration-none text-light row" href="">Quienes somos</a>
            <a className="text-decoration-none text-light row" href="">Terminos y Condiciones</a>

          </div>
          <div className="col">
            <a className="text-decoration-none text-light row" href="">Acuerdos corporativos</a>
          </div>
        </section>
        </article>
        <hr  className=" border border-white"/>
        
        <p className="text-decoration-none text-light">PedidosYa © 2010-2023 </p>
        
    </div>
}
export default FooterInicio