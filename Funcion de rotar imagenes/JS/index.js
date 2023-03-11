window.addEventListener('load', function(){
    console.log("Documento Cargado")

    const fondo = document.getElementById("img");

    const listaImg = ["sion.png", "sion2.jpg", "skarner.jpg"];
    let index = 0;

    const rotationImg = () =>{
        fondo.src=`../img/${listaImg[index]}`;

        if(index < listaImg.length-1){
            index++;
        }else{
            index = 0;
        };
    };

    rotationImg();
    setInterval(rotationImg, 1000)
});