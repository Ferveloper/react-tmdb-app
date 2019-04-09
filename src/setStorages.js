sessionStorage.setItem('discoverResults', JSON.stringify([]));
sessionStorage.setItem('discoverPage', 1);
sessionStorage.setItem('searchQuery', '');
sessionStorage.setItem('searchResults', JSON.stringify([]));
sessionStorage.setItem('searchPage', 1);
if (!localStorage.getItem('collections')) localStorage.setItem('collections', JSON.stringify([]));
if (!localStorage.getItem('ratings')) localStorage.setItem('ratings', JSON.stringify([]));