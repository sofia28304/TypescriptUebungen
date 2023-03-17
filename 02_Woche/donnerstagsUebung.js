"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Paul = {
    contact: { name: 'Paul',
        id: 1234,
        email: 'paul@omg.de' },
    lastLogin: new Date('2022-01-01'),
    spielname: {
        name: "Flappy Ducks",
        highscore: 376335
    }
};
const Jannis = {
    contact: { name: 'Jannis',
        id: 1235,
        email: 'Jannis@omg.de' },
    lastLogin: new Date('2022-01-02'),
    spielname: {
        name: "Flappy Ducks",
        highscore: 376336
    }
};
const Peter = {
    contact: { name: 'Admin Rolf',
        id: 1234,
        email: 'rolf@admin.de' },
    employeeId: 3874652
};
function getEmail(player) {
    return ("Die Mail von Spieler " + player.contact.name + " lautet: " + player.contact.email);
}
console.log(getEmail(Paul));
function getAnyEmail({ contact }) {
    return ("Die Mail von " + contact.name + " lautet: " + contact.email);
}
console.log(getAnyEmail(Peter));
//Aufg: 5
function evaluateWinner(player1, player2) {
    if (player1.spielname.name !== player2.spielname.name) {
        return 0;
    }
    return compareScore(player1.spielname.highscore, player2.spielname.highscore);
}
function compareScore(score1, score2) {
    if (score1 > score2) {
        return 1;
    }
    else if (score1 < score2) {
        return -1;
    }
    else {
        return 0;
    }
}
console.log(evaluateWinner(Jannis, Paul));
//# sourceMappingURL=donnerstagsUebung.js.map