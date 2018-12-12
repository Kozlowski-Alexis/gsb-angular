"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_data_1 = require("../services/app.service.data");
var VisitesComponent = /** @class */ (function () {
    // compléter en ajoutant les champs présent dans le fichier HTML
    function VisitesComponent(dataService) {
        this.dataService = dataService;
        this.gestionMajRapport = false;
        this.gestionAjoutRapport = false;
    }
    VisitesComponent.prototype.chargerMedecins = function () {
        // Compléter en appelant la méthode chargerMedecins de DataService en s'inspirant de la partie 3
    };
    VisitesComponent.prototype.selectionnerMedecin = function (med) {
        // Compléter en s'inspirant de la partie 3
    };
    VisitesComponent.prototype.modifierRapport = function () {
        // cette méthode initialise les champs
    };
    VisitesComponent.prototype.chargerVisites = function () {
        // cette méthode appelle la méthode chargerRapportsAunedate de DataService
    };
    VisitesComponent.prototype.selectionner = function (rapport) {
        // compléter pour faire apparaître le rapport
    };
    VisitesComponent.prototype.valider = function () {
        // appelle majRapport de DataService 
        // dans le cas favorable, affiche un message de succès avec des classes CSS "alert alert-success"
        // et dans le cas défavorable, affiche un message avec des classes CSS "alert alert-danger"
    };
    VisitesComponent.prototype.initNouveauRapport = function () {
        this.nomMedecin = "";
        // compléter initialise les champ losque l'on ajoute un nouveau rapport
    };
    VisitesComponent.prototype.ajouterRapport = function () {
        this.initNouveauRapport();
        this.gestionAjoutRapport = true;
        this.gestionMajRapport = false;
    };
    VisitesComponent.prototype.chargerMedicaments = function () {
        // appelle la méthode chargerMedicaments du DataService
    };
    VisitesComponent.prototype.choisirMedicament = function (medicament) {
        // permet d'afficher le médicament
    };
    VisitesComponent.prototype.ajouter = function () {
        this.medicamentsSelect.push({ id: this.medicamentSelect.id, nom: this.medicamentSelect.nomCommercial, qte: this.qteSelect });
        this.nomMedicament = "";
    };
    VisitesComponent.prototype.retirer = function () {
        this.medicamentsSelect.pop();
    };
    VisitesComponent.prototype.enregistrer = function () {
        // appelle la méthode enregistrerRapport du dataService
        // dans le cas favorable, affiche un message de succès avec des classes CSS "alert alert-success"
        // et dans le cas défavorable, affiche un message avec des classes CSS "alert alert-danger"
    };
    VisitesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-visites',
            templateUrl: 'app.visites.html'
        }),
        __metadata("design:paramtypes", [app_service_data_1.DataService])
    ], VisitesComponent);
    return VisitesComponent;
}());
exports.VisitesComponent = VisitesComponent;
//# sourceMappingURL=app.visites.component.js.map