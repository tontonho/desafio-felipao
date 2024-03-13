function calculoNivel(Vitorias, Derrotas) {
    let saldoVitorias = Vitorias - Derrotas;
    let nivel = " ";
    
        if (saldoVitorias <= 10) {
            nivel = "ferro"
        } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
            nivel = "bronze"
        } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
            nivel = "prata"
        } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
            nivel = "ouro"
        } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
            nivel = "diamante"
        } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
            nivel = "lendario"
        } else if (saldoVitorias > 101) {
            nivel = "Imortal"
        }
             return { saldoVitorias, nivel };
    }

        let resultado = calculoNivel( 103, 100);
        console.log("O Herói tem um saldo de " + resultado.saldoVitorias + 
        " vitórias e está no nível de " + resultado.nivel);
