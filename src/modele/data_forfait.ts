class UnForfait { // définition de la classe gérant les données d’un forfait
    private _idForfait!: string;
    private _libForfait! : string;
    private _mtForfait! : number;

    constructor(idforfait = "", libforfait ="" , mtforfait = 0 ) {
    // initialisation à l’instanciation
        this.idForfait = idforfait;
        this.libForfait = libforfait;
        this.mtForfait  = mtforfait;
    }

    // définition des « getters » et des « setters » pour la lecture/écriture des attributs privés de la classe
    get idForfait(): string { return this._idForfait; }
    set idForfait ( idforfait : string ) {
        if (idforfait.length >= 3 && idforfait.length <= 6) {
            this._idForfait = idforfait; 
        } else {
            throw new Error("L'id doit contenir entre 3 et 6 caractères")
        }
    }

    get libForfait(): string { return this._libForfait; }
    set libForfait ( libforfait : string ) {
        if (libforfait.length >= 5) {
            this._libForfait = libforfait;
        } else {
            throw new Error("Le libellé doit contenir au moins 5 caractères")
        } 
    }

    get mtForfait(): number { return this._mtForfait; }
    set mtForfait ( mtforfait : number ) {
        if (mtforfait > 0) {
           this._mtForfait = mtforfait; 
        } else {
            throw new Error("Le montant doit être supérieur à 0")
        }   
    }
}
export {UnForfait}