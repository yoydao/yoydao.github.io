window.CODES = {
 "取词失效": {
  "cat": "Habilitação / ajustes",
  "name": "Captura na tela morta no geral",
  "alias": "captura captura de tela não funciona sem resposta passar mouse capture 取词",
  "trigger": "Logo após instalar / atualizar, passar o mouse ou a tecla de captura não faz nada",
  "official": "A captura na tela precisa do Youdao em segundo plano com captura habilitada; a versão oficial de desktop oferece captura inteligente / captura por área de transferência / captura OCR.",
  "cause": "A captura na tela usa um hook global injetado no app em primeiro plano para ler seu texto: precisa do processo do Youdao rodando + interruptor mestre de captura ativo + tecla de gatilho coincidindo. Se faltar um, parece «totalmente morta», muitas vezes confundido com software quebrado.",
  "fix": "Verifique se o ícone da bandeja está ativo (cinza = não roda, duplo clique para iniciar); Ajustes → Captura e seleção, marque «habilitar captura» e escolha o modo (passar o mouse / segurar Ctrl); reinicie o Youdao e tente de novo.",
  "scene": "O Youdao não iniciou sozinho, sem ícone na bandeja → a captura nunca responde; iniciá-lo manualmente resolve."
 },
 "划词不弹窗": {
  "cat": "Habilitação / ajustes",
  "name": "A tradução por seleção não mostra pop-up",
  "alias": "seleção traduzir sem pop-up 划词 seleção destacar",
  "trigger": "Selecionar uma frase não abre nenhum pop-up de tradução",
  "official": "A tradução por seleção precisa de «seleção» habilitada com «traduzir ao selecionar» marcado; pode traduzir ao selecionar ou por uma tecla.",
  "cause": "Seleção e captura são interruptores distintos: muitos habilitam captura mas não seleção, ou desativam «traduzir ao selecionar», daí «selecionar não mostra nada»; o atalho de seleção também pode estar ocupado.",
  "fix": "Ajustes → Captura e seleção, marque «habilitar tradução por seleção» e «traduzir ao selecionar»; se for por tecla, confirme que ela está livre; a seleção no navegador também precisa da extensão de captura.",
  "scene": "Sem resposta em PDF / web mas pop-up no Bloco de Notas → geralmente compatibilidade daquele app (extensão / modo protegido), não o interruptor de seleção."
 },
 "Word取词": {
  "cat": "Compatibilidade do app",
  "name": "Captura/seleção no Word / Office falha",
  "alias": "word office excel captura seleção frase suplemento com educação 365 plugin",
  "trigger": "Após instalar / trocar o Office (sobretudo Educação, 365), Word / Excel não traduz uma seleção",
  "official": "O Youdao integra ao Office via suplemento COM para tradução de seleção / frase; se o suplemento está desativado ou não registrado, falha.",
  "cause": "O Office desativa suplementos COM de terceiros por compatibilidade ou política; trocar de versão (ex. uma Educação nova) deixa o suplemento antigo não registrado para o novo Office, daí «antes funcionava, agora não».",
  "fix": "Word: Arquivo → Opções → Suplementos → embaixo «Gerenciar: Suplementos COM» → Ir → marque o suplemento Youdao; senão reinstale o Youdao para reregistrá-lo; verifique se a arquitetura do Youdao e do Office coincide.",
  "scene": "Após um novo Office Educação a tradução por seleção morre e o suplemento aparece mas não marcado → habilitá-lo restaura."
 },
 "PDF取词": {
  "cat": "Compatibilidade do app",
  "name": "Captura no PDF / Acrobat falha",
  "alias": "pdf acrobat reader captura seleção yodaodict.api modo protegido plug_ins autotray digitalizado",
  "trigger": "Adobe Acrobat / Reader: selecionar num PDF não faz nada, ou «não foi possível carregar o suplemento»",
  "official": "Versões oficiais suportam a captura na tela de PDF no Adobe Reader / Acrobat; versões «portáteis» não oficiais não capturam PDF, e o PDF deve ser texto, não imagem.",
  "cause": "Três causas: ① o «modo protegido» do Acrobat é uma sandbox que bloqueia a injeção de YodaoDict.api de terceiros; ② a divergência de arquitetura entre Acrobat 64 bits e um suplemento antigo do Youdao dá «suplemento incompatível»; ③ o PDF é uma digitalização (imagem, sem camada de texto).",
  "fix": "Desative no Acrobat Editar → Preferências → Segurança (avançada) → «Habilitar modo protegido na inicialização», abra o Youdao antes do Acrobat; para o aviso «incompatível» 64 bits, instale o Youdao mais recente, ou copie YodaoDict.api para plug_ins do Acrobat; para digitalizações use o OCR de captura potente.",
  "scene": "Acrobat 64 bits, selecionar não faz nada, «não foi possível carregar YodaoDict.api» → desativar o modo protegido + copiar o .api para plug_ins restaura."
 },
 "浏览器划词": {
  "cat": "Compatibilidade do app",
  "name": "Seleção/captura no Chrome / navegador falha",
  "alias": "chrome edge firefox navegador seleção captura extensão plugin aceleração hardware 360 adblock",
  "trigger": "Não captura em páginas web / sem pop-up de seleção, enquanto Bloco de Notas etc. vão",
  "official": "Chrome / Firefox etc. precisam de uma extensão de captura do Youdao à parte; a versão oficial de desktop oferece a «captura Chrome».",
  "cause": "O navegador é sua própria sandbox: ① sem a extensão de captura do Youdao, o hook global não lê o texto do DOM; ② a aceleração de hardware GPU renderiza a página em textura sem camada legível; ③ interruptores adblock / segurança (ex. navegador 360) bloqueiam a captura.",
  "fix": "Instale a extensão de captura do Youdao para seu navegador (via ajustes do Youdao ou a loja); desative «usar aceleração de hardware» nos ajustes do navegador e reinicie; desative o adblock no navegador 360.",
  "scene": "A seleção no Chrome não faz nada; instalar a extensão do Youdao resolve; alguns sites ainda falham por texturas de aceleração - desative a aceleração."
 },
 "截图翻译": {
  "cat": "Atalhos",
  "name": "O OCR de captura/região não funciona",
  "alias": "captura de tela região ocr reconhecer quick ocr atalho ctrl alt o traduzir área",
  "trigger": "O atalho de reconhecimento de captura não faz nada / nenhum texto reconhecido",
  "official": "O OCR de captura precisa de um atalho de reconhecimento de captura definido (ex. Ctrl+Alt+O) e o módulo OCR baixado; você seleciona uma região de tela arrastando.",
  "cause": "O OCR de captura não precisa de camada de texto - reconhece por imagem a região selecionada, então precisa do módulo OCR baixado + um atalho livre + (macOS) permissão de gravação de tela para ler os pixels.",
  "fix": "Ajustes → Atalhos, atribua uma tecla sem conflito ao «OCR de captura»; baixe o módulo OCR no primeiro uso; no macOS conceda «Gravação de tela»; escolha uma região mais nítida se o reconhecimento falhar.",
  "scene": "O atalho não faz nada → geralmente uma ferramenta de captura pegou a tecla; mudar a combinação restaura."
 },
 "快捷键冲突": {
  "cat": "Atalhos",
  "name": "Conflito do atalho de captura / captura de tela",
  "alias": "atalho tecla conflito ocupado ctrl ferramenta captura método entrada qq",
  "trigger": "A tecla de captura / captura de tela não faz nada, ou «já ocupada pelo sistema»",
  "official": "Captura / seleção / reconhecimento de captura são todos personalizáveis em Atalhos; em conflito avisa, e você pode reatribuir ou redefinir.",
  "cause": "Atalhos globais são por ordem de chegada: uma ferramenta de captura, um método de entrada, QQ / WeChat ou outro dicionário podem ter a mesma combinação, então a tecla do Youdao não faz nada.",
  "fix": "Ajustes → Atalhos, atenção ao aviso de conflito; mude para uma combinação mais rara como Ctrl+Shift+letra / Alt+letra; feche apps que pegam teclas um a um para achar o culpado.",
  "scene": "Após instalar uma nova ferramenta de captura a tecla de captura morre → reatribua a tecla do Youdao ou da ferramenta."
 },
 "macOS权限": {
  "cat": "Permissões",
  "name": "macOS captura / atalhos precisam de autorização",
  "alias": "mac macos permissão acessibilidade gravação tela accessibility autorizar privacidade",
  "trigger": "Captura e atalhos mortos no macOS, sobretudo após uma atualização do sistema",
  "official": "O macOS precisa conceder ao Youdao «Acessibilidade» (para monitorar atalhos / controlar) e «Gravação de tela» (para ler a tela em captura / captura de tela) em Ajustes do sistema → Privacidade e segurança.",
  "cause": "A sandbox do macOS exige permissões explícitas: sem «Acessibilidade» não ouve os atalhos globais, sem «Gravação de tela» não lê os pixels; atualizações costumam redefinir ambos.",
  "fix": "Ajustes do sistema → Privacidade e segurança → marque o Youdao em «Acessibilidade» e «Gravação de tela» e reinicie-o; reconceda após cada atualização do macOS.",
  "scene": "Após uma atualização do macOS a captura está totalmente morta → permissões redefinidas; remarcar ambos restaura."
 },
 "管理员权限": {
  "cat": "Permissões",
  "name": "Não captura dentro de um app elevado (UAC)",
  "alias": "admin uac elevado administrador executar como admin nível privilégio gerenciador de tarefas",
  "trigger": "Apps normais capturam bem; um app «executado como administrador» não",
  "official": "No Windows, alguns casos precisam do Youdao «executado como administrador» para capturar dentro de apps elevados.",
  "cause": "Os níveis de integridade do Windows (UAC) isolam processos: um hook com direitos normais não consegue injetar num processo de alta integridade (administrador) e vice-versa, daí «só esse app não captura».",
  "fix": "Clique direito no Youdao «Executar como administrador» para igualar o nível de privilégio do alvo; ou configure-o para sempre rodar como administrador (propriedade de compatibilidade).",
  "scene": "Não captura dentro de uma ferramenta de dev / janela remota executada como administrador → rodar o Youdao como administrador restaura."
 },
 "弹窗飞走": {
  "cat": "Renderização / exibição",
  "name": "Pop-up fora da tela em multimonitor / alto DPI",
  "alias": "multimonitor tela dupla alto dpi escala pop-up fora da tela fixar janela 4k notebook",
  "trigger": "Em multimonitor / alto DPI o pop-up de captura aparece num lugar invisível",
  "official": "Os ajustes de captura oferecem «fixar posição da janela» para prender o pop-up de tradução num ponto fixo.",
  "cause": "Quando a escala DPI por tela difere, as coordenadas do pop-up são calculadas com a escala errada, então ele «voa» para fora da tela ou para um monitor invisível.",
  "fix": "Marque «fixar posição da janela» nos ajustes de captura e ponha-o no canto superior esquerdo da tela principal; mantenha a escala coerente; reinicie o Youdao para atualizar as coordenadas se preciso.",
  "scene": "4K externo + notebook em escala diferente, a captura tem «som mas sem janela» → fixar a posição da janela resolve."
 },
 "64位": {
  "cat": "Compatibilidade do app",
  "name": "Compatibilidade de captura app / sistema 64 bits",
  "alias": "64 bits x64 suplemento incompatível acrobat arquitetura 32 bits compatível",
  "trigger": "A captura falha ou reporta suplemento incompatível dentro de Acrobat / apps 64 bits",
  "official": "A versão de desktop do Youdao é compatível com 64 bits e suporta captura na tela em sistemas 64 bits; versões antigas podem ser incompatíveis com os suplementos de alguns apps 64 bits.",
  "cause": "DLLs de hook de 32/64 bits não se misturam: o componente de injeção de um Youdao antigo não combina com um host 64 bits (ex. Acrobat 64 bits), então o host recusa carregar e reporta «suplemento incompatível».",
  "fix": "Atualize para o Youdao mais recente (com o componente de captura 64 bits); se o Acrobat 64 bits ainda falhar, copie o YodaoDict.api correspondente para seus plug_ins e execute o Youdao como administrador.",
  "scene": "Após atualizar para Acrobat 64 bits a seleção morre → instalar o Youdao mais recente restaura."
 },
 "绿色版": {
  "cat": "Rede / instalação",
  "name": "A versão portátil / leve não captura",
  "alias": "portátil leve não oficial captura pdf hook dll registrar verde",
  "trigger": "Num Youdao «portátil / leve» de terceiros, a captura PDF / global não funciona",
  "official": "Declarado oficialmente: versões «portáteis» não oficiais do Youdao não capturam PDF corretamente - instale a versão oficial padrão mais recente.",
  "cause": "A captura na tela depende dos componentes de hook / suplemento registrados no sistema na instalação; versões portáteis os removem ou não os registram pelo «sem instalação», então a captura global / PDF morre.",
  "fix": "Desinstale a versão portátil e instale o Youdao oficial padrão mais recente do site (sobrescrever) para que os componentes de captura se registrem bem.",
  "scene": "Peguei uma versão portátil por comodidade, a captura PDF nunca funciona → a versão oficial restaura."
 },
 "全屏取词": {
  "cat": "Renderização / exibição",
  "name": "A captura falha em tela cheia / jogos",
  "alias": "tela cheia jogo tela cheia exclusiva hook falha vídeo",
  "trigger": "A captura não faz nada em apps de tela cheia / jogos / vídeo de tela cheia exclusiva",
  "official": "Em tela cheia (sobretudo exclusiva) o hook global de captura pode falhar - use o modo janela ou o OCR de captura.",
  "cause": "A tela cheia exclusiva contorna a composição normal de janelas e assume entrada/renderização, então o hook global não recebe eventos / texto e a captura morre em tela cheia.",
  "fix": "Mude o app para «janela / janela sem borda»; ou use o OCR de captura (selecione uma região) em vez da captura por passar o mouse para conteúdo em tela cheia.",
  "scene": "Não captura em jogos de tela cheia exclusiva → use a janela sem borda, ou o OCR de captura."
 },
 "取词慢": {
  "cat": "Rede / instalação",
  "name": "Captura lenta / sem resposta intermitente",
  "alias": "captura lenta lag latência sem resposta rede velocidade online",
  "trigger": "A captura funciona mas o pop-up é lento, às vezes nenhum",
  "official": "A velocidade de captura na tela depende da rede; numa rede normal a resposta costuma ser menor que 1 segundo.",
  "cause": "Definições online precisam de uma consulta de rede, então oscilações / DNS lento atrasam o pop-up; o OCR de captura também reconhece localmente, então um módulo não pronto fica lento ou seu fallback falha.",
  "fix": "Verifique / mude para uma rede mais estável; ative o dicionário local aprimorado para palavras comuns e reduzir chamadas de rede; confirme que o módulo OCR foi baixado; reinicie o Youdao se preciso.",
  "scene": "A captura leva vários segundos numa rede fraca → trocar de rede / ativar o dicionário local acelera bastante."
 },
 "扫描件取词": {
  "cat": "Renderização / exibição",
  "name": "Não dá para capturar digitalização / imagem",
  "alias": "digitalização imagem pdf imagem ocr captura potente captura de tela sem camada texto reconhecer",
  "trigger": "A captura não faz nada em imagens / PDFs digitalizados",
  "official": "Imagens / digitalizações não têm camada de texto, então a captura simples não as lê - habilite o «OCR de captura potente» para reconhecer por imagem.",
  "cause": "A captura simples lê o buffer de texto do app; uma digitalização / imagem só tem pixels, sem codificação de caracteres, então não há nada para capturar - você precisa fazer OCR da imagem em texto.",
  "fix": "Ajustes → Captura e seleção, marque «OCR de captura potente para todos os softwares» e baixe o módulo OCR; ou use o OCR de captura numa região; use um original mais nítido se o reconhecimento falhar.",
  "scene": "Um PDF de papel digitalizado não seleciona → habilitar o OCR de captura potente o torna reconhecível."
 },
 "输入法冲突": {
  "cat": "Atalhos",
  "name": "O método de entrada / outro software rouba a tecla",
  "alias": "método entrada sogou pinyin rouba tecla ctrl ocupado conflito outro dicionário",
  "trigger": "O gatilho de captura (ex. Ctrl) é pego pelo método de entrada / outro app",
  "official": "Se o gatilho (ex. Ctrl) está ocupado por outro software, a captura é preemptada e não faz nada; mude o gatilho de captura.",
  "cause": "A captura costuma disparar nas teclas Ctrl / F; métodos de entrada, outros dicionários e ferramentas de área de transferência podem ouvir a mesma tecla, e quem registra primeiro responde, então a captura do Youdao é «roubada».",
  "fix": "Mude o gatilho de captura do Youdao para uma combinação mais única / para passar o mouse; ou ajuste o atalho do app em conflito; feche apps suspeitos um a um para achar o ladrão.",
  "scene": "Após instalar uma ferramenta de área de transferência, a captura por Ctrl morre → mudar o gatilho do Youdao restaura."
 }
};
window.LABELS = {"miss": "Sintoma não listado. Tente outra palavra-chave (captura / pdf / seleção / atalho) ou veja a tabela completa abaixo.", "codeword": ""};
window.FIELDS = [["trigger", "Quando ocorre"], ["official", "Sintoma L1 / posicionamento oficial"], ["cause", "Causa raiz L2"], ["fix", "Como verificar / resolver"], ["scene", "Caso real"]];
window.THEAD = ["Sintoma", "Grupo", "Sintoma L1 / posicionamento oficial", "Causa raiz L2"];
