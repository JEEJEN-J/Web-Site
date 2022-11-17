import {Component , OnInit} from '@angular/core';
import {NguCarouselConfig} from "@ngu/carousel";

@Component({
    selector: 'app-team-caurosel' ,
    templateUrl: './team-caurosel.component.html' ,
    styleUrls: ['./team-caurosel.component.scss']
})
export class TeamCauroselComponent implements OnInit {

    public carouselTileItems: Array<any> = [
        {
            icon: "./assets/images/landing/faces/12.jpg" ,
            name: "Suze CLERMONT" ,
            title: "Présidente" ,
            text: `Adipisci quas repellat sed.` ,
        } , {
            icon: "./assets/images/landing/faces/15.jpg" ,
            name: "Yves Alain BELOTTE" ,
            title: "Vice-Président et Gestionnaire de programmes" ,
            text: `Adipisci quas repellat sed.` ,
        } , {
            icon: "./assets/images/landing/faces/16.jpg" ,
            name: "Franck ANTOINE" ,
            title: "Conseiller" ,
            text: `Adipisci quas repellat sed.` ,
        } , {
            icon: "./assets/images/landing/faces/5.jpg" ,
            name: "Ricot OSIAS" ,
            title: "Chargé de mission" ,
            text: `Adipisci quas repellat sed.` ,
        } , {
            icon: "./assets/images/landing/faces/5.jpg" ,
            name: "Junior Cherilan CHERY" ,
            title: "Directeur financier et Membre" ,
            text: `Adipisci quas repellat sed.` ,
        } , {
            icon: "./assets/images/landing/faces/5.jpg" ,
            name: "Josue DELEON" ,
            title: "Directeur Exécutif et Membre" ,
            text: `Adipisci quas repellat sed.` ,
        }

    ];
    public carouselTiles = {
        0: [] ,
        1: [] ,
        2: [] ,
        3: [] ,
        4: [] ,
        5: []
    };
    public carouselTile: NguCarouselConfig = {
        grid: {xs: 1 , sm: 2 , md: 3 , lg: 4 , all: 0} ,
        slide: 4 ,
        speed: 250 ,
        point: {
            visible: true
        } ,
        load: 2 ,
        velocity: 0 ,
        touch: true ,
        easing: "cubic-bezier(0, 0, 0.2, 1)"
    };

    constructor() {
    }

    ngOnInit() {
    }

}
