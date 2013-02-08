$(document).ready(function() 
{

    if (document.createElement('input').webkitSpeech == undefined) 
    {   $(".answer").append("Ops... Utilize o navegador Google Chrome e seja feliz :D");
    } 
    else 
    {
        var language = window.navigator.userLanguage || window.navigator.language;

        $("#speech").attr("lang", language).focus();
        $(".answer").click(function() {
            $('.answer').attr('contentEditable','true');
        });
    }

    $("#speech").bind("webkitspeechchange", function(e) 
    {
        var val = $(this).val();
        var st = 1+Math.floor(Math.random()*100);

        if (val == "apagar" || val == "deletar") 
        {
            $(".answer").text(""); 
            return;
        }

        if (val == "sorteio") val = st + ",";
        else val = ":(";

        if (val == "nova linha") val = "<br /><br />";

        $(".answer").append(val + " ").fadeIn();    

        $(this).val("").focus();
    });

});