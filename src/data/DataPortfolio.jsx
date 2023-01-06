import Movies from '../assets/portfolio/Movies.png';
import Movies1 from '../assets/work_display/movies/movies1.jpg';
import Movies2 from '../assets/work_display/movies/movies2.png';

import ShiFuMi from '../assets/portfolio/ShiFuMi.png';
import Shifumi1 from '../assets/work_display/shifumi/shifumi1.jpg';
import Shifumi2 from '../assets/work_display/shifumi/shifumi2.png';

import Calendar from '../assets/portfolio/Calendar.png';
import Calendar1 from '../assets/work_display/calendar/calendar1.jpg';
import Calendar2 from '../assets/work_display/calendar/calendar2.png';

import Form from '../assets/portfolio/Form.png';
import Form1 from '../assets/work_display/form/form1.jpg';
import Form2 from '../assets/work_display/form/form2.png';

import ManuMedic from '../assets/portfolio/ManuMedic.png';
import Medic1 from '../assets/work_display/medic/medic1.jpg';
import Medic2 from '../assets/work_display/medic/medic2.png';

import CV from '../assets/portfolio/CV1.png';
import CV1 from '../assets/work_display/cv/cv1.jpg';
import CV2 from '../assets/work_display/cv/cv2.png';

import AtelierDouceur from '../assets/portfolio/AtelierDouceur.png';
import Atelier1 from '../assets/work_display/atelier/atelier1.jpg';
import Atelier2 from '../assets/work_display/atelier/atelier2.png';

import Wanderlust from '../assets/portfolio/Wanderlust.png';
import Wanderlust1 from '../assets/work_display/wanderlust/wanderlust1.jpg';
import Wanderlust2 from '../assets/work_display/wanderlust/wanderlust2.png';

export const projectsList = [
    {
        image: Wanderlust,
        title: 'Wanderlust',
        category: 'Symphony',
        first_display: Wanderlust1,
        responsive: Wanderlust2,
        description1: 'Réalisation d\'un clone de pinterest sur le thème des voyages. L\'utilisateur doit obligatoirement s\'inscrire pour publier une épingle. Il est ensuite le seul à pouvoir modifier et supprimer ses épingles.',
        description2: 'Des améliorations futures sont à prévoir avec par exemple la mise en place d\'un super admin afin de pouvoir controler les épingles publiées et modifiées par les utilisateurs et de les supprimer si besoin.',
        demo:"https://github.com/AnaChqt/Symfony--Wanderlust"
    },
    {
        image: AtelierDouceur,
        title: 'Atelier Douceur',
        category: 'WordPress',
        first_display: Atelier1,
        responsive: Atelier2,
        description1: 'Création d\'un e-commerce pour une cliente avec WordPress.com.',
        description2: 'Mise en place du thème avec l\'éditeur Gutenberg et de la boutique avec Woocommerce.',
        demo:"https://atelierdouceur.com/"
    },
    {
        image: CV,
        title: 'Portfolio Version 1',
        category: 'HTML/CSS/JS',
        first_display: CV1,
        responsive: CV2,
        description1: 'Première version de mon CV. Réalisée en HTML/CSS/JS. Version monopage.',
        description2: '',
        demo:"https://anachqt.github.io/CVNumeriqueAnaisChoquet/"
    },
    {
        image: ManuMedic,
        title: 'Manu Medic',
        category: 'PHP',
        first_display: Medic1,
        responsive: Medic2,
        description1: 'Création d\'un site de gestion de patients en PHP. Différents formulaires sécurisé permettent l\'ajout des patients et des rendez-vous.',
        description2: 'Mise en place également d\'un affichage des doonées sous form de tableaux',
        demo:"https://github.com/AnaChqt/LaManu--ManuMedic"
    },
    {
        image: Form,
        title: 'Form',
        category: 'PHP',
        first_display: Form1,
        responsive: Form2,
        description1: 'Mise en place d\'un formulaire en PHP avec gestion de la sécurité à la fois côté front et côté back.',
        description2: 'A la validation, les informations données par l\'utilisateur apparaissent sur la même page.',
        demo:"https://github.com/AnaChqt/LaManu--Form"
    },
    {
        image: Calendar,
        title: 'Calendar',
        category: 'PHP',
        first_display: Calendar1,
        responsive: Calendar2,
        description1: 'Création d\'un calendrier dynamique en PHP. Ici l\'utilisateur choisi dans un premier temps, à l\'aide d\'un menu déroulant, la date de son choix. Une fois validée, il arrive sur le mois et l\'année en question.',
        description2: 'D\'autres améliorations futures sont à prévoir comme le regroupement du menu déroulant sur le calendrier, un design différents pour chaque mois de l\'année ou encore l\'ajout de dates importantes.',
        demo:"https://github.com/AnaChqt/LaManu--Calendar"
    },
    {
        image: ShiFuMi,
        title: 'ShiFuMi Harry Potter',
        category: 'HTML/CSS/JS',
        first_display: Shifumi1,
        responsive: Shifumi2,
        description1: 'Réinterprétation du jeu pierre-feuille-ciseaux sur le thème Harry Potter et créé de manière dynamique avec JavaScript. Le joueur joue contre l\'ordinateur',
        description2: 'Création d\'un compteur de points. Des améliorations futures sont à prévoir avec notament la mise en place d\'un système de partie.',
        demo:""
    },
    {
        image: Movies,
        title: 'My Favorite Movies',
        category: 'HTML/CSS/JS',
        first_display: Movies1,
        responsive: Movies2,
        description1: 'Pour ce premier projet, j\'ai créé une page présentant une partie de mes films préférés sous forme de carte tournante.',
        description2: 'Le but ici est d\'apprendre la manipulation des données à l\'aide d\'un fichier JSON.',
        demo:"https://anachqt.github.io/LaManu--MyFavoriteMovies/"
    },
];