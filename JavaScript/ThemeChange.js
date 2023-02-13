function image(){
    var txt = document.getElementById('myflower').alt;
    if(txt == "sunflower"){
        document.getElementById('myflower').src="redflower.jpg";
        document.getElementById('myflower').alt="redflower";
        document.getElementById('mytext').value="Red Flower";
        document.getElementById('header').setAttribute('style','background-color: #b82c2c');
        document.getElementById('head-btn1').setAttribute('style','background-color: #c42525');
        document.getElementById('head-btn2').setAttribute('style','background-color: #c42525');
        document.getElementById('head-btn3').setAttribute('style','background-color: #c42525');
        document.getElementById('head-btn4').setAttribute('style','background-color: #c42525');
        document.getElementById('heading').setAttribute('style','background-color: red');
    }else{
        document.getElementById('myflower').src="sunflower.jpg";
        document.getElementById('myflower').alt="sunflower";
        document.getElementById('mytext').value="Sun Flower";
        document.getElementById('header').setAttribute('style','background-color: #d6d929');
        document.getElementById('head-btn1').setAttribute('style','background-color: #b3a41d');
        document.getElementById('head-btn2').setAttribute('style','background-color: #b3a41d');
        document.getElementById('head-btn3').setAttribute('style','background-color: #b3a41d');
        document.getElementById('head-btn4').setAttribute('style','background-color: #b3a41d');
        document.getElementById('heading').setAttribute('style','background-color: yellow');
    }
}

