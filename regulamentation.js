export default function regulamentation(rBoards) {
    let path = 'images/regulamentacao/'
    rBoards.push({
        id: 'rb1',
        name: 'Parada obrigatória',
        code: 'R-1',
        url: path + 'r1.png',
        description: 'Assinala ao condutor que deve parar seu veículo antes de entrar ou cruzar a via/pista. Seu uso deve se restringir às situações em que a parada de veículos for realmente necessária, sendo insuficiente ou perigosa a simples redução da velocidade ou quando ocorrer uma das condições: onde o risco potencial ou a ocorrência de acidentes; nas interseções sem controle por semáforo, em área que tenha grande número de interseções semaforizadas; nas passagens de nível não semaforizadas; em vias transversais, junto a interseções com vias consideradas preferenciais, devido suas condições geométricas, de volume de tráfego ou continuidade física; em interseções em que a via considerada secundária apresenta visibilidade restrita.'
    })
    rBoards.push({
        id: 'rb2',
        name: 'Dê a preferência',
        code: 'R-2',
        url: path + 'r2.png',
        description: 'Assinala ao condutor a obrigatoriedade de dar preferência de passagem ao veículo que circula na via em que vai entrar ou cruzar, devendo para tanto reduzir a velocidade ou parar seu veículo, se necessário. Utilizado para controlar o fluxo que vai entrar em uma via com preferência de passagem somente se houver boa intervisibilidade entre os veículos que se aproximam.'
    })
    rBoards.push({
        id: 'rb3',
        name: 'Sentido proibido',
        code: 'R-3',
        url: path + 'r3.png',
        description: 'Assinala ao condutor a proibição de seguir em frente ou entrar na pista ou área restringida pelo sinal. Utilizado quando em determinada pista ou área, a partir de certo ponto, não é mais permitida a circulação no sentido que vinha sendo praticado. Seguintes casos: nas interseções onde o trecho contínuo de uma pista tenha sentido de circulação contrário ao da aproximação anterior não lhe dando continuidade; nas interseções em “Y” ou em outros entroncamentos oblíquos para estabelecer a proibição de circulação em determinado sentido; na proibição de acesso em vias ou áreas determinadas.'
    })
    rBoards.push({
        id: 'rb4',
        name: 'Proibido virar à esquerda',
        code: 'R-4a',
        url: path + 'r4a.png',
        description: 'Assinala ao condutor do veículo a proibição de realizar o movimento de conversão à esquerda. Utilizado quando for necessário proibir movimentos que prejudiquem a segurança e/ou fluidez do trânsito, ou que causem problemas de capacidade na via/pista transversal.'
    })
    rBoards.push({
        id: 'rb5',
        name: 'Proibido virar à direita',
        code: 'R-4b',
        url: path + 'r4b.png',
        description: 'Assinala ao condutor do veículo a proibição de realizar o movimento de conversão à direita. Utilizado quando for necessário proibir movimentos que prejudiquem a segurança e/ou fluidez do trânsito, ou que causem problemas de capacidade na via/pista transversal.'
    })
    rBoards.push({
        id: 'rb6',
        name: 'Proibido retornar à esquerda',
        code: 'R-5a',
        url: path + 'r5a.png',
        description: 'Assinala ao condutor do veículo a proibição de retornar à esquerda. Utilizado em vias com duplo sentido de circulação com mais de uma pista, quando for necessário proibir o movimento de retorno à esquerda, por trazer prejuízo à segurança e/ou fluidez do trânsito.'
    })
    rBoards.push({
        id: 'rb7',
        name: 'Proibido retornar à direita',
        code: 'R-5b',
        url: path + 'r5b.png',
        description: 'Assinala ao condutor de veículo a proibição de retornar à direita. Utilizado em vias com canteiro central e sentido duplo de circulação oposto à Norma Geral estabelecida no art. 29, inciso I do CTB (mão-inglesa), quando for necessário proibir o movimento de retorno à direita que prejudique a segurança e/ou fluidez do trânsito.'
    })
    rBoards.push({
        id: 'rb8',
        name: 'Proibido estacionar',
        code: 'R-6a',
        url: path + 'r6a.png',
        description: 'Assinala ao condutor que é proibido o estacionamento de veículos. Utilizado sempre que o estacionamento de veículo for considerado prejudicial, por motivo de segurança, visibilidade, fluidez ou quando estudos de engenharia indicarem a necessidade da restrição.'
    })
    rBoards.push({
        id: 'rb9',
        name: 'Estacionamento regulamentado',
        code: 'R-6b',
        url: path + 'r6b.png',
        description: 'Assinala ao condutor que é permitido o estacionamento de veículos. Utilizado para: Regulamentar as condições específicas de estacionamento de veículos, através de informação complementar, tal como, categoria e espécie de veículo, carga e descarga, ponto de ônibus, tempo de permanência, posicionamento na via, forma de cobrança, delimitação de trecho, motos, bicicletas, deficiente físico; Permitir o estacionamento em locais que têm, como regra geral, a proibição de estacionamento e/ou parada, nos seguintes casos: - Viadutos e pontes; - Ao lado de canteiros centrais, gramados ou jardins públicos; - Acostamentos; - Área de cruzamento: interseção em T, entroncamento e confluências.'
    })
    rBoards.push({
        id: 'rb10',
        name: 'Proibido parar e estacionar',
        code: 'R-6c',
        url: path + 'r6c.png',
        description: 'Assinala ao condutor que é proibido a parada e estacionamento de veículos. Utilizado em locais onde, por motivos de segurança e/ou fluidez do tráfego, é necessário que se impeça a parada e o estacionamento de veículos, como por exemplo: vias de trânsito rápido; aproximação de interseções críticas; vias com problemas de capacidade; curvas verticais e/ou horizontais acentuadas; limitações físicas da via.'
    })
    rBoards.push({
        id: 'rb11',
        name: 'Proibido ultrapassar',
        code: 'R-7',
        url: path + 'r7.png',
        description: 'Assinala ao condutor do veículo que é proibido realizar o movimento de ultrapassagem no trecho regulamentado, pela(s) faixa(s) destinada(s) ao sentido oposto de circulação. Utilizado onde as condições de distância de visibilidade, traçado, ocorrência de obstáculos, ou qualquer outra condição de segurança e/ou fluidez, não permitam a ultrapassagem segura dos veículos, nos seguintes casos: Necessidade de reforçar a sinalização horizontal de proibição de ultrapassagem (linha de divisão de fluxos opostos – contínua amarela); Impossibilidade de utilizar sinalização horizontal.'
    })
    rBoards.push({
        id: 'rb12',
        name: 'Proibido mudar de faixa ou pista de trânsito da esquerda para direita',
        code: 'R-8a',
        url: path + 'r8a.png',
        description: 'Assinala ao condutor do veículo que, no trecho objeto da regulamentação, é proibida a mudança de faixa ou pista da esquerda para direita. Utilizado sempre que a transposição de faixa ou pista for prejudicial à segurança e/ou fluidez do tráfego, nos seguintes casos: em via com sentido único de circulação, com canteiro central ou divisores de pista; em pistas com duas ou mais faixas no mesmo sentido; necessidade de reforçar a sinalização horizontal de proibição de transposição (linha de divisão de fluxos de mesmo sentido – contínua branca).'
    })
    rBoards.push({
        id: 'rb13',
        name: 'Proibido mudar de faixa ou pista de trânsito da direita para esquerda',
        code: 'R-8b',
        url: path + 'r8b.png',
        description: 'Assinala ao condutor do veículo que, no trecho objeto da regulamentação, é proibida a mudança de faixa ou pista da direita para esquerda. Utilizado sempre que a transposição de faixa ou pista for prejudicial à segurança e/ou fluidez do tráfego, nos seguintes casos: em via com sentido único de circulação, com canteiro central ou divisores de pista; em pistas com duas ou mais faixas de rolamento no mesmo sentido; necessidade de reforçar a sinalização horizontal de proibição de transposição (linha de divisão de fluxos de mesmo sentido – contínua branca).'
    })
    rBoards.push({
        id: 'rb14',
        name: 'Proibido trânsito de caminhões',
        code: 'R-9',
        url: path + 'r9.png',
        description: 'Assinala ao condutor de caminhão a proibição de transitar a partir do ponto sinalizado, na área, via/pista ou faixa. Utilizado para proibir o trânsito de caminhões, por motivos de segurança, fluidez, conflito com uso e ocupação do solo, restrições físicas da via ou limitações estruturais em obras-de-arte.'
    })
    rBoards.push({
        id: 'rb15',
        name: 'Proibido trânsito de veículos automotores',
        code: 'R-10',
        url: path + 'r10.png',
        description: 'Assinala ao condutor de qualquer veículo automotor a proibição de transitar, a partir do ponto sinalizado, na área ou via/pista ou faixa. Utilizado em área, via/pista ou faixa para proibir o trânsito de veículos automotores.'
    })
    rBoards.push({
        id: 'rb16',
        name: 'Proibido trânsito de veículos de tração animal',
        code: 'R-11',
        url: path + 'r11.png',
        description: 'Assinala ao condutor de veículo de tração animal a proibição de transitar a partir do ponto sinalizado, na área ou via/pista ou faixa. Utilizado para proibir o trânsito de veículos de tração animal por motivo de segurança ou fluidez.'
    })
    rBoards.push({
        id: 'rb17',
        name: 'Proibido trânsito de bicicletas',
        code: 'R-12',
        url: path + 'r12.png',
        description: 'Assinala ao ciclista a proibição de transitar de bicicleta a partir do ponto sinalizado na área, via/pista ou faixa. Utilizado para proibir o trânsito de bicicletas por motivo de segurança ou fluidez.'
    })
    rBoards.push({
        id: 'rb18',
        name: 'Proibido trânsito de tratores e máquinas de obras',
        code: 'R-13',
        url: path + 'r13.png',
        description: 'Assinala ao condutor de tratores e máquinas de obras a proibição de transitar a partir do ponto sinalizado, na área ou via/pista. Utilizado para proibir o trânsito ou a passagem de tratores e máquinas de obras, por motivo de segurança ou fluidez.'
    })
    rBoards.push({
        id: 'rb19',
        name: 'Peso bruto total máximo permitido',
        code: 'R-14',
        url: path + 'r14.png',
        description: 'Regulamenta o peso bruto total máximo permitido a um veículo para transitar na área, via/pista ou faixa. Utilizado para proibir o trânsito de veículos com peso bruto total superior ao indicado, cuja circulação é incompatível com as restrições ou limitações estruturais da área, via/pista, faixa ou obra-de-arte.'
    })
    rBoards.push({
        id: 'rb20',
        name: 'Altura máxima permitida',
        code: 'R-15',
        url: path + 'r15.png',
        description: 'Regulamenta o peso bruto total máximo permitido a um veículo para transitar na área, via/pista ou faixa. Utilizado para proibir o trânsito de veículos com altura superior à indicada, devido à existência de obstáculos físicos à frente, em geral obras, pontes, viadutos, túneis, passarelas e outras obras de arte.'
    })
    rBoards.push({
        id: 'rb21',
        name: 'Largura máxima permitida',
        code: 'R-16',
        url: path + 'r16.png',
        description: 'Regulamenta a largura máxima permitida do veículo para transitar na área ou via/pista. Utilizado para proibir o trânsito de veículos com largura superior à indicada, devido à existência de obstáculos físicos à frente, em geral obras, estreitamentos de pistas, pontes, viadutos, túneis, passarelas e outras obras de arte.'
    })
    rBoards.push({
        id: 'rb22',
        name: 'Peso máximo permitido por eixo',
        code: 'R-17',
        url: path + 'r17.png',
        description: 'Regulamenta o peso máximo permitido por eixo do veículo para transitar na área, via/pista ou faixa. Utilizado para proibir o trânsito de veículos com peso por eixo superior ao indicado, cuja circulação é incompatível com as restrições ou limitações estruturais da área, via/pista, faixa ou obra de arte.'
    })
    rBoards.push({
        id: 'rb23',
        name: 'Comprimento máximo permitido',
        code: 'R-18',
        url: path + 'r18.png',
        description: 'Regulamenta o comprimento máximo permitido do veículo ou combinação de veículo para transitar na área, via/pista. Utilizado para proibir o trânsito de veículos cujo comprimento total acima do indicado é incompatível com as condições geométricas da via ou do local, em geral curvas verticais ou horizontais acentuadas.'
    })
    rBoards.push({
        id: 'rb24',
        name: 'Velocidade máxima permitida',
        code: 'R-19',
        url: path + 'r19.png',
        description: 'Regulamenta o limite máximo de velocidade em que o veículo pode circular na pista ou faixa, válido a partir do ponto onde o sinal é colocado.'
    })
    rBoards.push({
        id: 'rb25',
        name: 'Proibido acionar buzina ou sinal sonoro',
        code: 'R-20',
        url: path + 'r20.png',
        description: 'Assinala ao condutor do veículo que é proibido acionar a buzina ou qualquer outro tipo de sinal sonoro, no local regulamentado. Usado em locais onde o uso do solo exija nível de ruído especialmente baixo.'
    })
    rBoards.push({
        id: 'rb26',
        name: 'Alfândega',
        code: 'R-21',
        url: path + 'r21.png',
        description: 'Assinala ao condutor do veículo a presença de uma repartição alfandegária, onde a parada é obrigatória.'
    })
    rBoards.push({
        id: 'rb27',
        name: 'Uso obrigatório de correntes',
        code: 'R-22',
        url: path + 'r22.png',
        description: 'Assinala ao condutor de veículos que a partir do ponto sinalizado é obrigatório o uso de correntes atreladas às rodas do veículo. Essa obrigação se refere ao par de rodas motrizes. Utilizado em vias não pavimentadas onde ocorram dificuldades de passagem, como atoleiro, terreno encharcado, etc., e em regiões com ocorrência de neve.'
    })
    rBoards.push({
        id: 'rb28',
        name: 'Conserve-se à direita',
        code: 'R-23',
        url: path + 'r23.png',
        description: 'Assinala ao condutor do veículo a obrigatoriedade de manter-se à direita da pista , deixando livre a(s) faixa(s) da esquerda. Utilizado nos casos em que há restrição para o trânsito de veículos na(s) faixa(s) da esquerda.'
    })
    rBoards.push({
        id: 'rb29',
        name: 'Sentido de circulação da via',
        code: 'R-24a',
        url: path + 'r24a.png',
        description: 'Assinala ao condutor que a via/pista sinalizada tem sentido único de circulação. Utilizado quando se deseja regulamentar sentido único de circulação para uma via/pista. O seu uso aplica-se às situações em que estudos de engenharia indicarem a necessidade de implantação de sentido único de circulação para: aumentar a capacidade ou fluidez da via/pista; melhorar as condições de Segurança da via/pista; disciplinar e ordenar a circulação em vias estreitas; viabilizar o estacionamento em vias com restrição física; organizar o deslocamento de veículos em áreas, regiões ou no entorno de pólos geradores.'
    })
    rBoards.push({
        id: 'rb30',
        name: 'Passagem obrigatória',
        code: 'R-24b',
        url: path + 'r24b.png',
        description: 'Assinala ao condutor do veículo que existe um obstáculo e que a passagem é obrigatoriamente feita à direita/esquerda do mesmo. utilizado em pista simples com sentido duplo de circulação que passe a ser pista dupla, em: ilha separadora ou canalizadora de fluxos, em refúgio de pedestres e bifurcações.'
    })
    rBoards.push({
        id: 'rb31',
        name: 'Vire à esquerda',
        code: 'R-25a',
        url: path + 'r25a.png',
        description: 'Assinala ao condutor do veiculo a obrigatoriedade de realizar o movimento indicado. Utilizado em interseções, quando for necessário assinalar ao condutor do veículo o movimento permitido, nas situações em que houver necessidade de reforçar a mensagem dos sinais de movimento de circulação proibidos, obrigatórios ou de restrição de trânsito por espécie e categoria de veículo, por problemas de visibilidade desses sinais.'
    })
    rBoards.push({
        id: 'rb32',
        name: 'Vire à direita',
        code: 'R-25b',
        url: path + 'r25b.png',
        description: 'Assinala ao condutor do veiculo a obrigatoriedade de realizar o movimento indicado. utilizado em interseções, quando for necessário assinalar ao condutor do veículo o movimento permitido, nas situações em que houver necessidade de reforçar a mensagem dos sinais de movimento de circulação proibidos, obrigatórios ou de restrição de trânsito por espécie e categoria de veículo, por problemas de visibilidade desses sinais.'
    })
    rBoards.push({
        id: 'rb33',
        name: 'Siga em frente ou à esquerda',
        code: 'R-25c',
        url: path + 'r25c.png',
        description: 'Assinala ao condutor do veículo que os movimentos de circulação permitidos são somente os indicados. utilizado em interseções, quando for necessário assinalar ao condutor do veículo os movimentos permitidos, nas situações em que houver necessidade de reforçar a mensagem dos sinais de movimento de circulação proibidos, obrigatórios ou de restrição de trânsito por espécie e categoria de veículo, por problemas de visibilidade desses sinais.'
    })
    rBoards.push({
        id: 'rb34',
        name: 'Siga em frente ou à direita',
        code: 'R-25d',
        url: path + 'r25d.png',
        description: 'Assinala ao condutor do veículo que os movimentos de circulação permitidos são somente os indicados. Utilizado em interseções, quando for necessário assinalar ao condutor do veículo os movimentos permitidos, nas situações em que houver necessidade de reforçar a mensagem dos sinais de movimento de circulação proibidos, obrigatórios ou de restrição de trânsito por espécie e categoria de veículo, por problemas de visibilidade desses sinais.'
    })
    rBoards.push({
        id: 'rb35',
        name: 'Siga em frente',
        code: 'R-26',
        url: path + 'r26.png',
        description: 'Assinala ao condutor do veículo a obrigatoriedade de realizar o movimento indicado. Utilizado em interseções, quando for necessário assinalar ao condutor do veículo o movimento permitido, nas situações em que houver necessidade de reforçar a mensagem dos sinais de movimento de circulação proibidos, obrigatórios ou de restrição de trânsito por espécie e categoria de veículo, por problemas de visibilidade desses sinais.'
    })
    rBoards.push({
        id: 'rb36',
        name: 'Ônibus, caminhões e veículos de grande porte mantenham-se à direita',
        code: 'R-27',
        url: path + 'r27.png',
        description: 'Assinala ao condutor de ônibus, caminhões e veículos de grande porte a obrigação de circular pela(s) faixa(s) da direita. Utilizado para disciplinar as operações de transposição e/ou ultrapassagem de ônibus, caminhões e veículos de grande porte nos seguintes casos: em trechos de aclive, com faixa de trânsito adicional; em vias de faixas múltiplas no mesmo sentido, com fluxo significativo de veículos.'
    })
    rBoards.push({
        id: 'rb37',
        name: 'Duplo sentido de circulação',
        code: 'R-28',
        url: path + 'r28.png',
        description: 'Assinala ao condutor do veículo que a via de sentido único de circulação passa a ser de sentido duplo, após o ponto em que o sinal estiver colocado.'
    })
    rBoards.push({
        id: 'rb38',
        name: 'Proibido trânsito de pedestres',
        code: 'R-29',
        url: path + 'r29.png',
        description: 'Assinala ao pedestre a proibição de transitar na via ou área com restrição. Utilizado para proibir a entrada ou passagem de pedestres em uma área ou via, quando se verificar que isso pode ser prejudicial à sua segurança e a do trânsito em geral.'
    })
    rBoards.push({
        id: 'rb39',
        name: 'Pedestre, ande pela esquerda',
        code: 'R-30',
        url: path + 'r30.png',
        description: 'Assinala ao pedestre a obrigatoriedade de andar pelo lado esquerdo da área ou via. Utilizado para ordenar o fluxo de pedestres em locais que apresentem problemas de segurança ao trânsito destes tais como: Inexistência ou insuficiência de calçada em vias, pontes, viadutos ou túneis; Em situações de obras e obstáculos; Em eventos especiais.'
    })
    rBoards.push({
        id: 'rb40',
        name: 'Pedestre, ande pela direita',
        code: 'R-31',
        url: path + 'r31.png',
        description: 'Assinala ao pedestre a obrigatoriedade de andar pelo lado direito da área ou via. Utilizado para ordenar o fluxo de pedestres em locais que apresentem problemas de segurança ao trânsito destes tais como: Inexistência ou insuficiência de calçada em vias, pontes, viadutos ou túneis; Em situações de obras e obstáculos; Em eventos especiais.'
    })
    rBoards.push({
        id: 'rb41',
        name: 'Circulação exclusiva de ônibus',
        code: 'R-32',
        url: path + 'r32.png',
        description: 'Assinala ao condutor do veículo que a área, via/pista ou faixa(s) é de circulação exclusiva de ônibus. Utilizado nas áreas, vias, trechos de via, pistas ou faixas em que se deseja priorizar o transporte coletivo.'
    })
    rBoards.push({
        id: 'rb42',
        name: 'Sentido de circulação na rotatória',
        code: 'R-33',
        url: path + 'r33.png',
        description: 'Assinala ao condutor do veículo a obrigatoriedade do movimento no sentido anti-horário em rotatória. Utilizado em rotatórias com raio inferior a 12,0 m ou demarcadas por sinalização horizontal.'
    })
    rBoards.push({
        id: 'rb43',
        name: 'Circulação exclusiva de bicicletas',
        code: 'R-34',
        url: path + 'r34.png',
        description: 'Assinala que a área, trecho de via/pista ou faixa(s) é de circulação exclusiva de bicicletas. Utilizado quando se deseja restringir o uso de uma área, via/pista ou faixa à circulação exclusiva de bicicletas.'
    })
    rBoards.push({
        id: 'rb44',
        name: 'Ciclista, transite à esquerda',
        code: 'R-35a',
        url: path + 'r35a.png',
        description: 'Assinala ao ciclista a obrigatoriedade de transitar pelo lado esquerdo da área, via/pista. Utilizado para ordenar o fluxo de ciclistas em locais que apresentem problemas de circulação e segurança do trânsito.'
    })
    rBoards.push({
        id: 'rb45',
        name: 'Ciclista, transite à direita',
        code: 'R-35b',
        url: path + 'r35b.png',
        description: 'Assinala ao ciclista a obrigatoriedade de transitar pelo lado direito da área, via/pista. Utilizado para ordenar o fluxo de ciclistas em locais que apresentam problemas de circulação e segurança do trânsito.'
    })
    rBoards.push({
        id: 'rb46',
        name: 'Ciclistas à esquerda, pedestres à direita',
        code: 'R-36a',
        url: path + 'r36a.png',
        description: 'Regulamenta o trânsito de ciclistas à esquerda e pedestres à direita da área, via/pista. Utilizado quando se deseja regulamentar o lado da circulação de ciclistas e pedestres na faixa, via/pista ou passeio.'
    })
    rBoards.push({
        id: 'rb47',
        name: 'Ciclistas à direita, pedestres à esquerda',
        code: 'R-36b',
        url: path + 'r36b.png',
        description: 'Regulamenta o trânsito de pedestre à esquerda e ciclistas à direita da via/pista. Utilizado quando se deseja regulamentar o lado da circulação de ciclistas e pedestres na faixa, via/pista ou passeio.'
    })
    rBoards.push({
        id: 'rb48',
        name: 'Proibido trânsito de motocicletas, motonetas e ciclomotores',
        code: 'R-37',
        url: path + 'r37.png',
        description: 'Assinala ao condutor de motocicletas, motonetas e ciclomotores a proibição de transitar a partir do ponto sinalizado na área, via/pista ou faixa. Utilizado para proibir o trânsito de motocicletas, motonetas e ciclomotores por motivo de segurança ou fluidez.'
    })
    rBoards.push({
        id: 'rb49',
        name: 'Proibido trânsito de ônibus',
        code: 'R-38',
        url: path + 'r38.png',
        description: 'Assinala ao condutor de ônibus a proibição de transitar, a partir do ponto sinalizado, na área, via/pista ou faixa. Utilizado para proibir o trânsito de ônibus, por motivos de segurança, conflito com uso e ocupação do solo, restrições físicas da via ou limitações estruturais em obras-de-arte.'
    })
    rBoards.push({
        id: 'rb50',
        name: 'Circulação exclusiva de caminhão',
        code: 'R-39',
        url: path + 'r39.png',
        description: 'Assinala ao condutor do veículo que a área, via/pista ou faixa é de circulação exclusiva de caminhão. Utilizado nas áreas, vias, trechos de via, pistas ou faixas em que se deseja exclusividade à circulação de caminhão.'
    })
    rBoards.push({
        id: 'rb51',
        name: 'Trânsito proibido a carros de mão',
        code: 'R-40',
        url: path + 'r40.png',
        description: 'Assinala ao condutor de carro de mão a proibição de transitar a partir do ponto sinalizado, na área, via/pista ou faixa. Utilizado para proibir o trânsito de carros de mão por motivo de segurança ou fluidez.'
    })
    return rBoards
}
