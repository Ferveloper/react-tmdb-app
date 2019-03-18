import {sampleMovies} from './sampleMovies';
import {sampleRatings} from './sampleRatings';

sessionStorage.setItem('discoverResults', JSON.stringify([]));
sessionStorage.setItem('discoverPage', 1);
sessionStorage.setItem('searchQuery', '');
sessionStorage.setItem('searchResults', JSON.stringify([]));
sessionStorage.setItem('searchPage', 1);
localStorage.setItem('collections', JSON.stringify([{id : 0, name : 'Colección de prueba', movies : sampleMovies}]));
localStorage.setItem('ratings', JSON.stringify(sampleRatings));