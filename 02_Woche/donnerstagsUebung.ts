///Aufg. 1-4
type Player = {
    contact: Contact
    lastLogin: Date
    spielname: PlayedGame
}
type Admin={
   contact: Contact
    employeeId: number
}
type Contact={
    name: string 
    id: number
    email:string
}
type PlayedGame={
    name: string
    highscore: number
}

const Paul: Player = {
    contact: 
    {name: 'Paul' ,
    id: 1234,
    email:'paul@omg.de'},
    lastLogin:  new Date('2022-01-01'),
    spielname: {
        name: "Flappy Ducks",
    highscore: 376335
    }
}
const Jannis: Player = {
    contact: 
    {name: 'Jannis' ,
    id: 1235,
    email:'Jannis@omg.de'},
    lastLogin:  new Date('2022-01-02'),
    spielname: {
        name: "Flappy Ducks",
    highscore: 376336
    }
}
const Peter: Admin ={
    contact: 
    {name: 'Admin Rolf' ,
    id: 1234,
    email:'rolf@admin.de'},
    employeeId: 3874652
}

function getEmail(player: Player):string{
return("Die Mail von Spieler "+ player.contact.name +" lautet: " + player.contact.email)
}
console.log(getEmail(Paul))

function getAnyEmail({contact}: {contact: Contact}):string{
    return("Die Mail von "+ contact.name + " lautet: " + contact.email)
    }
    console.log(getAnyEmail(Peter))

 
//Aufg: 5

function evaluateWinner(player1: Player, player2: Player): number {
    if (player1.spielname.name !== player2.spielname.name) {
     return 0;
    }
    return compareScore(player1.spielname.highscore, player2.spielname.highscore);
  }
  function compareScore(score1: number, score2: number): number {
    if (score1 > score2) {
      return 1;
    } else if (score1 < score2) {
      return -1;
    } else {
      return 0;
    }
  }
  
console.log(evaluateWinner(Jannis, Paul))

export {}