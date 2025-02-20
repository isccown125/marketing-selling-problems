// deploy.js
const ghpages = require('gh-pages');
const path = require('path');

const options = {
	branch: 'deploy', // gałąź do której publikujemy
	repo: process.env.REPO_URL || '', // URL repozytorium (opcjonalne)
	message: 'Auto-generated deploy', // wiadomość commita
	dotfiles: true, // uwzględnij pliki zaczynające się od kropki
	nojekyll: true, // dodaj plik .nojekyll, aby wyłączyć Jekyll
};

const buildPath = path.join(__dirname, '..', 'dist');

// Funkcja publikująca
console.log('Rozpoczynam deploy...');
ghpages.publish(buildPath, options, function (err) {
	if (err) {
		console.error('Wystąpił błąd podczas deployu:', err);
		process.exit(1);
	} else {
		console.log('Deploy zakończony sukcesem!');
		console.log('Twoja strona będzie dostępna za kilka minut.');
	}
});
