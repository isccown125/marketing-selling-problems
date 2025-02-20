export interface SalesProblem {
	id: number;
	title: string;
	problem: string;
	solution: string;
}

export const salesProblems: SalesProblem[] = [
	{
		id: 1,
		title: 'Brak stabilnego źródła klientów',
		problem: 'Twórcy stron WordPress często borykają się z nieregularnym napływem projektów, co prowadzi do niepewności finansowej i trudności w planowaniu rozwoju biznesu.',
		solution:
			'Przedstawienie konkretnego planu pozyskiwania klientów z wykorzystaniem różnych kanałów marketingowych, wraz z prognozą miesięcznego napływu leadów. Pokazanie rzeczywistych przykładów innych twórców WordPress, którzy już osiągnęli stabilność dzięki systematycznemu pozyskiwaniu klientów.',
	},
	{
		id: 2,
		title: 'Obawa przed wysokimi kosztami początkowymi',
		problem: 'Potencjalni klienci obawiają się, że będą musieli ponieść znaczące koszty na start, zanim zobaczą pierwsze efekty współpracy.',
		solution:
			'Wprowadzenie elastycznego modelu rozliczeniowego, gdzie część wynagrodzenia jest uzależniona od osiąganych rezultatów. Przedstawienie szczegółowej kalkulacji ROI pokazującej, jak szybko inwestycja może się zwrócić.',
	},
	{
		id: 3,
		title: 'Wątpliwości dotyczące jakości leadów',
		problem: 'Twórcy WordPress martwią się, że otrzymywane leady będą niskiej jakości lub niedopasowane do ich specjalizacji i poziomu cenowego.',
		solution:
			'Prezentacja procesu kwalifikacji leadów, włącznie z kryteriami selekcji i systemem oceny potencjału klienta. Pokazanie statystyk konwersji i średniej wartości projektu z dotychczasowych kampanii.',
	},
	{
		id: 4,
		title: 'Brak czasu na obsługę dodatkowych klientów',
		problem: 'Wielu twórców WordPress obawia się, że nie będą w stanie obsłużyć zwiększonego napływu klientów przy obecnych zasobach.',
		solution:
			'Przedstawienie rozwiązań w zakresie skalowania biznesu, w tym gotowych szablonów procesów, narzędzi automatyzacji i możliwości współpracy z podwykonawcami.',
	},
	{
		id: 5,
		title: 'Konkurencja cenowa',
		problem: 'Obawy związane z konkurowaniem z tańszymi dostawcami usług WordPress, szczególnie z platform freelancerskich.',
		solution:
			'Opracowanie strategii pozycjonowania eksperckiego, która pozwala na wyróżnienie się jakością i specjalizacją. Pokazanie, jak budować markę eksperta i przyciągać klientów szukających profesjonalnych rozwiązań.',
	},
	{
		id: 6,
		title: 'Niepewność co do długoterminowych rezultatów',
		problem: 'Twórcy stron mają wątpliwości, czy współpraca przyniesie długotrwałe efekty i czy nie jest to tylko krótkoterminowe rozwiązanie.',
		solution:
			'Przedstawienie długoterminowej strategii rozwoju, włącznie z planami rozwoju portfolio, budowania reputacji i zwiększania wartości projektów. Pokazanie przykładów długoletniej współpracy z zadowolonymi klientami.',
	},
	{
		id: 7,
		title: 'Obawa przed utratą kontroli nad procesem sprzedaży',
		problem: 'Twórcy WordPress obawiają się, że zewnętrzne pozyskiwanie klientów może prowadzić do utraty kontroli nad procesem sprzedaży i relacjami z klientami.',
		solution:
			'Szczegółowe omówienie procesu współpracy, gdzie twórca zachowuje pełną kontrolę nad kluczowymi decyzjami. Przedstawienie narzędzi i systemów do monitorowania i zarządzania leadami.',
	},
	{
		id: 8,
		title: 'Trudności w mierzeniu efektów',
		problem: 'Brak pewności, jak mierzyć skuteczność działań i określać rzeczywisty zwrot z inwestycji.',
		solution:
			'Wdrożenie przejrzystego systemu raportowania z kluczowymi wskaźnikami efektywności (KPI), regularnymi spotkaniami podsumowującymi i stałym dostępem do statystyk kampanii.',
	},
	{
		id: 9,
		title: 'Obawa przed zobowiązaniami długoterminowymi',
		problem: 'Niechęć do podpisywania długoterminowych umów bez pewności co do rezultatów.',
		solution:
			'Zaproponowanie elastycznych warunków współpracy z możliwością rozpoczęcia od krótkiego okresu testowego. Jasne określenie warunków zakończenia współpracy i brak kar za wcześniejsze wyjście z umowy.',
	},
	{
		id: 10,
		title: 'Brak specjalizacji branżowej',
		problem: 'Twórcy WordPress obawiają się, że pozyskiwani klienci nie będą odpowiadać ich doświadczeniu w konkretnych branżach.',
		solution:
			'Opracowanie strategii targetowania konkretnych nisz rynkowych zgodnych z doświadczeniem twórcy. Możliwość określenia preferowanych branż i typów klientów oraz stopniowego rozszerzania specjalizacji.',
	},
	{
		id: 11,
		title: 'Problemy z komunikacją techniczną',
		problem: 'Twórcy WordPress martwią się, że zewnętrzny zespół sprzedażowy nie będzie w stanie właściwie komunikować technicznych aspektów ich usług potencjalnym klientom.',
		solution:
			'Przeprowadzenie szczegółowych szkoleń z zespołem sprzedażowym na temat specyfiki WordPress, przygotowanie skryptów rozmów uwzględniających aspekty techniczne, oraz zapewnienie stałego wsparcia technicznego podczas rozmów z wymagającymi klientami.',
	},
	{
		id: 12,
		title: 'Sezonowość w branży',
		problem: 'Obawy związane z wahaniami sezonowymi w zapotrzebowaniu na usługi WordPress i trudnościami w utrzymaniu stabilnego przychodu przez cały rok.',
		solution:
			'Opracowanie strategii dywersyfikacji usług i targetowania różnych segmentów rynku, które wykazują odmienne wzorce sezonowości. Wprowadzenie usług cyklicznych i pakietów maintenance, które zapewniają stabilny przychód.',
	},
	{
		id: 13,
		title: 'Trudności w skalowaniu zespołu',
		problem: 'Obawa przed szybkim wzrostem liczby projektów i koniecznością nagłego zwiększenia zespołu.',
		solution:
			'Przygotowanie planu stopniowego skalowania zespołu, włącznie z procesami rekrutacji i onboardingu. Przedstawienie sprawdzonych metod zarządzania rosnącym zespołem i projektami.',
	},
	{
		id: 14,
		title: 'Zarządzanie oczekiwaniami klientów',
		problem: 'Obawy o rozbieżności między oczekiwaniami pozyskanych klientów a realnymi możliwościami realizacji projektów WordPress.',
		solution:
			'Wdrożenie precyzyjnego procesu briefingu i kwalifikacji projektów, jasne określanie zakresu prac i terminów realizacji. Szkolenie zespołu sprzedażowego w zakresie właściwego przedstawiania możliwości i ograniczeń technologii WordPress.',
	},
	{
		id: 15,
		title: 'Problemy z cash flow',
		problem: 'Obawy o płynność finansową przy zwiększonym napływie projektów i konieczności ponoszenia większych kosztów operacyjnych.',
		solution:
			'Wprowadzenie elastycznych modeli płatności, systemu zaliczek i jasnych zasad rozliczeń. Doradztwo w zakresie zarządzania finansami przy rosnącej skali działalności.',
	},
	{
		id: 16,
		title: 'Konkurencja ze strony no-code',
		problem: 'Obawy związane z rosnącą popularnością platform no-code i ich wpływem na rynek usług WordPress.',
		solution:
			'Opracowanie strategii pozycjonowania WordPress jako platformy oferującej większą elastyczność i możliwości customizacji. Pokazanie przewag konkurencyjnych WordPress w kontekście specyficznych potrzeb biznesowych.',
	},
	{
		id: 17,
		title: 'Bezpieczeństwo danych klientów',
		problem: 'Wątpliwości dotyczące bezpieczeństwa danych klientów i odpowiedzialności za potencjalne naruszenia bezpieczeństwa.',
		solution:
			"Przedstawienie kompleksowej polityki bezpieczeństwa, procesów backup'u i monitoringu. Włączenie usług związanych z bezpieczeństwem do standardowej oferty jako wartość dodana.",
	},
	{
		id: 18,
		title: 'Integracja z istniejącymi procesami',
		problem: 'Obawy o trudności w integracji zewnętrznego procesu pozyskiwania klientów z obecnymi procesami w firmie.',
		solution:
			'Przeprowadzenie szczegółowej analizy obecnych procesów i przedstawienie planu płynnej integracji nowych rozwiązań. Zapewnienie wsparcia technicznego i organizacyjnego podczas okresu przejściowego.',
	},
	{
		id: 19,
		title: 'Ryzyko utraty reputacji',
		problem: 'Obawy o potencjalne ryzyko dla reputacji firmy związane z działaniami zewnętrznego zespołu sprzedażowego.',
		solution:
			'Wdrożenie ścisłych standardów jakości komunikacji i obsługi klienta, regularne monitorowanie satysfakcji klientów, szybka reakcja na potencjalne problemy.',
	},
	{
		id: 20,
		title: 'Trudności w differentiacji',
		problem: 'Wyzwania związane z wyróżnieniem się na tle innych twórców WordPress oferujących podobne usługi.',
		solution:
			'Opracowanie unikalnej propozycji wartości opartej na specjalizacji, doświadczeniu i dodatkowych usługach. Pomoc w budowaniu silnej marki osobistej i eksperckiego wizerunku.',
	},
	{
		id: 21,
		title: 'Wyzwania z personalizacją szablonów',
		problem: 'Trudności w wycenie i realizacji projektów wymagających głębokiej personalizacji gotowych szablonów WordPress, co często prowadzi do przekroczenia budżetu i terminów.',
		solution:
			'Stworzenie biblioteki własnych komponentów i modyfikacji, dokumentacja najczęstszych customizacji, oraz wprowadzenie przejrzystego systemu wyceny prac personalizacyjnych z uwzględnieniem potencjalnych wyzwań technicznych.',
	},
	{
		id: 22,
		title: 'Problemy z optymalizacją wydajności',
		problem: 'Klienci narzekają na wolne działanie stron WordPress, szczególnie po dodaniu wielu wtyczek i funkcjonalności, co prowadzi do niezadowolenia i potencjalnej utraty klientów.',
		solution:
			'Opracowanie standardowego pakietu optymalizacyjnego, obejmującego audyt wydajności, optymalizację bazy danych, konfigurację cachingu i CDN, oraz regularne monitorowanie performance stron.',
	},
	{
		id: 23,
		title: 'Trudności z migracją danych',
		problem: 'Komplikacje przy przenoszeniu istniejących stron klientów na WordPress lub migracji między hostingami, co generuje dodatkowe koszty i opóźnienia.',
		solution:
			'Stworzenie standardowej procedury migracji, wykorzystanie specjalistycznych narzędzi do automatyzacji procesu, oraz jasna komunikacja z klientem odnośnie potencjalnych wyzwań i czasochłonności.',
	},
	{
		id: 24,
		title: 'Brak procedur testowych',
		problem: 'Niedostateczne testowanie zmian i aktualizacji prowadzi do problemów z funkcjonowaniem stron klientów i generuje dodatkowe koszty napraw.',
		solution:
			'Wdrożenie kompleksowego systemu testowania, obejmującego środowiska stagingowe, automatyczne testy, oraz procedury QA przed wdrożeniem zmian na produkcję.',
	},
	{
		id: 25,
		title: 'Problemy z dokumentacją dla klientów',
		problem: 'Brak odpowiedniej dokumentacji użytkownika prowadzi do zwiększonej liczby zapytań o podstawowe funkcjonalności i generuje dodatkowe obciążenie zespołu support.',
		solution:
			'Przygotowanie kompleksowej biblioteki materiałów szkoleniowych, w tym video-tutoriali, dokumentacji PDF oraz bazy wiedzy online, dostosowanych do różnych poziomów zaawansowania klientów.',
	},
	{
		id: 26,
		title: 'Wyzwania ze zgodnością RODO/GDPR',
		problem: 'Trudności w zapewnieniu zgodności stron WordPress z wymogami RODO/GDPR, szczególnie w kontekście używanych wtyczek i integracji zewnętrznych.',
		solution:
			'Opracowanie standardowego pakietu RODO, zawierającego audyt zgodności, niezbędne dokumenty prawne, oraz konfigurację technicznych aspektów ochrony danych osobowych.',
	},
	{
		id: 27,
		title: 'Problemy z automatyzacją backupów',
		problem: 'Nieregularne lub zawodne backupy stron klientów prowadzą do ryzyka utraty danych i potencjalnych sporów prawnych.',
		solution:
			'Wdrożenie automatycznego systemu backupów z monitoringiem, multiple storage locations, oraz regularnymi testami odtwarzania danych, wraz z jasną dokumentacją procesu disaster recovery.',
	},
	{
		id: 28,
		title: 'Trudności z rozliczaniem czasu pracy',
		problem: 'Niedokładne śledzenie czasu pracy przy projektach WordPress prowadzi do błędnych wycen i nierentownych projektów.',
		solution:
			'Implementacja systemu time trackingu z kategoryzacją zadań, automatycznym raportowaniem i analizą efektywności, pozwalającego na dokładniejsze wyceny przyszłych projektów.',
	},
	{
		id: 29,
		title: 'Brak standardów kodowania',
		problem: 'Niespójne praktyki kodowania w zespole prowadzą do trudności w maintainance i problemów z jakością kodu.',
		solution:
			'Wprowadzenie standardów kodowania WordPress, code review, oraz automatycznych narzędzi do sprawdzania jakości kodu, wraz z regularnymi szkoleniami zespołu.',
	},
	{
		id: 30,
		title: 'Problemy z wielojęzycznością',
		problem: 'Trudności w implementacji i zarządzaniu wielojęzycznymi stronami WordPress, szczególnie w kontekście SEO i wydajności.',
		solution:
			"Opracowanie standardowego procesu implementacji wielojęzyczności, wybór optymalnych narzędzi i wtyczek, oraz stworzenie guideline'ów dla klientów dotyczących zarządzania treścią w wielu językach.",
	},
];
