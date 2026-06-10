window.CODES = {
 "取词失效": {
  "cat": "Inschakeling / instellingen",
  "name": "Schermopname over de hele linie dood",
  "alias": "opname schermopname werkt niet geen reactie hover capture 取词",
  "trigger": "Net na installatie / update doet hover of de opnametoets helemaal niets",
  "official": "Schermopname vereist Youdao op de achtergrond met opname ingeschakeld; de officiële desktopversie biedt slimme opname / klembordopname / OCR-opname.",
  "cause": "Schermopname gebruikt een globale hook geïnjecteerd in de voorgrond-app om diens tekst te lezen: nodig zijn het draaiende Youdao-proces + de actieve hoofdopnameschakelaar + de juiste triggertoets. Mist er één, dan lijkt het «helemaal dood», vaak aangezien voor kapotte software.",
  "fix": "Controleer of het vakpictogram actief is (grijs = draait niet, dubbelklik om te starten); Instellingen → Opname en selectie, vink «opname inschakelen» aan en kies de modus (hover / Ctrl ingedrukt); herstart Youdao en probeer opnieuw.",
  "scene": "Youdao startte niet automatisch, geen vakpictogram → opname reageert nooit; handmatig starten lost het op."
 },
 "划词不弹窗": {
  "cat": "Inschakeling / instellingen",
  "name": "Selectievertaling toont geen pop-up",
  "alias": "selectie vertalen geen pop-up 划词 selectie markeren",
  "trigger": "Een zin selecteren opent geen vertaal-pop-up",
  "official": "Selectievertaling vereist «selectie» ingeschakeld met «vertalen bij selectie» aangevinkt; kan vertalen bij selectie of via een toets.",
  "cause": "Selectie en opname zijn aparte schakelaars: velen schakelen opname in maar niet selectie, of zetten «vertalen bij selectie» uit, vandaar «selecteren toont niets»; de selectiesneltoets kan ook bezet zijn.",
  "fix": "Instellingen → Opname en selectie, vink «selectievertaling inschakelen» en «vertalen bij selectie» aan; bij toetstrigger, bevestig dat die toets vrij is; selectie in de browser heeft ook de opname-extensie nodig.",
  "scene": "Geen reactie in PDF / web maar pop-up in Kladblok → meestal de compatibiliteit van die app (extensie / beschermde modus), niet de selectieschakelaar."
 },
 "Word取词": {
  "cat": "App-compatibiliteit",
  "name": "Opname/selectie in Word / Office faalt",
  "alias": "word office excel opname selectie zin invoegtoepassing com education 365 plugin",
  "trigger": "Na installatie / wissel van Office (vooral Education, 365) vertaalt Word / Excel een selectie niet",
  "official": "Youdao integreert met Office via een COM-invoegtoepassing voor selectie-/zinsvertaling; is de invoegtoepassing uitgeschakeld of niet geregistreerd, dan faalt het.",
  "cause": "Office schakelt COM-invoegtoepassingen van derden uit om compatibiliteit of beleid; van versie wisselen (bv. een nieuwe Education) laat de oude invoegtoepassing ongeregistreerd voor het nieuwe Office, vandaar «het werkte, nu niet».",
  "fix": "Word: Bestand → Opties → Invoegtoepassingen → onderaan «Beheren: COM-invoegtoepassingen» → Start → vink de Youdao-invoegtoepassing aan; zo niet, herinstalleer Youdao om hem opnieuw te registreren; controleer of de bitness van Youdao en Office overeenkomt.",
  "scene": "Na een nieuwe Education-Office sterft selectievertaling en staat de invoegtoepassing in de lijst maar niet aangevinkt → inschakelen herstelt het."
 },
 "PDF取词": {
  "cat": "App-compatibiliteit",
  "name": "Opname in PDF / Acrobat faalt",
  "alias": "pdf acrobat reader opname selectie yodaodict.api beschermde modus plug_ins autotray scan",
  "trigger": "Adobe Acrobat / Reader: selecteren in een PDF doet niets, of «kan invoegtoepassing niet laden»",
  "official": "Officiële versies ondersteunen PDF-schermopname in Adobe Reader / Acrobat; onofficiële «portable» versies kunnen geen PDF opnemen, en de PDF moet tekst zijn, geen afbeelding.",
  "cause": "Drie oorzaken: ① de «beschermde modus» van Acrobat is een sandbox die injectie van YodaoDict.api van derden blokkeert; ② de bitness-mismatch tussen 64-bit Acrobat en een oude Youdao-invoegtoepassing geeft «incompatibele invoegtoepassing»; ③ de PDF is een scan (afbeelding, zonder tekstlaag).",
  "fix": "Zet in Acrobat Bewerken → Voorkeuren → Beveiliging (uitgebreid) → «Beschermde modus bij opstarten inschakelen» uit, open Youdao vóór Acrobat; bij de 64-bit «incompatibel»-melding, installeer het nieuwste Youdao, of kopieer YodaoDict.api naar plug_ins van Acrobat; voor scans gebruik krachtige OCR-opname.",
  "scene": "Acrobat 64-bit, selecteren doet niets, «kan YodaoDict.api niet laden» → beschermde modus uitzetten + .api naar plug_ins kopiëren herstelt het."
 },
 "浏览器划词": {
  "cat": "App-compatibiliteit",
  "name": "Selectie/opname in Chrome / browser faalt",
  "alias": "chrome edge firefox browser selectie opname extensie plugin hardwareversnelling 360 adblock",
  "trigger": "Geen opname op webpagina's / geen selectie-pop-up, terwijl Kladblok enz. wel werken",
  "official": "Chrome / Firefox enz. hebben een aparte Youdao-opname-extensie nodig; de officiële desktopversie biedt «Chrome-opname».",
  "cause": "De browser is z'n eigen sandbox: ① zonder Youdao-opname-extensie kan de globale hook de DOM-tekst niet lezen; ② GPU-hardwareversnelling rendert de pagina naar textuur zonder leesbare laag; ③ adblock-/beveiligingsschakelaars (bv. 360-browser) blokkeren de opname.",
  "fix": "Installeer de Youdao-opname-extensie voor je browser (via Youdao-instellingen of de store); zet «hardwareversnelling gebruiken» uit in de browserinstellingen en herstart; zet adblock in de 360-browser uit.",
  "scene": "Selectie in Chrome doet niets; de Youdao-extensie installeren lost het op; enkele sites falen nog door versnellingstexturen - zet versnelling uit."
 },
 "截图翻译": {
  "cat": "Sneltoetsen",
  "name": "Schermafbeelding-/gebied-OCR-vertaling werkt niet",
  "alias": "schermafbeelding gebied ocr herkennen quick ocr sneltoets ctrl alt o gebied vertalen",
  "trigger": "De schermafbeelding-herkenningssneltoets doet niets / geen tekst herkend",
  "official": "Schermafbeelding-OCR vereist een ingestelde herkenningssneltoets (bv. Ctrl+Alt+O) en de gedownloade OCR-module; je selecteert een schermgebied door slepen.",
  "cause": "Schermafbeelding-OCR heeft geen tekstlaag nodig - het herkent het geselecteerde gebied via afbeelding, dus nodig zijn de gedownloade OCR-module + een vrije sneltoets + (macOS) schermopnamerecht om de pixels te lezen.",
  "fix": "Instellingen → Sneltoetsen, wijs een conflictvrije toets toe aan «OCR-schermafbeelding»; download de OCR-module bij eerste gebruik; verleen op macOS «Schermopname»; kies een scherper gebied als de herkenning mist.",
  "scene": "De sneltoets doet niets → meestal pakte een schermafbeeldingstool de toets; de combinatie wijzigen herstelt het."
 },
 "快捷键冲突": {
  "cat": "Sneltoetsen",
  "name": "Conflict van opname-/schermafbeeldingssneltoets",
  "alias": "sneltoets conflict bezet ctrl schermafbeeldingstool invoermethode qq",
  "trigger": "De opname-/schermafbeeldingstoets doet niets, of «al door het systeem bezet»",
  "official": "Opname / selectie / schermafbeelding-herkenning zijn allemaal aanpasbaar in Sneltoetsen; bij conflict waarschuwt het, en je kunt opnieuw toewijzen of resetten.",
  "cause": "Globale sneltoetsen zijn wie-het-eerst-komt: een schermafbeeldingstool, invoermethode, QQ / WeChat of een ander woordenboek kunnen dezelfde combinatie houden, dus de Youdao-toets doet niets.",
  "fix": "Instellingen → Sneltoetsen, let op de conflictmelding; wissel naar een zeldzamere combinatie zoals Ctrl+Shift+letter / Alt+letter; sluit toets-houdende apps één voor één om de boosdoener te vinden.",
  "scene": "Na installatie van een nieuw schermafbeeldingstool sterft de opnametoets → wijs de Youdao-toets of die van het tool opnieuw toe."
 },
 "macOS权限": {
  "cat": "Rechten",
  "name": "macOS opname / sneltoetsen vereisen autorisatie",
  "alias": "mac macos recht toegankelijkheid schermopname accessibility autoriseren privacy",
  "trigger": "Opname en sneltoetsen dood op macOS, vooral na een systeemupdate",
  "official": "macOS moet Youdao «Toegankelijkheid» (om sneltoetsen te monitoren / besturen) en «Schermopname» (om het scherm te lezen voor opname / schermafbeelding) verlenen in Systeeminstellingen → Privacy en beveiliging.",
  "cause": "De macOS-sandbox vereist expliciete machtigingen: zonder «Toegankelijkheid» hoort het geen globale sneltoetsen, zonder «Schermopname» leest het geen pixels; updates resetten vaak beide.",
  "fix": "Systeeminstellingen → Privacy en beveiliging → vink Youdao aan in «Toegankelijkheid» en «Schermopname» en herstart hem; verleen opnieuw na elke macOS-update.",
  "scene": "Na een macOS-update is opname helemaal dood → rechten gereset; beide opnieuw aanvinken herstelt het."
 },
 "管理员权限": {
  "cat": "Rechten",
  "name": "Geen opname in een verhoogde app (UAC)",
  "alias": "beheerder uac verhoogd administrator als beheerder uitvoeren rechtenniveau taakbeheer",
  "trigger": "Normale apps nemen prima op; één app «als beheerder uitgevoerd» niet",
  "official": "Op Windows hebben sommige gevallen Youdao «als beheerder uitgevoerd» nodig om in verhoogde apps op te nemen.",
  "cause": "Windows-integriteitsniveaus (UAC) isoleren processen: een hook met normale rechten kan niet injecteren in een proces met hoge integriteit (beheerder) en omgekeerd, vandaar «alleen die app neemt niet op».",
  "fix": "Rechtsklik Youdao «Als administrator uitvoeren» om het rechtenniveau van het doel te evenaren; of stel hem in om altijd als beheerder te draaien (compatibiliteitseigenschap).",
  "scene": "Geen opname in een als beheerder uitgevoerd ontwikkeltool / extern venster → Youdao als beheerder uitvoeren herstelt het."
 },
 "弹窗飞走": {
  "cat": "Rendering / weergave",
  "name": "Pop-up buiten beeld bij multi-monitor / hoge DPI",
  "alias": "multi-monitor dubbel scherm hoge dpi schaling pop-up buiten beeld venster vastzetten 4k laptop",
  "trigger": "Bij multi-monitor / hoge DPI verschijnt de opname-pop-up op een onzichtbare plek",
  "official": "De opname-instellingen bieden «vensterpositie vastzetten» om de vertaal-pop-up op een vast punt te zetten.",
  "cause": "Als de DPI-schaling per scherm verschilt, worden de pop-up-coördinaten met de verkeerde schaal berekend, dus «vliegt» hij buiten beeld of naar een onzichtbaar scherm.",
  "fix": "Vink «vensterpositie vastzetten» aan in de opname-instellingen en zet hem linksboven op het hoofdscherm; houd de schermschaling consistent; herstart Youdao om coördinaten te verversen indien nodig.",
  "scene": "Externe 4K + laptop op andere schaal, de opname heeft «geluid maar geen venster» → de vensterpositie vastzetten lost het op."
 },
 "64位": {
  "cat": "App-compatibiliteit",
  "name": "64-bit app- / systeemopnamecompatibiliteit",
  "alias": "64-bit x64 incompatibele invoegtoepassing acrobat bitness 32-bit compatibel",
  "trigger": "Opname faalt of meldt een incompatibele invoegtoepassing in 64-bit Acrobat / apps",
  "official": "De Youdao-desktopversie is 64-bit-compatibel en ondersteunt schermopname op 64-bit-systemen; oude versies kunnen incompatibel zijn met de invoegtoepassingen van sommige 64-bit-apps.",
  "cause": "32/64-bit hook-DLL's mengen niet: de injectiecomponent van een oud Youdao past niet bij een 64-bit host (bv. 64-bit Acrobat), dus de host weigert te laden en meldt «incompatibele invoegtoepassing».",
  "fix": "Werk bij naar het nieuwste Youdao (met de 64-bit opnamecomponent); blijft 64-bit Acrobat falen, kopieer de bijpassende YodaoDict.api naar diens plug_ins en voer Youdao als beheerder uit.",
  "scene": "Na upgrade naar 64-bit Acrobat sterft de selectie → het nieuwste Youdao installeren herstelt het."
 },
 "绿色版": {
  "cat": "Netwerk / installatie",
  "name": "De portable / lichte versie neemt niet op",
  "alias": "portable licht onofficieel opname pdf hook dll registreren groen",
  "trigger": "Bij een Youdao «portable / licht» van derden werkt PDF / globale opname niet",
  "official": "Officieel verklaard: onofficiële «portable» Youdao-versies kunnen PDF niet goed opnemen - installeer de nieuwste officiële standaardversie.",
  "cause": "Schermopname hangt af van de opname-hook-/invoegtoepassingscomponenten die bij installatie in het systeem geregistreerd worden; portable versies laten ze weg of registreren ze niet om het «zonder installatie», dus globale / PDF-opname sterft.",
  "fix": "Verwijder de portable versie en installeer het nieuwste officiële standaard-Youdao van de site (overschrijven) zodat de opnamecomponenten goed registreren.",
  "scene": "Voor het gemak een portable versie gepakt, PDF-opname werkt nooit → de officiële versie herstelt het."
 },
 "全屏取词": {
  "cat": "Rendering / weergave",
  "name": "Opname faalt in volledig scherm / games",
  "alias": "volledig scherm game exclusief volledig scherm hook faalt video",
  "trigger": "Opname doet niets in volledig-scherm-apps / games / exclusieve volledig-scherm-video",
  "official": "In volledig scherm (vooral exclusief) kan de globale opname-hook falen - gebruik vensternodus of OCR-opname.",
  "cause": "Exclusief volledig scherm omzeilt de normale venstercompositie en neemt invoer/rendering over, dus de globale hook krijgt geen events / tekst en de opname sterft in volledig scherm.",
  "fix": "Zet de app op «venster / randloos venster»; of gebruik OCR-opname (selecteer een gebied) in plaats van hover-opname voor volledig-scherm-inhoud.",
  "scene": "Geen opname in exclusieve volledig-scherm-games → gebruik het randloze venster, of OCR-opname."
 },
 "取词慢": {
  "cat": "Netwerk / installatie",
  "name": "Opname traag / af en toe geen reactie",
  "alias": "opname traag lag latentie geen reactie netwerk snelheid online",
  "trigger": "Opname werkt maar de pop-up is traag, soms geen",
  "official": "De snelheid van schermopname hangt af van het netwerk; op een normaal netwerk is de respons meestal onder 1 seconde.",
  "cause": "Online definities vereisen een netwerkquery, dus netwerkfluctuaties / traag DNS vertragen de pop-up; OCR-opname herkent ook lokaal, dus een niet-klare module is traag of de fallback faalt.",
  "fix": "Controleer / wissel naar een stabieler netwerk; activeer het lokale uitgebreide woordenboek voor veelgebruikte woorden om netwerkoproepen te beperken; bevestig dat de OCR-module is gedownload; herstart Youdao indien nodig.",
  "scene": "Opname duurt enkele seconden op een zwak netwerk → van netwerk wisselen / het lokale woordenboek activeren versnelt het merkbaar."
 },
 "扫描件取词": {
  "cat": "Rendering / weergave",
  "name": "Scan / afbeelding kan niet worden opgenomen",
  "alias": "scan afbeelding afbeelding-pdf ocr krachtige opname schermafbeelding geen tekstlaag herkennen",
  "trigger": "Opname doet niets op afbeeldingen / gescande PDF's",
  "official": "Afbeeldingen / scans hebben geen tekstlaag, dus simpele opname leest ze niet - schakel «krachtige OCR-opname» in om via afbeelding te herkennen.",
  "cause": "Simpele opname leest de tekstbuffer van de app; een scan / afbeelding heeft alleen pixels, geen tekencodering, dus er is niets op te nemen - je moet de afbeelding via OCR naar tekst omzetten.",
  "fix": "Instellingen → Opname en selectie, vink «krachtige OCR-opname voor alle software» aan en download de OCR-module; of gebruik OCR-opname op een gebied; gebruik een scherper origineel als de herkenning mist.",
  "scene": "Een gescande papier-PDF selecteert niet → krachtige OCR-opname inschakelen maakt hem herkenbaar."
 },
 "输入法冲突": {
  "cat": "Sneltoetsen",
  "name": "Invoermethode / andere software steelt de toets",
  "alias": "invoermethode sogou pinyin steelt toets ctrl bezet conflict ander woordenboek",
  "trigger": "De opnametrigger (bv. Ctrl) wordt door de invoermethode / een andere app gepakt",
  "official": "Is de trigger (bv. Ctrl) bezet door andere software, dan wordt de opname onderbroken en doet niets; wijzig de opnametrigger.",
  "cause": "Opname triggert vaak op Ctrl / F-toetsen; invoermethoden, andere woordenboeken en klembordtools kunnen dezelfde toets afluisteren, en wie het eerst registreert reageert, dus de Youdao-opname wordt «gestolen».",
  "fix": "Wijzig de Youdao-opnametrigger naar een unieker combinatie / naar hover; of pas de sneltoets van de conflicterende app aan; sluit verdachte apps één voor één om de dief te vinden.",
  "scene": "Na installatie van een klembordtool sterft de Ctrl-opname → de Youdao-trigger wijzigen herstelt het."
 }
};
window.LABELS = {"miss": "Symptoom niet vermeld. Probeer een ander trefwoord (opname / pdf / selectie / sneltoets) of zie de volledige tabel hieronder.", "codeword": ""};
window.FIELDS = [["trigger", "Wanneer het optreedt"], ["official", "L1-symptoom / officiële positie"], ["cause", "L2-grondoorzaak"], ["fix", "Hoe controleren / oplossen"], ["scene", "Echt geval"]];
window.THEAD = ["Symptoom", "Groep", "L1-symptoom / officiële positie", "L2-grondoorzaak"];
