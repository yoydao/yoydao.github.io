window.CODES = {
 "取词失效": {
  "cat": "Pengaktifan / tetapan",
  "name": "Tangkap skrin mati keseluruhan",
  "alias": "tangkap tangkap skrin tak berfungsi tiada tindak balas hover capture 取词",
  "trigger": "Sebaik selepas pasang / kemas kini, hover atau kekunci tangkap tak buat apa-apa",
  "official": "Tangkap skrin perlu Youdao di latar dengan tangkap diaktifkan; versi desktop rasmi menawarkan tangkap pintar / tangkap papan keratan / tangkap OCR.",
  "cause": "Tangkap skrin guna cangkuk global yang disuntik ke aplikasi hadapan untuk baca teksnya: perlu proses Youdao berjalan + suis utama tangkap hidup + kekunci pencetus padan. Jika satu hilang, nampak «mati sepenuhnya», sering disangka perisian rosak.",
  "fix": "Semak ikon dulang aktif (kelabu = tak berjalan, klik dua kali untuk mula); Tetapan → Tangkap dan pilihan, tanda «aktifkan tangkap» dan pilih mod (hover / tahan Ctrl); mulakan semula Youdao dan cuba lagi.",
  "scene": "Youdao tak mula sendiri, tiada ikon dulang → tangkap tak pernah tindak balas; jalankan manual membaikinya."
 },
 "划词不弹窗": {
  "cat": "Pengaktifan / tetapan",
  "name": "Terjemah pilihan tak papar pop-up",
  "alias": "pilihan terjemah tiada pop-up 划词 pilihan serlah",
  "trigger": "Memilih frasa tak buka pop-up terjemahan",
  "official": "Terjemah pilihan perlu «pilihan» aktif dengan «terjemah semasa memilih» ditanda; boleh terjemah semasa memilih atau dengan kekunci.",
  "cause": "Pilihan dan tangkap ialah suis berasingan: ramai aktifkan tangkap tetapi bukan pilihan, atau matikan «terjemah semasa memilih», maka «memilih tak papar apa-apa»; pintasan pilihan juga boleh diambil.",
  "fix": "Tetapan → Tangkap dan pilihan, tanda «aktifkan terjemah pilihan» dan «terjemah semasa memilih»; jika dengan kekunci, sahkan kekunci itu kosong; pilihan dalam pelayar juga perlu sambungan tangkap.",
  "scene": "Tiada tindak balas dalam PDF / web tetapi pop-up dalam Notepad → biasanya keserasian aplikasi itu (sambungan / mod terlindung), bukan suis pilihan."
 },
 "Word取词": {
  "cat": "Keserasian aplikasi",
  "name": "Tangkap/pilihan dalam Word / Office gagal",
  "alias": "word office excel tangkap pilihan ayat tambahan com education 365 pemalam",
  "trigger": "Selepas pasang / tukar Office (terutama Education, 365), Word / Excel tak terjemah pilihan",
  "official": "Youdao bersepadu dengan Office melalui tambahan COM untuk terjemah pilihan / ayat; jika tambahan dilumpuhkan atau tak berdaftar, gagal.",
  "cause": "Office melumpuhkan tambahan COM pihak ketiga atas keserasian atau dasar; tukar versi (cth. Education baru) tinggalkan tambahan lama tak berdaftar untuk Office baru, maka «dulu boleh, sekarang tidak».",
  "fix": "Word: Fail → Pilihan → Tambahan → bawah «Urus: Tambahan COM» → Pergi → tanda tambahan Youdao; jika tidak, pasang semula Youdao untuk daftarkannya semula; pastikan bitness Youdao dan Office padan.",
  "scene": "Selepas Office Education baru terjemah pilihan mati dan tambahan tersenarai tetapi tak ditanda → mengaktifkannya memulihkannya."
 },
 "PDF取词": {
  "cat": "Keserasian aplikasi",
  "name": "Tangkap dalam PDF / Acrobat gagal",
  "alias": "pdf acrobat reader tangkap pilihan yodaodict.api mod terlindung plug_ins autotray imbasan",
  "trigger": "Adobe Acrobat / Reader: memilih dalam PDF tak buat apa-apa, atau «tak boleh muat pemalam»",
  "official": "Versi rasmi menyokong tangkap skrin PDF dalam Adobe Reader / Acrobat; versi «mudah alih» tak rasmi tak boleh tangkap PDF, dan PDF mesti teks, bukan imej.",
  "cause": "Tiga punca: ① «mod terlindung» Acrobat ialah kotak pasir yang menyekat suntikan YodaoDict.api pihak ketiga; ② ketidakpadanan bitness antara Acrobat 64-bit dan tambahan Youdao lama beri «pemalam tak serasi»; ③ PDF ialah imbasan (imej, tanpa lapisan teks).",
  "fix": "Matikan dalam Acrobat Edit → Keutamaan → Keselamatan (lanjutan) → «Aktifkan mod terlindung semasa mula», buka Youdao sebelum Acrobat; untuk amaran «tak serasi» 64-bit, pasang Youdao terkini, atau salin YodaoDict.api ke plug_ins Acrobat; untuk imbasan guna OCR tangkap kuat.",
  "scene": "Acrobat 64-bit, memilih tak buat apa-apa, «tak boleh muat YodaoDict.api» → matikan mod terlindung + salin .api ke plug_ins memulihkannya."
 },
 "浏览器划词": {
  "cat": "Keserasian aplikasi",
  "name": "Pilihan/tangkap dalam Chrome / pelayar gagal",
  "alias": "chrome edge firefox pelayar pilihan tangkap sambungan pemalam pecutan perkakasan 360 adblock",
  "trigger": "Tak tangkap pada halaman web / tiada pop-up pilihan, sementara Notepad dll. boleh",
  "official": "Chrome / Firefox dll. perlu sambungan tangkap Youdao berasingan; versi desktop rasmi menawarkan «tangkap Chrome».",
  "cause": "Pelayar ialah kotak pasir sendiri: ① tanpa sambungan tangkap Youdao, cangkuk global tak boleh baca teks DOM; ② pecutan perkakasan GPU me-render halaman jadi tekstur tanpa lapisan boleh baca; ③ suis adblock / keselamatan (cth. pelayar 360) menyekat tangkap.",
  "fix": "Pasang sambungan tangkap Youdao untuk pelayar anda (melalui tetapan Youdao atau gedung); matikan «guna pecutan perkakasan» dalam tetapan pelayar dan mulakan semula; matikan adblock dalam pelayar 360.",
  "scene": "Pilihan dalam Chrome tak buat apa-apa; pasang sambungan Youdao membaikinya; beberapa tapak masih gagal kerana tekstur pecutan - matikan pecutan."
 },
 "截图翻译": {
  "cat": "Pintasan",
  "name": "OCR tangkapan/kawasan tak berfungsi",
  "alias": "tangkapan skrin kawasan ocr cam quick ocr pintasan ctrl alt o terjemah kawasan",
  "trigger": "Pintasan cam tangkapan tak buat apa-apa / tiada teks dicam",
  "official": "OCR tangkapan perlu pintasan cam tangkapan ditetapkan (cth. Ctrl+Alt+O) dan modul OCR dimuat turun; anda pilih kawasan skrin dengan seret.",
  "cause": "OCR tangkapan tak perlu lapisan teks - ia mengecam kawasan dipilih melalui imej, jadi perlu modul OCR dimuat turun + pintasan kosong + (macOS) kebenaran rakaman skrin untuk baca piksel.",
  "fix": "Tetapan → Pintasan, umpukkan kekunci tanpa konflik untuk «OCR tangkapan»; muat turun modul OCR semasa guna pertama; pada macOS beri «Rakaman Skrin»; pilih kawasan lebih jelas jika camnya gagal.",
  "scene": "Pintasan tak buat apa-apa → biasanya alat tangkapan skrin mengambil kekunci; tukar gabungan memulihkannya."
 },
 "快捷键冲突": {
  "cat": "Pintasan",
  "name": "Konflik pintasan tangkap / tangkapan skrin",
  "alias": "pintasan konflik diambil ctrl alat tangkapan kaedah input qq",
  "trigger": "Kekunci tangkap / tangkapan skrin tak buat apa-apa, atau «sudah diambil sistem»",
  "official": "Tangkap / pilihan / cam tangkapan semua boleh disuai dalam Pintasan; semasa konflik ia beri amaran, dan anda boleh umpuk semula atau set semula.",
  "cause": "Pintasan global ialah siapa-dulu-dia-dapat: alat tangkapan, kaedah input, QQ / WeChat atau kamus lain boleh pegang gabungan sama, jadi kekunci Youdao tak buat apa-apa.",
  "fix": "Tetapan → Pintasan, perhati amaran konflik; tukar ke gabungan lebih jarang seperti Ctrl+Shift+huruf / Alt+huruf; tutup aplikasi pemegang kekunci satu demi satu untuk cari punca.",
  "scene": "Selepas pasang alat tangkapan baru kekunci tangkap mati → umpuk semula kekunci Youdao atau alat itu."
 },
 "macOS权限": {
  "cat": "Kebenaran",
  "name": "macOS tangkap / pintasan perlu kebenaran",
  "alias": "mac macos kebenaran kebolehcapaian rakaman skrin accessibility benarkan privasi",
  "trigger": "Tangkap dan pintasan mati pada macOS, terutama selepas kemas kini sistem",
  "official": "macOS mesti beri Youdao «Kebolehcapaian» (pantau pintasan / kawal) dan «Rakaman Skrin» (baca skrin untuk tangkap / tangkapan) dalam Tetapan Sistem → Privasi dan Keselamatan.",
  "cause": "Kotak pasir macOS menuntut kebenaran nyata: tanpa «Kebolehcapaian» tak dengar pintasan global, tanpa «Rakaman Skrin» tak baca piksel; kemas kini sering set semula kedua-duanya.",
  "fix": "Tetapan Sistem → Privasi dan Keselamatan → tanda Youdao dalam «Kebolehcapaian» dan «Rakaman Skrin» dan mulakan semula; beri semula selepas setiap kemas kini macOS.",
  "scene": "Selepas kemas kini macOS tangkap mati sepenuhnya → kebenaran diset semula; tanda semula kedua-duanya memulihkannya."
 },
 "管理员权限": {
  "cat": "Kebenaran",
  "name": "Tak tangkap dalam aplikasi tinggi (UAC)",
  "alias": "pentadbir uac tinggi administrator jalankan sebagai admin tahap keistimewaan pengurus tugas",
  "trigger": "Aplikasi biasa tangkap baik; satu aplikasi «dijalankan sebagai pentadbir» tidak",
  "official": "Pada Windows, sesetengah kes perlu Youdao «dijalankan sebagai pentadbir» untuk tangkap dalam aplikasi tinggi.",
  "cause": "Tahap integriti Windows (UAC) mengasingkan proses: cangkuk hak biasa tak boleh menyuntik ke proses integriti tinggi (pentadbir) dan sebaliknya, maka «hanya aplikasi itu tak tangkap».",
  "fix": "Klik kanan Youdao «Jalankan sebagai pentadbir» untuk samakan tahap keistimewaan sasaran; atau set ia sentiasa jalan sebagai pentadbir (sifat keserasian).",
  "scene": "Tak tangkap dalam alat dev / tetingkap jauh yang dijalankan sebagai pentadbir → jalankan Youdao sebagai pentadbir memulihkannya."
 },
 "弹窗飞走": {
  "cat": "Pemaparan / paparan",
  "name": "Pop-up luar skrin pada berbilang monitor / DPI tinggi",
  "alias": "berbilang monitor skrin berkembar dpi tinggi penskalaan pop-up luar skrin pin tetingkap 4k komputer riba",
  "trigger": "Pada berbilang monitor / DPI tinggi pop-up tangkap muncul di tempat tak nampak",
  "official": "Tetapan tangkap menawarkan «pin kedudukan tetingkap» untuk memaku pop-up terjemahan di titik tetap.",
  "cause": "Apabila penskalaan DPI setiap skrin berbeza, koordinat pop-up dikira dengan skala salah, jadi ia «terbang» keluar skrin atau ke monitor tak nampak.",
  "fix": "Tanda «pin kedudukan tetingkap» dalam tetapan tangkap dan letak di kiri atas skrin utama; kekalkan penskalaan konsisten; mulakan semula Youdao untuk segar semula koordinat jika perlu.",
  "scene": "4K luaran + komputer riba pada skala berbeza, tangkap ada «bunyi tetapi tiada tetingkap» → pin kedudukan tetingkap menyelesaikannya."
 },
 "64位": {
  "cat": "Keserasian aplikasi",
  "name": "Keserasian tangkap aplikasi / sistem 64-bit",
  "alias": "64-bit x64 pemalam tak serasi acrobat bitness 32-bit serasi",
  "trigger": "Tangkap gagal atau lapor pemalam tak serasi dalam Acrobat / aplikasi 64-bit",
  "official": "Versi desktop Youdao serasi 64-bit dan menyokong tangkap skrin pada sistem 64-bit; versi lama mungkin tak serasi dengan pemalam sesetengah aplikasi 64-bit.",
  "cause": "DLL cangkuk 32/64-bit tak bercampur: komponen suntikan Youdao lama tak padan dengan hos 64-bit (cth. Acrobat 64-bit), jadi hos enggan muat dan lapor «pemalam tak serasi».",
  "fix": "Kemas kini ke Youdao terkini (dengan komponen tangkap 64-bit); jika Acrobat 64-bit masih gagal, salin YodaoDict.api padanan ke plug_ins-nya dan jalankan Youdao sebagai pentadbir.",
  "scene": "Selepas naik taraf ke Acrobat 64-bit pilihan mati → pasang Youdao terkini memulihkannya."
 },
 "绿色版": {
  "cat": "Rangkaian / pemasangan",
  "name": "Versi mudah alih / ringan tak tangkap",
  "alias": "mudah alih ringan tak rasmi tangkap pdf cangkuk dll daftar hijau",
  "trigger": "Pada Youdao «mudah alih / ringan» pihak ketiga, tangkap PDF / global tak berfungsi",
  "official": "Dinyatakan rasmi: versi «mudah alih» tak rasmi Youdao tak boleh tangkap PDF dengan betul - pasang versi standard rasmi terkini.",
  "cause": "Tangkap skrin bergantung pada komponen cangkuk / pemalam yang didaftar ke sistem semasa pasang; versi mudah alih buang atau tak daftarkannya demi «tanpa pemasangan», jadi tangkap global / PDF mati.",
  "fix": "Nyahpasang versi mudah alih dan pasang Youdao standard rasmi terkini dari tapak (tindih) supaya komponen tangkap mendaftar betul.",
  "scene": "Ambil versi mudah alih demi mudah, tangkap PDF tak pernah berfungsi → versi rasmi memulihkannya."
 },
 "全屏取词": {
  "cat": "Pemaparan / paparan",
  "name": "Tangkap gagal pada skrin penuh / permainan",
  "alias": "skrin penuh permainan skrin penuh eksklusif cangkuk gagal video",
  "trigger": "Tangkap tak buat apa-apa dalam aplikasi skrin penuh / permainan / video skrin penuh eksklusif",
  "official": "Pada skrin penuh (terutama eksklusif) cangkuk tangkap global mungkin gagal - guna mod tetingkap atau OCR tangkapan.",
  "cause": "Skrin penuh eksklusif memintas komposisi tetingkap biasa dan mengambil alih input/pemaparan, jadi cangkuk global tak terima peristiwa / teks dan tangkap mati pada skrin penuh.",
  "fix": "Tukar aplikasi ke «tetingkap / tetingkap tanpa bingkai»; atau guna OCR tangkapan (pilih kawasan) bukannya tangkap hover untuk kandungan skrin penuh.",
  "scene": "Tak tangkap dalam permainan skrin penuh eksklusif → guna tetingkap tanpa bingkai, atau OCR tangkapan."
 },
 "取词慢": {
  "cat": "Rangkaian / pemasangan",
  "name": "Tangkap perlahan / kadangkala tiada tindak balas",
  "alias": "tangkap perlahan lag latensi tiada tindak balas rangkaian kelajuan dalam talian",
  "trigger": "Tangkap berfungsi tetapi pop-up perlahan, kadangkala tiada",
  "official": "Kelajuan tangkap skrin bergantung rangkaian; pada rangkaian biasa tindak balas biasanya bawah 1 saat.",
  "cause": "Takrif dalam talian perlu pertanyaan rangkaian, jadi turun naik / DNS perlahan melengahkan pop-up; OCR tangkapan juga mengecam tempatan, jadi modul belum sedia perlahan atau sandarannya gagal.",
  "fix": "Semak / tukar ke rangkaian lebih stabil; aktifkan kamus tempatan dipertingkat untuk perkataan lazim bagi kurangkan panggilan rangkaian; sahkan modul OCR dimuat turun; mulakan semula Youdao jika perlu.",
  "scene": "Tangkap ambil beberapa saat pada rangkaian lemah → tukar rangkaian / aktifkan kamus tempatan mempercepatkannya jelas."
 },
 "扫描件取词": {
  "cat": "Pemaparan / paparan",
  "name": "Tak boleh tangkap imbasan / imej",
  "alias": "imbasan imej pdf imej ocr tangkap kuat tangkapan tanpa lapisan teks cam",
  "trigger": "Tangkap tak buat apa-apa pada imej / PDF imbasan",
  "official": "Imej / imbasan tiada lapisan teks, jadi tangkap biasa tak membacanya - aktifkan «OCR tangkap kuat» untuk cam melalui imej.",
  "cause": "Tangkap biasa membaca penimbal teks aplikasi; imbasan / imej hanya piksel, tanpa pengekodan aksara, jadi tiada apa untuk ditangkap - anda mesti OCR imej jadi teks.",
  "fix": "Tetapan → Tangkap dan pilihan, tanda «OCR tangkap kuat untuk semua perisian» dan muat turun modul OCR; atau guna OCR tangkapan pada kawasan; guna asal lebih jelas jika camnya gagal.",
  "scene": "PDF kertas terimbas tak boleh dipilih → aktifkan OCR tangkap kuat menjadikannya boleh dicam."
 },
 "输入法冲突": {
  "cat": "Pintasan",
  "name": "Kaedah input / perisian lain mencuri kekunci",
  "alias": "kaedah input sogou pinyin curi kekunci ctrl diambil konflik kamus lain",
  "trigger": "Pencetus tangkap (cth. Ctrl) diambil oleh kaedah input / aplikasi lain",
  "official": "Jika pencetus (cth. Ctrl) diambil perisian lain, tangkap dipratempah dan tak buat apa-apa; tukar pencetus tangkap.",
  "cause": "Tangkap sering dicetus kekunci Ctrl / F; kaedah input, kamus lain dan alat papan keratan boleh dengar kekunci sama, dan yang daftar dulu bertindak balas, jadi tangkap Youdao «dicuri».",
  "fix": "Tukar pencetus tangkap Youdao ke gabungan lebih unik / ke hover; atau laraskan pintasan aplikasi yang konflik; tutup aplikasi disyaki satu demi satu untuk cari pencuri.",
  "scene": "Selepas pasang alat papan keratan, tangkap dengan Ctrl mati → tukar pencetus Youdao memulihkannya."
 }
};
window.LABELS = {"miss": "Gejala tak disenarai. Cuba kata kunci lain (tangkap / pdf / pilihan / pintasan) atau lihat jadual penuh di bawah.", "codeword": ""};
window.FIELDS = [["trigger", "Bila berlaku"], ["official", "Gejala L1 / kedudukan rasmi"], ["cause", "Punca asas L2"], ["fix", "Cara semak / selesai"], ["scene", "Kes sebenar"]];
window.THEAD = ["Gejala", "Kumpulan", "Gejala L1 / kedudukan rasmi", "Punca asas L2"];
