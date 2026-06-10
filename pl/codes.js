window.CODES = {
 "取词失效": {
  "cat": "Włączenie / ustawienia",
  "name": "Przechwytywanie ekranu martwe ogólnie",
  "alias": "przechwytywanie ekranu nie działa brak reakcji najechanie capture 取词",
  "trigger": "Zaraz po instalacji / aktualizacji najechanie lub klawisz przechwytywania nic nie robi",
  "official": "Przechwytywanie ekranu wymaga Youdao w tle z włączonym przechwytywaniem; oficjalna wersja desktopowa oferuje inteligentne przechwytywanie / przechwytywanie ze schowka / przechwytywanie OCR.",
  "cause": "Przechwytywanie ekranu używa globalnego haka wstrzykniętego do aplikacji na pierwszym planie, by czytać jej tekst: potrzeba działającego procesu Youdao + aktywnego głównego przełącznika + pasującego klawisza wyzwalacza. Gdy brakuje jednego, wygląda «całkiem martwe», często mylone z zepsutym oprogramowaniem.",
  "fix": "Sprawdź, czy ikona w zasobniku jest aktywna (szara = nie działa, kliknij dwukrotnie, by uruchomić); Ustawienia → Przechwytywanie i zaznaczenie, zaznacz «włącz przechwytywanie» i wybierz tryb (najechanie / przytrzymaj Ctrl); uruchom ponownie Youdao i spróbuj.",
  "scene": "Youdao nie uruchomił się sam, brak ikony w zasobniku → przechwytywanie nigdy nie reaguje; ręczne uruchomienie naprawia."
 },
 "划词不弹窗": {
  "cat": "Włączenie / ustawienia",
  "name": "Tłumaczenie zaznaczenia nie pokazuje okna",
  "alias": "zaznaczenie tłumacz brak okna 划词 zaznaczenie podświetl",
  "trigger": "Zaznaczenie frazy nie otwiera okna tłumaczenia",
  "official": "Tłumaczenie zaznaczenia wymaga włączonego «zaznaczenia» z zaznaczonym «tłumacz przy zaznaczeniu»; może tłumaczyć przy zaznaczeniu lub klawiszem.",
  "cause": "Zaznaczenie i przechwytywanie to osobne przełączniki: wielu włącza przechwytywanie, ale nie zaznaczenie, lub wyłącza «tłumacz przy zaznaczeniu», stąd «zaznaczenie nic nie pokazuje»; skrót zaznaczenia też może być zajęty.",
  "fix": "Ustawienia → Przechwytywanie i zaznaczenie, zaznacz «włącz tłumaczenie zaznaczenia» i «tłumacz przy zaznaczeniu»; jeśli klawiszem, sprawdź, czy jest wolny; zaznaczenie w przeglądarce wymaga też rozszerzenia.",
  "scene": "Brak reakcji w PDF / web, ale okno w Notatniku → zwykle zgodność tej aplikacji (rozszerzenie / tryb chroniony), nie przełącznik zaznaczenia."
 },
 "Word取词": {
  "cat": "Zgodność aplikacji",
  "name": "Przechwytywanie/zaznaczenie w Word / Office zawodzi",
  "alias": "word office excel przechwyt. zazn. zdanie dodatek com education 365 wtyczka",
  "trigger": "Po instalacji / zmianie Office (zwłaszcza Education, 365) Word / Excel nie tłumaczy zaznaczenia",
  "official": "Youdao integruje się z Office przez dodatek COM do tłumaczenia zaznaczenia / zdania; gdy dodatek jest wyłączony lub niezarejestrowany, zawodzi.",
  "cause": "Office wyłącza cudze dodatki COM ze względu na zgodność lub politykę; zmiana wersji (np. nowy Education) zostawia stary dodatek niezarejestrowany dla nowego Office, stąd «działało, teraz nie».",
  "fix": "Word: Plik → Opcje → Dodatki → na dole «Zarządzaj: Dodatki COM» → Przejdź → zaznacz dodatek Youdao; jeśli nie, przeinstaluj Youdao, by go ponownie zarejestrować; sprawdź zgodność architektury Youdao i Office.",
  "scene": "Po nowym Office Education tłumaczenie zaznaczenia ginie, dodatek na liście, ale niezaznaczony → włączenie przywraca."
 },
 "PDF取词": {
  "cat": "Zgodność aplikacji",
  "name": "Przechwytywanie w PDF / Acrobat zawodzi",
  "alias": "pdf acrobat reader przechwyt. zazn. yodaodict.api tryb chroniony plug_ins autotray skan",
  "trigger": "Adobe Acrobat / Reader: zaznaczenie w PDF nic nie robi, lub «nie można załadować wtyczki»",
  "official": "Wersje oficjalne wspierają przechwytywanie ekranu PDF w Adobe Reader / Acrobat; nieoficjalne wersje «przenośne» nie mogą przechwytywać PDF, a PDF musi być tekstem, nie obrazem.",
  "cause": "Trzy przyczyny: ① «tryb chroniony» Acrobat to piaskownica blokująca wstrzyknięcie cudzego YodaoDict.api; ② niedopasowanie architektury 64-bit Acrobat i starej wtyczki Youdao daje «niezgodna wtyczka»; ③ PDF to skan (obraz, bez warstwy tekstu).",
  "fix": "Wyłącz w Acrobat Edycja → Preferencje → Zabezpieczenia (rozszerzone) → «Włącz tryb chroniony przy uruchamianiu», otwórz Youdao przed Acrobat; przy komunikacie «niezgodna» 64-bit zainstaluj najnowszy Youdao, lub skopiuj YodaoDict.api do plug_ins Acrobat; dla skanów użyj mocnego OCR.",
  "scene": "Acrobat 64-bit, zaznaczenie nic nie robi, «nie można załadować YodaoDict.api» → wyłączenie trybu chronionego + skopiowanie .api do plug_ins przywraca."
 },
 "浏览器划词": {
  "cat": "Zgodność aplikacji",
  "name": "Zaznaczenie/przechwytywanie w Chrome / przeglądarce zawodzi",
  "alias": "chrome edge firefox przeglądarka zazn. przechwyt. rozszerzenie wtyczka akceleracja sprzętowa 360 adblock",
  "trigger": "Brak przechwytywania na stronach / brak okna zaznaczenia, podczas gdy Notatnik itp. działają",
  "official": "Chrome / Firefox itp. wymagają osobnego rozszerzenia Youdao; oficjalna wersja desktopowa oferuje «przechwytywanie Chrome».",
  "cause": "Przeglądarka to własna piaskownica: ① bez rozszerzenia Youdao globalny hak nie czyta tekstu DOM; ② akceleracja sprzętowa GPU renderuje stronę do tekstury bez czytelnej warstwy; ③ przełączniki adblock / bezpieczeństwa (np. przeglądarka 360) blokują przechwytywanie.",
  "fix": "Zainstaluj rozszerzenie Youdao dla swojej przeglądarki (przez ustawienia Youdao lub sklep); wyłącz «użyj akceleracji sprzętowej» w ustawieniach przeglądarki i uruchom ponownie; wyłącz adblock w przeglądarce 360.",
  "scene": "Zaznaczenie w Chrome nic nie robi; instalacja rozszerzenia Youdao naprawia; niektóre strony nadal zawodzą przez tekstury akceleracji - wyłącz akcelerację."
 },
 "截图翻译": {
  "cat": "Skróty",
  "name": "OCR zrzutu/obszaru nie działa",
  "alias": "zrzut obszar ocr rozpoznaj quick ocr skrót ctrl alt o tłumacz obszar",
  "trigger": "Skrót rozpoznawania zrzutu nic nie robi / brak rozpoznanego tekstu",
  "official": "OCR zrzutu wymaga ustawionego skrótu rozpoznawania (np. Ctrl+Alt+O) i pobranego modułu OCR; zaznaczasz obszar ekranu przeciągając.",
  "cause": "OCR zrzutu nie wymaga warstwy tekstu - rozpoznaje zaznaczony obszar przez obraz, więc potrzeba pobranego modułu OCR + wolnego skrótu + (macOS) uprawnienia nagrywania ekranu, by czytać piksele.",
  "fix": "Ustawienia → Skróty, przypisz bezkonfliktowy klawisz do «OCR zrzutu»; pobierz moduł OCR przy pierwszym użyciu; na macOS przyznaj «Nagrywanie ekranu»; wybierz wyraźniejszy obszar, jeśli rozpoznawanie zawodzi.",
  "scene": "Skrót nic nie robi → zwykle narzędzie zrzutów zajęło klawisz; zmiana kombinacji przywraca."
 },
 "快捷键冲突": {
  "cat": "Skróty",
  "name": "Konflikt skrótu przechwytywania / zrzutu",
  "alias": "skrót konflikt zajęty ctrl narzędzie zrzutów metoda wprowadzania qq",
  "trigger": "Klawisz przechwytywania / zrzutu nic nie robi, lub «już zajęty przez system»",
  "official": "Przechwytywanie / zaznaczenie / rozpoznawanie zrzutu są dostosowywalne w Skrótach; przy konflikcie ostrzega, można przypisać ponownie lub zresetować.",
  "cause": "Skróty globalne działają na zasadzie kto pierwszy: narzędzie zrzutów, metoda wprowadzania, QQ / WeChat lub inny słownik mogą trzymać tę samą kombinację, więc klawisz Youdao nic nie robi.",
  "fix": "Ustawienia → Skróty, uważaj na ostrzeżenie o konflikcie; zmień na rzadszą kombinację jak Ctrl+Shift+litera / Alt+litera; zamykaj aplikacje trzymające klawisze po kolei, by znaleźć winowajcę.",
  "scene": "Po instalacji nowego narzędzia zrzutów klawisz przechwytywania ginie → przypisz ponownie klawisz Youdao lub narzędzia."
 },
 "macOS权限": {
  "cat": "Uprawnienia",
  "name": "macOS przechwytywanie / skróty wymagają autoryzacji",
  "alias": "mac macos uprawnienie dostępność nagrywanie ekranu accessibility autoryzuj prywatność",
  "trigger": "Przechwytywanie i skróty martwe na macOS, zwłaszcza po aktualizacji systemu",
  "official": "macOS musi przyznać Youdao «Dostępność» (do monitorowania skrótów / sterowania) i «Nagrywanie ekranu» (do czytania ekranu przy przechwytywaniu / zrzucie) w Ustawieniach systemowych → Prywatność i bezpieczeństwo.",
  "cause": "Piaskownica macOS wymaga jawnych uprawnień: bez «Dostępności» nie słyszy skrótów globalnych, bez «Nagrywania ekranu» nie czyta pikseli; aktualizacje często resetują oba.",
  "fix": "Ustawienia systemowe → Prywatność i bezpieczeństwo → zaznacz Youdao w «Dostępności» i «Nagrywaniu ekranu» i uruchom ponownie; przyznawaj ponownie po każdej aktualizacji macOS.",
  "scene": "Po aktualizacji macOS przechwytywanie całkiem martwe → uprawnienia zresetowane; ponowne zaznaczenie obu przywraca."
 },
 "管理员权限": {
  "cat": "Uprawnienia",
  "name": "Brak przechwytywania w podniesionej aplikacji (UAC)",
  "alias": "administrator uac podniesiony uruchom jako admin poziom uprawnień menedżer zadań",
  "trigger": "Zwykłe aplikacje przechwytują dobrze; jedna «uruchomiona jako administrator» nie",
  "official": "W Windows niektóre przypadki wymagają Youdao «uruchomionego jako administrator», by przechwytywać w podniesionych aplikacjach.",
  "cause": "Poziomy integralności Windows (UAC) izolują procesy: hak z normalnymi prawami nie może wstrzyknąć do procesu o wysokiej integralności (administrator) i odwrotnie, stąd «tylko ta aplikacja nie przechwytuje».",
  "fix": "Prawy klik Youdao «Uruchom jako administrator», by wyrównać poziom uprawnień celu; lub ustaw zawsze uruchamianie jako administrator (właściwość zgodności).",
  "scene": "Brak przechwytywania w narzędziu deweloperskim / oknie zdalnym uruchomionym jako administrator → uruchomienie Youdao jako administrator przywraca."
 },
 "弹窗飞走": {
  "cat": "Renderowanie / wyświetlanie",
  "name": "Okno poza ekranem przy wielu monitorach / wysokim DPI",
  "alias": "wiele monitorów podwójny ekran wysokie dpi skalowanie okno poza ekranem przypnij okno 4k laptop",
  "trigger": "Przy wielu monitorach / wysokim DPI okno przechwytywania pojawia się w niewidocznym miejscu",
  "official": "Ustawienia przechwytywania oferują «przypnij pozycję okna», by przypiąć okno tłumaczenia w stałym punkcie.",
  "cause": "Gdy skalowanie DPI na ekranach się różni, współrzędne okna są liczone złą skalą, więc «odlatuje» poza ekran lub na niewidoczny monitor.",
  "fix": "Zaznacz «przypnij pozycję okna» w ustawieniach przechwytywania i umieść je w lewym górnym rogu głównego ekranu; trzymaj skalowanie spójne; uruchom ponownie Youdao, by odświeżyć współrzędne w razie potrzeby.",
  "scene": "Zewnętrzny 4K + laptop o innej skali, przechwytywanie ma «dźwięk, ale brak okna» → przypięcie pozycji okna rozwiązuje."
 },
 "64位": {
  "cat": "Zgodność aplikacji",
  "name": "Zgodność przechwytywania aplikacji / systemu 64-bit",
  "alias": "64-bit x64 niezgodna wtyczka acrobat architektura 32-bit zgodny",
  "trigger": "Przechwytywanie zawodzi lub zgłasza niezgodną wtyczkę w 64-bit Acrobat / aplikacjach",
  "official": "Wersja desktopowa Youdao jest zgodna z 64-bit i wspiera przechwytywanie ekranu w systemach 64-bit; stare wersje mogą być niezgodne z wtyczkami niektórych aplikacji 64-bit.",
  "cause": "DLL haków 32/64-bit nie mieszają się: komponent wstrzykiwania starego Youdao nie pasuje do hosta 64-bit (np. 64-bit Acrobat), więc host odmawia załadowania i zgłasza «niezgodna wtyczka».",
  "fix": "Zaktualizuj do najnowszego Youdao (z komponentem przechwytywania 64-bit); jeśli 64-bit Acrobat nadal zawodzi, skopiuj pasujący YodaoDict.api do jego plug_ins i uruchom Youdao jako administrator.",
  "scene": "Po przejściu na 64-bit Acrobat zaznaczenie ginie → instalacja najnowszego Youdao przywraca."
 },
 "绿色版": {
  "cat": "Sieć / instalacja",
  "name": "Wersja przenośna / lekka nie przechwytuje",
  "alias": "przenośna lekka nieoficjalna przechwyt. pdf hak dll rejestracja zielona",
  "trigger": "Na cudzym Youdao «przenośnym / lekkim» przechwytywanie PDF / globalne nie działa",
  "official": "Oficjalnie stwierdzono: nieoficjalne wersje «przenośne» Youdao nie przechwytują PDF poprawnie - zainstaluj najnowszą oficjalną wersję standardową.",
  "cause": "Przechwytywanie ekranu zależy od komponentów haka / wtyczki zarejestrowanych w systemie przy instalacji; wersje przenośne usuwają je lub nie rejestrują dla «bez instalacji», więc globalne / PDF przechwytywanie ginie.",
  "fix": "Odinstaluj wersję przenośną i zainstaluj najnowszy oficjalny standardowy Youdao ze strony (nadpisz), by komponenty przechwytywania zarejestrowały się dobrze.",
  "scene": "Wziąłem wersję przenośną dla wygody, przechwytywanie PDF nigdy nie działa → oficjalna wersja przywraca."
 },
 "全屏取词": {
  "cat": "Renderowanie / wyświetlanie",
  "name": "Przechwytywanie zawodzi w pełnym ekranie / grach",
  "alias": "pełny ekran gra wyłączny pełny ekran hak zawodzi wideo",
  "trigger": "Przechwytywanie nic nie robi w aplikacjach pełnoekranowych / grach / wideo pełnoekranowym wyłącznym",
  "official": "W pełnym ekranie (zwłaszcza wyłącznym) globalny hak przechwytywania może zawieść - użyj trybu okienkowego lub OCR zrzutu.",
  "cause": "Wyłączny pełny ekran omija normalną kompozycję okien i przejmuje wejście/renderowanie, więc globalny hak nie dostaje zdarzeń / tekstu i przechwytywanie ginie w pełnym ekranie.",
  "fix": "Przełącz aplikację na «okno / okno bez ramki»; lub użyj OCR zrzutu (zaznacz obszar) zamiast przechwytywania po najechaniu dla treści pełnoekranowej.",
  "scene": "Brak przechwytywania w grach pełnoekranowych wyłącznych → użyj okna bez ramki, lub OCR zrzutu."
 },
 "取词慢": {
  "cat": "Sieć / instalacja",
  "name": "Przechwytywanie wolne / czasem brak reakcji",
  "alias": "przechwytywanie wolne lag opóźnienie brak reakcji sieć szybkość online",
  "trigger": "Przechwytywanie działa, ale okno jest wolne, czasem brak",
  "official": "Szybkość przechwytywania ekranu zależy od sieci; w normalnej sieci odpowiedź zwykle poniżej 1 sekundy.",
  "cause": "Definicje online wymagają zapytania sieciowego, więc wahania / wolny DNS opóźniają okno; OCR zrzutu rozpoznaje też lokalnie, więc niegotowy moduł jest wolny lub jego fallback zawodzi.",
  "fix": "Sprawdź / przełącz na stabilniejszą sieć; włącz lokalny rozszerzony słownik dla częstych słów, by ograniczyć wywołania sieci; sprawdź, czy moduł OCR pobrany; uruchom ponownie Youdao w razie potrzeby.",
  "scene": "Przechwytywanie trwa kilka sekund w słabej sieci → zmiana sieci / włączenie lokalnego słownika wyraźnie przyspiesza."
 },
 "扫描件取词": {
  "cat": "Renderowanie / wyświetlanie",
  "name": "Nie można przechwycić skanu / obrazu",
  "alias": "skan obraz pdf obrazowy ocr mocny przechwyt. zrzut brak warstwy tekstu rozpoznaj",
  "trigger": "Przechwytywanie nic nie robi na obrazach / zeskanowanych PDF",
  "official": "Obrazy / skany nie mają warstwy tekstu, więc proste przechwytywanie ich nie czyta - włącz «mocny OCR», by rozpoznać przez obraz.",
  "cause": "Proste przechwytywanie czyta bufor tekstu aplikacji; skan / obraz ma tylko piksele, bez kodowania znaków, więc nie ma czego przechwycić - trzeba zrobić OCR obrazu na tekst.",
  "fix": "Ustawienia → Przechwytywanie i zaznaczenie, zaznacz «mocny OCR dla całego oprogramowania» i pobierz moduł OCR; lub użyj OCR zrzutu na obszarze; użyj wyraźniejszego oryginału, jeśli rozpoznawanie zawodzi.",
  "scene": "Zeskanowany papierowy PDF nie zaznacza się → włączenie mocnego OCR czyni go rozpoznawalnym."
 },
 "输入法冲突": {
  "cat": "Skróty",
  "name": "Metoda wprowadzania / inne oprogramowanie kradnie klawisz",
  "alias": "metoda wprowadzania sogou pinyin kradnie klawisz ctrl zajęty konflikt inny słownik",
  "trigger": "Wyzwalacz przechwytywania (np. Ctrl) jest przejmowany przez metodę wprowadzania / inną aplikację",
  "official": "Jeśli wyzwalacz (np. Ctrl) jest zajęty przez inne oprogramowanie, przechwytywanie jest wywłaszczane i nic nie robi; zmień wyzwalacz przechwytywania.",
  "cause": "Przechwytywanie często wyzwala się klawiszami Ctrl / F; metody wprowadzania, inne słowniki i narzędzia schowka mogą nasłuchiwać ten sam klawisz, a kto zarejestruje pierwszy, odpowiada, więc przechwytywanie Youdao jest «kradzione».",
  "fix": "Zmień wyzwalacz przechwytywania Youdao na bardziej unikalną kombinację / na najechanie; lub dostosuj skrót konfliktującej aplikacji; zamykaj podejrzane aplikacje po kolei, by znaleźć złodzieja.",
  "scene": "Po instalacji narzędzia schowka przechwytywanie Ctrl ginie → zmiana wyzwalacza Youdao przywraca."
 }
};
window.LABELS = {"miss": "Objaw niewymieniony. Spróbuj innego słowa kluczowego (przechwytywanie / pdf / zaznaczenie / skrót) lub zobacz pełną tabelę poniżej.", "codeword": ""};
window.FIELDS = [["trigger", "Kiedy występuje"], ["official", "Objaw L1 / pozycja oficjalna"], ["cause", "Przyczyna źródłowa L2"], ["fix", "Jak sprawdzić / rozwiązać"], ["scene", "Realny przypadek"]];
window.THEAD = ["Objaw", "Grupa", "Objaw L1 / pozycja oficjalna", "Przyczyna źródłowa L2"];
