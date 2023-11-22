
// "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" 
const enviaQr = document.querySelector('.botaoEnviar');

var qrImg = document.querySelector('.qrGerado');


    // const url= "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";  

function gerarNewQrCode (){ 
    var enderecoInput= document.querySelector('.qrCodigo').value;
//   var enderecoValue = enderecoInput.value;

    if(enderecoInput.trim() !== ''){
        qrImg.src= "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(enderecoInput);

    }else{
        alert("Por favor,insira um valor valido")
    }



 
}
   



enviaQr.addEventListener("click", function(){
    enviaQr.innerHTML = "QR Code Gerado";
})



document.querySelector('.botaoEnviar').addEventListener("click", function(event){
    event.preventDefault()
   
  });


