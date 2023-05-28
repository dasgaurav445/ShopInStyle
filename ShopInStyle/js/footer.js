const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="row flex-column align-items-center flex-md-row flex-lg-row">
        <div class="footer-content">
        
            <div class="footer-ul-container">
                <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                    <ul class="category">
                        <li class="category-title">women</li>
                        <li><a href="product.html" class="footer-link">dresses</a></li>
                        <li><a href="product.html" class="footer-link">pants</a></li>
                        <li><a href="product.html" class="footer-link">skirts</a></li>

                    </ul>
                </div>
            <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <ul class="category">
                <li class="category-title">men</li>
                <li><a href="product.html" class="footer-link">shirts</a></li>
                <li><a href="product.html" class="footer-link">pants</a></li>
                <li><a href="product.html" class="footer-link">hoodies</a></li>

            </ul>
            </div>

            <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <ul class="category">
                    <li class="category-title">kids</li>
                </ul>
            </div>

            <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <ul class="category">
                    <li class="category-title">links</li>
                    <li><a href="index.html" class="footer-link">home</a></li>
                    <li><a href="login.html" class="footer-link">login</a></li>
                    <li><a href="contact page.html" class="footer-link">contact</a></li>
                </ul>
            </div>
        </div>
    
    <p class="footer-credit">Copyright &copy;Ecommerce 2022-2023</p>
    </div>
    `;
}

createFooter();