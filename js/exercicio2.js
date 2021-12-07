"use strict";
$("#btn").click(function(){
    buscar($("#crgm").val());
})

function buscar(rgm){
    let aluno = "";
    for (let i=0; i < alunos.length; i++){
        if (alunos[i].rgm == rgm){
            aluno = `ID: ${alunos[i].id} <br>
                     RGM: ${alunos[i].rgm} <br>
                     Nome: ${alunos[i].nome} <br>
                     Curso: ${alunos[i].curso} <br>
                     Notas: <br>
                     <ul>
                     <li>
                     PW=${alunos[i].notas[0].nf} - ${conceito(alunos[i].notas[0].nf)}
                     </li>
                     <li>
                     BD=${alunos[i].notas[1].nf} - ${conceito(alunos[i].notas[1].nf)}
                     </li> 
                     <li>
                     CG=${alunos[i].notas[2].nf} - ${conceito(alunos[i].notas[2].nf)}
                     </li> 
                     <li>
                     ED=${alunos[i].notas[3].nf} - ${conceito(alunos[i].notas[3].nf)}
                     </li>
                      <li>
                     IA=${alunos[i].notas[4].nf} - ${conceito(alunos[i].notas[4].nf)}
                     </li>
                     </li></ul>
            `;
            break;
        }
    }
    if (aluno == ""){
        $("#info").html("RGM inválido.")
    }else{
        $("#info").html(aluno);
    }
}

function conceito(nf){
    if (nf >= 6){
        return "<span class = 'blue'>APROVADO</span>";
    }else if (nf < 1){
        return "<span class = 'red> REPROVADO </span>"
    }else{
        return "<span class = 'orange'> EXAME </span>"
    }
}