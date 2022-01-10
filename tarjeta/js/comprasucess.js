
$("#comprasucess").click(function (e) { 
    e.preventDefault();
    if (inputNumero.value === '' || inputNombre.value === '' || inputCCV.value === '' || selectYear.value === ''  || 
    selectMes.value === ''){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese todos los campos requeridos',
        showConfirmButton: false,
        timer: 2000
    }) 
    
}
else{
    Swal.fire({
        icon: 'success',
        title: 'Realizado',
        text: 'Compra realizada',
        showConfirmButton: true,
        timer: 2000
    }) 
}
});
