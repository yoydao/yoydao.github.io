window.CODES = {
 "取词失效": {
  "cat": "Enable / settings",
  "name": "Screen capture dead overall",
  "alias": "capture screen capture not working no response hover lookup dead 取词",
  "trigger": "Right after install / update, hover or the capture key does nothing at all",
  "official": "Screen capture needs Youdao running in the background with capture enabled; the official desktop build offers smart capture / clipboard capture / OCR capture.",
  "cause": "Screen capture relies on a global hook injected into the foreground app to read its text - it needs the Youdao process running + the master capture switch on + the trigger key matching the chosen mode. Miss one and it looks \"totally dead\", often mistaken for broken software.",
  "fix": "Check the tray icon is active (grey = not running, double-click to start); Settings -> Capture & Select, tick \"enable capture\" and pick the mode (hover / hold Ctrl); restart Youdao and retry.",
  "scene": "Youdao didn't auto-start, no tray icon -> capture never responds; starting it manually fixes it."
 },
 "划词不弹窗": {
  "cat": "Enable / settings",
  "name": "Select-to-translate shows no popup",
  "alias": "select translate no popup selection 划词 not translating highlight",
  "trigger": "Selecting a phrase brings up no translation popup",
  "official": "Select-to-translate needs \"select\" enabled with \"auto-translate on selection\" ticked; it can translate on selection or on a key.",
  "cause": "Select and capture are separate switches: many enable capture but not select, or turn off \"auto-translate on selection\", hence \"selecting shows nothing\"; the select hotkey may also be taken.",
  "fix": "Settings -> Capture & Select, tick \"enable select-translate\" and \"auto-translate on selection\"; if it's key-triggered, confirm that hotkey is free; in-browser select also needs the capture extension.",
  "scene": "No response in PDF / web but a popup in Notepad -> usually that app's compatibility (extension / protected mode), not the select switch."
 },
 "Word取词": {
  "cat": "App compatibility",
  "name": "Word / Office capture & select fails",
  "alias": "word office excel capture select sentence add-in com education 365 plugin",
  "trigger": "After installing / switching Office (esp. Education, 365), Word / Excel can't translate a selection",
  "official": "Youdao integrates with Office via a COM add-in for select / sentence translation; if the add-in is disabled or unregistered it fails.",
  "cause": "Office disables third-party COM add-ins for compatibility or by policy; switching versions (e.g. a fresh Education build) leaves the old add-in unregistered for the new Office, so \"it used to work, now it doesn't\".",
  "fix": "Word: File -> Options -> Add-ins -> bottom \"Manage: COM Add-ins\" -> Go -> tick the Youdao add-in; if not, reinstall Youdao to re-register it; make sure Youdao and Office bitness match.",
  "scene": "After a new Education Office, select-translate dies and the add-in is listed but unticked -> enabling it restores it."
 },
 "PDF取词": {
  "cat": "App compatibility",
  "name": "PDF / Acrobat capture fails",
  "alias": "pdf acrobat reader capture select yodaodict.api protected mode plug_ins autotray scanned",
  "trigger": "Adobe Acrobat / Reader: selecting in a PDF does nothing, or \"can't load plug-in\"",
  "official": "Official builds support PDF screen capture in Adobe Reader / Acrobat; unofficial \"portable\" builds can't do PDF capture, and the PDF must be text, not an image.",
  "cause": "Three causes: (1) Acrobat \"protected mode\" is a sandbox blocking third-party YodaoDict.api injection; (2) 64-bit Acrobat vs an old Youdao plug-in bitness mismatch throws \"incompatible plug-in\"; (3) the PDF is a scan (image, no text layer).",
  "fix": "Turn off Acrobat's Edit -> Preferences -> Security (Enhanced) -> \"Enable protected mode at startup\", open Youdao before Acrobat; for the 64-bit \"incompatible\" prompt, install the latest Youdao, or copy YodaoDict.api into Acrobat's plug_ins; for scans use OCR power capture.",
  "scene": "64-bit Acrobat, select does nothing, \"can't load YodaoDict.api\" -> turning off protected mode + copying .api into plug_ins restores it."
 },
 "浏览器划词": {
  "cat": "App compatibility",
  "name": "Chrome / browser select & capture fails",
  "alias": "chrome edge firefox browser select capture extension plugin hardware acceleration 360 adblock",
  "trigger": "Can't capture on web pages / no select popup, while Notepad etc. are fine",
  "official": "Chrome / Firefox etc. need a separate Youdao capture extension; the official desktop build offers \"Chrome capture\".",
  "cause": "The browser is its own sandbox: (1) no Youdao capture extension, so the global hook can't read page DOM text; (2) GPU hardware acceleration renders the page to a texture with no readable layer; (3) ad-block / security toggles (e.g. 360 browser) block capture.",
  "fix": "Install the Youdao capture extension for your browser (via Youdao settings or the store); turn off \"use hardware acceleration\" in browser settings and restart; turn off the 360 browser ad-block toggle.",
  "scene": "Chrome select does nothing; installing the Youdao extension fixes it; a few sites still fail due to hardware-accel textures - turn acceleration off."
 },
 "截图翻译": {
  "cat": "Hotkeys",
  "name": "Screenshot / region OCR translate not working",
  "alias": "screenshot region ocr capture image recognize quick ocr hotkey ctrl alt o area translate",
  "trigger": "The screenshot-recognize hotkey does nothing / no text recognized",
  "official": "Screenshot OCR needs a screenshot-recognize hotkey set (e.g. Ctrl+Alt+O) and the OCR module downloaded; you drag-select a screen region.",
  "cause": "Screenshot OCR doesn't need a text layer - it image-recognizes the selected region, so it needs the OCR module downloaded + a free hotkey + (macOS) Screen Recording permission to read the pixels.",
  "fix": "Settings -> Hotkeys, set a non-conflicting key for \"OCR screenshot\"; download the OCR module on first use; on macOS grant \"Screen Recording\"; pick a sharper region if recognition is off.",
  "scene": "Hotkey does nothing -> usually a screenshot tool took the key; changing the combo restores it."
 },
 "快捷键冲突": {
  "cat": "Hotkeys",
  "name": "Capture / screenshot hotkey conflict",
  "alias": "hotkey shortcut conflict taken ctrl screenshot tool input method qq occupied",
  "trigger": "The capture / screenshot key does nothing, or \"already taken by the system\"",
  "official": "Capture / select / screenshot-recognize are all customizable in Hotkeys; on a conflict it warns, and you can rebind or reset to default.",
  "cause": "Global hotkeys are first-come-first-served: a screenshot tool, input method, QQ / WeChat, or another dictionary may hold the same combo, so Youdao's key does nothing.",
  "fix": "Settings -> Hotkeys, watch for the conflict prompt; switch to a rarer combo like Ctrl+Shift+letter / Alt+letter; temporarily close other key-holding apps one by one to find the culprit.",
  "scene": "After installing a new screenshot tool the capture key dies -> rebind Youdao's key or the tool's."
 },
 "macOS权限": {
  "cat": "Permissions",
  "name": "macOS capture / hotkeys need authorization",
  "alias": "mac macos permission accessibility screen recording authorize privacy",
  "trigger": "Capture and hotkeys all dead on macOS, especially after a system update",
  "official": "macOS needs Youdao granted \"Accessibility\" (to monitor hotkeys / control) and \"Screen Recording\" (to read the screen for capture / screenshot) under System Settings -> Privacy & Security.",
  "cause": "The macOS sandbox requires explicit grants: without \"Accessibility\" it can't hear global hotkeys, without \"Screen Recording\" it can't read screen pixels; updates often reset both.",
  "fix": "System Settings -> Privacy & Security -> tick Youdao under both \"Accessibility\" and \"Screen Recording\" and restart Youdao; re-grant after each macOS update.",
  "scene": "After a macOS update capture is fully dead -> permissions were reset; re-ticking both restores it."
 },
 "管理员权限": {
  "cat": "Permissions",
  "name": "Can't capture inside an elevated app (UAC)",
  "alias": "admin uac elevated administrator run as admin privilege level task manager",
  "trigger": "Normal apps capture fine; one \"run as administrator\" app won't",
  "official": "On Windows, some cases need Youdao \"run as administrator\" to capture inside elevated apps.",
  "cause": "Windows integrity levels (UAC) isolate processes: a normal-rights hook can't inject into a high-integrity (admin) process and vice versa, hence \"only that app won't capture\".",
  "fix": "Right-click Youdao \"Run as administrator\" to match the target's privilege level; or set Youdao to always run as admin (compatibility property).",
  "scene": "Can't capture inside an admin-run dev tool / remote window -> running Youdao as admin restores it."
 },
 "弹窗飞走": {
  "cat": "Rendering / display",
  "name": "Multi-monitor / high-DPI popup off-screen",
  "alias": "multi-monitor dual screen high dpi scaling popup off-screen pin window 4k laptop",
  "trigger": "On multi-monitor / high-DPI the capture popup appears somewhere invisible",
  "official": "Capture settings offer \"pin window position\" to fix the translation popup at a set spot.",
  "cause": "When per-screen DPI scaling differs, the popup coordinates are computed with the wrong scale, so it \"flies\" off-screen or to an unseen monitor.",
  "fix": "Tick \"pin window position\" in capture settings and put the popup at the primary screen's top-left; keep screen scaling consistent; restart Youdao to refresh coordinates if needed.",
  "scene": "External 4K + laptop at different scaling, capture has \"a sound but no window\" -> pin window position solves it."
 },
 "64位": {
  "cat": "App compatibility",
  "name": "64-bit app / system capture compatibility",
  "alias": "64-bit x64 incompatible plug-in acrobat bitness 32-bit compatible",
  "trigger": "Capture fails or reports an incompatible plug-in inside 64-bit Acrobat / apps",
  "official": "The Youdao desktop build is 64-bit compatible and supports screen capture on 64-bit systems; older builds may be incompatible with a few 64-bit apps' plug-ins.",
  "cause": "32/64-bit hook DLLs don't mix: an old Youdao's injection component doesn't match a 64-bit host (e.g. 64-bit Acrobat), so the host refuses to load it and reports \"incompatible plug-in\".",
  "fix": "Upgrade to the latest Youdao (with the 64-bit capture component); for 64-bit Acrobat still failing, copy the matching YodaoDict.api into its plug_ins and run Youdao as admin.",
  "scene": "After upgrading to 64-bit Acrobat select dies -> installing the latest Youdao restores it."
 },
 "绿色版": {
  "cat": "Network / install",
  "name": "Portable / lite build can't capture",
  "alias": "portable lite build unofficial capture pdf hook dll register green",
  "trigger": "On a third-party \"portable / lite\" Youdao, PDF / global capture won't work",
  "official": "Officially stated: unofficial \"portable\" Youdao builds can't do PDF capture properly - install the latest official standard build.",
  "cause": "Screen capture depends on the capture-hook / plug-in components registered to the system at install; portable builds drop or skip registering them for \"no-install\", so global / PDF capture simply dies.",
  "fix": "Uninstall the portable build and install the latest official standard Youdao from the site (overwrite) so the capture components register properly.",
  "scene": "Grabbed a portable build for convenience, PDF capture never works -> the official build restores it."
 },
 "全屏取词": {
  "cat": "Rendering / display",
  "name": "Capture fails in fullscreen / games",
  "alias": "fullscreen game exclusive fullscreen mode hook fails video",
  "trigger": "Capture does nothing in fullscreen apps / games / exclusive-fullscreen video",
  "official": "Under fullscreen (especially exclusive fullscreen) the global capture hook may fail - use windowed mode or screenshot OCR.",
  "cause": "Exclusive fullscreen bypasses normal window composition and takes over input/rendering, so the global hook gets no events / text and capture dies in fullscreen.",
  "fix": "Switch the app to \"windowed / borderless window\"; or use screenshot OCR (drag-select a region) instead of hover capture for fullscreen content.",
  "scene": "Can't capture in exclusive-fullscreen games -> use borderless window, or screenshot OCR."
 },
 "取词慢": {
  "cat": "Network / install",
  "name": "Capture slow / intermittently unresponsive",
  "alias": "capture slow lag latency unresponsive network speed online",
  "trigger": "Capture works but the popup is slow, sometimes none",
  "official": "Screen capture speed depends on the network; on a normal network the response is usually under 1 second.",
  "cause": "Online definitions need a network query, so network jitter / slow DNS delays the popup; OCR capture also does local recognition, so a not-ready module is slow or its fallback fails.",
  "fix": "Check / switch to a steadier network; enable the local enhanced dictionary for common words to cut network calls; confirm the OCR module is downloaded; restart Youdao if needed.",
  "scene": "Capture takes several seconds on a weak network -> switching networks / enabling the local dictionary speeds it up noticeably."
 },
 "扫描件取词": {
  "cat": "Rendering / display",
  "name": "Scanned / image can't be captured",
  "alias": "scanned image image pdf ocr power capture screenshot no text layer recognize",
  "trigger": "Capture does nothing on images / scanned PDFs",
  "official": "Images / scans have no text layer, so plain screen capture can't read them - enable \"OCR power capture\" to image-recognize.",
  "cause": "Plain screen capture reads the app's text buffer; a scan / image has only pixels, no character encoding, so there's nothing to capture - you must OCR the image into text.",
  "fix": "Settings -> Capture & Select, tick \"OCR power capture for all software\" and download the OCR module; or use screenshot OCR on a region; use a sharper original if recognition is off.",
  "scene": "A scanned paper PDF won't select -> enabling OCR power capture makes it recognizable."
 },
 "输入法冲突": {
  "cat": "Hotkeys",
  "name": "Input method / other software steals the key",
  "alias": "input method sogou pinyin steal key ctrl occupied conflict other dictionary",
  "trigger": "The capture trigger (e.g. Ctrl) is grabbed by the input method / another app",
  "official": "If the trigger (e.g. Ctrl) is taken by other software, capture gets preempted and does nothing; change the capture trigger.",
  "cause": "Capture often triggers on Ctrl / F keys; input methods, other dictionaries and clipboard tools may listen on the same key, and whoever registers first responds, so Youdao's capture is \"stolen\".",
  "fix": "Change Youdao's capture trigger to a more unique combo / to hover; or adjust the conflicting app's hotkey; quit suspicious apps one by one to find the thief.",
  "scene": "After installing a clipboard tool, Ctrl-capture dies -> changing Youdao's trigger restores it."
 }
};
window.LABELS = {"miss": "Not listed - try another keyword (capture / pdf / select / hotkey) or see the full table below.", "codeword": ""};
window.FIELDS = [["trigger", "When it shows up"], ["official", "L1 symptom / official positioning"], ["cause", "L2 root cause"], ["fix", "How to fix"], ["scene", "Real case"]];
window.THEAD = ["Symptom", "Bucket", "L1 symptom / official positioning", "L2 root cause"];
