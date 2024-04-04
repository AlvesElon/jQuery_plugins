$(document).ready(function() {
    $("#telefone").mask("(00) 00000-0000", {
        placeholder: "(12) 12345-1234"
    })
    $("#cpf").mask("000.000.000-00", {
        placeholder: "123.123.123-12"
    })
    $("#cep").mask("00000-000", {
        placeholder: "12345-123"
    })

    $("form").validate({
    rules: {
        nome:{
            required:true
        },
        email:{
            required:true, email: true
        },
        telefone:{
            required:true
        },
        email:{
            required:true
        },
        cpf:{
            required:true
        },
        cep:{
            required:true
        },
        endereco:{
            required:true
        },
    }, 
    submitHandler: function(form){
        console.log(form)
    },
    invalidHandler: function(event, validator){
        let incorrectFields = validator.numberOfInvalids();
        if (incorrectFields){
            alert (`Você tem ${incorrectFields} campos preenchidos de forma incorreta.`)
        }
    }
    })
})



