console.log("holis");


$(".descarga").click(function (e) { 
    e.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Realizado',
        text: 'La descarga comenzó',
        showConfirmButton: true,
        timer: 1000
    })
 
    
});




