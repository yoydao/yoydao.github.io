window.CODES = {
 "取词失效": {
  "cat": "Abilitazione / impostazioni",
  "name": "Cattura a schermo morta in generale",
  "alias": "cattura cattura schermo non funziona nessuna risposta passaggio mouse capture 取词",
  "trigger": "Subito dopo installazione / aggiornamento, il passaggio mouse o il tasto di cattura non fa nulla",
  "official": "La cattura a schermo richiede Youdao in background con la cattura abilitata; la versione desktop ufficiale offre cattura intelligente / cattura da appunti / cattura OCR.",
  "cause": "La cattura a schermo usa un hook globale iniettato nell'app in primo piano per leggerne il testo: serve il processo Youdao in esecuzione + l'interruttore principale di cattura attivo + il tasto attivatore corrispondente. Se ne manca uno sembra «del tutto morta», spesso scambiata per software rotto.",
  "fix": "Verifica che l'icona del vassoio sia attiva (grigio = non in esecuzione, doppio clic per avviare); Impostazioni → Cattura e selezione, spunta «abilita cattura» e scegli il modo (passaggio mouse / tieni Ctrl); riavvia Youdao e riprova.",
  "scene": "Youdao non è partito da solo, nessuna icona vassoio → la cattura non risponde mai; avviarlo a mano risolve."
 },
 "划词不弹窗": {
  "cat": "Abilitazione / impostazioni",
  "name": "La traduzione su selezione non mostra popup",
  "alias": "selezione traduci nessun popup 划词 selezione evidenzia",
  "trigger": "Selezionare una frase non apre alcun popup di traduzione",
  "official": "La traduzione su selezione richiede «selezione» abilitata con «traduci alla selezione» spuntato; può tradurre alla selezione o con un tasto.",
  "cause": "Selezione e cattura sono interruttori distinti: molti abilitano la cattura ma non la selezione, o disattivano «traduci alla selezione», da cui «selezionare non mostra nulla»; anche la scorciatoia di selezione può essere occupata.",
  "fix": "Impostazioni → Cattura e selezione, spunta «abilita traduzione su selezione» e «traduci alla selezione»; se è a tasto, conferma che quel tasto sia libero; la selezione nel browser richiede anche l'estensione di cattura.",
  "scene": "Nessuna risposta in PDF / web ma popup nel Blocco note → di solito la compatibilità di quell'app (estensione / modalità protetta), non l'interruttore di selezione."
 },
 "Word取词": {
  "cat": "Compatibilità app",
  "name": "Cattura/selezione in Word / Office fallisce",
  "alias": "word office excel cattura selezione frase componente com education 365 plugin",
  "trigger": "Dopo installazione / cambio di Office (specie Education, 365), Word / Excel non traduce una selezione",
  "official": "Youdao si integra con Office tramite un componente COM per la traduzione di selezione / frase; se il componente è disattivato o non registrato, fallisce.",
  "cause": "Office disattiva i componenti COM di terze parti per compatibilità o policy; cambiare versione (es. una Education nuova) lascia il vecchio componente non registrato per il nuovo Office, da cui «prima funzionava, ora no».",
  "fix": "Word: File → Opzioni → Componenti aggiuntivi → in basso «Gestisci: Componenti COM» → Vai → spunta il componente Youdao; altrimenti reinstalla Youdao per riregistrarlo; assicurati che l'architettura di Youdao e Office coincida.",
  "scene": "Dopo un nuovo Office Education la traduzione su selezione muore e il componente è elencato ma non spuntato → abilitarlo lo ripristina."
 },
 "PDF取词": {
  "cat": "Compatibilità app",
  "name": "Cattura in PDF / Acrobat fallisce",
  "alias": "pdf acrobat reader cattura selezione yodaodict.api modalità protetta plug_ins autotray scansione",
  "trigger": "Adobe Acrobat / Reader: selezionare in un PDF non fa nulla, o «impossibile caricare il componente»",
  "official": "Le versioni ufficiali supportano la cattura a schermo di PDF in Adobe Reader / Acrobat; le versioni «portatili» non ufficiali non possono catturare il PDF, e il PDF dev'essere testo, non immagine.",
  "cause": "Tre cause: ① la «modalità protetta» di Acrobat è una sandbox che blocca l'iniezione di YodaoDict.api di terze parti; ② il disallineamento di architettura tra Acrobat 64 bit e un vecchio componente Youdao dà «componente incompatibile»; ③ il PDF è una scansione (immagine, senza livello di testo).",
  "fix": "Disattiva in Acrobat Modifica → Preferenze → Sicurezza (avanzata) → «Abilita modalità protetta all'avvio», apri Youdao prima di Acrobat; per l'avviso «incompatibile» 64 bit, installa il Youdao più recente, o copia YodaoDict.api in plug_ins di Acrobat; per le scansioni usa l'OCR di cattura potente.",
  "scene": "Acrobat 64 bit, selezionare non fa nulla, «impossibile caricare YodaoDict.api» → disattivare la modalità protetta + copiare il .api in plug_ins lo ripristina."
 },
 "浏览器划词": {
  "cat": "Compatibilità app",
  "name": "Selezione/cattura in Chrome / browser fallisce",
  "alias": "chrome edge firefox browser selezione cattura estensione plugin accelerazione hardware 360 adblock",
  "trigger": "Niente cattura sulle pagine web / nessun popup di selezione, mentre Blocco note ecc. vanno",
  "official": "Chrome / Firefox ecc. richiedono un'estensione di cattura Youdao separata; la versione desktop ufficiale offre la «cattura Chrome».",
  "cause": "Il browser è la sua sandbox: ① senza estensione di cattura Youdao, l'hook globale non legge il testo del DOM; ② l'accelerazione hardware GPU rende la pagina in texture senza livello leggibile; ③ gli interruttori adblock / sicurezza (es. browser 360) bloccano la cattura.",
  "fix": "Installa l'estensione di cattura Youdao per il tuo browser (via impostazioni Youdao o lo store); disattiva «usa accelerazione hardware» nelle impostazioni del browser e riavvia; disattiva l'adblock del browser 360.",
  "scene": "La selezione in Chrome non fa nulla; installare l'estensione Youdao risolve; alcuni siti falliscono ancora per le texture di accelerazione - disattiva l'accelerazione."
 },
 "截图翻译": {
  "cat": "Scorciatoie",
  "name": "L'OCR di cattura/regione non funziona",
  "alias": "screenshot regione ocr riconoscere quick ocr scorciatoia ctrl alt o traduci area",
  "trigger": "La scorciatoia di riconoscimento cattura non fa nulla / nessun testo riconosciuto",
  "official": "L'OCR di cattura richiede una scorciatoia di riconoscimento cattura impostata (es. Ctrl+Alt+O) e il modulo OCR scaricato; selezioni una regione di schermo trascinando.",
  "cause": "L'OCR di cattura non richiede un livello di testo - riconosce per immagine la regione selezionata, quindi serve il modulo OCR scaricato + una scorciatoia libera + (macOS) il permesso di registrazione schermo per leggere i pixel.",
  "fix": "Impostazioni → Scorciatoie, assegna un tasto senza conflitto a «OCR screenshot»; scarica il modulo OCR al primo uso; su macOS concedi «Registrazione schermo»; scegli una regione più nitida se il riconoscimento fallisce.",
  "scene": "La scorciatoia non fa nulla → di solito uno strumento di screenshot ha preso il tasto; cambiare la combinazione lo ripristina."
 },
 "快捷键冲突": {
  "cat": "Scorciatoie",
  "name": "Conflitto della scorciatoia di cattura / screenshot",
  "alias": "scorciatoia tasto conflitto occupato ctrl strumento screenshot metodo input qq",
  "trigger": "Il tasto di cattura / screenshot non fa nulla, o «già occupato dal sistema»",
  "official": "Cattura / selezione / riconoscimento cattura sono tutti personalizzabili in Scorciatoie; in conflitto avvisa, e puoi riassegnare o ripristinare.",
  "cause": "Le scorciatoie globali sono primo arrivato primo servito: uno strumento di screenshot, un metodo di input, QQ / WeChat o un altro dizionario possono tenere la stessa combinazione, quindi il tasto di Youdao non fa nulla.",
  "fix": "Impostazioni → Scorciatoie, attenzione all'avviso di conflitto; passa a una combinazione più rara come Ctrl+Maiusc+lettera / Alt+lettera; chiudi le app che tengono tasti una alla volta per trovare il colpevole.",
  "scene": "Dopo l'installazione di un nuovo strumento di screenshot il tasto di cattura muore → riassegna il tasto di Youdao o quello dello strumento."
 },
 "macOS权限": {
  "cat": "Permessi",
  "name": "macOS cattura / scorciatoie richiedono autorizzazione",
  "alias": "mac macos permesso accessibilità registrazione schermo accessibility autorizzare privacy",
  "trigger": "Cattura e scorciatoie morte su macOS, specie dopo un aggiornamento di sistema",
  "official": "macOS deve concedere a Youdao «Accessibilità» (per monitorare scorciatoie / controllare) e «Registrazione schermo» (per leggere lo schermo in cattura / screenshot) in Impostazioni di sistema → Privacy e sicurezza.",
  "cause": "La sandbox macOS richiede autorizzazioni esplicite: senza «Accessibilità» non sente le scorciatoie globali, senza «Registrazione schermo» non legge i pixel; gli aggiornamenti spesso azzerano entrambe.",
  "fix": "Impostazioni di sistema → Privacy e sicurezza → spunta Youdao in «Accessibilità» e «Registrazione schermo» e riavvialo; riconcedi dopo ogni aggiornamento macOS.",
  "scene": "Dopo un aggiornamento macOS la cattura è del tutto morta → permessi azzerati; rispuntare entrambe lo ripristina."
 },
 "管理员权限": {
  "cat": "Permessi",
  "name": "Niente cattura dentro un'app elevata (UAC)",
  "alias": "admin uac elevato amministratore esegui come admin livello privilegio gestione attività",
  "trigger": "Le app normali catturano bene; un'app «eseguita come amministratore» no",
  "official": "Su Windows, alcuni casi richiedono Youdao «eseguito come amministratore» per catturare dentro app elevate.",
  "cause": "I livelli di integrità Windows (UAC) isolano i processi: un hook con diritti normali non può iniettare in un processo ad alta integrità (amministratore) e viceversa, da cui «solo quell'app non cattura».",
  "fix": "Clic destro su Youdao «Esegui come amministratore» per pareggiare il livello di privilegio del bersaglio; o impostalo per girare sempre come amministratore (proprietà di compatibilità).",
  "scene": "Niente cattura dentro uno strumento di sviluppo / finestra remota eseguito come amministratore → eseguire Youdao come amministratore lo ripristina."
 },
 "弹窗飞走": {
  "cat": "Rendering / display",
  "name": "Popup fuori schermo in multimonitor / alto DPI",
  "alias": "multimonitor doppio schermo alto dpi ridimensionamento popup fuori schermo fissa finestra 4k portatile",
  "trigger": "In multimonitor / alto DPI il popup di cattura appare in un punto invisibile",
  "official": "Le impostazioni di cattura offrono «fissa posizione finestra» per inchiodare il popup di traduzione a un punto fisso.",
  "cause": "Quando il ridimensionamento DPI per schermo differisce, le coordinate del popup sono calcolate con la scala sbagliata, quindi «vola» fuori schermo o su un monitor non visibile.",
  "fix": "Spunta «fissa posizione finestra» nelle impostazioni di cattura e mettilo in alto a sinistra dello schermo principale; mantieni il ridimensionamento coerente; riavvia Youdao per aggiornare le coordinate se serve.",
  "scene": "4K esterno + portatile a scala diversa, la cattura ha «suono ma nessuna finestra» → fissare la posizione della finestra lo risolve."
 },
 "64位": {
  "cat": "Compatibilità app",
  "name": "Compatibilità cattura app / sistema a 64 bit",
  "alias": "64 bit x64 componente incompatibile acrobat architettura 32 bit compatibile",
  "trigger": "La cattura fallisce o segnala un componente incompatibile dentro Acrobat / app a 64 bit",
  "official": "La versione desktop di Youdao è compatibile a 64 bit e supporta la cattura a schermo su sistemi a 64 bit; le versioni vecchie possono essere incompatibili con i componenti di alcune app a 64 bit.",
  "cause": "Le DLL di hook a 32/64 bit non si mescolano: il componente di iniezione di un vecchio Youdao non corrisponde a un host a 64 bit (es. Acrobat 64 bit), quindi l'host rifiuta di caricarlo e segnala «componente incompatibile».",
  "fix": "Aggiorna al Youdao più recente (con il componente di cattura a 64 bit); se Acrobat 64 bit fallisce ancora, copia il YodaoDict.api corrispondente nei suoi plug_ins ed esegui Youdao come amministratore.",
  "scene": "Dopo l'aggiornamento ad Acrobat 64 bit la selezione muore → installare il Youdao più recente lo ripristina."
 },
 "绿色版": {
  "cat": "Rete / installazione",
  "name": "La versione portatile / leggera non cattura",
  "alias": "portatile leggera non ufficiale cattura pdf hook dll registrare verde",
  "trigger": "Su un Youdao «portatile / leggero» di terze parti, la cattura PDF / globale non funziona",
  "official": "Dichiarato ufficialmente: le versioni «portatili» non ufficiali di Youdao non possono catturare il PDF correttamente - installa la versione ufficiale standard più recente.",
  "cause": "La cattura a schermo dipende dai componenti di hook / componente registrati nel sistema all'installazione; le versioni portatili li rimuovono o non li registrano per il «senza installazione», quindi la cattura globale / PDF muore.",
  "fix": "Disinstalla la versione portatile e installa il Youdao ufficiale standard più recente dal sito (sovrascrivi) così i componenti di cattura si registrano bene.",
  "scene": "Preso una versione portatile per comodità, la cattura PDF non funziona mai → la versione ufficiale lo ripristina."
 },
 "全屏取词": {
  "cat": "Rendering / display",
  "name": "La cattura fallisce a schermo intero / giochi",
  "alias": "schermo intero gioco schermo intero esclusivo hook fallisce video",
  "trigger": "La cattura non fa nulla in app a schermo intero / giochi / video a schermo intero esclusivo",
  "official": "A schermo intero (specie esclusivo) l'hook globale di cattura può fallire - usa la modalità finestra o l'OCR di cattura.",
  "cause": "Lo schermo intero esclusivo aggira la normale composizione delle finestre e prende il controllo di input/rendering, quindi l'hook globale non riceve eventi / testo e la cattura muore a schermo intero.",
  "fix": "Passa l'app a «finestra / finestra senza bordi»; o usa l'OCR di cattura (seleziona una regione) invece della cattura al passaggio mouse per il contenuto a schermo intero.",
  "scene": "Niente cattura nei giochi a schermo intero esclusivo → usa la finestra senza bordi, o l'OCR di cattura."
 },
 "取词慢": {
  "cat": "Rete / installazione",
  "name": "Cattura lenta / senza risposta a intermittenza",
  "alias": "cattura lenta lag latenza senza risposta rete velocità online",
  "trigger": "La cattura funziona ma il popup è lento, a volte nessuno",
  "official": "La velocità di cattura a schermo dipende dalla rete; su una rete normale la risposta è di solito inferiore a 1 secondo.",
  "cause": "Le definizioni online richiedono una query di rete, quindi le fluttuazioni / DNS lento ritardano il popup; l'OCR di cattura riconosce anche in locale, quindi un modulo non pronto è lento o il suo ripiego fallisce.",
  "fix": "Controlla / passa a una rete più stabile; attiva il dizionario locale potenziato per le parole comuni per ridurre le chiamate di rete; conferma che il modulo OCR sia scaricato; riavvia Youdao se serve.",
  "scene": "La cattura impiega diversi secondi su una rete debole → cambiare rete / attivare il dizionario locale la accelera notevolmente."
 },
 "扫描件取词": {
  "cat": "Rendering / display",
  "name": "Impossibile catturare scansione / immagine",
  "alias": "scansione immagine pdf immagine ocr cattura potente screenshot senza livello testo riconoscere",
  "trigger": "La cattura non fa nulla su immagini / PDF scansionati",
  "official": "Immagini / scansioni non hanno livello di testo, quindi la cattura semplice non le legge - abilita l'«OCR di cattura potente» per riconoscere per immagine.",
  "cause": "La cattura semplice legge il buffer di testo dell'app; una scansione / immagine ha solo pixel, senza codifica di caratteri, quindi non c'è nulla da catturare - devi fare l'OCR dell'immagine in testo.",
  "fix": "Impostazioni → Cattura e selezione, spunta «OCR di cattura potente per tutto il software» e scarica il modulo OCR; o usa l'OCR di cattura su una regione; usa un originale più nitido se il riconoscimento fallisce.",
  "scene": "Un PDF cartaceo scansionato non si seleziona → abilitare l'OCR di cattura potente lo rende riconoscibile."
 },
 "输入法冲突": {
  "cat": "Scorciatoie",
  "name": "Il metodo di input / altro software ruba il tasto",
  "alias": "metodo input sogou pinyin ruba tasto ctrl occupato conflitto altro dizionario",
  "trigger": "L'attivatore di cattura (es. Ctrl) è preso dal metodo di input / un'altra app",
  "official": "Se l'attivatore (es. Ctrl) è occupato da altro software, la cattura è prevenuta e non fa nulla; cambia l'attivatore di cattura.",
  "cause": "La cattura spesso si attiva con i tasti Ctrl / F; metodi di input, altri dizionari e strumenti appunti possono ascoltare lo stesso tasto, e chi si registra per primo risponde, quindi la cattura di Youdao è «rubata».",
  "fix": "Cambia l'attivatore di cattura di Youdao in una combinazione più unica / al passaggio mouse; o regola la scorciatoia dell'app in conflitto; chiudi le app sospette una alla volta per trovare il ladro.",
  "scene": "Dopo l'installazione di uno strumento appunti, la cattura con Ctrl muore → cambiare l'attivatore di Youdao lo ripristina."
 }
};
window.LABELS = {"miss": "Sintomo non elencato. Prova un'altra parola chiave (cattura / pdf / selezione / scorciatoia) o guarda la tabella completa sotto.", "codeword": ""};
window.FIELDS = [["trigger", "Quando si presenta"], ["official", "Sintomo L1 / posizionamento ufficiale"], ["cause", "Causa radice L2"], ["fix", "Come verificare / risolvere"], ["scene", "Caso reale"]];
window.THEAD = ["Sintomo", "Gruppo", "Sintomo L1 / posizionamento ufficiale", "Causa radice L2"];
