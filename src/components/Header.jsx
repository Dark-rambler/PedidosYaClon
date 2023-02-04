import "../styles/Header.css";
function Header(){
    return <div>
        <nav class="navbar navbar-expand-sm navbar-light bg-light shadow fixed-top ">
              <div class="container">
                <a class="navbar-brand logoInicio" href="#"> <img src="https://cdn.worldvectorlogo.com/logos/pedidosya.svg" className="w-100" alt="" /></a>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="collapsibleNavId">
                    <ul class="navbar-nav  mt-2 mt-lg-0  ms-auto  ">
                       <a className="text-decoration-none text-black d-flex align-items-center  fw-bolder  " href="">
                       <li className="px-3 pt-1 rounded-pill BotonRegistro  d-none d-md-inline">
                        <i class="fa fa-store "></i>
                            Registra tu negocio
                        </li>
                       </a>
                        <li class="nav-item dropdown d-none d-md-inline">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className=" logoBotonInicio " src="https://live.pystatic.com/webassets/NavigationMenu-Web/navigation-menu-parcel/2.0.0/images/pedidosya.png" alt="" /></a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a class="dropdown-item" href="#"><i class=" fa fa-headset"></i> Ayuda en línea</a>
                                <a class="dropdown-item" href="#"> <i class="fa-sharp fa-solid fa-arrow-right-to-bracket"></i>  Iniciar sesión/ <br /> Registrarse</a>
                            </div>
                        </li>
                        <li className="d-md-none container">
                            <div className="d-flex flex-column align-items-center ">
                            <img className="w-25" src="https://live.pystatic.com/webassets/NavigationMenu-Web/navigation-menu-parcel/2.0.0/images/pedidosya.png" alt="" />
                            <h1 className=" mt-3 "> 
                                Qué bonito tenerte aquí
                            </h1>
                            </div>
                        </li>
                        <li className="fs-4 ms-4  mt-3 d-md-none ">
                            <a className=" text-decoration-none text-black " href="">
                            <i class="fa-solid fa-house "></i> Inicio
                            </a>
                        </li>
                        <li className="fs-4 ms-4  mt-3 mb-5 d-md-none">
                        <a className=" text-decoration-none text-black  " href="#"><i class=" fa fa-headset"></i> Ayuda en línea</a>
                        </li>
                        <li className="mt-5 mb-3 d-md-none">
                          <a class=" text-decoration-none text-black  ms-4 mt-3" href="#"> <i class="fa-sharp fa-solid fa-arrow-right-to-bracket"></i>  Iniciar sesión / Registrarse</a>
                        </li>
                    </ul>
                   
                </div>
          </div>
        </nav>
        
     </div>
}
export default Header