window.CODES = {
 "取词失效": {
  "cat": "Activation / réglages",
  "name": "Capture à l'écran morte en général",
  "alias": "capture capture d'écran ne marche pas aucune réponse survol capture 取词",
  "trigger": "Juste après installation / mise à jour, le survol ou la touche de capture ne fait rien",
  "official": "La capture à l'écran nécessite Youdao en arrière-plan avec la capture activée ; la version officielle de bureau offre capture intelligente / capture par presse-papiers / capture OCR.",
  "cause": "La capture à l'écran utilise un hook global injecté dans l'appli au premier plan pour lire son texte : il faut le processus Youdao en marche + l'interrupteur maître de capture actif + la touche déclencheur correspondante. S'il en manque un, cela paraît « totalement mort », souvent confondu avec un logiciel cassé.",
  "fix": "Vérifiez que l'icône de barre est active (gris = ne tourne pas, double-clic pour démarrer) ; Réglages → Capture et sélection, cochez « activer capture » et choisissez le mode (survol / maintenir Ctrl) ; redémarrez Youdao et réessayez.",
  "scene": "Youdao n'a pas démarré automatiquement, pas d'icône de barre → la capture ne répond jamais ; le démarrer à la main corrige."
 },
 "划词不弹窗": {
  "cat": "Activation / réglages",
  "name": "La traduction par sélection ne montre pas de pop-up",
  "alias": "sélection traduire pas de pop-up 划词 sélection surligner",
  "trigger": "Sélectionner une phrase n'ouvre aucun pop-up de traduction",
  "official": "La traduction par sélection nécessite « sélection » activée avec « traduire à la sélection » coché ; peut traduire à la sélection ou par une touche.",
  "cause": "Sélection et capture sont des interrupteurs distincts : beaucoup activent la capture mais pas la sélection, ou désactivent « traduire à la sélection », d'où « sélectionner ne montre rien » ; la touche de sélection peut aussi être prise.",
  "fix": "Réglages → Capture et sélection, cochez « activer traduction par sélection » et « traduire à la sélection » ; si c'est par touche, confirmez que cette touche est libre ; la sélection dans le navigateur nécessite aussi l'extension de capture.",
  "scene": "Aucune réponse dans PDF / web mais pop-up dans le Bloc-notes → généralement la compatibilité de cette appli (extension / mode protégé), pas l'interrupteur de sélection."
 },
 "Word取词": {
  "cat": "Compatibilité de l'appli",
  "name": "La capture/sélection dans Word / Office échoue",
  "alias": "word office excel capture sélection phrase complément com éducation 365 plugin",
  "trigger": "Après installation / changement d'Office (surtout Éducation, 365), Word / Excel ne traduit pas une sélection",
  "official": "Youdao s'intègre à Office via un complément COM pour la traduction de sélection / phrase ; si le complément est désactivé ou non enregistré, ça échoue.",
  "cause": "Office désactive les compléments COM tiers par compatibilité ou politique ; changer de version (p. ex. une Éducation neuve) laisse l'ancien complément non enregistré pour le nouvel Office, d'où « ça marchait, plus maintenant ».",
  "fix": "Word : Fichier → Options → Compléments → en bas « Gérer : Compléments COM » → Atteindre → cochez le complément Youdao ; sinon réinstallez Youdao pour le réenregistrer ; vérifiez que l'architecture de Youdao et Office concorde.",
  "scene": "Après un nouvel Office Éducation la traduction par sélection meurt et le complément est listé mais non coché → l'activer le restaure."
 },
 "PDF取词": {
  "cat": "Compatibilité de l'appli",
  "name": "La capture dans PDF / Acrobat échoue",
  "alias": "pdf acrobat reader capture sélection yodaodict.api mode protégé plug_ins autotray scan",
  "trigger": "Adobe Acrobat / Reader : sélectionner dans un PDF ne fait rien, ou « impossible de charger le complément »",
  "official": "Les versions officielles prennent en charge la capture à l'écran de PDF dans Adobe Reader / Acrobat ; les versions « portables » non officielles ne peuvent pas capturer le PDF, et le PDF doit être du texte, pas une image.",
  "cause": "Trois causes : ① le « mode protégé » d'Acrobat est un bac à sable qui bloque l'injection de YodaoDict.api tiers ; ② l'incompatibilité d'architecture entre Acrobat 64 bits et un vieux complément Youdao donne « complément incompatible » ; ③ le PDF est un scan (image, sans couche de texte).",
  "fix": "Désactivez dans Acrobat Édition → Préférences → Sécurité (renforcée) → « Activer le mode protégé au démarrage », ouvrez Youdao avant Acrobat ; pour l'alerte « incompatible » 64 bits, installez le Youdao le plus récent, ou copiez YodaoDict.api dans plug_ins d'Acrobat ; pour les scans utilisez l'OCR de capture puissant.",
  "scene": "Acrobat 64 bits, sélectionner ne fait rien, « impossible de charger YodaoDict.api » → désactiver le mode protégé + copier le .api dans plug_ins le restaure."
 },
 "浏览器划词": {
  "cat": "Compatibilité de l'appli",
  "name": "La sélection/capture dans Chrome / navigateur échoue",
  "alias": "chrome edge firefox navigateur sélection capture extension plugin accélération matérielle 360 adblock",
  "trigger": "Pas de capture sur les pages web / pas de pop-up de sélection, alors que le Bloc-notes etc. vont",
  "official": "Chrome / Firefox etc. nécessitent une extension de capture Youdao séparée ; la version officielle de bureau offre la « capture Chrome ».",
  "cause": "Le navigateur est son propre bac à sable : ① sans extension de capture Youdao, le hook global ne peut pas lire le texte du DOM ; ② l'accélération matérielle GPU rend la page en texture sans couche lisible ; ③ les interrupteurs adblock / sécurité (p. ex. navigateur 360) bloquent la capture.",
  "fix": "Installez l'extension de capture Youdao pour votre navigateur (via les réglages Youdao ou le store) ; désactivez « utiliser l'accélération matérielle » dans les réglages du navigateur et redémarrez ; désactivez l'adblock du navigateur 360.",
  "scene": "La sélection dans Chrome ne fait rien ; installer l'extension Youdao corrige ; quelques sites échouent encore à cause des textures d'accélération - désactivez l'accélération."
 },
 "截图翻译": {
  "cat": "Raccourcis",
  "name": "L'OCR de capture/région ne marche pas",
  "alias": "capture d'écran région ocr reconnaître quick ocr raccourci ctrl alt o traduire zone",
  "trigger": "Le raccourci de reconnaissance de capture ne fait rien / pas de texte reconnu",
  "official": "L'OCR de capture nécessite un raccourci de reconnaissance de capture défini (p. ex. Ctrl+Alt+O) et le module OCR téléchargé ; vous sélectionnez une région d'écran par glisser.",
  "cause": "L'OCR de capture n'a pas besoin de couche de texte - il reconnaît par image la région sélectionnée, il faut donc le module OCR téléchargé + un raccourci libre + (macOS) la permission d'enregistrement de l'écran pour lire les pixels.",
  "fix": "Réglages → Raccourcis, assignez une touche sans conflit à « OCR capture » ; téléchargez le module OCR au premier usage ; sur macOS accordez « Enregistrement de l'écran » ; choisissez une région plus nette si la reconnaissance échoue.",
  "scene": "Le raccourci ne fait rien → généralement un outil de capture a pris la touche ; changer la combinaison le restaure."
 },
 "快捷键冲突": {
  "cat": "Raccourcis",
  "name": "Conflit du raccourci de capture / capture d'écran",
  "alias": "raccourci touche conflit pris ctrl outil capture méthode saisie qq",
  "trigger": "La touche de capture / capture d'écran ne fait rien, ou « déjà prise par le système »",
  "official": "Capture / sélection / reconnaissance de capture sont toutes personnalisables dans Raccourcis ; en conflit ça avertit, et vous pouvez réassigner ou réinitialiser.",
  "cause": "Les raccourcis globaux sont premier arrivé premier servi : un outil de capture, une méthode de saisie, QQ / WeChat ou un autre dictionnaire peuvent tenir la même combinaison, donc la touche de Youdao ne fait rien.",
  "fix": "Réglages → Raccourcis, surveillez l'alerte de conflit ; passez à une combinaison plus rare comme Ctrl+Maj+lettre / Alt+lettre ; fermez les applis prenant des touches une à une pour trouver le coupable.",
  "scene": "Après installation d'un nouvel outil de capture la touche de capture meurt → réassignez la touche de Youdao ou celle de l'outil."
 },
 "macOS权限": {
  "cat": "Permissions",
  "name": "macOS capture / raccourcis nécessitent une autorisation",
  "alias": "mac macos permission accessibilité enregistrement écran accessibility autoriser confidentialité",
  "trigger": "Capture et raccourcis morts sur macOS, surtout après une mise à jour système",
  "official": "macOS doit accorder à Youdao « Accessibilité » (pour surveiller les raccourcis / contrôler) et « Enregistrement de l'écran » (pour lire l'écran en capture / capture d'écran) dans Réglages système → Confidentialité et sécurité.",
  "cause": "Le bac à sable macOS exige des autorisations explicites : sans « Accessibilité » il n'entend pas les raccourcis globaux, sans « Enregistrement de l'écran » il ne lit pas les pixels ; les mises à jour réinitialisent souvent les deux.",
  "fix": "Réglages système → Confidentialité et sécurité → cochez Youdao sous « Accessibilité » et « Enregistrement de l'écran » et redémarrez-le ; réaccordez après chaque mise à jour macOS.",
  "scene": "Après une mise à jour macOS la capture est totalement morte → permissions réinitialisées ; recocher les deux le restaure."
 },
 "管理员权限": {
  "cat": "Permissions",
  "name": "Pas de capture dans une appli élevée (UAC)",
  "alias": "admin uac élevé administrateur exécuter en admin niveau privilège gestionnaire des tâches",
  "trigger": "Les applis normales capturent bien ; une appli « exécutée en administrateur » non",
  "official": "Sous Windows, certains cas nécessitent Youdao « exécuté en administrateur » pour capturer dans les applis élevées.",
  "cause": "Les niveaux d'intégrité Windows (UAC) isolent les processus : un hook à droits normaux ne peut pas injecter dans un processus de haute intégrité (administrateur) et inversement, d'où « seule cette appli ne capture pas ».",
  "fix": "Clic droit sur Youdao « Exécuter en tant qu'administrateur » pour égaler le niveau de privilège de la cible ; ou réglez-le pour toujours tourner en administrateur (propriété de compatibilité).",
  "scene": "Pas de capture dans un outil de dev / fenêtre distante exécuté en administrateur → exécuter Youdao en administrateur le restaure."
 },
 "弹窗飞走": {
  "cat": "Rendu / affichage",
  "name": "Pop-up hors écran en multi-écran / haut DPI",
  "alias": "multi-écran double écran haut dpi mise à l'échelle pop-up hors écran fixer fenêtre 4k portable",
  "trigger": "En multi-écran / haut DPI le pop-up de capture apparaît à un endroit invisible",
  "official": "Les réglages de capture offrent « fixer la position de la fenêtre » pour clouer le pop-up de traduction à un point fixe.",
  "cause": "Quand la mise à l'échelle DPI par écran diffère, les coordonnées du pop-up sont calculées avec la mauvaise échelle, donc il « s'envole » hors écran ou vers un moniteur invisible.",
  "fix": "Cochez « fixer la position de la fenêtre » dans les réglages de capture et placez-le en haut à gauche de l'écran principal ; gardez la mise à l'échelle cohérente ; redémarrez Youdao pour rafraîchir les coordonnées au besoin.",
  "scene": "4K externe + portable à échelle différente, la capture a « du son mais pas de fenêtre » → fixer la position de la fenêtre le résout."
 },
 "64位": {
  "cat": "Compatibilité de l'appli",
  "name": "Compatibilité de capture appli / système 64 bits",
  "alias": "64 bits x64 complément incompatible acrobat architecture 32 bits compatible",
  "trigger": "La capture échoue ou signale un complément incompatible dans Acrobat / applis 64 bits",
  "official": "La version de bureau de Youdao est compatible 64 bits et prend en charge la capture à l'écran sur systèmes 64 bits ; les versions anciennes peuvent être incompatibles avec les compléments de certaines applis 64 bits.",
  "cause": "Les DLL de hook 32/64 bits ne se mélangent pas : le composant d'injection d'un vieux Youdao ne correspond pas à un hôte 64 bits (p. ex. Acrobat 64 bits), donc l'hôte refuse de le charger et signale « complément incompatible ».",
  "fix": "Mettez à jour vers le Youdao le plus récent (avec le composant de capture 64 bits) ; si Acrobat 64 bits échoue encore, copiez le YodaoDict.api correspondant dans ses plug_ins et exécutez Youdao en administrateur.",
  "scene": "Après mise à niveau vers Acrobat 64 bits la sélection meurt → installer le Youdao le plus récent le restaure."
 },
 "绿色版": {
  "cat": "Réseau / installation",
  "name": "La version portable / légère ne capture pas",
  "alias": "portable légère non officielle capture pdf hook dll enregistrer verte",
  "trigger": "Sur un Youdao « portable / léger » tiers, la capture PDF / globale ne marche pas",
  "official": "Officiellement déclaré : les versions « portables » non officielles de Youdao ne peuvent pas capturer le PDF correctement - installez la version officielle standard la plus récente.",
  "cause": "La capture à l'écran dépend des composants de hook / complément enregistrés dans le système à l'installation ; les versions portables les retirent ou ne les enregistrent pas pour le « sans installation », donc la capture globale / PDF meurt.",
  "fix": "Désinstallez la version portable et installez le Youdao officiel standard le plus récent du site (écraser) pour que les composants de capture s'enregistrent bien.",
  "scene": "J'ai pris une version portable par commodité, la capture PDF ne marche jamais → la version officielle le restaure."
 },
 "全屏取词": {
  "cat": "Rendu / affichage",
  "name": "La capture échoue en plein écran / jeux",
  "alias": "plein écran jeu plein écran exclusif hook échoue vidéo",
  "trigger": "La capture ne fait rien dans les applis plein écran / jeux / vidéo plein écran exclusif",
  "official": "En plein écran (surtout exclusif) le hook global de capture peut échouer - utilisez le mode fenêtré ou l'OCR de capture.",
  "cause": "Le plein écran exclusif contourne la composition normale des fenêtres et prend le contrôle de l'entrée/rendu, donc le hook global ne reçoit pas d'événements / de texte et la capture meurt en plein écran.",
  "fix": "Passez l'appli en « fenêtré / fenêtre sans bordure » ; ou utilisez l'OCR de capture (sélectionnez une région) au lieu de la capture au survol pour le contenu plein écran.",
  "scene": "Pas de capture dans les jeux plein écran exclusif → utilisez la fenêtre sans bordure, ou l'OCR de capture."
 },
 "取词慢": {
  "cat": "Réseau / installation",
  "name": "Capture lente / sans réponse par intermittence",
  "alias": "capture lente lag latence sans réponse réseau vitesse en ligne",
  "trigger": "La capture marche mais le pop-up est lent, parfois aucun",
  "official": "La vitesse de capture à l'écran dépend du réseau ; sur un réseau normal la réponse est généralement inférieure à 1 seconde.",
  "cause": "Les définitions en ligne nécessitent une requête réseau, donc les fluctuations / DNS lent retardent le pop-up ; l'OCR de capture reconnaît aussi en local, donc un module non prêt est lent ou son repli échoue.",
  "fix": "Vérifiez / passez à un réseau plus stable ; activez le dictionnaire local enrichi pour les mots courants afin de réduire les appels réseau ; confirmez que le module OCR est téléchargé ; redémarrez Youdao au besoin.",
  "scene": "La capture prend plusieurs secondes sur un réseau faible → changer de réseau / activer le dictionnaire local l'accélère nettement."
 },
 "扫描件取词": {
  "cat": "Rendu / affichage",
  "name": "Impossible de capturer un scan / une image",
  "alias": "scan image pdf image ocr capture puissant capture d'écran sans couche texte reconnaître",
  "trigger": "La capture ne fait rien sur les images / PDF scannés",
  "official": "Images / scans n'ont pas de couche de texte, donc la capture simple ne les lit pas - activez l'« OCR de capture puissant » pour reconnaître par image.",
  "cause": "La capture simple lit le tampon de texte de l'appli ; un scan / une image n'a que des pixels, sans encodage de caractères, donc rien à capturer - vous devez faire l'OCR de l'image en texte.",
  "fix": "Réglages → Capture et sélection, cochez « OCR de capture puissant pour tous les logiciels » et téléchargez le module OCR ; ou utilisez l'OCR de capture sur une région ; utilisez un original plus net si la reconnaissance échoue.",
  "scene": "Un PDF papier scanné ne se sélectionne pas → activer l'OCR de capture puissant le rend reconnaissable."
 },
 "输入法冲突": {
  "cat": "Raccourcis",
  "name": "La méthode de saisie / un autre logiciel vole la touche",
  "alias": "méthode saisie sogou pinyin vole touche ctrl pris conflit autre dictionnaire",
  "trigger": "Le déclencheur de capture (p. ex. Ctrl) est pris par la méthode de saisie / une autre appli",
  "official": "Si le déclencheur (p. ex. Ctrl) est pris par un autre logiciel, la capture est préemptée et ne fait rien ; changez le déclencheur de capture.",
  "cause": "La capture se déclenche souvent sur les touches Ctrl / F ; méthodes de saisie, autres dictionnaires et outils de presse-papiers peuvent écouter la même touche, et celui qui s'enregistre en premier répond, donc la capture de Youdao est « volée ».",
  "fix": "Changez le déclencheur de capture de Youdao en une combinaison plus unique / au survol ; ou ajustez le raccourci de l'appli en conflit ; fermez les applis suspectes une à une pour trouver le voleur.",
  "scene": "Après installation d'un outil de presse-papiers, la capture par Ctrl meurt → changer le déclencheur de Youdao le restaure."
 }
};
window.LABELS = {"miss": "Symptôme non répertorié. Essayez un autre mot-clé (capture / pdf / sélection / raccourci) ou voyez le tableau complet ci-dessous.", "codeword": ""};
window.FIELDS = [["trigger", "Quand cela arrive"], ["official", "Symptôme L1 / positionnement officiel"], ["cause", "Cause racine L2"], ["fix", "Comment vérifier / résoudre"], ["scene", "Cas réel"]];
window.THEAD = ["Symptôme", "Groupe", "Symptôme L1 / positionnement officiel", "Cause racine L2"];
