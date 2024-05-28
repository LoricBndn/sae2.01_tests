class UneFacture {
    private _numFact!: number;
    private _dateFact!: string;
    private _commentFact!: string;
    private _tauxRemiseFact!: number;
    private _idCli!: number;
    private _idForfait!: string;

    constructor(numfact = 0, datefact = "", commentfact = "", tauxremisefact = 0, idcli = 0, idforfait = "") {
        this.numFact = numfact;
        this.dateFact = datefact;
        this.commentFact = commentfact;
        this.tauxRemiseFact = tauxremisefact;
        this.idCli = idcli;
        this.idForfait = idforfait;
    }

    // définition des « getters » et des « setters » pour les attributs privés de la classe
    get numFact(): number { return this._numFact; }
    set numFact(numfact: number) { 
        if (numfact > 0) {
            this._numFact = numfact; 
        } else {
            throw new Error("Le numéro doit être un entier supérieur à 0")
        }
    }

    get dateFact(): string { return this._dateFact; }
    set dateFact(datefact: string) { 
        if (this.estDateValide(datefact)) {
           this._dateFact = datefact; 
        } else {
            throw new Error("La date doit être une date valide")
        }
    }

    get commentFact(): string { return this._commentFact; }
    set commentFact(commentfact: string) { this._commentFact = commentfact; }

    get tauxRemiseFact(): number { return this._tauxRemiseFact; }
    set tauxRemiseFact(tauxremisefact: number) {
        if (tauxremisefact >= 0 && tauxremisefact <= 100) {
            this._tauxRemiseFact = tauxremisefact; 
        } else {
            throw new Error("Le taux max de remise doit être compris entre 0 et 100")
        }
    }

    get idCli(): number { return this._idCli; }
    set idCli(idcli: number) {
        if (idcli > 0) {
            this._idCli = idcli; 
        } else {
            throw new Error("L'id doit être un entier supérieur à 0")
        }
    }  

    get idForfait(): string { return this._idForfait; }
    set idForfait(idforfait: string) {
        if (idforfait.length >= 3 && idforfait.length <= 6) {
            this._idForfait = idforfait; 
        } else {
            throw new Error("L'id doit contenir entre 3 et 6 caractères")
        }
    }  

    estDateValide(dateString: string): boolean {	//Vérifie à partir d'une string d'une date au format jj/mm/aaaa si celle-ci est valide
		const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    	const match = dateString.match(regex);
		if (!match) {
			return false;
		}
		
		// Extraire le jour, le mois et l'année
		const day = parseInt(match[1], 10);
		const month = parseInt(match[2], 10);
		const year = parseInt(match[3], 10);
	
		// Les mois en JavaScript sont de 0 (janvier) à 11 (décembre)
		const date = new Date(year, month - 1, day);
	
		// Vérifier si la date est valide
		return (
			date.getFullYear() === year &&
			date.getMonth() === month - 1 &&
			date.getDate() === day
		);
	}
}

export { UneFacture }