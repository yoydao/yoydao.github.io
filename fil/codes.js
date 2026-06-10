window.CODES = {
 "取词失效": {
  "cat": "Pag-enable / setting",
  "name": "Patay ang screen capture sa kabuuan",
  "alias": "capture screen capture hindi gumagana walang tugon hover capture 取词",
  "trigger": "Pagkatapos lang mag-install / mag-update, walang ginagawa ang hover o capture key",
  "official": "Kailangan ng screen capture na nasa background ang Youdao na naka-enable ang capture; nag-aalok ang opisyal na desktop ng smart capture / clipboard capture / OCR capture.",
  "cause": "Gumagamit ang screen capture ng global hook na ini-inject sa foreground app para basahin ang teksto nito: kailangan ng tumatakbong Youdao process + aktibong master capture switch + tugmang trigger key. Kapag may kulang, mukhang «patay na patay», madalas akalain na sirang software.",
  "fix": "I-check kung aktibo ang tray icon (kulay-abo = hindi tumatakbo, i-double-click para simulan); Settings → Capture at select, i-check ang «i-enable ang capture» at piliin ang mode (hover / pindutin ang Ctrl); i-restart ang Youdao at subukan ulit.",
  "scene": "Hindi nag-auto-start ang Youdao, walang tray icon → walang tugon ang capture; manu-manong pagsisimula ang ayos."
 },
 "划词不弹窗": {
  "cat": "Pag-enable / setting",
  "name": "Walang popup ang select translate",
  "alias": "select translate walang popup 划词 select highlight",
  "trigger": "Hindi nagbubukas ng popup ng pagsasalin ang pagpili ng parirala",
  "official": "Kailangan ng select translate na naka-enable ang «select» na may naka-check na «auto-translate sa pagpili»; pwedeng mag-translate sa pagpili o sa pamamagitan ng key.",
  "cause": "Magkahiwalay na switch ang select at capture: marami ang nag-e-enable ng capture pero hindi ng select, o pinapatay ang «auto-translate sa pagpili», kaya «walang lumalabas sa pagpili»; pwede ring kinuha ang select hotkey.",
  "fix": "Settings → Capture at select, i-check ang «i-enable ang select translate» at «auto-translate sa pagpili»; kung key-triggered, tiyaking malaya ang key na iyon; ang in-browser select ay kailangan din ng capture extension.",
  "scene": "Walang tugon sa PDF / web pero may popup sa Notepad → kadalasan kompatibilidad ng app na iyon (extension / protected mode), hindi ang select switch."
 },
 "Word取词": {
  "cat": "Kompatibilidad ng app",
  "name": "Nabibigo ang capture/select sa Word / Office",
  "alias": "word office excel capture select pangungusap add-in com education 365 plugin",
  "trigger": "Pagkatapos mag-install / magpalit ng Office (lalo na Education, 365), hindi nagsasalin ng pagpili ang Word / Excel",
  "official": "Nag-i-integrate ang Youdao sa Office sa pamamagitan ng COM add-in para sa select / pangungusap na pagsasalin; kung naka-disable o hindi naka-rehistro ang add-in, nabibigo.",
  "cause": "Dini-disable ng Office ang third-party COM add-in dahil sa kompatibilidad o patakaran; ang pagpapalit ng bersyon (hal. bagong Education) ay nag-iiwan ng lumang add-in na hindi naka-rehistro para sa bagong Office, kaya «dati gumagana, ngayon hindi».",
  "fix": "Word: File → Options → Add-ins → ibaba «Manage: COM Add-ins» → Go → i-check ang Youdao add-in; kung hindi, i-reinstall ang Youdao para i-rehistro ulit; tiyaking tugma ang bitness ng Youdao at Office.",
  "scene": "Pagkatapos ng bagong Education Office namamatay ang select translate at nakalista ang add-in pero hindi naka-check → ang pag-enable ang nagpapanumbalik."
 },
 "PDF取词": {
  "cat": "Kompatibilidad ng app",
  "name": "Nabibigo ang capture sa PDF / Acrobat",
  "alias": "pdf acrobat reader capture select yodaodict.api protected mode plug_ins autotray scan",
  "trigger": "Adobe Acrobat / Reader: walang ginagawa ang pagpili sa PDF, o «hindi mai-load ang plug-in»",
  "official": "Sinusuportahan ng opisyal na bersyon ang PDF screen capture sa Adobe Reader / Acrobat; ang hindi opisyal na «portable» na bersyon ay hindi makaka-capture ng PDF, at dapat teksto ang PDF, hindi larawan.",
  "cause": "Tatlong sanhi: ① ang «protected mode» ng Acrobat ay sandbox na humaharang sa third-party YodaoDict.api injection; ② ang bitness mismatch sa pagitan ng 64-bit Acrobat at lumang Youdao plug-in ay nagbibigay ng «incompatible plug-in»; ③ ang PDF ay scan (larawan, walang text layer).",
  "fix": "Patayin sa Acrobat Edit → Preferences → Security (Enhanced) → «Enable protected mode at startup», buksan ang Youdao bago ang Acrobat; para sa 64-bit «incompatible», i-install ang pinakabagong Youdao, o kopyahin ang YodaoDict.api sa plug_ins ng Acrobat; para sa scan gamitin ang OCR power capture.",
  "scene": "Acrobat 64-bit, walang ginagawa ang pagpili, «hindi mai-load ang YodaoDict.api» → ang pagpatay sa protected mode + pagkopya ng .api sa plug_ins ang nagpapanumbalik."
 },
 "浏览器划词": {
  "cat": "Kompatibilidad ng app",
  "name": "Nabibigo ang select/capture sa Chrome / browser",
  "alias": "chrome edge firefox browser select capture extension plugin hardware acceleration 360 adblock",
  "trigger": "Hindi nagka-capture sa web page / walang select popup, habang okay ang Notepad atbp.",
  "official": "Kailangan ng Chrome / Firefox atbp. ng hiwalay na Youdao capture extension; nag-aalok ang opisyal na desktop ng «Chrome capture».",
  "cause": "Ang browser ay sariling sandbox: ① kung walang Youdao capture extension, hindi mababasa ng global hook ang DOM text; ② nire-render ng GPU hardware acceleration ang pahina sa texture na walang nababasang layer; ③ hinaharang ng adblock / security toggle (hal. 360 browser) ang capture.",
  "fix": "I-install ang Youdao capture extension para sa browser mo (via Youdao settings o store); patayin ang «gumamit ng hardware acceleration» sa browser settings at i-restart; patayin ang adblock sa 360 browser.",
  "scene": "Walang ginagawa ang select sa Chrome; ang pag-install ng Youdao extension ang ayos; ilang site pa rin ang nabibigo dahil sa acceleration texture - patayin ang acceleration."
 },
 "截图翻译": {
  "cat": "Shortcut",
  "name": "Hindi gumagana ang screenshot/region OCR translate",
  "alias": "screenshot region ocr kilalanin quick ocr shortcut ctrl alt o translate area",
  "trigger": "Walang ginagawa ang screenshot-recognize hotkey / walang nakikilalang teksto",
  "official": "Kailangan ng screenshot OCR ng nakatakdang screenshot-recognize hotkey (hal. Ctrl+Alt+O) at na-download na OCR module; pumipili ka ng screen region sa pag-drag.",
  "cause": "Hindi kailangan ng screenshot OCR ng text layer - kinikilala nito ang napiling region via image, kaya kailangan ng na-download na OCR module + malayang hotkey + (macOS) screen recording permission para basahin ang pixel.",
  "fix": "Settings → Shortcut, magtalaga ng walang banggaang key para sa «OCR screenshot»; i-download ang OCR module sa unang paggamit; sa macOS ibigay ang «Screen Recording»; pumili ng mas malinaw na region kung mali ang recognition.",
  "scene": "Walang ginagawa ang hotkey → kadalasan kinuha ng screenshot tool ang key; ang pagpapalit ng kombinasyon ang nagpapanumbalik."
 },
 "快捷键冲突": {
  "cat": "Shortcut",
  "name": "Banggaan ng capture / screenshot hotkey",
  "alias": "shortcut hotkey banggaan kinuha ctrl screenshot tool input method qq",
  "trigger": "Walang ginagawa ang capture / screenshot key, o «kinuha na ng system»",
  "official": "Lahat ng capture / select / screenshot-recognize ay maaaring i-customize sa Shortcut; sa banggaan nagbababala ito, at maaaring mag-rebind o mag-reset.",
  "cause": "First-come-first-served ang global hotkey: maaaring hawak ng screenshot tool, input method, QQ / WeChat, o ibang diksyunaryo ang parehong kombinasyon, kaya walang ginagawa ang Youdao key.",
  "fix": "Settings → Shortcut, abangan ang babala sa banggaan; lumipat sa mas bihirang kombinasyon tulad ng Ctrl+Shift+letra / Alt+letra; isa-isang isara ang mga app na humahawak ng key para mahanap ang dahilan.",
  "scene": "Pagkatapos mag-install ng bagong screenshot tool namamatay ang capture key → i-rebind ang key ng Youdao o ng tool."
 },
 "macOS权限": {
  "cat": "Pahintulot",
  "name": "macOS capture / shortcut kailangan ng awtorisasyon",
  "alias": "mac macos pahintulot accessibility screen recording awtorisasyon privacy",
  "trigger": "Patay ang capture at shortcut sa macOS, lalo na pagkatapos ng system update",
  "official": "Kailangan ng macOS na ibigay sa Youdao ang «Accessibility» (subaybayan ang shortcut / kontrolin) at «Screen Recording» (basahin ang screen para sa capture / screenshot) sa System Settings → Privacy at Security.",
  "cause": "Hinihingi ng macOS sandbox ang tahasang pahintulot: kung walang «Accessibility» hindi naririnig ang global hotkey, kung walang «Screen Recording» hindi nababasa ang pixel; madalas i-reset ng update ang dalawa.",
  "fix": "System Settings → Privacy at Security → i-check ang Youdao sa «Accessibility» at «Screen Recording» at i-restart; ibigay ulit pagkatapos ng bawat macOS update.",
  "scene": "Pagkatapos ng macOS update patay na patay ang capture → na-reset ang pahintulot; ang pag-check ulit sa dalawa ang nagpapanumbalik."
 },
 "管理员权限": {
  "cat": "Pahintulot",
  "name": "Hindi makaka-capture sa elevated app (UAC)",
  "alias": "admin uac elevated administrator run as admin privilege level task manager",
  "trigger": "Maayos na nagka-capture ang normal na app; isang «tinakbo bilang administrator» na app ang hindi",
  "official": "Sa Windows, may mga kaso na kailangan ang Youdao na «tinakbo bilang administrator» para makapag-capture sa elevated app.",
  "cause": "Inihihiwalay ng Windows integrity level (UAC) ang proseso: hindi makakapag-inject ang normal-rights hook sa high-integrity (administrator) process at vice versa, kaya «iyon lang na app ang hindi nagka-capture».",
  "fix": "Right-click sa Youdao «Run as administrator» para itugma ang privilege level ng target; o itakda na laging tumakbo bilang administrator (compatibility property).",
  "scene": "Hindi nagka-capture sa dev tool / remote window na tinakbo bilang administrator → ang pagpapatakbo ng Youdao bilang administrator ang nagpapanumbalik."
 },
 "弹窗飞走": {
  "cat": "Rendering / display",
  "name": "Popup sa labas ng screen sa multi-monitor / high DPI",
  "alias": "multi-monitor dual screen high dpi scaling popup labas ng screen pin window 4k laptop",
  "trigger": "Sa multi-monitor / high DPI lumilitaw ang capture popup sa hindi nakikitang lugar",
  "official": "Nag-aalok ang capture settings ng «i-pin ang posisyon ng window» para itali ang translation popup sa nakatakdang lugar.",
  "cause": "Kapag iba ang DPI scaling kada screen, kinakalkula ang coordinate ng popup sa maling scale, kaya «lumilipad» ito sa labas ng screen o sa hindi nakikitang monitor.",
  "fix": "I-check ang «i-pin ang posisyon ng window» sa capture settings at ilagay sa kaliwang taas ng pangunahing screen; panatilihing pare-pareho ang scaling; i-restart ang Youdao para i-refresh ang coordinate kung kailangan.",
  "scene": "External 4K + laptop sa magkaibang scale, ang capture ay may «tunog pero walang window» → ang pag-pin sa posisyon ng window ang ayos."
 },
 "64位": {
  "cat": "Kompatibilidad ng app",
  "name": "Kompatibilidad ng 64-bit app / system capture",
  "alias": "64-bit x64 incompatible plug-in acrobat bitness 32-bit kompatibol",
  "trigger": "Nabibigo ang capture o nag-uulat ng incompatible plug-in sa 64-bit Acrobat / app",
  "official": "Ang Youdao desktop ay 64-bit compatible at sumusuporta sa screen capture sa 64-bit system; maaaring hindi kompatibol ang lumang bersyon sa plug-in ng ilang 64-bit app.",
  "cause": "Hindi naghahalo ang 32/64-bit hook DLL: hindi tugma ang injection component ng lumang Youdao sa 64-bit host (hal. 64-bit Acrobat), kaya tumatanggi ang host na mag-load at nag-uulat ng «incompatible plug-in».",
  "fix": "Mag-update sa pinakabagong Youdao (may 64-bit capture component); kung tuloy pa rin ang pagkabigo ng 64-bit Acrobat, kopyahin ang tugmang YodaoDict.api sa plug_ins nito at patakbuhin ang Youdao bilang administrator.",
  "scene": "Pagkatapos mag-upgrade sa 64-bit Acrobat namamatay ang select → ang pag-install ng pinakabagong Youdao ang nagpapanumbalik."
 },
 "绿色版": {
  "cat": "Network / installation",
  "name": "Hindi nagka-capture ang portable / lightweight na bersyon",
  "alias": "portable lightweight hindi opisyal capture pdf hook dll rehistro green",
  "trigger": "Sa third-party na «portable / lightweight» Youdao, hindi gumagana ang PDF / global capture",
  "official": "Opisyal na sinabi: hindi makaka-capture ng PDF nang maayos ang hindi opisyal na «portable» na bersyon ng Youdao - i-install ang pinakabagong opisyal na standard na bersyon.",
  "cause": "Umaasa ang screen capture sa capture-hook / plug-in component na naka-rehistro sa system sa pag-install; tinatanggal o hindi nirerehistro ng portable na bersyon ang mga ito para sa «walang install», kaya namamatay ang global / PDF capture.",
  "fix": "I-uninstall ang portable na bersyon at i-install ang pinakabagong opisyal na standard Youdao mula sa site (i-overwrite) para maayos na ma-rehistro ang capture component.",
  "scene": "Kumuha ng portable na bersyon para maginhawa, hindi gumagana ang PDF capture → ang opisyal na bersyon ang nagpapanumbalik."
 },
 "全屏取词": {
  "cat": "Rendering / display",
  "name": "Nabibigo ang capture sa full screen / laro",
  "alias": "full screen laro exclusive full screen hook nabibigo video",
  "trigger": "Walang ginagawa ang capture sa full-screen app / laro / exclusive full-screen video",
  "official": "Sa full screen (lalo na exclusive) maaaring mabigo ang global capture hook - gamitin ang windowed mode o screenshot OCR.",
  "cause": "Nilalampasan ng exclusive full screen ang normal na window composition at kinukuha ang input/rendering, kaya walang natatanggap na event / teksto ang global hook at namamatay ang capture sa full screen.",
  "fix": "Ilipat ang app sa «windowed / borderless window»; o gamitin ang screenshot OCR (pumili ng region) sa halip na hover capture para sa full-screen content.",
  "scene": "Hindi nagka-capture sa exclusive full-screen laro → gamitin ang borderless window, o screenshot OCR."
 },
 "取词慢": {
  "cat": "Network / installation",
  "name": "Mabagal ang capture / paminsang walang tugon",
  "alias": "capture mabagal lag latency walang tugon network bilis online",
  "trigger": "Gumagana ang capture pero mabagal ang popup, paminsan walang lumalabas",
  "official": "Nakasalalay sa network ang bilis ng screen capture; sa normal na network kadalasan mas mababa sa 1 segundo ang tugon.",
  "cause": "Kailangan ng network query ang online definition, kaya ang network jitter / mabagal na DNS ay nakakaantala sa popup; nagre-recognize din ng lokal ang OCR capture, kaya mabagal ang hindi handa na module o nabibigo ang fallback nito.",
  "fix": "I-check / lumipat sa mas matatag na network; i-enable ang lokal na enhanced dictionary para sa karaniwang salita para mabawasan ang network call; tiyaking na-download ang OCR module; i-restart ang Youdao kung kailangan.",
  "scene": "Tumatagal nang ilang segundo ang capture sa mahinang network → ang pagpapalit ng network / pag-enable ng lokal na diksyunaryo ang nagpapabilis."
 },
 "扫描件取词": {
  "cat": "Rendering / display",
  "name": "Hindi maka-capture ng scan / larawan",
  "alias": "scan larawan image pdf ocr power capture screenshot walang text layer kilalanin",
  "trigger": "Walang ginagawa ang capture sa larawan / scanned PDF",
  "official": "Walang text layer ang larawan / scan, kaya hindi nababasa ng simpleng capture - i-enable ang «OCR power capture» para kilalanin via image.",
  "cause": "Binabasa ng simpleng capture ang text buffer ng app; pixel lang ang scan / larawan, walang character encoding, kaya walang ica-capture - kailangan mong i-OCR ang larawan papuntang teksto.",
  "fix": "Settings → Capture at select, i-check ang «OCR power capture para sa lahat ng software» at i-download ang OCR module; o gamitin ang screenshot OCR sa isang region; gumamit ng mas malinaw na original kung mali ang recognition.",
  "scene": "Hindi napipili ang scanned paper PDF → ang pag-enable ng OCR power capture ang nagpapakilala nito."
 },
 "输入法冲突": {
  "cat": "Shortcut",
  "name": "Ninanakaw ng input method / ibang software ang key",
  "alias": "input method sogou pinyin nakaw key ctrl kinuha banggaan ibang diksyunaryo",
  "trigger": "Kinukuha ng input method / ibang app ang capture trigger (hal. Ctrl)",
  "official": "Kung kinuha ng ibang software ang trigger (hal. Ctrl), napi-preempt ang capture at walang ginagawa; palitan ang capture trigger.",
  "cause": "Kadalasang nagti-trigger ang capture sa Ctrl / F key; maaaring nakikinig ang input method, ibang diksyunaryo at clipboard tool sa parehong key, at ang unang nag-rehistro ang tumutugon, kaya «ninanakaw» ang capture ng Youdao.",
  "fix": "Palitan ang capture trigger ng Youdao sa mas natatanging kombinasyon / sa hover; o i-adjust ang shortcut ng nagbabanggaang app; isa-isang isara ang kahina-hinalang app para mahanap ang magnanakaw.",
  "scene": "Pagkatapos mag-install ng clipboard tool namamatay ang Ctrl capture → ang pagpapalit ng trigger ng Youdao ang nagpapanumbalik."
 }
};
window.LABELS = {"miss": "Hindi nakalista ang sintomas. Subukan ang ibang keyword (capture / pdf / select / shortcut) o tingnan ang buong talahanayan sa ibaba.", "codeword": ""};
window.FIELDS = [["trigger", "Kailan nangyayari"], ["official", "L1 na sintomas / opisyal na posisyon"], ["cause", "L2 na ugat na sanhi"], ["fix", "Paano i-check / ayusin"], ["scene", "Totoong kaso"]];
window.THEAD = ["Sintomas", "Grupo", "L1 na sintomas / opisyal na posisyon", "L2 na ugat na sanhi"];
