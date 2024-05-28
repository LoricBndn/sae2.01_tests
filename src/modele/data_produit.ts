import { UneFacture } from "./data_facture.ts";

class UnTypProduit {
    private _codeProd!: string;
    private _libProd!: string;
    private _type!: string;
    private _origine!: string;
    private _conditionnement!: number;
    private _tarifHt!: number

    constructor(codeprod = "", libprod = "", type = "", origine = "", conditionnement = 0, tarifht = 0) {
        // initialisation à l’instanciation
        this.codeProd = codeprod;
        this.libProd = libprod;
        this.type = type;
        this.origine = origine;
        this.conditionnement = conditionnement;
        this.tarifHt = tarifht;
    }

    // définition des « getters » et des « setters » pour les attributs privés de la classe
    get codeProd(): string { return this._codeProd; }
    set codeProd(codeprod: string) {
        if (codeprod.length >= 3 && codeprod.length <= 8) {
            this._codeProd = codeprod
        } else {
            throw new Error("Le code doit contenir entre 3 et 8 caractères")
        }
    }

    get libProd(): string { return this._libProd; }
    set libProd(libprod: string) {
        if (libprod.length >= 4) {
            this._libProd = libprod
        } else {
            throw new Error("Le libellé doit contenir au moins 4 caractères")
        }
    }

    get type(): string { return this.type; }
    set type(type: string) {
        if (type === "plate" || type === "pétillante") {
            this.type = type;  
        } else {
            throw new Error("Le type doit être 'plate' ou 'pétillante'")
        } 
    }

    get origine(): string { return this.origine; }
    set origine(origine: string) {
        if (origine.length >= 3) {
            this.origine = origine
        } else {
            throw new Error("L'origine doit contenir au moins 3 caractères ")
        }
    }

    get conditionnement(): number { return this.conditionnement; }
    set conditionnement(conditionnement: number) { 
        if (conditionnement >= 25 && conditionnement <= 200) {
            this.conditionnement = conditionnement
        } else {
            throw new Error("Le conditionnement doit être compris entre 25 et 200")
        }
    }

    get tarifHt(): number { return this.tarifHt; }
    set tarifHt(tarifht: number) {
        if (tarifht > 0) {
            this.tarifHt = tarifht
        } else {
            throw new Error("Le tarif doit être supérieur à 0")
        }
    }

}

class UnProduitByFacture {	
	private _qteProd!: number;
	private _unTypProduit!: UnTypProduit
    private _uneFacture!: UneFacture

	constructor(qteProd = 1, unTypProduit: UnTypProduit, uneFacture: UneFacture) {
	    // attributs de produit auxquels on ajoute l'attribut « qteProd » de la relation « ligne »
		this.qteProd = qteProd;
        this.unTypProduit = unTypProduit;  
        this.uneFacture = uneFacture;
	}
	// définition des « getters » et des « setters » pour les attributs privÃ©s de la classe
	get qteProd(): number {	return this._qteProd; }
	set qteProd(qteProd: number) { 
		if (qteProd > 0) {
			this.qteProd = qteProd; 
		} else {
			throw new Error("La quantité du produit doit être un entier supérieur à 0");
		}
	}

	get unTypProduit(): UnTypProduit { return this.unTypProduit; }
    set unTypProduit(unTypProduit: UnTypProduit) { 
		if (unTypProduit.codeProd.length >= 3 && unTypProduit.codeProd.length <= 8) {
			this._unTypProduit = unTypProduit;
		} else {
			throw new Error("Le code doit contenir entre 3 et 8 caractères");
		} 
	}

    get uneFacture(): UneFacture { return this._uneFacture; }
    set uneFacture(uneFacture: UneFacture) { 
		if (uneFacture.numFact > 0) {
            this._uneFacture = uneFacture; 
        } else {
            throw new Error("Le numéro doit être un entier supérieur à 0")
        }
    }
}

export { UnTypProduit }