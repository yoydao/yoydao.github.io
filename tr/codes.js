window.CODES = {
 "取词失效": {
  "cat": "Etkinleştirme / ayarlar",
  "name": "Ekran yakalama genel olarak ölü",
  "alias": "yakalama ekran yakalama çalışmıyor yanıt yok üzerine gelme capture 取词",
  "trigger": "Kurulum / güncellemeden hemen sonra, üzerine gelme veya yakalama tuşu hiçbir şey yapmaz",
  "official": "Ekran yakalama, yakalama etkin olarak Youdao'nun arka planda olmasını gerektirir; resmi masaüstü sürümü akıllı yakalama / pano yakalama / OCR yakalama sunar.",
  "cause": "Ekran yakalama, ön plandaki uygulamanın metnini okumak için enjekte edilen küresel kancayı kullanır: çalışan Youdao süreci + etkin ana yakalama anahtarı + eşleşen tetikleyici tuş gerekir. Biri eksikse «tamamen ölü» görünür, sık sık bozuk yazılım sanılır.",
  "fix": "Tepsi simgesinin etkin olduğunu kontrol edin (gri = çalışmıyor, başlatmak için çift tıklayın); Ayarlar → Yakalama ve seçim, «yakalamayı etkinleştir»i işaretleyip modu seçin (üzerine gelme / Ctrl basılı); Youdao'yu yeniden başlatıp tekrar deneyin.",
  "scene": "Youdao otomatik başlamadı, tepsi simgesi yok → yakalama hiç yanıt vermez; elle başlatmak düzeltir."
 },
 "划词不弹窗": {
  "cat": "Etkinleştirme / ayarlar",
  "name": "Seçim çevirisi açılır göstermez",
  "alias": "seçim çevir açılır yok 划词 seçim vurgula",
  "trigger": "Bir ifadeyi seçmek çeviri açılırı açmaz",
  "official": "Seçim çevirisi, «seçimde otomatik çevir» işaretli «seçim»in etkin olmasını gerektirir; seçimde veya tuşla çevirebilir.",
  "cause": "Seçim ve yakalama ayrı anahtarlardır: çoğu yakalamayı etkinleştirir ama seçimi değil, ya da «seçimde otomatik çevir»i kapatır, dolayısıyla «seçim hiçbir şey göstermez»; seçim kısayolu da alınmış olabilir.",
  "fix": "Ayarlar → Yakalama ve seçim, «seçim çevirisini etkinleştir» ve «seçimde otomatik çevir»i işaretleyin; tuşla ise o tuşun boş olduğunu doğrulayın; tarayıcı içi seçim de yakalama uzantısını gerektirir.",
  "scene": "PDF / web'de yanıt yok ama Not Defteri'nde açılır → genelde o uygulamanın uyumluluğu (uzantı / korumalı mod), seçim anahtarı değil."
 },
 "Word取词": {
  "cat": "Uygulama uyumluluğu",
  "name": "Word / Office'te yakalama/seçim başarısız",
  "alias": "word office excel yakalama seçim cümle eklenti com education 365 plugin",
  "trigger": "Office (özellikle Education, 365) kurulduktan / değiştikten sonra, Word / Excel seçimi çevirmez",
  "official": "Youdao, seçim / cümle çevirisi için COM eklentisiyle Office'e entegre olur; eklenti devre dışı veya kayıtsızsa başarısız olur.",
  "cause": "Office, uyumluluk veya politika gereği üçüncü taraf COM eklentilerini devre dışı bırakır; sürüm değiştirmek (ör. yeni Education) eski eklentiyi yeni Office için kayıtsız bırakır, dolayısıyla «eskiden çalışırdı, şimdi olmuyor».",
  "fix": "Word: Dosya → Seçenekler → Eklentiler → altta «Yönet: COM Eklentileri» → Git → Youdao eklentisini işaretleyin; olmazsa yeniden kaydetmek için Youdao'yu yeniden kurun; Youdao ve Office bit boyutunun eşleştiğinden emin olun.",
  "scene": "Yeni Education Office'ten sonra seçim çevirisi ölür ve eklenti listede ama işaretsiz → etkinleştirmek geri getirir."
 },
 "PDF取词": {
  "cat": "Uygulama uyumluluğu",
  "name": "PDF / Acrobat'ta yakalama başarısız",
  "alias": "pdf acrobat reader yakalama seçim yodaodict.api korumalı mod plug_ins autotray tarama",
  "trigger": "Adobe Acrobat / Reader: PDF'de seçim hiçbir şey yapmaz, ya da «eklenti yüklenemiyor»",
  "official": "Resmi sürümler Adobe Reader / Acrobat'ta PDF ekran yakalamayı destekler; resmi olmayan «taşınabilir» sürümler PDF yakalayamaz, ve PDF metin olmalı, görüntü değil.",
  "cause": "Üç neden: ① Acrobat «korumalı modu» üçüncü taraf YodaoDict.api enjeksiyonunu engelleyen bir kum havuzudur; ② 64-bit Acrobat ile eski Youdao eklentisi arasındaki bit uyumsuzluğu «uyumsuz eklenti» verir; ③ PDF bir taramadır (görüntü, metin katmansız).",
  "fix": "Acrobat'ta Düzen → Tercihler → Güvenlik (geliştirilmiş) → «Başlangıçta korumalı modu etkinleştir»i kapatın, Youdao'yu Acrobat'tan önce açın; 64-bit «uyumsuz» uyarısı için en yeni Youdao'yu kurun, ya da YodaoDict.api'yi Acrobat'ın plug_ins'ine kopyalayın; taramalar için güçlü OCR yakalama kullanın.",
  "scene": "Acrobat 64-bit, seçim hiçbir şey yapmaz, «YodaoDict.api yüklenemiyor» → korumalı modu kapatma + .api'yi plug_ins'e kopyalama geri getirir."
 },
 "浏览器划词": {
  "cat": "Uygulama uyumluluğu",
  "name": "Chrome / tarayıcıda seçim/yakalama başarısız",
  "alias": "chrome edge firefox tarayıcı seçim yakalama uzantı plugin donanım hızlandırma 360 adblock",
  "trigger": "Web sayfalarında yakalanmaz / seçim açılırı yok, oysa Not Defteri vb. çalışır",
  "official": "Chrome / Firefox vb. ayrı bir Youdao yakalama uzantısı gerektirir; resmi masaüstü sürümü «Chrome yakalama» sunar.",
  "cause": "Tarayıcı kendi kum havuzudur: ① Youdao yakalama uzantısı olmadan küresel kanca DOM metnini okuyamaz; ② GPU donanım hızlandırması sayfayı okunabilir katman olmadan dokuya oluşturur; ③ adblock / güvenlik anahtarları (ör. 360 tarayıcı) yakalamayı engeller.",
  "fix": "Tarayıcınız için Youdao yakalama uzantısını kurun (Youdao ayarları veya mağaza); tarayıcı ayarlarında «donanım hızlandırmasını kullan»ı kapatıp yeniden başlatın; 360 tarayıcıda adblock'u kapatın.",
  "scene": "Chrome'da seçim hiçbir şey yapmaz; Youdao uzantısını kurmak düzeltir; birkaç site hâlâ hızlandırma dokuları yüzünden başarısız - hızlandırmayı kapatın."
 },
 "截图翻译": {
  "cat": "Kısayollar",
  "name": "Ekran görüntüsü / bölge OCR çevirisi çalışmıyor",
  "alias": "ekran görüntüsü bölge ocr tanı quick ocr kısayol ctrl alt o bölge çevir",
  "trigger": "Ekran görüntüsü tanıma kısayolu hiçbir şey yapmaz / metin tanınmaz",
  "official": "Ekran görüntüsü OCR'si ayarlı bir tanıma kısayolu (ör. Ctrl+Alt+O) ve indirilmiş OCR modülü gerektirir; bir ekran bölgesini sürükleyerek seçersiniz.",
  "cause": "Ekran görüntüsü OCR'si metin katmanı gerektirmez - seçilen bölgeyi görüntü ile tanır, dolayısıyla indirilmiş OCR modülü + boş bir kısayol + (macOS) pikselleri okumak için ekran kaydı izni gerekir.",
  "fix": "Ayarlar → Kısayollar, «OCR ekran görüntüsü»ne çakışmasız bir tuş atayın; ilk kullanımda OCR modülünü indirin; macOS'ta «Ekran Kaydı» verin; tanıma başarısızsa daha net bir bölge seçin.",
  "scene": "Kısayol hiçbir şey yapmaz → genelde bir ekran görüntüsü aracı tuşu almıştır; kombinasyonu değiştirmek geri getirir."
 },
 "快捷键冲突": {
  "cat": "Kısayollar",
  "name": "Yakalama / ekran görüntüsü kısayol çakışması",
  "alias": "kısayol çakışma alınmış ctrl ekran görüntüsü aracı giriş yöntemi qq",
  "trigger": "Yakalama / ekran görüntüsü tuşu hiçbir şey yapmaz, ya da «sistem tarafından alınmış»",
  "official": "Yakalama / seçim / ekran görüntüsü tanıma hepsi Kısayollar'da özelleştirilebilir; çakışmada uyarır, ve yeniden atayabilir veya sıfırlayabilirsiniz.",
  "cause": "Küresel kısayollar ilk gelen ilk alır: bir ekran görüntüsü aracı, giriş yöntemi, QQ / WeChat veya başka sözlük aynı kombinasyonu tutabilir, dolayısıyla Youdao tuşu hiçbir şey yapmaz.",
  "fix": "Ayarlar → Kısayollar, çakışma uyarısına dikkat; Ctrl+Shift+harf / Alt+harf gibi daha nadir bir kombinasyona geçin; tuş tutan uygulamaları teker teker kapatıp suçluyu bulun.",
  "scene": "Yeni bir ekran görüntüsü aracı kurulduktan sonra yakalama tuşu ölür → Youdao'nun ya da aracın tuşunu yeniden atayın."
 },
 "macOS权限": {
  "cat": "İzinler",
  "name": "macOS yakalama / kısayollar yetki gerektirir",
  "alias": "mac macos izin erişilebilirlik ekran kaydı accessibility yetki gizlilik",
  "trigger": "macOS'ta yakalama ve kısayollar ölü, özellikle sistem güncellemesinden sonra",
  "official": "macOS, Youdao'ya «Erişilebilirlik» (kısayolları izleme / kontrol) ve «Ekran Kaydı» (yakalama / ekran görüntüsü için ekranı okuma) iznini Sistem Ayarları → Gizlilik ve Güvenlik'te vermelidir.",
  "cause": "macOS kum havuzu açık izinler gerektirir: «Erişilebilirlik» olmadan küresel kısayolları duymaz, «Ekran Kaydı» olmadan pikselleri okumaz; güncellemeler ikisini de sık sıfırlar.",
  "fix": "Sistem Ayarları → Gizlilik ve Güvenlik → «Erişilebilirlik» ve «Ekran Kaydı»nda Youdao'yu işaretleyip yeniden başlatın; her macOS güncellemesinden sonra yeniden verin.",
  "scene": "macOS güncellemesinden sonra yakalama tamamen ölü → izinler sıfırlanmış; ikisini de yeniden işaretlemek geri getirir."
 },
 "管理员权限": {
  "cat": "İzinler",
  "name": "Yükseltilmiş uygulamada yakalanmaz (UAC)",
  "alias": "yönetici uac yükseltilmiş administrator yönetici olarak çalıştır ayrıcalık düzeyi görev yöneticisi",
  "trigger": "Normal uygulamalar iyi yakalar; «yönetici olarak çalıştırılan» bir uygulama yakalamaz",
  "official": "Windows'ta bazı durumlar yükseltilmiş uygulamalarda yakalamak için Youdao'nun «yönetici olarak çalıştırılması»nı gerektirir.",
  "cause": "Windows bütünlük düzeyleri (UAC) süreçleri yalıtır: normal haklı kanca yüksek bütünlüklü (yönetici) sürece enjekte edemez ve tersi, dolayısıyla «yalnızca o uygulama yakalamaz».",
  "fix": "Youdao'ya sağ tık «Yönetici olarak çalıştır» ile hedefin ayrıcalık düzeyini eşitleyin; ya da her zaman yönetici olarak çalışacak şekilde ayarlayın (uyumluluk özelliği).",
  "scene": "Yönetici olarak çalıştırılan bir geliştirme aracı / uzak pencerede yakalanmaz → Youdao'yu yönetici çalıştırmak geri getirir."
 },
 "弹窗飞走": {
  "cat": "Oluşturma / görüntü",
  "name": "Çoklu monitör / yüksek DPI'de açılır ekran dışı",
  "alias": "çoklu monitör çift ekran yüksek dpi ölçekleme açılır ekran dışı pencere sabitle 4k dizüstü",
  "trigger": "Çoklu monitör / yüksek DPI'de yakalama açılırı görünmez bir yerde belirir",
  "official": "Yakalama ayarları çeviri açılırını sabit bir noktaya sabitlemek için «pencere konumunu sabitle» sunar.",
  "cause": "Ekran başına DPI ölçeklemesi farklı olunca açılır koordinatları yanlış ölçekle hesaplanır, böylece ekran dışına ya da görünmez bir monitöre «uçar».",
  "fix": "Yakalama ayarlarında «pencere konumunu sabitle»yi işaretleyip ana ekranın sol üstüne koyun; ekran ölçeklemesini tutarlı tutun; gerekirse koordinatları yenilemek için Youdao'yu yeniden başlatın.",
  "scene": "Harici 4K + farklı ölçekli dizüstü, yakalamada «ses var ama pencere yok» → pencere konumunu sabitlemek çözer."
 },
 "64位": {
  "cat": "Uygulama uyumluluğu",
  "name": "64-bit uygulama / sistem yakalama uyumluluğu",
  "alias": "64-bit x64 uyumsuz eklenti acrobat bit boyutu 32-bit uyumlu",
  "trigger": "64-bit Acrobat / uygulamalarda yakalama başarısız veya uyumsuz eklenti bildirir",
  "official": "Youdao masaüstü sürümü 64-bit uyumludur ve 64-bit sistemlerde ekran yakalamayı destekler; eski sürümler bazı 64-bit uygulamaların eklentileriyle uyumsuz olabilir.",
  "cause": "32/64-bit kanca DLL'leri karışmaz: eski Youdao'nun enjeksiyon bileşeni 64-bit bir ana makineyle (ör. 64-bit Acrobat) eşleşmez, böylece ana makine yüklemeyi reddeder ve «uyumsuz eklenti» bildirir.",
  "fix": "En yeni Youdao'ya güncelleyin (64-bit yakalama bileşeniyle); 64-bit Acrobat hâlâ başarısızsa eşleşen YodaoDict.api'yi plug_ins'ine kopyalayıp Youdao'yu yönetici çalıştırın.",
  "scene": "64-bit Acrobat'a yükseltmeden sonra seçim ölür → en yeni Youdao'yu kurmak geri getirir."
 },
 "绿色版": {
  "cat": "Ağ / kurulum",
  "name": "Taşınabilir / hafif sürüm yakalayamaz",
  "alias": "taşınabilir hafif resmi olmayan yakalama pdf kanca dll kayıt yeşil",
  "trigger": "Üçüncü taraf «taşınabilir / hafif» Youdao'da PDF / küresel yakalama çalışmaz",
  "official": "Resmen belirtildi: resmi olmayan «taşınabilir» Youdao sürümleri PDF'yi düzgün yakalayamaz - en yeni resmi standart sürümü kurun.",
  "cause": "Ekran yakalama, kurulumda sisteme kaydedilen yakalama kanca / eklenti bileşenlerine bağlıdır; taşınabilir sürümler «kurulumsuz» için onları kaldırır veya kaydetmez, böylece küresel / PDF yakalama ölür.",
  "fix": "Taşınabilir sürümü kaldırıp siteden en yeni resmi standart Youdao'yu kurun (üzerine yazın) ki yakalama bileşenleri düzgün kaydedilsin.",
  "scene": "Kolaylık için taşınabilir sürüm alındı, PDF yakalama hiç çalışmaz → resmi sürüm geri getirir."
 },
 "全屏取词": {
  "cat": "Oluşturma / görüntü",
  "name": "Tam ekran / oyunlarda yakalama başarısız",
  "alias": "tam ekran oyun özel tam ekran kanca başarısız video",
  "trigger": "Tam ekran uygulamalar / oyunlar / özel tam ekran videoda yakalama hiçbir şey yapmaz",
  "official": "Tam ekranda (özellikle özel) küresel yakalama kancası başarısız olabilir - pencere modunu veya ekran görüntüsü OCR'sini kullanın.",
  "cause": "Özel tam ekran normal pencere bileşimini atlar ve girişi/oluşturmayı devralır, böylece küresel kanca olay / metin almaz ve tam ekranda yakalama ölür.",
  "fix": "Uygulamayı «pencere / kenarlıksız pencere»ye geçirin; ya da tam ekran içerik için üzerine gelme yakalama yerine ekran görüntüsü OCR'si (bölge seçin) kullanın.",
  "scene": "Özel tam ekran oyunlarda yakalanmaz → kenarlıksız pencere, ya da ekran görüntüsü OCR'si kullanın."
 },
 "取词慢": {
  "cat": "Ağ / kurulum",
  "name": "Yakalama yavaş / ara sıra yanıtsız",
  "alias": "yakalama yavaş gecikme yanıt yok ağ hız çevrimiçi",
  "trigger": "Yakalama çalışır ama açılır yavaş, bazen hiç",
  "official": "Ekran yakalama hızı ağa bağlıdır; normal ağda yanıt genellikle 1 saniyenin altındadır.",
  "cause": "Çevrimiçi tanımlar ağ sorgusu gerektirir, dolayısıyla ağ dalgalanmaları / yavaş DNS açılırı geciktirir; OCR yakalama ayrıca yerel tanır, dolayısıyla hazır olmayan modül yavaştır veya yedeği başarısız olur.",
  "fix": "Daha kararlı bir ağı kontrol edin / geçin; ağ çağrılarını azaltmak için yaygın kelimeler için yerel gelişmiş sözlüğü etkinleştirin; OCR modülünün indirildiğini doğrulayın; gerekirse Youdao'yu yeniden başlatın.",
  "scene": "Yakalama zayıf ağda birkaç saniye sürer → ağ değiştirmek / yerel sözlüğü etkinleştirmek belirgin hızlandırır."
 },
 "扫描件取词": {
  "cat": "Oluşturma / görüntü",
  "name": "Tarama / görüntü yakalanamaz",
  "alias": "tarama görüntü görüntü pdf ocr güçlü yakalama ekran görüntüsü metin katmanı yok tanı",
  "trigger": "Görüntüler / taranmış PDF'lerde yakalama hiçbir şey yapmaz",
  "official": "Görüntüler / taramalar metin katmanından yoksundur, dolayısıyla basit yakalama onları okumaz - görüntü ile tanımak için «güçlü OCR yakalama»yı etkinleştirin.",
  "cause": "Basit yakalama uygulamanın metin arabelleğini okur; tarama / görüntüde yalnızca piksel vardır, karakter kodlaması yoktur, böylece yakalanacak bir şey yoktur - görüntüyü OCR ile metne çevirmelisiniz.",
  "fix": "Ayarlar → Yakalama ve seçim, «tüm yazılımlar için güçlü OCR yakalama»yı işaretleyip OCR modülünü indirin; ya da bir bölgede ekran görüntüsü OCR'si kullanın; tanıma başarısızsa daha net bir orijinal kullanın.",
  "scene": "Taranmış kâğıt PDF seçilemez → güçlü OCR yakalamayı etkinleştirmek tanınabilir kılar."
 },
 "输入法冲突": {
  "cat": "Kısayollar",
  "name": "Giriş yöntemi / başka yazılım tuşu çalar",
  "alias": "giriş yöntemi sogou pinyin tuş çalar ctrl alınmış çakışma başka sözlük",
  "trigger": "Yakalama tetikleyici (ör. Ctrl) giriş yöntemi / başka uygulama tarafından alınır",
  "official": "Tetikleyici (ör. Ctrl) başka yazılım tarafından alınmışsa yakalama önlenir ve hiçbir şey yapmaz; yakalama tetikleyicisini değiştirin.",
  "cause": "Yakalama genelde Ctrl / F tuşlarıyla tetiklenir; giriş yöntemleri, başka sözlükler ve pano araçları aynı tuşu dinleyebilir, ve ilk kaydeden yanıt verir, böylece Youdao yakalama «çalınır».",
  "fix": "Youdao yakalama tetikleyicisini daha benzersiz bir kombinasyona / üzerine gelmeye değiştirin; ya da çakışan uygulamanın kısayolunu ayarlayın; hırsızı bulmak için şüpheli uygulamaları teker teker kapatın.",
  "scene": "Bir pano aracı kurulduktan sonra Ctrl yakalama ölür → Youdao tetikleyicisini değiştirmek geri getirir."
 }
};
window.LABELS = {"miss": "Belirti listelenmemiş. Başka anahtar kelime deneyin (yakalama / pdf / seçim / kısayol) veya aşağıdaki tam tabloya bakın.", "codeword": ""};
window.FIELDS = [["trigger", "Ne zaman olur"], ["official", "L1 belirtisi / resmi konumlandırma"], ["cause", "L2 kök nedeni"], ["fix", "Nasıl kontrol / çözüm"], ["scene", "Gerçek vaka"]];
window.THEAD = ["Belirti", "Grup", "L1 belirtisi / resmi konumlandırma", "L2 kök nedeni"];
