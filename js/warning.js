export default function warning(wBoards) {
    let path = 'images/advertencia/'
    wBoards.push({
        id: 'wb1',
        name: 'Curva acentuada à esquerda',
        code: 'A-1a',
        url: path + 'a1a.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de uma curva acentuada à esquerda. Utilizado sempre que existir curva horizontal adiante, em vias onde as velocidades de aproximação acarretem manobra que possa comprometer a segurança dos usuários.'
    })
    wBoards.push({
        id: 'wb2',
        name: 'Curva acentuada à direita',
        code: 'A-1b',
        url: path + 'a1b.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de uma curva acentuada à direita. Utilizado sempre que existir curva horizontal adiante, em vias onde as velocidades de aproximação acarretem manobra que possa comprometer a segurança dos usuários.'
    })
    wBoards.push({
        id: 'wb3',
        name: 'Curva à esquerda',
        code: 'A-2a',
        url: path + 'a2a.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de uma curva à esquerda. Utilizado sempre que existir curva horizontal adiante, em vias onde as velocidades de aproximação acarretem manobra que possa comprometer a segurança dos usuários.'
    })
    wBoards.push({
        id: 'wb4',
        name: 'Curva à direita',
        code: 'A-2b',
        url: path + 'a2b.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de uma curva à direita. Utilizado sempre que existir curva horizontal adiante, em vias onde as velocidades de aproximação acarretem manobra que possa comprometer a segurança dos usuários.'
    })
    wBoards.push({
        id: 'wb5',
        name: 'Pista sinuosa à esquerda',
        code: 'A-3a',
        url: path + 'a3a.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de três ou mais curvas horizontais sucessivas, sendo a primeira à esquerda. Utilizado sempre que existir uma seqüência de três ou mais curvas horizontais sucessivas, que possam comprometer a segurança do trânsito.'
    })
    wBoards.push({
        id: 'wb6',
        name: 'Pista sinuosa à direita',
        code: 'A-3b',
        url: path + 'a3b.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de três ou mais curvas horizontais sucessivas, sendo a primeira à direita. Utilizado sempre que existir uma seqüência de três ou mais curvas horizontais sucessivas, que possam comprometer a segurança do trânsito.'
    })
    wBoards.push({
        id: 'wb7',
        name: 'Curva acentuada em "s" à esquerda',
        code: 'A-4a',
        url: path + 'a4a.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de duas curvas acentuadas horizontais sucessivas formando “S”. Utilizado sempre que existir, adiante, duas curvas acentuadas sucessivas formando “S”, que possam comprometer a segurança do trânsito.'
    })
    wBoards.push({
        id: 'wb8',
        name: 'Curva acentuada em "s" à direita',
        code: 'A-4b',
        url: path + 'a4b.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de duas curvas acentuadas horizontais sucessivas formando “S”. Utilizado sempre que existir, adiante, duas curvas acentuadas sucessivas formando “S”, que possam comprometer a segurança do trânsito.'
    })
    wBoards.push({
        id: 'wb9',
        name: 'Curva em "s" à esquerda',
        code: 'A-5a',
        url: path + 'a5a.png',
        description: 'Adverte o condutor do veículo da existência adiante, de duas curvas horizontais sucessivas formando “S”. Utilizado sempre que existir adiante, duas curvas sucessivas formando “S” que possam comprometer a segurança do trânsito.'
    })
    wBoards.push({
        id: 'wb10',
        name: 'Curva em "s" à direita',
        code: 'A-5b',
        url: path + 'a5b.png',
        description: 'Adverte o condutor do veículo da existência adiante, de duas curvas horizontais sucessivas formando “S”. Utilizado sempre que existir adiante, duas curvas sucessivas formando “S” que possam comprometer a segurança do trânsito.'
    })
    wBoards.push({
        id: 'wb11',
        name: 'Cruzamento de vias',
        code: 'A-6',
        url: path + 'a6.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de um cruzamento de duas vias em nível. Utilizado em cruzamento de duas vias em nível, de difícil identificação à distância, que possa comprometer a segurança dos usuários da via. Utilizado nas vias rurais ou urbanas de grande extensão com características de corredor de tráfego.'
    })
    wBoards.push({
        id: 'wb12',
        name: 'Via lateral à esquerda',
        code: 'A-7a',
        url: path + 'a7a.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de uma via lateral à esquerda. Utilizado em entroncamento em nível de difícil identificação à distância, que possa comprometer a segurança dos usuários da via, na seguinte condição: Entroncamento perpendicular à esquerda, formando ângulos de 255º a 285º com o eixo da via sinalizada.'
    })
    wBoards.push({
        id: 'wb13',
        name: 'Via lateral à direita',
        code: 'A-7b',
        url: path + 'a7b.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de uma via lateral à direita. Utilizado em entroncamento em nível de difícil identificação à distância, que possa comprometer a segurança dos usuários da via, na seguinte condição: Entroncamento perpendicular à direita, formando ângulos de 75º a 105º com o eixo da via sinalizada.'
    })
    wBoards.push({
        id: 'wb14',
        name: 'Interseção em T',
        code: 'A-8',
        url: path + 'a8.png',
        description: 'Adverte o condutor do veículo da existência, adiante de uma interseção em “T”. Utilizado em interseção em forma de “T” de difícil identificação à distância que possa comprometer a segurança dos usuários da via.'
    })
    wBoards.push({
        id: 'wb15',
        name: 'Bifurcação em Y',
        code: 'A-9',
        url: path + 'a9.png',
        description: 'Adverte o condutor do veículo da existência, adiante de uma bifurcação em “Y”. Utilizado em bifurcação em forma de “Y” de difícil identificação à distância que possa comprometer a segurança dos usuários da via.'
    })
    wBoards.push({
        id: 'wb16',
        name: 'Entrocamento oblíquo à esquerda',
        code: 'A-10a',
        url: path + 'a10a.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de um entroncamento à esquerda. Utilizado em entroncamento em nível oblíquo de difícil identificação à distância que possa comprometer a segurança dos usuários da via na seguinte condição: Entroncamento oblíquo à esquerda formando ângulos de 180º a 255º do eixo da via sinalizada.'
    })
    wBoards.push({
        id: 'wb17',
        name: 'Entrocamento oblíquo à direita',
        code: 'A-10b',
        url: path + 'a10b.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de um entroncamento à direita. Utilizado em entroncamento em nível oblíquo de difícil identificação à distância que possa comprometer a segurança dos usuários da via na seguinte condição: Entroncamento oblíquo à direita formando ângulos de 105º a 180º do eixo da via sinalizada.'
    })
    wBoards.push({
        id: 'wb18',
        name: 'Junções sucessivas contrárias primeira à esquerda',
        code: 'A-11a',
        url: path + 'a11a.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de junções sucessivas contrárias, estando a primeira via lateral à esquerda. utilizado quando existirem junções sucessivas contrárias de difícil identificação à distância, somente quando essas junções forem próximas entre si.'
    })
    wBoards.push({
        id: 'wb19',
        name: 'Junções sucessivas contrárias primeira à direita',
        code: 'A-11b',
        url: path + 'a11b.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de junções sucessivas contrárias, estando a primeira via lateral à direita. utilizado quando existirem junções sucessivas contrárias de difícil identificação à distância, somente quando essas junções forem próximas entre si.'
    })
    wBoards.push({
        id: 'wb20',
        name: 'Interseção em círculo',
        code: 'A-12',
        url: path + 'a12.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de uma interseção em círculo (rotatória), na qual a circulação é feita no sentido anti-horário. Utilizado quando existir uma interseção em que a configuração geométrica ou a sinalização horizontal obrigue o movimento circular no sentido anti-horário, de difícil percepção à distância, que possa comprometer a segurança dos usuários da via.'
    })
    wBoards.push({
        id: 'wb21',
        name: 'Confluência à esquerda',
        code: 'A-13a',
        url: path + 'a13a.png',
        description: 'Adverte o condutor do veículo da existência, adiante, da confluência de uma via, à esquerda. Utilizado em confluência em nível de difícil identificação à distância, que possa comprometer a segurança dos usuários da via, na seguinte condição: Confluência em ângulos à esquerda de 285º a 360º com o eixo da via sinalizada.'
    })
    wBoards.push({
        id: 'wb22',
        name: 'Confluência à direita',
        code: 'A-13b',
        url: path + 'a13b.png',
        description: 'Adverte o condutor do veículo da existência, adiante, da confluência de uma via, à direita. Utilizado em confluência em nível de difícil identificação à distância, que possa comprometer a segurança dos usuários da via, na seguinte condição: Confluência em ângulos à direita de 0º a 75º com o eixo da via sinalizada.'
    })
    wBoards.push({
        id: 'wb23',
        name: 'Semáforo à frente',
        code: 'A-14',
        url: path + 'a14.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de uma sinalização semafórica de regulamentação. Utilizado quando existir semáforo adiante, em situações de difícil percepção ou que possa comprometer a segurança dos usuários da via, tais como: – antes de um semáforo localizado em posição que não obedeça as condições mínimas de visibilidade, necessárias para a percepção, reação e manobra do condutor, como após curvas horizontais ou verticais; – em rodovias/vias de trânsito rápido; – em saídas de túneis; – após longos trechos de fluxo ininterrupto; – após longos trechos sem semáforo ou longos trechos de preferência de passagem. Pode ser utilizado quando da implantação de um novo conjunto semafórico, permanecendo tempo suficiente para a consolidação do equipamento semafórico.'
    })
    wBoards.push({
        id: 'wb24',
        name: 'Parada obrigatória à frente',
        code: 'A-15',
        url: path + 'a15.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de um sinal R-1 – “Parada obrigatória”. Utilizado quando não são atendidas as condições mínimas de visibilidade para o sinal R-1 – “Parada obrigatória” de forma a permitir uma desaceleração segura até a parada total do veículo.'
    })
    wBoards.push({
        id: 'wb25',
        name: 'Bonde',
        code: 'A-16',
        url: path + 'a16.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de cruzamento ou circulação de bondes. Utilizado sempre que existir na via uma interseção ou trecho com circulação de bonde.'
    })
    wBoards.push({
        id: 'wb26',
        name: 'Pista irregular',
        code: 'A-17',
        url: path + 'a17.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de um trecho de pista com superfície irregular. Utilizado quando a superfície da pista for tão irregular que possa afetar a segurança dos usuários da via.'
    })
    wBoards.push({
        id: 'wb27',
        name: 'Saliência ou lombada',
        code: 'A-18',
        url: path + 'a18.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de saliência, lombada ou ondulação transversal sobre a superfície de rolamento. Utilizado: Quando existir ondulação transversal, de acordo com legislação específica do CONTRAN. Nos casos de saliência sobre a pista que possa afetar a segurança dos usuários da via.'
    })
    wBoards.push({
        id: 'wb28',
        name: 'Depressão',
        code: 'A-19',
        url: path + 'a19.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de uma depressão na pista. Utilizado quando existir depressão de difícil percepção, que possa afetar a segurança dos ocupantes do veículo e demais usuários da via.'
    })
    wBoards.push({
        id: 'wb29',
        name: 'Declive acentuado',
        code: 'A-20a',
        url: path + 'a20a.png',
        description: 'Adverte o usuário da via da existência, adiante, de um declive acentuado. Utilizado sempre que existir um declive acentuado que possa comprometer a segurança dos ocupantes dos veículos ou demais usuários da via.'
    })
    wBoards.push({
        id: 'wb30',
        name: 'Aclive acentuado',
        code: 'A-20b',
        url: path + 'a20b.png',
        description: 'Adverte o usuário da via da existência, adiante, de um aclive acentuado. Utilizado sempre que existir um aclive acentuado que possa comprometer a segurança dos ocupantes dos veículos ou demais usuários da via.'
    })
    wBoards.push({
        id: 'wb31',
        name: 'Estreitamento de pista ao centro',
        code: 'A-21a',
        url: path + 'a21a.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de estreitamento da pista de ambos os lados. Utilizado quando é necessário informar o estreitamento de pista.'
    })
    wBoards.push({
        id: 'wb32',
        name: 'Estreitamento de pista à esquerda',
        code: 'A-21b',
        url: path + 'a21b.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de estreitamento da pista no lado esquerdo. Utilizado quando é necessário informar o estreitamento de pista.'
    })
    wBoards.push({
        id: 'wb33',
        name: 'Estreitamento de pista à direita',
        code: 'A-21c',
        url: path + 'a21c.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de estreitamento da pista no lado direito. Utilizado quando é necessário informar o estreitamento de pista.'
    })
    wBoards.push({
        id: 'wb34',
        name: 'Alargamento de pista à esquerda',
        code: 'A-21d',
        url: path + 'a21d.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de alargamento da pista no lado esquerdo. Utilizado quando é necessário informar o alargamento de pista.'
    })
    wBoards.push({
        id: 'wb35',
        name: 'Alargamento de pista à direita',
        code: 'A-21e',
        url: path + 'a21e.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de alargamento da pista no lado direito. Utilizado quando é necessário informar o alargamento de pista.'
    })
    wBoards.push({
        id: 'wb36',
        name: 'Ponte estreita',
        code: 'A-22',
        url: path + 'a22.png',
        description: 'Adverte o condutor da existência, adiante, de ponte ou viaduto com largura inferior a da via. Utilizado sempre que necessário informar a existência de ponte ou viaduto sem acostamento ou cuja pista de rolamento tenha largura inferior a da via.'
    })
    wBoards.push({
        id: 'wb37',
        name: 'Ponte móvel',
        code: 'A-23',
        url: path + 'a23.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de uma ponte móvel. Utilizado sempre que existir a possibilidade de interrupção da via por uma ponte móvel.'
    })
    wBoards.push({
        id: 'wb38',
        name: 'Obras',
        code: 'A-24',
        url: path + 'a24.png',
        description: 'Adverte o usuário da via de interferência devido à existência de obras adiante. Utilizado sempre que existir, adiante, interferência na via, pela existência de obra que possa comprometer a circulação do trânsito e a segurança dos usuários da via.'
    })
    wBoards.push({
        id: 'wb39',
        name: 'Mão dupla',
        code: 'A-25',
        url: path + 'a25.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de alteração do sentido único de circulação para duplo. Utilizado sempre que ocorrer alteração de sentido único para sentido duplo de circulação.'
    })
    wBoards.push({
        id: 'wb40',
        name: 'Sentido único',
        code: 'A-26a',
        url: path + 'a26a.png',
        description: 'Adverte o condutor do veículo quanto ao sentido de circulação da via. Utilizado nas seguintes situações: advertir o condutor do veículo sobre o sentido de circulação quando não houver clareza no entendimento; advertir que o sentido de circulação habitualmente adotado foi alterado; nas saídas de pólos geradores de viagens; em caráter temporário para consolidar a alteração de mudança de circulação; desviar o fluxo de veículos para a pista de sentido contrário ou para a pista variante, principalmente em obras e eventos no leito da via (fundo de cor laranja).'
    })
    wBoards.push({
        id: 'wb41',
        name: 'Sentido duplo',
        code: 'A-26b',
        url: path + 'a26b.png',
        description: 'Adverte o condutor do veículo quanto ao sentido de circulação da via. Utilizado nas seguintes situações: advertir o condutor do veículo sobre o sentido de circulação quando não houver clareza no entendimento; advertir que o sentido de circulação habitualmente adotado foi alterado; nas saídas de pólos geradores de viagens; em caráter temporário para consolidar a alteração de mudança de circulação; desviar o fluxo de veículos para a pista de sentido contrário ou para a pista variante, principalmente em obras e eventos no leito da via (fundo de cor laranja).'
    })
    wBoards.push({
        id: 'wb42',
        name: 'Área com desmoronamento',
        code: 'A-27',
        url: path + 'a27.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de área sujeita a desmoronamento. Utilizado quando necessário advertir sobre as condições de risco eventual em área lateral à pista, com possibilidade de desmoronamento ocasionado por obras ou instabilidade no talude.'
    })
    wBoards.push({
        id: 'wb43',
        name: 'Pista escorregadia',
        code: 'A-28',
        url: path + 'a28.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de trecho da pista que, em certas condições, pode tornar-se escorregadia. Utilizado quando é necessário advertir sobre as condições de risco eventual em trecho de pista quando molhada, alagada, ou com substâncias que propiciem esta condição (areia, folhas, óleo, etc.).'
    })
    wBoards.push({
        id: 'wb44',
        name: 'Projeção de cascalho',
        code: 'A-29',
        url: path + 'a29.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de trecho ao longo do qual pode ocorrer projeção de cascalho. Utilizado quando é necessário advertir da existência de trecho de pista onde haja risco de projeção de cascalho ou outro material granular presente sobre a via.'
    })
    wBoards.push({
        id: 'wb45',
        name: 'Trânsito de ciclistas',
        code: 'A-30a',
        url: path + 'a30a.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de trecho de pista ao longo do qual ciclistas circulam pela via ou cruzam a pista. Utilizado sempre que ocorrer circulação freqüente ou travessia não sinalizada de ciclistas na via.'
    })
    wBoards.push({
        id: 'wb46',
        name: 'Passagem sinalizada de ciclistas',
        code: 'A-30b',
        url: path + 'a30b.png',
        description: 'Adverte os condutores da existência, adiante, de faixa sinalizada para travessia de ciclistas. Utilizado em vias interceptadas por ciclovias ou ciclofaixas não semaforizadas.'
    })
    wBoards.push({
        id: 'wb47',
        name: 'Trânsito compartilhado por ciclistas e pedestres',
        code: 'A-30c',
        url: path + 'a30c.png',
        description: 'Adverte o ciclista e o pedestre da existência, adiante, de trecho de via com trânsito compartilhado. Utilizado quando ocorrer circulação compartilhada de ciclista e pedestre, na mesma pista, acostamento, canteiro central ou calçada.'
    })
    wBoards.push({
        id: 'wb48',
        name: 'Trânsito de tratores ou de maquinária agrícola',
        code: 'A-31',
        url: path + 'a31.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de local de cruzamento ou trânsito eventual de toda espécie de tratores e máquinas agrícolas. Utilizado quando é prevista a travessia ou o trânsito de tratores ou maquinária agrícola.'
    })
    wBoards.push({
        id: 'wb49',
        name: 'Trânsito de pedestres',
        code: 'A-32a',
        url: path + 'a32a.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de trecho de via com trânsito de pedestres. Utilizado quando necessário alertar o condutor sobre existência de trecho de via com trânsito de pedestres.'
    })
    wBoards.push({
        id: 'wb50',
        name: 'Passagem sinalizada de pedestres',
        code: 'A-32b',
        url: path + 'a32b.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de local sinalizado com faixa de travessia de pedestres. Utilizado em: Área rural: sempre que a faixa de travessia de pedestres for demarcada na via/pista; Área urbana: quando a faixa de travessia de pedestres for de difícil percepção pelo condutor ou que possa comprometer a segurança dos usuários da via.'
    })
    wBoards.push({
        id: 'wb51',
        name: 'Área escolar',
        code: 'A-33a',
        url: path + 'a33a.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de trecho de via com trânsito de escolares. Utilizado nas proximidades de área escolar ou em trechos de via que compõem o percurso de escolares.'
    })
    wBoards.push({
        id: 'wb52',
        name: 'Passagem sinalizada de escolares',
        code: 'A-33b',
        url: path + 'a33b.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de local sinalizado com faixa de travessia de pedestres com predominância de escolares. Utilizado quando a faixa de travessia de pedestres, com predominância de escolares, for de difícil percepção pelo condutor ou que possa comprometer a segurança dos usuários da via.'
    })
    wBoards.push({
        id: 'wb53',
        name: 'Crianças',
        code: 'A-34',
        url: path + 'a34.png',
        description: 'Adverte o condutor da existência, adiante, de área adjacente utilizada para o lazer de crianças. Utilizado junto às áreas de recreação infantil, tais como: parques, quadras de esportes, jardins etc., quando essas forem próximas à via e desprovidas de barreira física, podendo acarretar a travessia repentina de crianças.'
    })
    wBoards.push({
        id: 'wb54',
        name: 'Animais',
        code: 'A-35',
        url: path + 'a35.png',
        description: 'Adverte o condutor do veículo da possibilidade de presença, adiante, de animais na via. Utilizado em vias onde há possibilidade de presença de animais.'
    })
    wBoards.push({
        id: 'wb55',
        name: 'Animais selvagens',
        code: 'A-36',
        url: path + 'a36.png',
        description: 'Adverte o condutor do veículo da possibilidade de presença, adiante, de animais selvagens na via. Utilizado em vias onde há possibilidade de presença de animais selvagens.'
    })
    wBoards.push({
        id: 'wb56',
        name: 'Altura limitada',
        code: 'A-37',
        url: path + 'a37.png',
        description: 'Adverte o condutor da existência, adiante, de restrição de altura máxima do veículo, com ou sem carga. Utilizado sempre que as características da via ou do ambiente não permitam a passagem de veículos com altura superior à indicada.'
    })
    wBoards.push({
        id: 'wb57',
        name: 'Largura limitada',
        code: 'A-38',
        url: path + 'a38.png',
        description: 'Adverte o condutor da existência, adiante, de restrição de largura máxima do veiculo, com ou sem carga. Utilizado sempre que as características da via ou do ambiente não permitam a passagem de veículos com largura superior à indicada.'
    })
    wBoards.push({
        id: 'wb58',
        name: 'Passagem de nível sem barreira',
        code: 'A-39',
        url: path + 'a39.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de um cruzamento com linha férrea em nível sem barreira. Utilizada sempre que existirem cruzamentos rodoferroviários em nível.'
    })
    wBoards.push({
        id: 'wb59',
        name: 'Passagem de nível com barreira',
        code: 'A-40',
        url: path + 'a40.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de um cruzamento com linha férrea em nível com barreira. Utilizada sempre que existirem cruzamentos rodoferroviários em nível.'
    })
    wBoards.push({
        id: 'wb60',
        name: 'Cruz de Santo André',
        code: 'A-41',
        url: path + 'a41.png',
        description: 'Adverte o condutor do veículo da existência, no local de cruzamento com linha férrea em nível. Utilizado sempre que existir um cruzamento rodoferroviário em nível.'
    })
    wBoards.push({
        id: 'wb61',
        name: 'Início de pista dupla',
        code: 'A-42a',
        url: path + 'a42a.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de pista em que os fluxos opostos de tráfego passam a ser separados por um canteiro ou obstáculo. Utilizado quando é necessário advertir o início do canteiro ou obstáculo que separam fluxos opostos.'
    })
    wBoards.push({
        id: 'wb62',
        name: 'Fim de pista dupla',
        code: 'A-42b',
        url: path + 'a42b.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de pista em que os fluxos opostos de tráfego deixam de ser separados por um canteiro ou obstáculo. Utilizado quando é necessário advertir o término do canteiro ou obstáculo que separam fluxos opostos.'
    })
    wBoards.push({
        id: 'wb63',
        name: 'Pista dividida',
        code: 'A-42c',
        url: path + 'a42c.png',
        description: 'Adverte o condutor do veículo da existência de uma via onde os fluxos de tráfego de mesmo sentido de circulação passam a ser divididos por um canteiro ou obstáculo. Utilizado, quando é necessário advertir o início do canteiro ou obstáculo que separa fluxos de mesmo sentido.'
    })
    wBoards.push({
        id: 'wb64',
        name: 'Aeroporto',
        code: 'A-43',
        url: path + 'a43.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de aeroporto ou aeródromo próximo à via. Utilizado sempre que aeronaves voando a baixa altura possam causar reações inesperadas que comprometam a segurança dos condutores de veículos.'
    })
    wBoards.push({
        id: 'wb65',
        name: 'Vento lateral',
        code: 'A-44',
        url: path + 'a44.png',
        description: 'Adverte o condutor do veículo da existência, adiante, de trecho de via ao longo do qual ocorre freqüentemente vento lateral forte. Utilizado sempre que existir trecho de via sujeito a fortes ventos laterais, que possam comprometer a estabilidade do veículo, representando risco à segurança dos usuários da via.'
    })
    wBoards.push({
        id: 'wb66',
        name: 'Rua sem saída',
        code: 'A-45',
        url: path + 'a45.png',
        description: 'Adverte o condutor do veículo da existência de via sem continuidade. Utilizado na entrada de vias sem interligação com outras vias, onde os veículos que nela circulem necessitem executar manobra de retorno para voltar à via de origem.'
    })
    wBoards.push({
        id: 'wb67',
        name: 'Peso bruto total limitado',
        code: 'A-46',
        url: path + 'a46.png',
        description: 'Adverte o condutor da existência, adiante, de restrição de peso bruto total máximo do veículo. Utilizado sempre que as características da via não permitam o trânsito de veículos com peso bruto total superior ao indicado, devido às restrições ou limitações estruturais da área, via/pista, faixa ou obra de arte.'
    })
    wBoards.push({
        id: 'wb68',
        name: 'Peso limitado por eixo',
        code: 'A-47',
        url: path + 'a47.png',
        description: 'Adverte o condutor da existência, adiante, de restrição de peso limitado por eixo do veículo.  Utilizado sempre que as características da via não permitam o trânsito de veículos com peso limitado por eixo superior ao indicado, devido às restrições ou limitações estruturais da área, via/pista, faixa ou obra de arte.'
    })
    wBoards.push({
        id: 'wb69',
        name: 'Comprimento limitado',
        code: 'A-48',
        url: path + 'a48.png',
        description: 'Adverte o condutor quanto ao comprimento máximo permitido do veículo ou combinação de veículos para transitar na via/pista. Utilizado sempre que as características da via não permitam o trânsito de veículos com comprimento superior ao indicado, devido às restrições ou limitações geométricas da via/pista, em geral curvas verticais ou horizontais acentuadas.'
    })
    return wBoards
}
