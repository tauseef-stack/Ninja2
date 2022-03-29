function navbar() {
    return `<div id="navbar">
    <h3><a href="importExport.html">Home</a></h3>
    <div class="option">
        <h3><a href="jwellery.html">Jwellery</a></h3> 
         <h3><a href="electronics.html">Electronics</a></h3>
          <h3><a href="#">sign In </a></h3> 
          <h3><a href="#">Login</a></h3>
    </div>
</div>`
}

export { navbar } //if we wrote default then we can use any keyword instead of navbar into anotherfile.
                  //but by using default we can only export single function .