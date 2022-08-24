class Player {
constructor() {
    this._exp = 0;
    this._lvl = 1;
    this._hp = 1;
    this._mp = 1;
    this._hud = false;
}

get _exp() {
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
}


export default Player();
