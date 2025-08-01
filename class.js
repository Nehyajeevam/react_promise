let goToGoa=(success,failure)=>{
    let account_balance=1500;
    account_balance>=20000? success("go to goa") : failure("not enough balance to go to goa");
}
goToGoa((Response)=>{
    console.log(Response);
},(Error)=>{
    console.log(Error);
})