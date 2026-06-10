window.CODES = {
 "取词失效": {
  "cat": "Aktivierung / Einstellungen",
  "name": "Bildschirmerfassung insgesamt tot",
  "alias": "Erfassung Bildschirmerfassung geht nicht keine Reaktion Mauszeiger capture 取词",
  "trigger": "Direkt nach Installation / Update tut der Mauszeiger oder die Erfassungstaste gar nichts",
  "official": "Die Bildschirmerfassung braucht Youdao im Hintergrund mit aktivierter Erfassung; die offizielle Desktop-Version bietet Smart-Erfassung / Zwischenablage-Erfassung / OCR-Erfassung.",
  "cause": "Die Bildschirmerfassung nutzt einen in die Vordergrund-App injizierten globalen Hook, um deren Text zu lesen: braucht den laufenden Youdao-Prozess + aktiven Haupt-Erfassungsschalter + passende Auslösetaste. Fehlt eins, wirkt es «völlig tot», oft mit kaputter Software verwechselt.",
  "fix": "Prüfe, ob das Tray-Symbol aktiv ist (grau = läuft nicht, Doppelklick zum Starten); Einstellungen → Erfassung und Auswahl, «Erfassung aktivieren» anhaken und Modus wählen (Mauszeiger / Strg halten); Youdao neu starten und erneut versuchen.",
  "scene": "Youdao startete nicht automatisch, kein Tray-Symbol → Erfassung reagiert nie; manuelles Starten behebt es."
 },
 "划词不弹窗": {
  "cat": "Aktivierung / Einstellungen",
  "name": "Auswahlübersetzung zeigt kein Popup",
  "alias": "Auswahl übersetzen kein Popup 划词 Auswahl markieren",
  "trigger": "Eine Phrase auswählen bringt kein Übersetzungs-Popup",
  "official": "Die Auswahlübersetzung braucht aktivierte «Auswahl» mit angehaktem «bei Auswahl automatisch übersetzen»; kann bei Auswahl oder per Taste übersetzen.",
  "cause": "Auswahl und Erfassung sind getrennte Schalter: viele aktivieren Erfassung, aber nicht Auswahl, oder schalten «bei Auswahl automatisch übersetzen» ab, daher «Auswahl zeigt nichts»; die Auswahltaste kann auch belegt sein.",
  "fix": "Einstellungen → Erfassung und Auswahl, «Auswahlübersetzung aktivieren» und «bei Auswahl automatisch übersetzen» anhaken; bei Tastenauslösung prüfen, ob die Taste frei ist; In-Browser-Auswahl braucht auch die Erfassungserweiterung.",
  "scene": "Keine Reaktion in PDF / Web, aber Popup im Editor → meist die Kompatibilität dieser App (Erweiterung / geschützter Modus), nicht der Auswahlschalter."
 },
 "Word取词": {
  "cat": "App-Kompatibilität",
  "name": "Erfassung/Auswahl in Word / Office scheitert",
  "alias": "word office excel Erfassung Auswahl Satz Add-In com Education 365 Plugin",
  "trigger": "Nach Installation / Wechsel von Office (besonders Education, 365) kann Word / Excel keine Auswahl übersetzen",
  "official": "Youdao integriert sich über ein COM-Add-In mit Office für Auswahl-/Satzübersetzung; ist das Add-In deaktiviert oder nicht registriert, scheitert es.",
  "cause": "Office deaktiviert Drittanbieter-COM-Add-Ins aus Kompatibilität oder Richtlinie; ein Versionswechsel (z. B. eine neue Education-Version) lässt das alte Add-In für das neue Office unregistriert, daher «früher ging es, jetzt nicht».",
  "fix": "Word: Datei → Optionen → Add-Ins → unten «Verwalten: COM-Add-Ins» → Gehe zu → das Youdao-Add-In anhaken; sonst Youdao neu installieren, um es neu zu registrieren; sicherstellen, dass die Bitness von Youdao und Office übereinstimmt.",
  "scene": "Nach einem neuen Education-Office stirbt die Auswahlübersetzung und das Add-In ist gelistet, aber nicht angehakt → Aktivieren stellt es wieder her."
 },
 "PDF取词": {
  "cat": "App-Kompatibilität",
  "name": "Erfassung in PDF / Acrobat scheitert",
  "alias": "pdf acrobat reader Erfassung Auswahl yodaodict.api geschützter Modus plug_ins autotray Scan",
  "trigger": "Adobe Acrobat / Reader: Auswahl in einem PDF tut nichts, oder «Plug-in kann nicht geladen werden»",
  "official": "Offizielle Versionen unterstützen die PDF-Bildschirmerfassung in Adobe Reader / Acrobat; inoffizielle «portable» Versionen können kein PDF erfassen, und das PDF muss Text, kein Bild sein.",
  "cause": "Drei Ursachen: ① der «geschützte Modus» von Acrobat ist eine Sandbox, die die Injektion von Drittanbieter-YodaoDict.api blockiert; ② die Bitness-Diskrepanz zwischen 64-Bit-Acrobat und einem alten Youdao-Plug-in ergibt «inkompatibles Plug-in»; ③ das PDF ist ein Scan (Bild, keine Textebene).",
  "fix": "In Acrobat Bearbeiten → Voreinstellungen → Sicherheit (erweitert) → «Geschützten Modus beim Start aktivieren» abschalten, Youdao vor Acrobat öffnen; bei der 64-Bit-Meldung «inkompatibel» das neueste Youdao installieren oder YodaoDict.api in Acrobats plug_ins kopieren; bei Scans OCR-Krafterfassung nutzen.",
  "scene": "Acrobat 64-Bit, Auswahl tut nichts, «YodaoDict.api kann nicht geladen werden» → geschützten Modus abschalten + .api in plug_ins kopieren stellt es wieder her."
 },
 "浏览器划词": {
  "cat": "App-Kompatibilität",
  "name": "Auswahl/Erfassung in Chrome / Browser scheitert",
  "alias": "chrome edge firefox Browser Auswahl Erfassung Erweiterung Plugin Hardwarebeschleunigung 360 Adblock",
  "trigger": "Keine Erfassung auf Webseiten / kein Auswahl-Popup, während Editor usw. gehen",
  "official": "Chrome / Firefox usw. brauchen eine separate Youdao-Erfassungserweiterung; die offizielle Desktop-Version bietet «Chrome-Erfassung».",
  "cause": "Der Browser ist seine eigene Sandbox: ① ohne Youdao-Erfassungserweiterung kann der globale Hook den DOM-Text nicht lesen; ② die GPU-Hardwarebeschleunigung rendert die Seite zur Textur ohne lesbare Ebene; ③ Adblock-/Sicherheitsschalter (z. B. 360-Browser) blockieren die Erfassung.",
  "fix": "Installiere die Youdao-Erfassungserweiterung für deinen Browser (über Youdao-Einstellungen oder den Store); schalte «Hardwarebeschleunigung verwenden» in den Browsereinstellungen ab und starte neu; schalte den Adblock im 360-Browser ab.",
  "scene": "Auswahl in Chrome tut nichts; die Youdao-Erweiterung installieren behebt es; einige Seiten scheitern weiter wegen Beschleunigungstexturen - Beschleunigung abschalten."
 },
 "截图翻译": {
  "cat": "Tastenkürzel",
  "name": "Screenshot- / Bereichs-OCR-Übersetzung geht nicht",
  "alias": "Screenshot Bereich ocr erkennen quick ocr Tastenkürzel ctrl alt o Bereich übersetzen",
  "trigger": "Das Screenshot-Erkennungs-Tastenkürzel tut nichts / kein Text erkannt",
  "official": "Screenshot-OCR braucht ein eingestelltes Screenshot-Erkennungs-Tastenkürzel (z. B. Strg+Alt+O) und das heruntergeladene OCR-Modul; du wählst einen Bildschirmbereich durch Ziehen.",
  "cause": "Screenshot-OCR braucht keine Textebene - es erkennt den gewählten Bereich per Bild, braucht also das heruntergeladene OCR-Modul + ein freies Tastenkürzel + (macOS) Bildschirmaufnahme-Berechtigung, um die Pixel zu lesen.",
  "fix": "Einstellungen → Tastenkürzel, weise «OCR-Screenshot» eine konfliktfreie Taste zu; lade das OCR-Modul beim ersten Mal herunter; erteile auf macOS «Bildschirmaufnahme»; wähle einen schärferen Bereich, wenn die Erkennung daneben liegt.",
  "scene": "Das Tastenkürzel tut nichts → meist hat ein Screenshot-Tool die Taste genommen; die Kombination ändern stellt es wieder her."
 },
 "快捷键冲突": {
  "cat": "Tastenkürzel",
  "name": "Konflikt des Erfassungs-/Screenshot-Tastenkürzels",
  "alias": "Tastenkürzel Hotkey Konflikt belegt ctrl Screenshot-Tool Eingabemethode qq",
  "trigger": "Die Erfassungs-/Screenshot-Taste tut nichts, oder «bereits vom System belegt»",
  "official": "Erfassung / Auswahl / Screenshot-Erkennung sind alle in Tastenkürzel anpassbar; bei Konflikt warnt es, und du kannst neu belegen oder zurücksetzen.",
  "cause": "Globale Tastenkürzel gelten nach Reihenfolge: ein Screenshot-Tool, eine Eingabemethode, QQ / WeChat oder ein anderes Wörterbuch können dieselbe Kombination halten, also tut die Youdao-Taste nichts.",
  "fix": "Einstellungen → Tastenkürzel, achte auf den Konflikthinweis; wechsle zu einer selteneren Kombination wie Strg+Umschalt+Buchstabe / Alt+Buchstabe; schließe Apps, die Tasten halten, eine nach der anderen, um den Übeltäter zu finden.",
  "scene": "Nach Installation eines neuen Screenshot-Tools stirbt die Erfassungstaste → die Youdao-Taste oder die des Tools neu belegen."
 },
 "macOS权限": {
  "cat": "Berechtigungen",
  "name": "macOS Erfassung / Tastenkürzel brauchen Autorisierung",
  "alias": "mac macos Berechtigung Bedienungshilfen Bildschirmaufnahme accessibility autorisieren Datenschutz",
  "trigger": "Erfassung und Tastenkürzel tot auf macOS, besonders nach einem Systemupdate",
  "official": "macOS muss Youdao «Bedienungshilfen» (um Tastenkürzel zu überwachen / steuern) und «Bildschirmaufnahme» (um den Bildschirm für Erfassung / Screenshot zu lesen) unter Systemeinstellungen → Datenschutz und Sicherheit erteilen.",
  "cause": "Die macOS-Sandbox verlangt ausdrückliche Freigaben: ohne «Bedienungshilfen» hört es keine globalen Tastenkürzel, ohne «Bildschirmaufnahme» liest es keine Bildschirmpixel; Updates setzen oft beide zurück.",
  "fix": "Systemeinstellungen → Datenschutz und Sicherheit → Youdao unter «Bedienungshilfen» und «Bildschirmaufnahme» anhaken und neu starten; nach jedem macOS-Update neu erteilen.",
  "scene": "Nach einem macOS-Update ist die Erfassung völlig tot → Berechtigungen zurückgesetzt; beide neu anhaken stellt es wieder her."
 },
 "管理员权限": {
  "cat": "Berechtigungen",
  "name": "Keine Erfassung in einer erhöhten App (UAC)",
  "alias": "Admin uac erhöht Administrator als Admin ausführen Rechteebene Task-Manager",
  "trigger": "Normale Apps erfassen gut; eine «als Administrator ausgeführte» App nicht",
  "official": "Unter Windows brauchen manche Fälle Youdao «als Administrator ausgeführt», um in erhöhten Apps zu erfassen.",
  "cause": "Windows-Integritätsstufen (UAC) isolieren Prozesse: ein Hook mit normalen Rechten kann nicht in einen Prozess hoher Integrität (Administrator) injizieren und umgekehrt, daher «nur diese App erfasst nicht».",
  "fix": "Rechtsklick auf Youdao «Als Administrator ausführen», um die Rechteebene des Ziels anzugleichen; oder stelle es so ein, dass es immer als Administrator läuft (Kompatibilitätseigenschaft).",
  "scene": "Keine Erfassung in einem als Administrator ausgeführten Entwicklertool / Remote-Fenster → Youdao als Administrator ausführen stellt es wieder her."
 },
 "弹窗飞走": {
  "cat": "Rendering / Anzeige",
  "name": "Popup außerhalb des Bildes bei Multimonitor / hohem DPI",
  "alias": "Multimonitor Dualscreen hohes dpi Skalierung Popup außerhalb des Bildes Fenster fixieren 4k Laptop",
  "trigger": "Bei Multimonitor / hohem DPI erscheint das Erfassungs-Popup an einer unsichtbaren Stelle",
  "official": "Die Erfassungseinstellungen bieten «Fensterposition fixieren», um das Übersetzungs-Popup an einem festen Punkt zu fixieren.",
  "cause": "Wenn die DPI-Skalierung pro Bildschirm abweicht, werden die Popup-Koordinaten mit der falschen Skalierung berechnet, also «fliegt» es aus dem Bild oder auf einen unsichtbaren Monitor.",
  "fix": "Hake «Fensterposition fixieren» in den Erfassungseinstellungen an und lege es oben links auf dem Hauptbildschirm ab; halte die Bildschirmskalierung einheitlich; starte Youdao bei Bedarf neu, um die Koordinaten zu aktualisieren.",
  "scene": "Externes 4K + Laptop bei unterschiedlicher Skalierung, die Erfassung hat «Ton, aber kein Fenster» → die Fensterposition fixieren löst es."
 },
 "64位": {
  "cat": "App-Kompatibilität",
  "name": "64-Bit-App- / Systemerfassungskompatibilität",
  "alias": "64-Bit x64 inkompatibles Plug-in acrobat Bitness 32-Bit kompatibel",
  "trigger": "Erfassung scheitert oder meldet ein inkompatibles Plug-in in 64-Bit-Acrobat / -Apps",
  "official": "Die Youdao-Desktop-Version ist 64-Bit-kompatibel und unterstützt die Bildschirmerfassung auf 64-Bit-Systemen; ältere Versionen können mit den Plug-ins einiger 64-Bit-Apps inkompatibel sein.",
  "cause": "32/64-Bit-Hook-DLLs mischen sich nicht: die Injektionskomponente eines alten Youdao passt nicht zu einem 64-Bit-Host (z. B. 64-Bit-Acrobat), also weigert sich der Host zu laden und meldet «inkompatibles Plug-in».",
  "fix": "Aktualisiere auf das neueste Youdao (mit der 64-Bit-Erfassungskomponente); scheitert 64-Bit-Acrobat weiter, kopiere die passende YodaoDict.api in dessen plug_ins und führe Youdao als Administrator aus.",
  "scene": "Nach dem Upgrade auf 64-Bit-Acrobat stirbt die Auswahl → das neueste Youdao installieren stellt es wieder her."
 },
 "绿色版": {
  "cat": "Netzwerk / Installation",
  "name": "Portable / leichte Version kann nicht erfassen",
  "alias": "portable leicht inoffiziell Erfassung pdf Hook dll registrieren grün",
  "trigger": "Bei einem Youdao «portable / leicht» von Drittanbietern geht die PDF-/globale Erfassung nicht",
  "official": "Offiziell erklärt: inoffizielle «portable» Youdao-Versionen können PDF nicht richtig erfassen - installiere die neueste offizielle Standardversion.",
  "cause": "Die Bildschirmerfassung hängt von den bei der Installation im System registrierten Erfassungs-Hook-/Plug-in-Komponenten ab; portable Versionen lassen sie für das «ohne Installation» weg oder registrieren sie nicht, also stirbt die globale / PDF-Erfassung.",
  "fix": "Deinstalliere die portable Version und installiere das neueste offizielle Standard-Youdao von der Seite (überschreiben), damit sich die Erfassungskomponenten richtig registrieren.",
  "scene": "Aus Bequemlichkeit eine portable Version geholt, die PDF-Erfassung geht nie → die offizielle Version stellt es wieder her."
 },
 "全屏取词": {
  "cat": "Rendering / Anzeige",
  "name": "Erfassung scheitert im Vollbild / Spielen",
  "alias": "Vollbild Spiel exklusives Vollbild Hook scheitert Video",
  "trigger": "Die Erfassung tut nichts in Vollbild-Apps / Spielen / exklusivem Vollbild-Video",
  "official": "Im Vollbild (besonders exklusivem) kann der globale Erfassungs-Hook scheitern - nutze den Fenstermodus oder Screenshot-OCR.",
  "cause": "Exklusives Vollbild umgeht die normale Fensterkomposition und übernimmt Eingabe/Rendering, also bekommt der globale Hook keine Ereignisse / keinen Text und die Erfassung stirbt im Vollbild.",
  "fix": "Stelle die App auf «Fenster / randloses Fenster»; oder nutze Screenshot-OCR (einen Bereich auswählen) statt Mauszeiger-Erfassung für Vollbildinhalt.",
  "scene": "Keine Erfassung in exklusiven Vollbildspielen → randloses Fenster nutzen, oder Screenshot-OCR."
 },
 "取词慢": {
  "cat": "Netzwerk / Installation",
  "name": "Erfassung langsam / zeitweise ohne Reaktion",
  "alias": "Erfassung langsam Lag Latenz keine Reaktion Netzwerk Geschwindigkeit online",
  "trigger": "Die Erfassung geht, aber das Popup ist langsam, manchmal keins",
  "official": "Die Geschwindigkeit der Bildschirmerfassung hängt vom Netzwerk ab; in einem normalen Netzwerk liegt die Reaktion meist unter 1 Sekunde.",
  "cause": "Online-Definitionen brauchen eine Netzwerkabfrage, also verzögern Netzwerkschwankungen / langsames DNS das Popup; die OCR-Erfassung erkennt auch lokal, also ist ein nicht bereites Modul langsam oder sein Fallback scheitert.",
  "fix": "Prüfe / wechsle zu einem stabileren Netzwerk; aktiviere das lokale erweiterte Wörterbuch für häufige Wörter, um Netzwerkanfragen zu sparen; bestätige, dass das OCR-Modul heruntergeladen ist; starte Youdao bei Bedarf neu.",
  "scene": "Die Erfassung braucht in einem schwachen Netzwerk mehrere Sekunden → Netzwerkwechsel / lokales Wörterbuch beschleunigt es merklich."
 },
 "扫描件取词": {
  "cat": "Rendering / Anzeige",
  "name": "Scan / Bild kann nicht erfasst werden",
  "alias": "Scan Bild Bild-pdf ocr Krafterfassung Screenshot keine Textebene erkennen",
  "trigger": "Die Erfassung tut nichts bei Bildern / gescannten PDFs",
  "official": "Bilder / Scans haben keine Textebene, also kann die einfache Erfassung sie nicht lesen - aktiviere «OCR-Krafterfassung», um per Bild zu erkennen.",
  "cause": "Die einfache Erfassung liest den Textpuffer der App; ein Scan / Bild hat nur Pixel, keine Zeichenkodierung, also gibt es nichts zu erfassen - du musst das Bild per OCR in Text umwandeln.",
  "fix": "Einstellungen → Erfassung und Auswahl, «OCR-Krafterfassung für alle Software» anhaken und das OCR-Modul herunterladen; oder nutze Screenshot-OCR auf einem Bereich; verwende ein schärferes Original, wenn die Erkennung daneben liegt.",
  "scene": "Ein gescanntes Papier-PDF lässt sich nicht markieren → die OCR-Krafterfassung aktivieren macht es erkennbar."
 },
 "输入法冲突": {
  "cat": "Tastenkürzel",
  "name": "Eingabemethode / andere Software stiehlt die Taste",
  "alias": "Eingabemethode sogou pinyin stiehlt Taste ctrl belegt Konflikt anderes Wörterbuch",
  "trigger": "Der Erfassungsauslöser (z. B. Strg) wird von der Eingabemethode / einer anderen App genommen",
  "official": "Ist der Auslöser (z. B. Strg) von anderer Software belegt, wird die Erfassung verdrängt und tut nichts; ändere den Erfassungsauslöser.",
  "cause": "Die Erfassung wird oft mit Strg- / F-Tasten ausgelöst; Eingabemethoden, andere Wörterbücher und Zwischenablage-Tools können dieselbe Taste abhören, und wer zuerst registriert, reagiert, also wird die Youdao-Erfassung «gestohlen».",
  "fix": "Ändere den Erfassungsauslöser von Youdao auf eine eindeutigere Kombination / den Mauszeiger; oder passe das Tastenkürzel der kollidierenden App an; schließe verdächtige Apps eine nach der anderen, um den Dieb zu finden.",
  "scene": "Nach Installation eines Zwischenablage-Tools stirbt die Strg-Erfassung → den Youdao-Auslöser ändern stellt es wieder her."
 }
};
window.LABELS = {"miss": "Symptom nicht erfasst. Versuche ein anderes Stichwort (Erfassung / pdf / Auswahl / Tastenkürzel) oder sieh die vollständige Tabelle unten.", "codeword": ""};
window.FIELDS = [["trigger", "Wann es auftritt"], ["official", "L1-Symptom / offizielle Einordnung"], ["cause", "L2-Grundursache"], ["fix", "Wie prüfen / lösen"], ["scene", "Realer Fall"]];
window.THEAD = ["Symptom", "Gruppe", "L1-Symptom / offizielle Einordnung", "L2-Grundursache"];
