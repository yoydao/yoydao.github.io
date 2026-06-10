window.CODES = {
 "取词失效": {
  "cat": "Habilitación / ajustes",
  "name": "Captura en pantalla muerta en general",
  "alias": "captura captura de pantalla no funciona sin respuesta cursor 取词",
  "trigger": "Justo tras instalar / actualizar, el cursor o la tecla de captura no hacen nada",
  "official": "La captura en pantalla necesita Youdao en segundo plano con la captura habilitada; la versión oficial de escritorio ofrece captura inteligente / captura por portapapeles / captura OCR.",
  "cause": "La captura en pantalla usa un hook global inyectado en la app de primer plano para leer su texto: necesita el proceso de Youdao en marcha + el interruptor maestro de captura activo + la tecla disparadora coincidiendo. Si falta uno parece «totalmente muerto», a menudo confundido con software roto.",
  "fix": "Comprueba que el icono de bandeja esté activo (gris = no corre, doble clic para iniciar); Ajustes → Captura y selección, marca «habilitar captura» y elige el modo (cursor / mantener Ctrl); reinicia Youdao y reintenta.",
  "scene": "Youdao no arrancó solo, sin icono de bandeja → la captura nunca responde; iniciarlo a mano lo arregla."
 },
 "划词不弹窗": {
  "cat": "Habilitación / ajustes",
  "name": "La traducción por selección no muestra ventana",
  "alias": "selección traducir sin ventana 划词 selección resaltar",
  "trigger": "Seleccionar una frase no abre ninguna ventana de traducción",
  "official": "La traducción por selección necesita «selección» habilitada con «traducir al seleccionar» marcado; puede traducir al seleccionar o con una tecla.",
  "cause": "Selección y captura son interruptores distintos: muchos habilitan captura pero no selección, o desactivan «traducir al seleccionar», de ahí «al seleccionar no pasa nada»; el atajo de selección también puede estar ocupado.",
  "fix": "Ajustes → Captura y selección, marca «habilitar traducción por selección» y «traducir al seleccionar»; si es por tecla, confirma que esa tecla esté libre; la selección en navegador también necesita la extensión de captura.",
  "scene": "Sin respuesta en PDF / web pero ventana en el Bloc de notas → suele ser compatibilidad de esa app (extensión / modo protegido), no el interruptor de selección."
 },
 "Word取词": {
  "cat": "Compatibilidad de la app",
  "name": "Falla la captura/selección en Word / Office",
  "alias": "word office excel captura selección frase complemento com educación 365 plugin",
  "trigger": "Tras instalar / cambiar Office (sobre todo Educación, 365), Word / Excel no traduce una selección",
  "official": "Youdao se integra con Office mediante un complemento COM para traducción de selección / frase; si el complemento está deshabilitado o sin registrar, falla.",
  "cause": "Office deshabilita complementos COM de terceros por compatibilidad o política; cambiar de versión (p. ej. una Educación nueva) deja el complemento antiguo sin registrar para el nuevo Office, de ahí «antes funcionaba, ahora no».",
  "fix": "Word: Archivo → Opciones → Complementos → abajo «Administrar: Complementos COM» → Ir → marca el complemento de Youdao; si no, reinstala Youdao para reregistrarlo; asegúrate de que la arquitectura de Youdao y Office coincida.",
  "scene": "Tras un Office Educación nuevo la traducción por selección muere y el complemento aparece pero sin marcar → habilitarlo lo restaura."
 },
 "PDF取词": {
  "cat": "Compatibilidad de la app",
  "name": "Falla la captura en PDF / Acrobat",
  "alias": "pdf acrobat reader captura selección yodaodict.api modo protegido plug_ins autotray escaneado",
  "trigger": "Adobe Acrobat / Reader: seleccionar en un PDF no hace nada, o «no se puede cargar el complemento»",
  "official": "Las versiones oficiales soportan la captura en pantalla de PDF en Adobe Reader / Acrobat; las «portables» no oficiales no pueden capturar PDF, y el PDF debe ser texto, no imagen.",
  "cause": "Tres causas: ① el «modo protegido» de Acrobat es un sandbox que bloquea la inyección de YodaoDict.api de terceros; ② el desajuste de arquitectura entre Acrobat de 64 bits y un complemento antiguo de Youdao da «complemento incompatible»; ③ el PDF es un escaneo (imagen, sin capa de texto).",
  "fix": "Desactiva en Acrobat Edición → Preferencias → Seguridad (mejorada) → «Habilitar modo protegido al inicio», abre Youdao antes que Acrobat; para el aviso «incompatible» de 64 bits, instala el Youdao más reciente, o copia YodaoDict.api en plug_ins de Acrobat; para escaneos usa OCR de captura potente.",
  "scene": "Acrobat 64 bits, seleccionar no hace nada, «no se puede cargar YodaoDict.api» → desactivar el modo protegido + copiar el .api en plug_ins lo restaura."
 },
 "浏览器划词": {
  "cat": "Compatibilidad de la app",
  "name": "Falla la selección/captura en Chrome / navegador",
  "alias": "chrome edge firefox navegador selección captura extensión plugin aceleración hardware 360 adblock",
  "trigger": "No captura en páginas web / sin ventana de selección, mientras el Bloc de notas etc. van bien",
  "official": "Chrome / Firefox etc. necesitan una extensión de captura de Youdao aparte; la versión oficial de escritorio ofrece «captura en Chrome».",
  "cause": "El navegador es su propio sandbox: ① sin extensión de captura de Youdao, el hook global no lee el texto del DOM; ② la aceleración por hardware GPU renderiza la página a textura sin capa legible; ③ los conmutadores de adblock / seguridad (p. ej. navegador 360) bloquean la captura.",
  "fix": "Instala la extensión de captura de Youdao para tu navegador (vía ajustes de Youdao o la tienda); desactiva «usar aceleración por hardware» en los ajustes del navegador y reinicia; desactiva el adblock del navegador 360.",
  "scene": "La selección en Chrome no hace nada; instalar la extensión de Youdao lo arregla; unos pocos sitios aún fallan por texturas de aceleración — desactiva la aceleración."
 },
 "截图翻译": {
  "cat": "Atajos",
  "name": "El OCR de captura/región no funciona",
  "alias": "captura de pantalla región ocr reconocer quick ocr atajo ctrl alt o traducir área",
  "trigger": "El atajo de reconocer captura no hace nada / no reconoce texto",
  "official": "El OCR de captura necesita un atajo de reconocimiento de captura (p. ej. Ctrl+Alt+O) y el módulo OCR descargado; seleccionas una región de pantalla arrastrando.",
  "cause": "El OCR de captura no necesita capa de texto: reconoce por imagen la región seleccionada, así que necesita el módulo OCR descargado + un atajo libre + (macOS) permiso de Grabación de pantalla para leer los píxeles.",
  "fix": "Ajustes → Atajos, asigna una tecla sin conflicto a «OCR de captura»; descarga el módulo OCR en el primer uso; en macOS concede «Grabación de pantalla»; elige una región más nítida si el reconocimiento falla.",
  "scene": "El atajo no hace nada → normalmente una herramienta de captura tomó la tecla; cambiar la combinación lo restaura."
 },
 "快捷键冲突": {
  "cat": "Atajos",
  "name": "Conflicto del atajo de captura / captura de pantalla",
  "alias": "atajo tecla rápida conflicto ocupado ctrl herramienta captura método entrada qq",
  "trigger": "La tecla de captura / captura de pantalla no hace nada, o «ya ocupada por el sistema»",
  "official": "Captura / selección / reconocimiento de captura son personalizables en Atajos; en conflicto avisa, y puedes reasignar o restablecer.",
  "cause": "Los atajos globales son por orden de llegada: una herramienta de captura, un método de entrada, QQ / WeChat u otro diccionario pueden tener la misma combinación, así que la tecla de Youdao no hace nada.",
  "fix": "Ajustes → Atajos, vigila el aviso de conflicto; cambia a una combinación más rara como Ctrl+Shift+letra / Alt+letra; cierra apps que tomen teclas una a una para hallar al culpable.",
  "scene": "Tras instalar una nueva herramienta de captura la tecla de captura muere → reasigna la tecla de Youdao o la de la herramienta."
 },
 "macOS权限": {
  "cat": "Permisos",
  "name": "macOS captura / atajos necesitan autorización",
  "alias": "mac macos permiso accesibilidad grabación pantalla autorizar privacidad",
  "trigger": "Captura y atajos muertos en macOS, sobre todo tras una actualización del sistema",
  "official": "macOS necesita conceder a Youdao «Accesibilidad» (para monitorear atajos / controlar) y «Grabación de pantalla» (para leer la pantalla en captura / captura de pantalla) en Ajustes del sistema → Privacidad y seguridad.",
  "cause": "El sandbox de macOS exige permisos explícitos: sin «Accesibilidad» no oye los atajos globales, sin «Grabación de pantalla» no lee los píxeles; las actualizaciones a menudo reinician ambos.",
  "fix": "Ajustes del sistema → Privacidad y seguridad → marca Youdao en «Accesibilidad» y «Grabación de pantalla» y reinícialo; vuelve a conceder tras cada actualización de macOS.",
  "scene": "Tras una actualización de macOS la captura está del todo muerta → permisos reiniciados; volver a marcar ambos lo restaura."
 },
 "管理员权限": {
  "cat": "Permisos",
  "name": "No captura dentro de una app elevada (UAC)",
  "alias": "admin uac elevado administrador ejecutar como admin nivel privilegio administrador de tareas",
  "trigger": "Las apps normales capturan bien; una app «ejecutada como administrador» no",
  "official": "En Windows, algunos casos necesitan Youdao «ejecutado como administrador» para capturar dentro de apps elevadas.",
  "cause": "Los niveles de integridad de Windows (UAC) aíslan procesos: un hook con permisos normales no puede inyectar en un proceso de alta integridad (administrador) y viceversa, de ahí «solo esa app no captura».",
  "fix": "Clic derecho en Youdao «Ejecutar como administrador» para igualar el nivel de privilegio del destino; o configúralo para correr siempre como administrador (propiedad de compatibilidad).",
  "scene": "No captura dentro de una herramienta de desarrollo / ventana remota ejecutada como administrador → correr Youdao como administrador lo restaura."
 },
 "弹窗飞走": {
  "cat": "Renderizado / pantalla",
  "name": "Ventana fuera de pantalla en multimonitor / alto DPI",
  "alias": "multimonitor doble pantalla alto dpi escala ventana fuera de pantalla fijar ventana 4k portátil",
  "trigger": "En multimonitor / alto DPI la ventana de captura aparece en un sitio invisible",
  "official": "Los ajustes de captura ofrecen «fijar posición de la ventana» para clavar la ventana de traducción en un punto fijo.",
  "cause": "Cuando la escala DPI por pantalla difiere, las coordenadas de la ventana se calculan con la escala equivocada, así que «vuela» fuera de pantalla o a un monitor no visible.",
  "fix": "Marca «fijar posición de la ventana» en los ajustes de captura y ponla en la esquina superior izquierda de la pantalla principal; mantén la escala de pantalla coherente; reinicia Youdao para refrescar coordenadas si hace falta.",
  "scene": "4K externo + portátil a distinta escala, la captura tiene «sonido pero sin ventana» → fijar la posición de la ventana lo soluciona."
 },
 "64位": {
  "cat": "Compatibilidad de la app",
  "name": "Compatibilidad de captura en app / sistema de 64 bits",
  "alias": "64 bits x64 complemento incompatible acrobat arquitectura 32 bits compatible",
  "trigger": "La captura falla o reporta complemento incompatible dentro de Acrobat / apps de 64 bits",
  "official": "La versión de escritorio de Youdao es compatible con 64 bits y soporta captura en pantalla en sistemas de 64 bits; las versiones antiguas pueden ser incompatibles con los complementos de algunas apps de 64 bits.",
  "cause": "Los DLL de hook de 32/64 bits no se mezclan: el componente de inyección de un Youdao antiguo no coincide con un host de 64 bits (p. ej. Acrobat de 64 bits), así que el host rehúsa cargarlo y reporta «complemento incompatible».",
  "fix": "Actualiza al Youdao más reciente (con el componente de captura de 64 bits); si Acrobat de 64 bits sigue fallando, copia el YodaoDict.api correspondiente en sus plug_ins y ejecuta Youdao como administrador.",
  "scene": "Tras actualizar a Acrobat de 64 bits la selección muere → instalar el Youdao más reciente lo restaura."
 },
 "绿色版": {
  "cat": "Red / instalación",
  "name": "La versión portable / ligera no captura",
  "alias": "portable ligera no oficial captura pdf hook dll registrar verde",
  "trigger": "En un Youdao «portable / ligero» de terceros, la captura PDF / global no funciona",
  "official": "Declarado oficialmente: las versiones «portables» no oficiales de Youdao no pueden capturar PDF correctamente — instala la versión oficial estándar más reciente.",
  "cause": "La captura en pantalla depende de los componentes de hook / complemento registrados en el sistema al instalar; las versiones portables los quitan o no los registran por el «sin instalación», así que la captura global / PDF muere.",
  "fix": "Desinstala la versión portable e instala el Youdao oficial estándar más reciente del sitio (sobrescribir) para que los componentes de captura se registren bien.",
  "scene": "Cogí una versión portable por comodidad, la captura PDF nunca funciona → la versión oficial lo restaura."
 },
 "全屏取词": {
  "cat": "Renderizado / pantalla",
  "name": "Falla la captura en pantalla completa / juegos",
  "alias": "pantalla completa juego pantalla completa exclusiva hook falla vídeo",
  "trigger": "La captura no hace nada en apps a pantalla completa / juegos / vídeo a pantalla completa exclusiva",
  "official": "En pantalla completa (sobre todo exclusiva) el hook global de captura puede fallar — usa modo ventana o el OCR de captura.",
  "cause": "La pantalla completa exclusiva evita la composición normal de ventanas y toma el control de entrada/renderizado, así que el hook global no recibe eventos / texto y la captura muere a pantalla completa.",
  "fix": "Cambia la app a «ventana / ventana sin bordes»; o usa el OCR de captura (selecciona una región) en vez de la captura por cursor para contenido a pantalla completa.",
  "scene": "No captura en juegos a pantalla completa exclusiva → usa ventana sin bordes, o el OCR de captura."
 },
 "取词慢": {
  "cat": "Red / instalación",
  "name": "Captura lenta / sin respuesta intermitente",
  "alias": "captura lenta lag latencia sin respuesta red velocidad en línea",
  "trigger": "La captura funciona pero la ventana es lenta, a veces ninguna",
  "official": "La velocidad de captura en pantalla depende de la red; en una red normal la respuesta suele ser inferior a 1 segundo.",
  "cause": "Las definiciones en línea necesitan una consulta de red, así que las fluctuaciones / DNS lento retrasan la ventana; el OCR de captura también reconoce en local, así que un módulo no listo va lento o su respaldo falla.",
  "fix": "Revisa / cambia a una red más estable; activa el diccionario local mejorado para palabras comunes y reducir llamadas de red; confirma que el módulo OCR esté descargado; reinicia Youdao si hace falta.",
  "scene": "La captura tarda varios segundos en una red débil → cambiar de red / activar el diccionario local la acelera notablemente."
 },
 "扫描件取词": {
  "cat": "Renderizado / pantalla",
  "name": "No se puede capturar escaneado / imagen",
  "alias": "escaneado imagen pdf imagen ocr captura potente captura de pantalla sin capa de texto reconocer",
  "trigger": "La captura no hace nada en imágenes / PDF escaneados",
  "official": "Imágenes / escaneos no tienen capa de texto, así que la captura simple no los lee — habilita «OCR de captura potente» para reconocer por imagen.",
  "cause": "La captura simple lee el búfer de texto de la app; un escaneo / imagen solo tiene píxeles, sin codificación de caracteres, así que no hay nada que capturar — debes hacer OCR de la imagen a texto.",
  "fix": "Ajustes → Captura y selección, marca «OCR de captura potente para todo el software» y descarga el módulo OCR; o usa el OCR de captura en una región; usa un original más nítido si el reconocimiento falla.",
  "scene": "Un PDF de papel escaneado no se selecciona → habilitar el OCR de captura potente lo hace reconocible."
 },
 "输入法冲突": {
  "cat": "Atajos",
  "name": "El método de entrada / otro software roba la tecla",
  "alias": "método de entrada sogou pinyin roba tecla ctrl ocupado conflicto otro diccionario",
  "trigger": "El disparador de captura (p. ej. Ctrl) lo toma el método de entrada / otra app",
  "official": "Si el disparador (p. ej. Ctrl) lo ocupa otro software, la captura es prevenida y no hace nada; cambia el disparador de captura.",
  "cause": "La captura suele dispararse con teclas Ctrl / F; métodos de entrada, otros diccionarios y herramientas de portapapeles pueden escuchar la misma tecla, y el que registra primero responde, así que la captura de Youdao es «robada».",
  "fix": "Cambia el disparador de captura de Youdao a una combinación más única / al cursor; o ajusta el atajo de la app en conflicto; cierra apps sospechosas una a una para hallar al ladrón.",
  "scene": "Tras instalar una herramienta de portapapeles, la captura con Ctrl muere → cambiar el disparador de Youdao lo restaura."
 }
};
window.LABELS = {"miss": "Síntoma no incluido. Prueba otra palabra clave (captura / pdf / selección / atajo) o mira la tabla completa abajo.", "codeword": ""};
window.FIELDS = [["trigger", "Cuándo ocurre"], ["official", "Síntoma L1 / posición oficial"], ["cause", "Causa raíz L2"], ["fix", "Cómo revisar / resolver"], ["scene", "Caso real"]];
window.THEAD = ["Síntoma", "Grupo", "Síntoma L1 / posición oficial", "Causa raíz L2"];
