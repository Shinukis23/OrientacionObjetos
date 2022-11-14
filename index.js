class Cliente
{
    nombreCliente;
    curpCliente;
    numeroCuenta;
    saldoCuenta;
    rfcCliente;

}


const cliente1 = new Cliente();

cliente1.curpCliente = "OIDJ730823HHRL09";
cliente1.nombreCliente = "Juan Ortiz";
cliente1.numeroCuenta= "2341233";
cliente1.rfcCliente = "OIDJ730823FG3";
cliente1.saldoCuenta = 2500;

console.log(cliente1);