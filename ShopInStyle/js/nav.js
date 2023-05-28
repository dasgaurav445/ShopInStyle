const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <nav1 class="navbar">
                <a href="index.html"><img src="img/shop1.png" class="brand-logo" alt=""><a>
                <div class="container-items">
                    <div class="search">
                        <input type="text" class="search-box" placeholder="search brand, product">
                        <button class="search-btn">search</button>
                    </div>
                      <a href="login.html"><button class="btn btn-success">Login</button></a>
                      <a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a>   
                </div>
    </nav1>

    <div class="links-container">
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link " href="index.html">home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="product.html">all products</a></li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle " data-toggle="dropdown" data-hover="dropdown" href="#">women</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="product.html">dresses</a>
                        <a class="dropdown-item" href="product.html">pants</a>
                        <a class="dropdown-item" href="product.html">skirts</a>
                    </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" href="#">men</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="product.html">shirts</a>
                        <a class="dropdown-item" href="product.html">pants</a>
                        <a class="dropdown-item" href="product.html">hoodies</a>
                    </div>
            </li>        
            <li class="nav-item">
                <a class="nav-link" href="product.html">kids</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact page.html">contact</a>
            </li>
    </div>
        
    `;
}

createNav();