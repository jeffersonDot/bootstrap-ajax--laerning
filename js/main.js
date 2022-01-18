function consultacep(){

    var cep = document.getElementById("cep").value;
    console.log(cep);

    var url = "https://viacep.com.br/ws/"+ cep +"/json/";

    console.log(url);

    $.ajax(
        {
            url: url,
            type: "get",
            success: function (response){
                console.log (response);
                $("#logradouro").html(response.logradouro);
                $("#bairro").html(response.bairro);
                $("#localidade").html(response.localidade);
                $("#uf").html(response.uf);
                $("#titulo_cep").html("CEP " + response.cep);
                    
                //$("#logradouro").html(response.logradouro);
                //document.getElementById("logradouro").innerHTML = response.logradouro;
            
                //alert (response.logradouro);
            }
        }
    )
}

$(function(){
    $(".cep").hide();
});