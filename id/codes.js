window.CODES = {
 "取词失效": {
  "cat": "Aktivasi / pengaturan",
  "name": "Tangkap layar mati keseluruhan",
  "alias": "tangkap tangkap layar tidak berfungsi tanpa respons arahkan kursor capture 取词",
  "trigger": "Tepat setelah instal / pembaruan, arahkan kursor atau tombol tangkap tak melakukan apa pun",
  "official": "Tangkap layar butuh Youdao di latar dengan tangkap aktif; versi desktop resmi menawarkan tangkap pintar / tangkap papan klip / tangkap OCR.",
  "cause": "Tangkap layar pakai hook global yang disuntik ke aplikasi depan untuk membaca teksnya: butuh proses Youdao jalan + sakelar utama tangkap aktif + tombol pemicu cocok. Bila satu hilang, tampak «mati total», sering dikira perangkat lunak rusak.",
  "fix": "Periksa ikon tray aktif (abu-abu = tak jalan, klik ganda untuk mulai); Pengaturan → Tangkap dan seleksi, centang «aktifkan tangkap» dan pilih mode (arahkan kursor / tahan Ctrl); mulai ulang Youdao dan coba lagi.",
  "scene": "Youdao tak mulai otomatis, tanpa ikon tray → tangkap tak pernah merespons; menjalankan manual memperbaiki."
 },
 "划词不弹窗": {
  "cat": "Aktivasi / pengaturan",
  "name": "Terjemah seleksi tak menampilkan popup",
  "alias": "seleksi terjemah tanpa popup 划词 seleksi sorot",
  "trigger": "Menyeleksi frasa tak membuka popup terjemahan",
  "official": "Terjemah seleksi butuh «seleksi» aktif dengan «terjemah saat seleksi» tercentang; bisa terjemah saat seleksi atau dengan tombol.",
  "cause": "Seleksi dan tangkap adalah sakelar terpisah: banyak mengaktifkan tangkap tapi bukan seleksi, atau mematikan «terjemah saat seleksi», maka «seleksi tak menampilkan apa pun»; pintasan seleksi juga bisa terpakai.",
  "fix": "Pengaturan → Tangkap dan seleksi, centang «aktifkan terjemah seleksi» dan «terjemah saat seleksi»; jika dengan tombol, pastikan tombol itu bebas; seleksi dalam browser juga butuh ekstensi tangkap.",
  "scene": "Tak ada respons di PDF / web tapi popup di Notepad → biasanya kompatibilitas aplikasi itu (ekstensi / mode terlindungi), bukan sakelar seleksi."
 },
 "Word取词": {
  "cat": "Kompatibilitas aplikasi",
  "name": "Tangkap/seleksi di Word / Office gagal",
  "alias": "word office excel tangkap seleksi kalimat add-in com education 365 plugin",
  "trigger": "Setelah instal / ganti Office (terutama Education, 365), Word / Excel tak menerjemahkan seleksi",
  "official": "Youdao terintegrasi dengan Office via add-in COM untuk terjemah seleksi / kalimat; bila add-in dinonaktifkan atau tak terdaftar, gagal.",
  "cause": "Office menonaktifkan add-in COM pihak ketiga demi kompatibilitas atau kebijakan; ganti versi (mis. Education baru) membuat add-in lama tak terdaftar untuk Office baru, maka «dulu bisa, sekarang tidak».",
  "fix": "Word: File → Opsi → Add-in → bawah «Kelola: Add-in COM» → Buka → centang add-in Youdao; jika tidak, instal ulang Youdao untuk mendaftarkannya lagi; pastikan bitness Youdao dan Office cocok.",
  "scene": "Setelah Office Education baru terjemah seleksi mati dan add-in terdaftar tapi tak tercentang → mengaktifkannya memulihkan."
 },
 "PDF取词": {
  "cat": "Kompatibilitas aplikasi",
  "name": "Tangkap di PDF / Acrobat gagal",
  "alias": "pdf acrobat reader tangkap seleksi yodaodict.api mode terlindungi plug_ins autotray pindaian",
  "trigger": "Adobe Acrobat / Reader: seleksi di PDF tak ada respons, atau «tidak bisa memuat plugin»",
  "official": "Versi resmi mendukung tangkap layar PDF di Adobe Reader / Acrobat; versi «portabel» tak resmi tak bisa menangkap PDF, dan PDF harus teks, bukan gambar.",
  "cause": "Tiga penyebab: ① «mode terlindungi» Acrobat adalah sandbox yang memblokir injeksi YodaoDict.api pihak ketiga; ② ketaksesuaian bitness antara Acrobat 64-bit dan add-in Youdao lama memberi «plugin tidak kompatibel»; ③ PDF adalah pindaian (gambar, tanpa lapisan teks).",
  "fix": "Matikan di Acrobat Edit → Preferensi → Keamanan (lanjutan) → «Aktifkan mode terlindungi saat mulai», buka Youdao sebelum Acrobat; untuk peringatan «tidak kompatibel» 64-bit, pasang Youdao terbaru, atau salin YodaoDict.api ke plug_ins Acrobat; untuk pindaian pakai OCR tangkap kuat.",
  "scene": "Acrobat 64-bit, seleksi tak ada respons, «tidak bisa memuat YodaoDict.api» → mematikan mode terlindungi + menyalin .api ke plug_ins memulihkan."
 },
 "浏览器划词": {
  "cat": "Kompatibilitas aplikasi",
  "name": "Seleksi/tangkap di Chrome / browser gagal",
  "alias": "chrome edge firefox browser seleksi tangkap ekstensi plugin akselerasi perangkat keras 360 adblock",
  "trigger": "Tak menangkap di halaman web / tanpa popup seleksi, sedang Notepad dll. bisa",
  "official": "Chrome / Firefox dll. butuh ekstensi tangkap Youdao terpisah; versi desktop resmi menawarkan «tangkap Chrome».",
  "cause": "Browser adalah sandbox sendiri: ① tanpa ekstensi tangkap Youdao, hook global tak bisa membaca teks DOM; ② akselerasi perangkat keras GPU merender halaman jadi tekstur tanpa lapisan terbaca; ③ sakelar adblock / keamanan (mis. browser 360) memblokir tangkap.",
  "fix": "Pasang ekstensi tangkap Youdao untuk browser Anda (via pengaturan Youdao atau toko); matikan «gunakan akselerasi perangkat keras» di pengaturan browser dan mulai ulang; matikan adblock di browser 360.",
  "scene": "Seleksi di Chrome tak ada respons; memasang ekstensi Youdao memperbaiki; beberapa situs masih gagal karena tekstur akselerasi - matikan akselerasi."
 },
 "截图翻译": {
  "cat": "Pintasan",
  "name": "OCR tangkapan/area tak berfungsi",
  "alias": "tangkapan layar area ocr kenali quick ocr pintasan ctrl alt o terjemah area",
  "trigger": "Pintasan kenali tangkapan tak melakukan apa pun / tak ada teks dikenali",
  "official": "OCR tangkapan butuh pintasan kenali tangkapan terset (mis. Ctrl+Alt+O) dan modul OCR terunduh; Anda menyeleksi area layar dengan menyeret.",
  "cause": "OCR tangkapan tak butuh lapisan teks - mengenali area terpilih via gambar, jadi butuh modul OCR terunduh + pintasan bebas + (macOS) izin perekaman layar untuk membaca piksel.",
  "fix": "Pengaturan → Pintasan, tetapkan tombol tanpa konflik untuk «OCR tangkapan»; unduh modul OCR saat pertama pakai; di macOS beri «Perekaman Layar»; pilih area lebih tajam bila pengenalan gagal.",
  "scene": "Pintasan tak melakukan apa pun → biasanya alat tangkapan layar mengambil tombol; mengganti kombinasi memulihkan."
 },
 "快捷键冲突": {
  "cat": "Pintasan",
  "name": "Konflik pintasan tangkap / tangkapan layar",
  "alias": "pintasan konflik terpakai ctrl alat tangkapan metode masukan qq",
  "trigger": "Tombol tangkap / tangkapan layar tak melakukan apa pun, atau «sudah dipakai sistem»",
  "official": "Tangkap / seleksi / kenali tangkapan semua bisa dikustom di Pintasan; saat konflik memberi peringatan, dan Anda bisa mengganti atau mereset.",
  "cause": "Pintasan global siapa-dulu-dia-dapat: alat tangkapan, metode masukan, QQ / WeChat, atau kamus lain bisa memegang kombinasi sama, jadi tombol Youdao tak melakukan apa pun.",
  "fix": "Pengaturan → Pintasan, perhatikan peringatan konflik; ganti ke kombinasi lebih jarang seperti Ctrl+Shift+huruf / Alt+huruf; tutup aplikasi pemegang tombol satu per satu untuk menemukan pelaku.",
  "scene": "Setelah pasang alat tangkapan baru tombol tangkap mati → ganti tombol Youdao atau alat itu."
 },
 "macOS权限": {
  "cat": "Izin",
  "name": "macOS tangkap / pintasan butuh otorisasi",
  "alias": "mac macos izin aksesibilitas perekaman layar accessibility otorisasi privasi",
  "trigger": "Tangkap dan pintasan mati di macOS, terutama setelah pembaruan sistem",
  "official": "macOS harus memberi Youdao «Aksesibilitas» (memantau pintasan / mengontrol) dan «Perekaman Layar» (membaca layar untuk tangkap / tangkapan) di Pengaturan Sistem → Privasi dan Keamanan.",
  "cause": "Sandbox macOS menuntut izin eksplisit: tanpa «Aksesibilitas» tak mendengar pintasan global, tanpa «Perekaman Layar» tak membaca piksel; pembaruan sering mereset keduanya.",
  "fix": "Pengaturan Sistem → Privasi dan Keamanan → centang Youdao di «Aksesibilitas» dan «Perekaman Layar» lalu mulai ulang; beri ulang setelah tiap pembaruan macOS.",
  "scene": "Setelah pembaruan macOS tangkap mati total → izin tereset; mencentang ulang keduanya memulihkan."
 },
 "管理员权限": {
  "cat": "Izin",
  "name": "Tak bisa tangkap di aplikasi tinggi (UAC)",
  "alias": "admin uac tinggi administrator jalankan sebagai admin level privilese pengelola tugas",
  "trigger": "Aplikasi normal menangkap baik; satu aplikasi «dijalankan sebagai administrator» tidak",
  "official": "Di Windows, beberapa kasus butuh Youdao «dijalankan sebagai administrator» untuk menangkap di aplikasi tinggi.",
  "cause": "Level integritas Windows (UAC) mengisolasi proses: hook berhak normal tak bisa menyuntik ke proses integritas tinggi (administrator) dan sebaliknya, maka «hanya aplikasi itu tak menangkap».",
  "fix": "Klik kanan Youdao «Jalankan sebagai administrator» untuk menyamakan level privilese target; atau atur selalu jalan sebagai administrator (properti kompatibilitas).",
  "scene": "Tak menangkap di alat dev / jendela jarak jauh yang dijalankan sebagai administrator → menjalankan Youdao sebagai administrator memulihkan."
 },
 "弹窗飞走": {
  "cat": "Rendering / tampilan",
  "name": "Popup di luar layar pada multi-monitor / DPI tinggi",
  "alias": "multi-monitor layar ganda dpi tinggi penskalaan popup di luar layar kunci jendela 4k laptop",
  "trigger": "Pada multi-monitor / DPI tinggi popup tangkap muncul di tempat tak terlihat",
  "official": "Pengaturan tangkap menawarkan «kunci posisi jendela» untuk memaku popup terjemahan di titik tetap.",
  "cause": "Saat penskalaan DPI per layar berbeda, koordinat popup dihitung dengan skala salah, jadi «terbang» ke luar layar atau ke monitor tak terlihat.",
  "fix": "Centang «kunci posisi jendela» di pengaturan tangkap dan taruh di kiri atas layar utama; jaga penskalaan konsisten; mulai ulang Youdao untuk menyegarkan koordinat bila perlu.",
  "scene": "4K eksternal + laptop skala beda, tangkap punya «suara tapi tanpa jendela» → mengunci posisi jendela menyelesaikan."
 },
 "64位": {
  "cat": "Kompatibilitas aplikasi",
  "name": "Kompatibilitas tangkap aplikasi / sistem 64-bit",
  "alias": "64-bit x64 plugin tidak kompatibel acrobat bitness 32-bit kompatibel",
  "trigger": "Tangkap gagal atau melaporkan plugin tidak kompatibel di Acrobat / aplikasi 64-bit",
  "official": "Versi desktop Youdao kompatibel 64-bit dan mendukung tangkap layar di sistem 64-bit; versi lama bisa tidak kompatibel dengan plugin beberapa aplikasi 64-bit.",
  "cause": "DLL hook 32/64-bit tak bercampur: komponen injeksi Youdao lama tak cocok dengan host 64-bit (mis. Acrobat 64-bit), jadi host menolak memuat dan melaporkan «plugin tidak kompatibel».",
  "fix": "Perbarui ke Youdao terbaru (dengan komponen tangkap 64-bit); bila Acrobat 64-bit masih gagal, salin YodaoDict.api yang cocok ke plug_ins-nya dan jalankan Youdao sebagai administrator.",
  "scene": "Setelah naik ke Acrobat 64-bit seleksi mati → memasang Youdao terbaru memulihkan."
 },
 "绿色版": {
  "cat": "Jaringan / instalasi",
  "name": "Versi portabel / ringan tak menangkap",
  "alias": "portabel ringan tak resmi tangkap pdf hook dll daftar hijau",
  "trigger": "Pada Youdao «portabel / ringan» pihak ketiga, tangkap PDF / global tak berfungsi",
  "official": "Dinyatakan resmi: versi «portabel» tak resmi Youdao tak bisa menangkap PDF dengan benar - pasang versi standar resmi terbaru.",
  "cause": "Tangkap layar bergantung pada komponen hook / plugin yang terdaftar di sistem saat instal; versi portabel menghapus atau tak mendaftarkannya demi «tanpa instalasi», jadi tangkap global / PDF mati.",
  "fix": "Copot versi portabel dan pasang Youdao standar resmi terbaru dari situs (timpa) agar komponen tangkap terdaftar benar.",
  "scene": "Ambil versi portabel demi praktis, tangkap PDF tak pernah berfungsi → versi resmi memulihkan."
 },
 "全屏取词": {
  "cat": "Rendering / tampilan",
  "name": "Tangkap gagal di layar penuh / game",
  "alias": "layar penuh game layar penuh eksklusif hook gagal video",
  "trigger": "Tangkap tak melakukan apa pun di aplikasi layar penuh / game / video layar penuh eksklusif",
  "official": "Di layar penuh (terutama eksklusif) hook tangkap global bisa gagal - pakai mode jendela atau OCR tangkapan.",
  "cause": "Layar penuh eksklusif melewati komposisi jendela normal dan mengambil alih masukan/rendering, jadi hook global tak menerima event / teks dan tangkap mati di layar penuh.",
  "fix": "Ubah aplikasi ke «jendela / jendela tanpa bingkai»; atau pakai OCR tangkapan (seleksi area) alih-alih tangkap arahkan kursor untuk konten layar penuh.",
  "scene": "Tak menangkap di game layar penuh eksklusif → pakai jendela tanpa bingkai, atau OCR tangkapan."
 },
 "取词慢": {
  "cat": "Jaringan / instalasi",
  "name": "Tangkap lambat / sesekali tanpa respons",
  "alias": "tangkap lambat lag latensi tanpa respons jaringan kecepatan online",
  "trigger": "Tangkap berfungsi tapi popup lambat, kadang tak ada",
  "official": "Kecepatan tangkap layar bergantung jaringan; di jaringan normal respons biasanya di bawah 1 detik.",
  "cause": "Definisi online butuh kueri jaringan, jadi fluktuasi / DNS lambat menunda popup; OCR tangkapan juga mengenali lokal, jadi modul belum siap lambat atau fallback-nya gagal.",
  "fix": "Periksa / pindah ke jaringan lebih stabil; aktifkan kamus lokal yang diperkuat untuk kata umum demi kurangi panggilan jaringan; pastikan modul OCR terunduh; mulai ulang Youdao bila perlu.",
  "scene": "Tangkap perlu beberapa detik di jaringan lemah → pindah jaringan / aktifkan kamus lokal mempercepat jelas."
 },
 "扫描件取词": {
  "cat": "Rendering / tampilan",
  "name": "Tak bisa menangkap pindaian / gambar",
  "alias": "pindaian gambar pdf gambar ocr tangkap kuat tangkapan tanpa lapisan teks kenali",
  "trigger": "Tangkap tak melakukan apa pun pada gambar / PDF pindaian",
  "official": "Gambar / pindaian tanpa lapisan teks, jadi tangkap biasa tak membacanya - aktifkan «OCR tangkap kuat» untuk mengenali via gambar.",
  "cause": "Tangkap biasa membaca buffer teks aplikasi; pindaian / gambar hanya piksel, tanpa enkoding karakter, jadi tak ada yang ditangkap - Anda harus OCR gambar jadi teks.",
  "fix": "Pengaturan → Tangkap dan seleksi, centang «OCR tangkap kuat untuk semua perangkat lunak» dan unduh modul OCR; atau pakai OCR tangkapan pada area; pakai asli lebih tajam bila pengenalan gagal.",
  "scene": "PDF kertas terpindai tak terseleksi → mengaktifkan OCR tangkap kuat membuatnya dikenali."
 },
 "输入法冲突": {
  "cat": "Pintasan",
  "name": "Metode masukan / perangkat lunak lain mencuri tombol",
  "alias": "metode masukan sogou pinyin curi tombol ctrl terpakai konflik kamus lain",
  "trigger": "Pemicu tangkap (mis. Ctrl) diambil oleh metode masukan / aplikasi lain",
  "official": "Bila pemicu (mis. Ctrl) terpakai perangkat lunak lain, tangkap dipreempsi dan tak melakukan apa pun; ganti pemicu tangkap.",
  "cause": "Tangkap sering terpicu tombol Ctrl / F; metode masukan, kamus lain, dan alat papan klip bisa mendengarkan tombol sama, dan yang mendaftar dulu merespons, jadi tangkap Youdao «dicuri».",
  "fix": "Ganti pemicu tangkap Youdao ke kombinasi lebih unik / ke arahkan kursor; atau sesuaikan pintasan aplikasi yang konflik; tutup aplikasi mencurigakan satu per satu untuk menemukan pencuri.",
  "scene": "Setelah pasang alat papan klip, tangkap dengan Ctrl mati → mengganti pemicu Youdao memulihkan."
 }
};
window.LABELS = {"miss": "Gejala tidak terdaftar. Coba kata kunci lain (tangkap / pdf / seleksi / pintasan) atau lihat tabel lengkap di bawah.", "codeword": ""};
window.FIELDS = [["trigger", "Kapan muncul"], ["official", "Gejala L1 / posisi resmi"], ["cause", "Akar penyebab L2"], ["fix", "Cara periksa / selesaikan"], ["scene", "Kasus nyata"]];
window.THEAD = ["Gejala", "Kelompok", "Gejala L1 / posisi resmi", "Akar penyebab L2"];
