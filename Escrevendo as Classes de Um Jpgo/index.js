
class aventuraHeroi{
	constructor( tipoHeroi, nomeHeroi, idadeHeroi ){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    }
     atacar() {
        let ataque;
        switch (this.tipoHeroi) {
            case "mago":
              ataque = " magia";
              break;
            case "guerreiro":
              ataque = " espada";
              break;
            case "monge":
              ataque = " artes marciais";
              break;
            case "ninja":
              ataque = " shuriken";
              break;
            default:
              throw new error("Tipo de herói não encontrado");
          }
          console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`);
    }
      heroi() {
        console.log(`O herói ${this.nomeHeroi} tem ${this.idadeHeroi} anos de idade`);  
        }
    }
        let heroiAventura = new aventuraHeroi("ninja", " ", " ")
        let identidadeHeroi = new aventuraHeroi(" ", "Naruto", 20)
        heroiAventura.atacar(); 
        identidadeHeroi.heroi();  