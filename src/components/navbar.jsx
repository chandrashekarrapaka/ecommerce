const Navbar = () => {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-success " style={{ "--bs-bg-opacity": ".5" }}>
            <div className="container-fluid">
                <a className="navbar-brand" style={{ "fontFamily": "Times New Roman" }} to="#">Jyothi stores</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-1" style={{ marginLeft: "15%" }}>
                        <li className="nav-item ">
                            <a className="nav-link active" aria-current="page" to="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" to="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" to="#">Our Clients</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active">Contact Us</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-1" style={{ marginLeft: "15%" }}>
                        <li className="nav-item">
                            <li class="nav-link active material-icons">
                                search
                            </li>
                        </li>
                        <li className="nav-item">
                            <form className="nav-link active form-inline">
                                <i className=" fas fa-search " aria-hidden="true"></i>
                                <input className=" form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                            </form>
                        </li>
                        <li className="nav-item ">

                            <a className="nav-link active">Cart <span class="material-icons nav-link active"> shopping_cart</span></a>

                        </li>
                        <li className="nav-item">

                            <a className="nav-link active">Login<span className=" nav-link active material-icons">login</span></a>
                            {/* <div className="material-icons" >login</div> */}


                        </li>


                    </ul>

                </div>
            </div>
        </nav>
    </div>;
};

export default Navbar;
