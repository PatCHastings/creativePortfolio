class Player {
constructor() {
    this._exp = 0;
    this._lvl = 1;
    this._hp = 1;
    this._mp = 1;
    this._hud = false;
}

get exp() {
    return this._exp
}
get lvl() {
    return this._lvl
}
get hp() {
    return this._hp
}
get mp() {
    return this._mp
}
get hud() {
    return this._hud
}

tickExp() {
    this._exp ++;
}
tickLvl() {
    this._lvl ++;
}
tickHp() {
    this._hp ++;
}

clickExp() {
    this._exp += 5;
}

}


export default Player;
