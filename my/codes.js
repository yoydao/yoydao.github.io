window.CODES = {
 "取词失效": {
  "cat": "ဖွင့်ခြင်း / setting",
  "name": "ဖန်သားပြင်ဖမ်းယူ စုစုပေါင်းသေ",
  "alias": "ဖမ်းယူ ဖန်သားပြင်ဖမ်းယူ အလုပ်မလုပ် တုံ့ပြန်မှုမရှိ hover capture 取词",
  "trigger": "ထည့်ပြီး / update ပြီးချက်ချင်း, hover သို့မဟုတ် ဖမ်းယူ key က ဘာမှမလုပ်",
  "official": "ဖန်သားပြင်ဖမ်းယူ အတွက် Youdao သည် background တွင် ဖမ်းယူဖွင့်ထားရန်လို; တရားဝင် desktop ဗားရှင်းက smart ဖမ်းယူ / clipboard ဖမ်းယူ / OCR ဖမ်းယူ ပေး.",
  "cause": "ဖန်သားပြင်ဖမ်းယူ က foreground app ထဲ inject ထားသော global hook ဖြင့် စာသားဖတ်: လည်ပတ်နေသော Youdao process + active ဖမ်းယူ master switch + ကိုက်ညီသော trigger key လို. တစ်ခုလိုလျှင် «လုံးဝသေ» ပုံပေါ်, software ပျက်ဟု မကြာခဏ ထင်မှတ်.",
  "fix": "tray icon active ဟုတ်မဟုတ်စစ် (မီးခိုး = မလည်ပတ်, စတင်ရန် double-click); setting → ဖမ်းယူနှင့် ရွေးချယ်, «ဖမ်းယူဖွင့်» check ပြီး mode ရွေး (hover / Ctrl ဖိ); Youdao ပြန်စပြီး ပြန်ကြိုးစား.",
  "scene": "Youdao auto-start မဖြစ်, tray icon မရှိ → ဖမ်းယူ ဘယ်တော့မှ မတုံ့ပြန်; manual စတင်ခြင်းက ပြင်."
 },
 "划词不弹窗": {
  "cat": "ဖွင့်ခြင်း / setting",
  "name": "ရွေးချယ်ဘာသာပြန် popup မပြ",
  "alias": "ရွေးချယ် ဘာသာပြန် popup မရှိ 划词 ရွေးချယ် highlight",
  "trigger": "စကားစုရွေးချယ်ခြင်းက ဘာသာပြန် popup မဖွင့်",
  "official": "ရွေးချယ်ဘာသာပြန် အတွက် «ရွေးချယ်» ဖွင့်ပြီး «ရွေးချယ်စဉ်အလိုအလျောက်ဘာသာပြန်» check လို; ရွေးချယ်စဉ် သို့မဟုတ် key ဖြင့် ဘာသာပြန်နိုင်.",
  "cause": "ရွေးချယ်နှင့် ဖမ်းယူ သည် သီးခြား switch: များစွာက ဖမ်းယူဖွင့် ဒါပေမဲ့ ရွေးချယ်မဖွင့်, သို့မဟုတ် «ရွေးချယ်စဉ်အလိုအလျောက်ဘာသာပြန်» ပိတ်, ထို့ကြောင့် «ရွေးချယ်ခြင်းက ဘာမှမပြ»; ရွေးချယ် hotkey လည်း ယူခံရနိုင်.",
  "fix": "setting → ဖမ်းယူနှင့် ရွေးချယ်, «ရွေးချယ်ဘာသာပြန်ဖွင့်» နှင့် «ရွေးချယ်စဉ်အလိုအလျောက်ဘာသာပြန်» check; key-trigger ဆိုလျှင် ထို key အားဟု အတည်ပြု; browser အတွင်းရွေးချယ်က ဖမ်းယူ extension လည်းလို.",
  "scene": "PDF / web တွင် တုံ့ပြန်မှုမရှိ ဒါပေမဲ့ Notepad တွင် popup → များသောအားဖြင့် ထို app ၏ တွဲဖက်နိုင်မှု (extension / protected mode), ရွေးချယ် switch မဟုတ်."
 },
 "Word取词": {
  "cat": "app တွဲဖက်နိုင်မှု",
  "name": "Word / Office တွင် ဖမ်းယူ/ရွေးချယ် ပျက်",
  "alias": "word office excel ဖမ်းယူ ရွေးချယ် ဝါကျ add-in com education 365 plugin",
  "trigger": "Office (အထူးသဖြင့် Education, 365) ထည့် / ပြောင်းပြီးနောက်, Word / Excel က ရွေးချယ်မှု မဘာသာပြန်",
  "official": "Youdao သည် ရွေးချယ် / ဝါကျ ဘာသာပြန်အတွက် COM add-in ဖြင့် Office နှင့်ပေါင်းစည်း; add-in ပိတ် သို့မဟုတ် မregister လျှင် ပျက်.",
  "cause": "Office က တွဲဖက်နိုင်မှု သို့မဟုတ် policy အတွက် third-party COM add-in များ ပိတ်; ဗားရှင်းပြောင်း (ဥပမာ Education အသစ်) က ဟောင်း add-in ကို Office အသစ်အတွက် မregister ထား, ထို့ကြောင့် «အရင်အလုပ်လုပ်, အခု မလုပ်».",
  "fix": "Word: File → Options → Add-ins → အောက် «Manage: COM add-ins» → Go → Youdao add-in check; မဟုတ်လျှင် ပြန်register ရန် Youdao ပြန်ထည့်; Youdao နှင့် Office bitness ကိုက်ညီမှု စစ်.",
  "scene": "Education Office အသစ်ပြီးနောက် ရွေးချယ်ဘာသာပြန်သေ ပြီး add-in စာရင်းတွင်ရှိ ဒါပေမဲ့ မcheck → ဖွင့်ခြင်းက ပြန်ကောင်း."
 },
 "PDF取词": {
  "cat": "app တွဲဖက်နိုင်မှု",
  "name": "PDF / Acrobat တွင် ဖမ်းယူ ပျက်",
  "alias": "pdf acrobat reader ဖမ်းယူ ရွေးချယ် yodaodict.api protected mode plug_ins autotray scan",
  "trigger": "Adobe Acrobat / Reader: PDF တွင် ရွေးချယ်ခြင်း ဘာမှမလုပ်, သို့မဟုတ် «plug-in load မလုပ်နိုင်»",
  "official": "တရားဝင်ဗားရှင်းများက Adobe Reader / Acrobat တွင် PDF ဖန်သားပြင်ဖမ်းယူ ပံ့ပိုး; တရားဝင်မဟုတ်သော «portable» ဗားရှင်းများက PDF မဖမ်းယူနိုင်, PDF က စာသားဖြစ်ရန်လို, ပုံမဟုတ်.",
  "cause": "အကြောင်းသုံးခု: ① Acrobat ၏ «protected mode» က third-party YodaoDict.api injection ပိတ်ဆို့သော sandbox; ② 64-bit Acrobat နှင့် ဟောင်း Youdao plug-in အကြား bitness မကိုက်ညီမှုက «မတွဲဖက်နိုင်သော plug-in» ပေး; ③ PDF က scan (ပုံ, text layer မပါ).",
  "fix": "Acrobat တွင် Edit → Preferences → Security (Enhanced) → «startup တွင် protected mode ဖွင့်» ပိတ်, Acrobat မတိုင်မီ Youdao ဖွင့်; 64-bit «မတွဲဖက်နိုင်» အတွက် နောက်ဆုံး Youdao ထည့်, သို့မဟုတ် YodaoDict.api ကို Acrobat ၏ plug_ins သို့ copy; scan အတွက် OCR ပါဝါဖမ်းယူ သုံး.",
  "scene": "Acrobat 64-bit, ရွေးချယ်ခြင်း ဘာမှမလုပ်, «YodaoDict.api load မလုပ်နိုင်» → protected mode ပိတ် + .api ကို plug_ins သို့ copy က ပြန်ကောင်း."
 },
 "浏览器划词": {
  "cat": "app တွဲဖက်နိုင်မှု",
  "name": "Chrome / browser တွင် ရွေးချယ်/ဖမ်းယူ ပျက်",
  "alias": "chrome edge firefox browser ရွေးချယ် ဖမ်းယူ extension plugin hardware acceleration 360 adblock",
  "trigger": "web page များတွင် မဖမ်းယူ / ရွေးချယ် popup မရှိ, Notepad စသည် ပုံမှန်",
  "official": "Chrome / Firefox စသည်တို့က သီးခြား Youdao ဖမ်းယူ extension လို; တရားဝင် desktop ဗားရှင်းက «Chrome ဖမ်းယူ» ပေး.",
  "cause": "browser က ၎င်း၏ sandbox ကိုယ်ပိုင်: ① Youdao ဖမ်းယူ extension မရှိဘဲ global hook က DOM စာသား မဖတ်နိုင်; ② GPU hardware acceleration က စာမျက်နှာကို ဖတ်နိုင်သော layer မပါဘဲ texture render; ③ adblock / security toggle (ဥပမာ 360 browser) က ဖမ်းယူ ပိတ်ဆို့.",
  "fix": "သင့် browser အတွက် Youdao ဖမ်းယူ extension ထည့် (Youdao setting သို့မဟုတ် store မှ); browser setting တွင် «hardware acceleration သုံး» ပိတ်ပြီး ပြန်စ; 360 browser တွင် adblock ပိတ်.",
  "scene": "Chrome တွင် ရွေးချယ်ခြင်း ဘာမှမလုပ်; Youdao extension ထည့်ခြင်းက ပြင်; website အချို့ acceleration texture ကြောင့် ဆက်ပျက် - acceleration ပိတ်."
 },
 "截图翻译": {
  "cat": "ဖြတ်လမ်း",
  "name": "screenshot / area OCR ဘာသာပြန် အလုပ်မလုပ်",
  "alias": "screenshot area ocr သိ quick ocr ဖြတ်လမ်း ctrl alt o area ဘာသာပြန်",
  "trigger": "screenshot-recognize hotkey ဘာမှမလုပ် / စာသားမသိ",
  "official": "screenshot OCR အတွက် သတ်မှတ်ထားသော screenshot-recognize hotkey (ဥပမာ Ctrl+Alt+O) နှင့် download လုပ်ထားသော OCR module လို; screen area ကို ဆွဲ၍ ရွေးချယ်.",
  "cause": "screenshot OCR က text layer မလို - ရွေးချယ်ထားသော area ကို ပုံဖြင့်သိ, ထို့ကြောင့် download OCR module + အားသော hotkey + (macOS) pixel ဖတ်ရန် screen recording ခွင့်ပြုချက်လို.",
  "fix": "setting → ဖြတ်လမ်း, «OCR screenshot» အတွက် ပဋိပက္ခမရှိသော key သတ်မှတ်; ပထမသုံးစဉ် OCR module download; macOS တွင် «Screen Recording» ပေး; သိမှု ပျက်လျှင် ပိုကြည်လင်သော area ရွေး.",
  "scene": "hotkey ဘာမှမလုပ် → များသောအားဖြင့် screenshot tool က key ယူ; ပေါင်းစပ်ပြောင်းခြင်းက ပြန်ကောင်း."
 },
 "快捷键冲突": {
  "cat": "ဖြတ်လမ်း",
  "name": "ဖမ်းယူ / screenshot ဖြတ်လမ်း ပဋိပက္ခ",
  "alias": "ဖြတ်လမ်း hotkey ပဋိပက္ခ ယူခံ ctrl screenshot tool input method qq",
  "trigger": "ဖမ်းယူ / screenshot key ဘာမှမလုပ်, သို့မဟုတ် «system က ယူပြီးပြီ»",
  "official": "ဖမ်းယူ / ရွေးချယ် / screenshot-recognize အားလုံး ဖြတ်လမ်းတွင် စိတ်ကြိုက်ပြင်နိုင်; ပဋိပက္ခတွင် သတိပေး, rebind သို့မဟုတ် reset နိုင်.",
  "cause": "global ဖြတ်လမ်းက အရင်လာ-အရင်ရ: screenshot tool, input method, QQ / WeChat သို့မဟုတ် အခြားအဘိဓာန် က တူသော ပေါင်းစပ်ကို ကိုင်နိုင်, ထို့ကြောင့် Youdao key ဘာမှမလုပ်.",
  "fix": "setting → ဖြတ်လမ်း, ပဋိပက္ခသတိပေးချက်ကြည့်; Ctrl+Shift+စာလုံး / Alt+စာလုံး ကဲ့သို့ ရှားသော ပေါင်းစပ်သို့ပြောင်း; တရားခံရှာရန် key-ကိုင် app များ တစ်ခုစီ ပိတ်.",
  "scene": "screenshot tool အသစ်ထည့်ပြီးနောက် ဖမ်းယူ key သေ → Youdao သို့မဟုတ် tool ၏ key rebind."
 },
 "macOS权限": {
  "cat": "ခွင့်ပြုချက်များ",
  "name": "macOS ဖမ်းယူ / ဖြတ်လမ်း authorization လို",
  "alias": "mac macos ခွင့်ပြုချက် accessibility screen recording authorize privacy",
  "trigger": "macOS တွင် ဖမ်းယူနှင့် ဖြတ်လမ်း သေ, အထူးသဖြင့် system update ပြီးနောက်",
  "official": "macOS က Youdao ကို «Accessibility» (ဖြတ်လမ်း စောင့်ကြည့် / ထိန်းချုပ်) နှင့် «Screen Recording» (ဖမ်းယူ / screenshot အတွက် screen ဖတ်) ကို System Settings → Privacy & Security တွင် ပေးရမည်.",
  "cause": "macOS sandbox က ရှင်းလင်းသော ခွင့်ပြုချက်တောင်း: «Accessibility» မပါဘဲ global ဖြတ်လမ်းမကြား, «Screen Recording» မပါဘဲ pixel မဖတ်; update များက မကြာခဏ နှစ်ခုလုံး reset.",
  "fix": "System Settings → Privacy & Security → «Accessibility» နှင့် «Screen Recording» တွင် Youdao check ပြီး ပြန်စ; macOS update တိုင်းနောက် ပြန်ပေး.",
  "scene": "macOS update ပြီးနောက် ဖမ်းယူ လုံးဝသေ → ခွင့်ပြုချက်များ reset; နှစ်ခုလုံး ပြန်check က ပြန်ကောင်း."
 },
 "管理员权限": {
  "cat": "ခွင့်ပြုချက်များ",
  "name": "elevated app တွင် မဖမ်းယူ (UAC)",
  "alias": "administrator uac elevated အုပ်ချုပ်ရေး Run as administrator အခွင့်ထူးအဆင့် task manager",
  "trigger": "ပုံမှန် app များ ကောင်းစွာဖမ်းယူ; «administrator အဖြစ်လည်ပတ်» app တစ်ခု မ",
  "official": "Windows တွင်, အချို့ကိစ္စတွင် elevated app များတွင် ဖမ်းယူရန် Youdao «administrator အဖြစ်လည်ပတ်» လို.",
  "cause": "Windows integrity level (UAC) က process များ ခွဲ: ပုံမှန်အခွင့်အရေး hook က high-integrity (administrator) process ထဲ inject မလုပ်နိုင် ဆန့်ကျင်လည်း, ထို့ကြောင့် «ထို app သာ မဖမ်းယူ».",
  "fix": "Youdao ကို right-click «Run as administrator» target ၏ အခွင့်ထူးအဆင့် ကိုက်ညီစေရန်; သို့မဟုတ် အမြဲ administrator အဖြစ်လည်ပတ်ရန် သတ်မှတ် (compatibility property).",
  "scene": "administrator အဖြစ်လည်ပတ်သော dev tool / remote window တွင် မဖမ်းယူ → Youdao ကို administrator အဖြစ်လည်ပတ်ခြင်းက ပြန်ကောင်း."
 },
 "弹窗飞走": {
  "cat": "rendering / display",
  "name": "multi-monitor / high DPI တွင် popup ဖန်သားပြင်ပြင်ပ",
  "alias": "multi-monitor dual screen high dpi scaling popup ဖန်သားပြင်ပြင်ပ window pin 4k laptop",
  "trigger": "multi-monitor / high DPI တွင် ဖမ်းယူ popup က မမြင်ရသောနေရာတွင် ပေါ်",
  "official": "ဖမ်းယူ setting က ဘာသာပြန် popup ကို သတ်မှတ်ထားသောနေရာတွင် ပင်ရန် «window position pin» ပေး.",
  "cause": "per-screen DPI scaling ကွဲပြားသောအခါ, popup coordinate များကို scale မှားဖြင့် တွက်, ထို့ကြောင့် ဖန်သားပြင်ပြင်ပ သို့မဟုတ် မမြင်ရသော monitor သို့ «ပျံ».",
  "fix": "ဖမ်းယူ setting တွင် «window position pin» check ပြီး main screen ၏ ဘယ်ဘက်အပေါ်ထောင့်တွင်ထား; screen scaling တူညီအောင်ထား; လိုလျှင် coordinate refresh ရန် Youdao ပြန်စ.",
  "scene": "ပြင်ပ 4K + scale မတူ laptop, ဖမ်းယူတွင် «အသံရှိ ဒါပေမဲ့ window မရှိ» → window position pin က ဖြေရှင်း."
 },
 "64位": {
  "cat": "app တွဲဖက်နိုင်မှု",
  "name": "64-bit app / system ဖမ်းယူ တွဲဖက်နိုင်မှု",
  "alias": "64-bit x64 မတွဲဖက်နိုင်သော plug-in acrobat bitness 32-bit တွဲဖက်နိုင်",
  "trigger": "64-bit Acrobat / app များတွင် ဖမ်းယူ ပျက် သို့မဟုတ် မတွဲဖက်နိုင်သော plug-in report",
  "official": "Youdao desktop ဗားရှင်းက 64-bit တွဲဖက်နိုင်ပြီး 64-bit system များတွင် ဖန်သားပြင်ဖမ်းယူ ပံ့ပိုး; ဟောင်းသောဗားရှင်းများက အချို့ 64-bit app များ၏ plug-in နှင့် မတွဲဖက်နိုင်နိုင်.",
  "cause": "32/64-bit hook DLL များ မရောစပ်: ဟောင်း Youdao ၏ injection component က 64-bit host (ဥပမာ 64-bit Acrobat) နှင့် မကိုက်, ထို့ကြောင့် host က load ငြင်းပြီး «မတွဲဖက်နိုင်သော plug-in» report.",
  "fix": "နောက်ဆုံး Youdao သို့ update (64-bit ဖမ်းယူ component ဖြင့်); 64-bit Acrobat ဆက်ပျက်လျှင်, ကိုက်ညီသော YodaoDict.api ကို ၎င်း၏ plug_ins သို့ copy ပြီး Youdao ကို administrator အဖြစ်လည်ပတ်.",
  "scene": "64-bit Acrobat သို့ upgrade ပြီးနောက် ရွေးချယ်ခြင်းသေ → နောက်ဆုံး Youdao ထည့်ခြင်းက ပြန်ကောင်း."
 },
 "绿色版": {
  "cat": "network / installation",
  "name": "portable / ပေါ့ပါး ဗားရှင်း မဖမ်းယူ",
  "alias": "portable ပေါ့ပါး တရားဝင်မဟုတ် ဖမ်းယူ pdf hook dll register အစိမ်း",
  "trigger": "third-party «portable / ပေါ့ပါး» Youdao တွင် PDF / global ဖမ်းယူ အလုပ်မလုပ်",
  "official": "တရားဝင်ဖော်ပြ: တရားဝင်မဟုတ်သော «portable» Youdao ဗားရှင်းများက PDF ကို မှန်ကန်စွာ မဖမ်းယူနိုင် - နောက်ဆုံး တရားဝင် standard ဗားရှင်း ထည့်.",
  "cause": "ဖန်သားပြင်ဖမ်းယူ က ထည့်စဉ် system သို့ register လုပ်သော ဖမ်းယူ-hook / plug-in component များအပေါ်မူတည်; portable ဗားရှင်းများက «မထည့်ဘဲ» အတွက် ၎င်းတို့ကို ဖယ် သို့မဟုတ် မregister, ထို့ကြောင့် global / PDF ဖမ်းယူ သေ.",
  "fix": "portable ဗားရှင်း uninstall ပြီး site မှ နောက်ဆုံး တရားဝင် standard Youdao ထည့် (overwrite) ဖမ်းယူ component များ မှန်ကန်စွာ register ဖြစ်စေရန်.",
  "scene": "အဆင်ပြေရန် portable ဗားရှင်းယူ, PDF ဖမ်းယူ ဘယ်တော့မှ မအလုပ်လုပ် → တရားဝင်ဗားရှင်းက ပြန်ကောင်း."
 },
 "全屏取词": {
  "cat": "rendering / display",
  "name": "full screen / game တွင် ဖမ်းယူ ပျက်",
  "alias": "full screen game exclusive full screen hook ပျက် video",
  "trigger": "full-screen app / game / exclusive full-screen video တွင် ဖမ်းယူ ဘာမှမလုပ်",
  "official": "full screen (အထူးသဖြင့် exclusive) တွင် global capture hook ပျက်နိုင် - windowed mode သို့မဟုတ် screenshot OCR သုံး.",
  "cause": "exclusive full screen က ပုံမှန် window composition ကို ကျော်ပြီး input/render ယူ, ထို့ကြောင့် global hook က event / စာသား မရ ပြီး full screen တွင် ဖမ်းယူသေ.",
  "fix": "app ကို «windowed / borderless window» သို့ပြောင်း; သို့မဟုတ် full-screen အကြောင်းအရာအတွက် hover ဖမ်းယူအစား screenshot OCR (area ရွေး) သုံး.",
  "scene": "exclusive full-screen game တွင် မဖမ်းယူ → borderless window, သို့မဟုတ် screenshot OCR သုံး."
 },
 "取词慢": {
  "cat": "network / installation",
  "name": "ဖမ်းယူ နှေး / တစ်ခါတစ်ရံ မတုံ့ပြန်",
  "alias": "ဖမ်းယူ နှေး lag delay မတုံ့ပြန် network speed online",
  "trigger": "ဖမ်းယူ အလုပ်လုပ် ဒါပေမဲ့ popup နှေး, တစ်ခါတစ်ရံ မရှိ",
  "official": "ဖန်သားပြင်ဖမ်းယူ အမြန်နှုန်းက network အပေါ်မူတည်; ပုံမှန် network တွင် တုံ့ပြန်မှု ပုံမှန် 1 စက္ကန့်အောက်.",
  "cause": "online အဓိပ္ပာယ်များက network query လို, ထို့ကြောင့် network တုန်ခါ / နှေး DNS က popup နှောင့်နှေး; OCR ဖမ်းယူ က local လည်းသိ, ထို့ကြောင့် မပြင်ဆင်သော module နှေး သို့မဟုတ် ၎င်း fallback ပျက်.",
  "fix": "ပိုတည်ငြိမ်သော network စစ် / ပြောင်း; network call လျှော့ရန် အသုံးများသောစကားလုံးအတွက် local enhanced အဘိဓာန် ဖွင့်; OCR module download စစ်; လိုလျှင် Youdao ပြန်စ.",
  "scene": "အားနည်းသော network တွင် ဖမ်းယူ စက္ကန့်အတော်ကြာ → network ပြောင်း / local အဘိဓာန်ဖွင့်က သိသိသာသာ မြန်."
 },
 "扫描件取词": {
  "cat": "rendering / display",
  "name": "scan / ပုံ မဖမ်းယူနိုင်",
  "alias": "scan ပုံ ပုံ pdf ocr ပါဝါဖမ်းယူ screenshot text layer မပါ သိ",
  "trigger": "ပုံ / scan PDF တွင် ဖမ်းယူ ဘာမှမလုပ်",
  "official": "ပုံ / scan တွင် text layer မရှိ, ထို့ကြောင့် ရိုးရိုးဖမ်းယူက မဖတ် - ပုံဖြင့်သိရန် «OCR ပါဝါဖမ်းယူ» ဖွင့်.",
  "cause": "ရိုးရိုးဖမ်းယူက app ၏ text buffer ဖတ်; scan / ပုံတွင် pixel သာ, character encoding မပါ, ထို့ကြောင့် ဖမ်းယူရန်ဘာမှမရှိ - ပုံကို OCR ဖြင့် စာသားပြောင်းရမည်.",
  "fix": "setting → ဖမ်းယူနှင့် ရွေးချယ်, «software အားလုံးအတွက် OCR ပါဝါဖမ်းယူ» check ပြီး OCR module download; သို့မဟုတ် area တွင် screenshot OCR သုံး; သိမှု ပျက်လျှင် ပိုကြည်လင်သော မူရင်းသုံး.",
  "scene": "scan လုပ်ထားသော စက္ကူ PDF မရွေးနိုင် → OCR ပါဝါဖမ်းယူဖွင့်ခြင်းက သိနိုင်စေ."
 },
 "输入法冲突": {
  "cat": "ဖြတ်လမ်း",
  "name": "input method / အခြား software က key ခိုး",
  "alias": "input method sogou pinyin key ခိုး ctrl ယူခံ ပဋိပက္ခ အခြားအဘိဓာန်",
  "trigger": "ဖမ်းယူ trigger (ဥပမာ Ctrl) ကို input method / အခြား app က ယူ",
  "official": "trigger (ဥပမာ Ctrl) ကို အခြား software က ယူလျှင်, ဖမ်းယူ preempt ခံပြီး ဘာမှမလုပ်; ဖမ်းယူ trigger ပြောင်း.",
  "cause": "ဖမ်းယူက မကြာခဏ Ctrl / F key များဖြင့် trigger; input method, အခြားအဘိဓာန် နှင့် clipboard tool များက တူသော key နားထောင်နိုင်, အရင်register သူ တုံ့ပြန်, ထို့ကြောင့် Youdao ဖမ်းယူ «ခိုးခံရ».",
  "fix": "Youdao ဖမ်းယူ trigger ကို ပိုထူးခြားသော ပေါင်းစပ် / hover သို့ပြောင်း; သို့မဟုတ် ပဋိပက္ခ app ၏ ဖြတ်လမ်း ချိန်; သူခိုးရှာရန် သံသယ app များ တစ်ခုစီ ပိတ်.",
  "scene": "clipboard tool ထည့်ပြီးနောက် Ctrl ဖမ်းယူ သေ → Youdao trigger ပြောင်းခြင်းက ပြန်ကောင်း."
 }
};
window.LABELS = {"miss": "ဤလက္ခဏာ စာရင်းမရှိ. အခြား keyword စမ်းပါ (ဖမ်းယူ / pdf / ရွေးချယ် / ဖြတ်လမ်း) သို့မဟုတ် အောက်ဇယားအပြည့်အစုံကြည့်ပါ.", "codeword": ""};
window.FIELDS = [["trigger", "ဘယ်အချိန်ဖြစ်"], ["official", "L1 လက္ခဏာ / တရားဝင်နေရာ"], ["cause", "L2 အရင်းခံအကြောင်းရင်း"], ["fix", "မည်သို့စစ်ဆေး / ဖြေရှင်း"], ["scene", "တကယ့်အမှု"]];
window.THEAD = ["လက္ခဏာ", "အုပ်စု", "L1 လက္ခဏာ / တရားဝင်နေရာ", "L2 အရင်းခံအကြောင်းရင်း"];
