class UnClient { // définition de la classe gérant les données d’un client
    private _idCli!: number;
    private _civCli!: string;
    private _nomCli!: string;
    private _prenomCli!: string;
    private _telCli!: string;
    private _melCli!: string;
    private _adrCli!: string;
    private _cpCli!: string;
    private _communeCli!: string;
    private _tauxmaxRemiseCli!: number;

    constructor(idcli = 0, civcli = "", nomcli = "", prenomcli = "", telcli = "", melcli = "", adrcli = "", cpcli = "", communecli = "", tauxmaxremisecli = 0) {
        // initialisation à l’instanciation
        this.idCli = idcli;
        this.civCli = civcli;
        this.nomCli = nomcli;
        this.prenomCli = prenomcli;
        this.telCli = telcli;
        this.melCli = melcli;
        this.adrCli = adrcli
        this.cpCli = cpcli
        this.communeCli = communecli
        this.tauxmaxRemiseCli = tauxmaxremisecli
    }

    // définition des « getters » et des « setters » pour la lecture/écriture des attributs privés de la classe
    get idCli(): number { return this._idCli; }
    set idCli(idcli: number) {
        if (idcli > 0) {
            this._idCli = idcli; 
        } else {
            throw new Error("L'id doit être un entier supérieur à 0")
        }
    }  

    get civCli(): string { return this._civCli; }
    set civCli(civcli: string) {
        if (civcli === "M." || civcli === "Mme") {
           this._civCli = civcli;  
        } else {
            throw new Error("La civilité doit être 'M.' ou 'Mme'")
        } 
    }

    get nomCli(): string { return this._nomCli; }
    set nomCli(nomcli: string) {
        let compteur = 0
        for (let i = 0; i < nomcli.length; i++) {
            if (nomcli[i].match(/^([a-zA-Z]+)$/)) {
                compteur += 1;  
            }
        } if (compteur >= 2) {
            this._nomCli = nomcli; 
        } else {
            throw new Error("Le nom doit contenir au moins 2 caractères alphabétiques")
        }
    }

    get prenomCli(): string { return this._prenomCli; }
    set prenomCli(prenomcli: string) {
        let compteur = 0
        for (let i = 0; i < prenomcli.length; i++) {
            if (prenomcli[i].match(/^([a-zA-Z]+)$/)) {
                compteur += 1;  
            }
        } if (compteur >= 2) {
            this._prenomCli = prenomcli; 
        } else {
            throw new Error("Le prénom doit contenir au moins 2 caractères alphabétiques")
        }
    }

    get telCli(): string { return this._telCli; }
    set telCli(telcli: string) { this._telCli = telcli; }

    get melCli(): string { return this._melCli; }
    set melCli(melcli: string) {
        let compteur = 0
        for (let i = 0; i < melcli.length; i++) {
            if (melcli[i].match(/^([@]+)$/)) {
                compteur += 1;  
            }
        } if (compteur >= 1) {
            this._melCli = melcli; 
        } else {
            throw new Error("L'adresse mail doit contenir au moins un '@'")
        } 
    }
    get adrCli(): string { return this._adrCli; }
    set adrCli(adrcli: string) {
        if (adrcli.length >= 15) {
            this._adrCli = adrcli; 
        } else {
            throw new Error("L'adresse doit contenir au moins 15 caractères")
        } 
    }
    
    get cpCli(): string { return this._cpCli; }
    set cpCli(cpcli: string) { this._cpCli = cpcli; }

    get communeCli(): string { return this._communeCli; }
    set communeCli(communecli: string) { 
        if (communecli.length >= 15) {
            this._communeCli = communecli; 
        } else {
            throw new Error("La commune doit contenir au moins 2 caractères")
        }
    }

    get tauxmaxRemiseCli(): number { return this._tauxmaxRemiseCli; }
    set tauxmaxRemiseCli(tauxmaxremisecli: number) {
        if (tauxmaxremisecli >= 0 && tauxmaxremisecli <= 100) {
            this._tauxmaxRemiseCli = tauxmaxremisecli; 
        } else {
            throw new Error("Le taux max de remise doit être compris entre 0 et 100")
        }
    }
}

export {UnClient}