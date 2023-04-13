const menu = document.querySelector(".icon-menu");
const tutup = document.querySelector(".close");
const previous = document.querySelector("#previous");
const thumbnail2 = document.querySelector("#thumbnail-2");
const jumlah = document.querySelector("#jumlah");
const img_galery = document.getElementsByClassName("img-galery");
const div = document.createElement("div");
const button = document.createElement("button");
const img = document.createElement("img");
const span = document.createElement("span");


menu.addEventListener("click", function () {
    document.querySelector(".sidebar").style.display = "block";
    document.querySelector(".transparent").style.display = "block";
    previous.style.display = "none";
});

tutup.addEventListener("click", function () {
    document.querySelector(".sidebar").style.display = "none";
    document.querySelector(".transparent").style.display = "none";
    previous.style.display = "block";
})

// TOMBOL +
document.querySelector("#plus").addEventListener("click", function () {
    jumlah.innerHTML = parseInt(jumlah.innerHTML) + 1;
})

document.querySelector("#minus").addEventListener("click", function () {
    jumlah.innerHTML = jumlah.innerText - 1;
})

// LIHAT CART
document.querySelector(".cart").addEventListener("click", function () {
    var element = document.querySelector(".my-cart");
    element.classList.toggle("block");
});
/********** END **********/

// SLIDER JADI THUMBNAIL
document.querySelector(".slider").addEventListener("click", function (e) {
    if (e.target.className == "thumb") {
        document.querySelector(".jumbo").src = e.target.src;
    }
})
for (var i = 0; i < img_galery.length; i++) {
    img_galery[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active-galery");
        current[0].className = current[0].className.replace(" active-galery", "");
        this.className += " active-galery";
    });
}
/********** END **********/

// BUTTON ADD TO CHART
document.querySelector("#keranjang").addEventListener("click", function () {
    // Hapus paragraph
    document.querySelector("#empty").remove();

    // Buat class order
    const cart = document.querySelector(".my-cart").appendChild(div);
    const btn = document.querySelector(".my-cart").appendChild(button);
    btn.classList.add("btn");
    document.querySelector(".btn").innerText = "Checkout";
    cart.classList.add("order");

    // Template Cart
    for( var i = 0; i < 1; i++ ){
        const imageCart = cart.appendChild(img.cloneNode(true));
        imageCart.classList.add('image-cart');
        imageCart.src = document.querySelector(".jumbo").src;    
    }

    // SPAN
    const spanCaption = cart.appendChild(span);
    const p = document.createElement("p");
    for( var i = 0; i < 2; i++ ){
        const captOrder = spanCaption.appendChild(p.cloneNode(true));
        captOrder.classList.add("bulu");
    }
    const bulu  = document.querySelectorAll(".bulu");
    const string = parseInt(price.innerHTML) * parseInt(jumlah.innerText);
    const yo = string.toString();
    bulu[0].innerText = document.querySelector("#judul-caption").innerText;
    bulu[1].innerText = document.querySelector("#price").innerText + ' x ' + jumlah.innerHTML + ' $' + yo + '.00';

    // DELETE
    const imageDelete = cart.appendChild(img);
    imageDelete.classList.add("delete");
    imageDelete.src = "images/icon-delete.svg";
})
/********** END **********/

