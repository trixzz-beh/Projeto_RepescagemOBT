import { useState } from "react";
import { SimpleGrid } from "@mantine/core";
import "./ProjetoView.css";
import ProjetoCard from "./ProjetoCard";
import ProjetoDetails from "../projetodetails/ProjetoDetails";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ProjetoView = () => {
  const [projeto] = useState([
    {
      titulo: "Densidade óssia e muscular em microgravidade",
      bandeira: "eua.png",
      descricao:
        "Este experimento utiliza camundongos como modelo biológico para estudar como a microgravidade afeta a perda de densidade óssea e massa muscular em ambiente de microgravidade. O projeto testa medicamentos inovadores baseados em inibidores de miostatina que podem proteger astronautas durante missões de longa duração (Lua, Marte) e oferecer tratamentos revolucionários para doenças como osteoporose, sarcopenia e distrofias musculares na Terra.Os pesquisadores medem a densidade óssea dos camundongos antes e depois da missão usando equipamento especializado de densitometria de raios-X, analisando como o bloqueio da miostatina afeta a preservação de massa muscular e óssea. Os resultados diretos já demonstraram que este medicamento pode ser eficaz tanto para astronautas quanto para pacientes idosos com perda de massa muscular. É um dos experimentos mais críticos para garantir a saúde e viabilidade de futuras explorações espaciais de longa duração, pois a perda de densidade óssea e muscular representa um dos maiores riscos fisiológicos para astronautas em microgravidade.",

      topicos: [
        "Projeto: Densidade Óssea e Muscular em Microgravidade",
        "Nome Científico Real: Rodent Research-19 (RR-19) / Bone Densitometer",
        "País: Estados Unidos (EUA)",
        "Área Científica: Biologia Humana / Fisiologia Espacial",
        "Objetivo: Investigar mecanismos de perda óssea e muscular em microgravidade e testar inibidores de miostatina como potencial tratamento para prevenir atrofia em astronautas durante missões de longa duração.",
        "Importância: Crucial para o sucesso de futuras missões de longa duração à Lua e Marte. Também fornece insights valiosos para o tratamento de osteoporose e perda muscular relacionada à idade na Terra.",
        "Resultados Esperados: Identificar se medicamentos baseados em inibidores de miostatina podem mitigar efetivamente a perda de densidade óssea e massa muscular em ambiente de microgravidade",
        "Resultados Obtidos: Demonstrou que o bloqueio da miostatina previne significativamente a perda de massa muscular e óssea em camundongos no espaço, abrindo caminho para novos tratamentos.",
        "Curiosidade: Astronautas perdem aproximadamente 1% de densidade óssea por mês sem exercícios e contramedidas adequadas. Após 6 meses em órbita, a perda pode ser comparável à de uma pessoa idosa em 10 anos na Terra.",
        "Status: Danificado",
        "Integridade: 35%",
        "Nível de Prioridade: Crítica",
        "Módulo da ISS: Destiny (Laboratório dos EUA)",
        `Lista de Reparos:
        - Inspecionar o equipamento de densitometria óssea para danos estruturais causados pelo impacto
        - Verificar calibração dos sensores de medição de densidade
        - Substituir módulo de armazenamento de dados danificado
        - Restaurar conexão de comunicação com o servidor de dados terrestre
        - Realizar testes de funcionamento com amostras de controle
        - Documentar todos os resultados de reparo e validar equipamento`,
      ],

      fotoProjeto: "corrida.jpg",
      status: false,
    },

    {
      titulo: "Materiais resistentes à radiação espacial",
      bandeira: "eua.png",
      descricao:
        "O MISSE é uma série de experimentos que expõe diversos materiais avançados ao ambiente extremo do espaço, incluindo radiação cósmica intensa, vácuo absoluto, ciclos de temperatura extrema (-150°C a +120°C) e oxigênio atômico altamente reativo. Amostras de polímeros, revestimentos especiais, compostos de carbono e outros materiais inovadores são deixadas do lado de fora da ISS por períodos prolongados para avaliar sua degradação, mudanças de cor, perda de propriedades mecânicas e durabilidade. Os pesquisadores analisam como esses materiais se comportam quando expostos a um ambiente que não existe na Terra, onde a radiação solar não é filtrada pela atmosfera e a pressão é praticamente zero.Os dados coletados permitem validar quais materiais são adequados para futuras estruturas espaciais, painéis solares, isolamento térmico e proteção de naves. Os resultados são essenciais para desenvolver naves mais seguras e duráveis, trajes espaciais avançados, painéis solares eficientes e estruturas para futuras bases lunares e marcianas, garantindo que os equipamentos possam suportar décadas de exposição ao ambiente espacial extremo.",

      topicos: [
        "Projeto: Materiais Resistentes à Radiação Espacial",
"Nome Científico Real: MISSE (Materials International Space Station Experiment) - MISSE-12",
"País: Estados Unidos (EUA) / Colaboração Internacional",
"Área Científica: Ciência dos Materiais / Engenharia de Materiais",
"Objetivo: Testar a durabilidade e resistência de novos materiais avançados (polímeros, revestimentos, compostos) expostos ao ambiente espacial extremo, incluindo radiação UV, radiação cósmica, vácuo, oxigênio atômico e ciclos de temperatura.",
"Importância: Desenvolver materiais mais seguros e duráveis para futuras naves espaciais, trajes espaciais, satélites e bases lunares. Essencial para garantir a segurança de astronautas em missões de exploração.",
"Resultados Esperados: Identificar materiais que não degradam significativamente sob radiação UV intensa e radiação cósmica, mantendo suas propriedades mecânicas e térmicas.",
"Resultados Obtidos: Diversos materiais foram validados com sucesso para uso em satélites, futuras bases lunares e naves de exploração. Compostos de carbono e revestimentos especiais mostraram excelente resistência.",
"Curiosidade: Os materiais ficam do lado de fora da ISS, expostos diretamente ao vácuo do espaço e à radiação solar não filtrada. A radiação cósmica no espaço é aproximadamente 150 vezes mais intensa do que na superfície da Terra.",
"Status: Avariado",
"Integridade: 45%",
"Nível de Prioridade: Alta",
"Módulo da ISS: ELC (ExPRESS Logistics Carrier) - Externo",
`Lista de Reparos:
- Recuperar amostras de materiais do exterior da estação com segurança
- Inspecionar danos causados por impacto de detritos espaciais
- Limpar e proteger amostras contra contaminação adicional
- Transferir amostras para contêiner de armazenamento seguro com isolamento térmico
- Documentar condições atuais de cada material e grau de degradação
- Preparar amostras para retorno à Terra em próximo voo de carga`,
      ],

      fotoProjeto: "radiacao.jpg",
      status: false,
    },

    {
      titulo: "Comportamento de fluidos em microgravidade",
      bandeira: "eua.png",
      descricao:
        "Este experimento estuda como líquidos se comportam sem a influência da gravidade, focando em fenômenos de capilaridade e tensão superficial que dominam completamente o comportamento dos fluidos em microgravidade. Os pesquisadores observam como água, combustível e outros líquidos se movem em diferentes geometrias de recipientes, formando padrões e comportamentos impossíveis de reproduzir na Terra onde a gravidade sempre 'puxa' os fluidos para baixo.Os dados coletados permitem aos engenheiros desenvolver sistemas inovadores onde bombas tradicionais não funcionam, criando alternativas baseadas em forças capilares para transportar combustível, água potável e oxigênio em naves espaciais. Esses sistemas são críticos para futuras missões de longa duração onde o peso e o consumo de energia são fatores limitantes. Os modelos matemáticos gerados a partir deste experimento revolucionam a engenharia aeroespacial, permitindo o design de sistemas de suporte de vida mais eficientes, compactos e confiáveis para futuras bases lunares, marcianas e naves de exploração profunda do espaço.",

      topicos: [
        "Projeto: Comportamento de Fluidos em Microgravidade",
        "Nome Científico Real: BioRock / EXPOSE",
        "País: Estados Unidos (EUA)",
        "Área Científica: Física de Fluidos / Dinâmica de Fluidos",
        "Objetivo: Estudar como líquidos se movem em superfícies e recipientes sem a influência da gravidade, focando especialmente em fenômenos de capilaridade e tensão superficial em ambiente de microgravidade.",
        "Importância: Melhorar sistemas de combustível de naves espaciais, otimizar sistemas de suporte de vida (distribuição de água e oxigênio), e desenvolver tecnologias para futuras missões de exploração.",
        "Resultados Esperados: Desenvolver modelos matemáticos precisos e validados para o comportamento de fluidos em microgravidade que possam ser aplicados no design de sistemas de naves.",
        "Resultados Obtidos: Descobertas revolucionárias sobre como geometrias específicas de recipientes podem controlar o fluxo de líquidos sem necessidade de bombas, usando apenas forças capilares.",
        "Curiosidade: Em microgravidade, a tensão superficial domina completamente sobre a gravidade, fazendo com que a água forme esferas perfeitas. Sem gravidade, um copo de água não 'cai' para o fundo; em vez disso, forma uma esfera flutuante.",
        "Status: Intacto",
        "Integridade: 100%",
        "Nível de Prioridade: Média",
        "Módulo da ISS: Columbus (ESA) ou Destiny (NASA)",
        "Lista de Reparos: Nenhuma - Experimento totalmente funcional",
      ],

      fotoProjeto: "fluido.jpeg",
      status: true,
    },

    {
      titulo: "Microorganismos em ambiente extremo",
      bandeira: "europa.png",
      descricao:
        "O BioRock estuda como bactérias especializadas interagem com rochas e minérios em ambiente extremo de microgravidade e vácuo, investigando a possibilidade revolucionária de usar microrganismos para extrair minerais valiosos de asteroides, solo lunar e marciano através de biomineração. O experimento expõe bactérias a rochas basálticas e observa se conseguem extrair elementos de terras raras, ferro, cobre e outros minerais essenciais. Este projeto abre perspectivas transformadoras para autossuficiência de futuras colônias espaciais, permitindo que os astronautas extraiam recursos locais usando processos biológicos em vez de máquinas pesadas e consumidoras de energia. Se bem-sucedido, bactérias poderiam ser 'plantadas' em asteroides ou na Lua para extrair recursos continuamente, fornecendo matérias-primas para construção, combustível e suprimentos.",

      topicos: [
        "Projeto: Microrganismos em Ambiente Extremo",
        "Nome Científico Real: BioRock / EXPOSE",
        "País: Reino Unido / Europa (ESA)",
        "Área Científica: Astrobiologia / Microbiologia",
        "Objetivo: Estudar como microrganismos interagem com rochas em ambiente de microgravidade e vácuo, e investigar se bactérias podem ser usadas para mineração espacial (biomineração) de asteroides e corpos celestes.",
        "Importância: Possibilidade revolucionária de extrair recursos valiosos (metais, terras raras) de asteroides ou solo lunar/marciano usando bactérias. Essencial para sustentabilidade de futuras colônias espaciais.",
        "Resultados Esperados: Verificar se bactérias conseguem extrair minerais de rochas em microgravidade e se mantêm viabilidade em ambiente extremo do espaço.",
        "Resultados Obtidos: Confirmado que bactérias podem extrair elementos de terras raras de rochas basálticas no espaço. Algumas espécies mostraram adaptação notável ao ambiente extremo.",
        "Curiosidade: Algumas bactérias tornam-se mais resistentes ou agressivas no espaço. Estudos indicam que a microgravidade pode ativar mecanismos de defesa bacterianos, tornando-as mais eficientes em certas tarefas.",
        "Status: Danificado",
        "Integridade: 25%",
        "Nível de Prioridade: Crítica",
        "Módulo da ISS: Kibo (JAXA) ou Columbus (ESA)",
        `Lista de Reparos:
- Verificar integridade dos recipientes de cultura de bactérias para vazamentos
- Restaurar sistema de controle de temperatura e umidade relativa
- Recolher amostras viáveis de bactérias para análise laboratorial
- Limpar e descontaminar equipamentos de laboratório
- Restaurar sensores de monitoramento de crescimento microbiano
- Preparar novo lote de amostras para continuação do experimento`,
      ],

      fotoProjeto: "ambiente_extremo.jpeg",
      status: false,
    },

    {
      titulo: "Crescimento de plantas em microgravidade",
      bandeira: "eua.png",
      descricao:
        "O Veggie/Advanced Plant Habitat é um sistema de cultivo inovador que permite aos astronautas plantar, cultivar e colher vegetais frescos diretamente no espaço, sem dependência total de suprimentos trazidos da Terra. O sistema utiliza LED especial para iluminação, controle automático de água e nutrientes, e sensores que monitoram o crescimento das plantas em tempo real em ambiente de microgravidade. O projeto valida tecnologias críticas de agricultura espacial essenciais para futuras colônias de longa duração na Lua e Marte, onde trazer alimentos da Terra seria economicamente impossível. Além dos benefícios nutricionais, o cultivo de plantas fornece benefícios psicológicos imensuráveis aos tripulantes, conectando-os com a natureza e oferecendo uma sensação de esperança e normalidade durante missões de meses ou anos. Já produziu com sucesso alface, zínias (as primeiras flores cultivadas no espaço), pimentas e outros vegetais, demonstrando a viabilidade completa de autossuficiência alimentar em ambiente de microgravidade. Os astronautas consumiram e validaram a segurança dos alimentos, confirmando que plantas crescem normalmente no espaço quando recebem luz, água e nutrientes adequados.",

      topicos: [
        "Projeto: Crescimento de Plantas em Microgravidade",
        "Nome Científico Real: Veggie (Vegetable Production System) / Advanced Plant Habitat (APH)",
        "País: Estados Unidos (EUA)",
        "Área Científica: Botânica / Agricultura Espacial",
        "Objetivo: Cultivar plantas comestíveis no espaço para suplementar a dieta dos astronautas, fornecer benefícios psicológicos e validar tecnologias de agricultura para futuras colônias espaciais de longa duração.",
        "Importância: Essencial para a sustentabilidade de colônias espaciais de longo prazo. Demonstra viabilidade de autossuficiência alimentar em Lua e Marte. Também melhora bem-estar psicológico dos astronautas.",
        "Resultados Esperados: Produção bem-sucedida de vegetais frescos e seguros para consumo, validando sistemas de cultivo em microgravidade.",
        "Resultados Obtidos: Sucesso notável no cultivo de alface, zínias (primeiras flores no espaço) e pimentas (primeiros frutos no espaço). Astronautas consumiram e validaram segurança dos alimentos.",
        "Curiosidade: As plantas crescem em direção à luz, já que não há 'cima' ou 'baixo' definido pela gravidade. Raízes crescem para a fonte de água, não para baixo. Isso desafia nossa compreensão tradicional de como as plantas se orientam.",
        "Status: Avariado",
        "Integridade: 60%",
        "Nível de Prioridade: Média",
        "Módulo da ISS: Columbus (ESA) ou Harmony (Node 2)",
        `Lista de Reparos:
- Inspecionar sistema de irrigação para vazamentos e entupimentos
- Reparar painéis de LED de iluminação danificados pelo impacto
- Verificar sistema de circulação de ar e ventilação
- Substituir solo/substrato contaminado ou danificado
- Restaurar sensores de umidade relativa e nutrientes das plantas
- Replanejar novo ciclo de plantio com espécies adequadas`,
      ],

      fotoProjeto: "planta.jpg",
      status: false,
    },

    {
      titulo: "Regeneração de tecidos em microgravidade",
      bandeira: "eua.png",
      descricao:
        "Descrição Breve: A BioFabrication Facility utiliza impressoras 3D especializadas e biocompatíveis para criar tecidos biológicos complexos (cartilagem, osso, tecido cardíaco, vasos sanguíneos) em ambiente de microgravidade onde a gravidade não interfere com o processo de impressão. Sem a influência da gravidade, as estruturas delicadas impressas mantêm sua forma perfeita durante o processo de cura e solidificação, resultando em tecidos de qualidade estrutural e funcional muito superior aos produzidos na Terra. Na Terra, a gravidade faz com que tecidos moles impressos em 3D 'derretam' ou colabem antes de solidificarem adequadamente, limitando drasticamente a complexidade e tamanho das estruturas que podem ser criadas. No espaço, sem essa limitação, é possível criar órgãos inteiros com arquitetura celular perfeita, vasos sanguíneos integrados e funcionalidade biológica completa. Este experimento tem potencial revolucionário para medicina regenerativa, permitindo a criação de órgãos para transplante na Terra, tratamento de lesões de astronautas no espaço e desenvolvimento de novos tecidos para pesquisa farmacêutica. Já produziu com sucesso um menisco humano completo e tecidos cardíacos funcionais que demonstraram propriedades mecânicas superiores aos tecidos convencionais.",

      topicos: [
        "Projeto: Regeneração de Tecidos em Microgravidade",
        "Nome Científico Real: 3D BioFabrication Facility (BFF)",
        "País: Estados Unidos (EUA)",
        "Área Científica: Bioengenharia / Medicina Regenerativa",
        "Objetivo: Imprimir tecidos biológicos complexos (como cartilagem ou órgãos) em 3D, aproveitando que a microgravidade evita o colapso das estruturas.",
        "Importância: Criar órgãos para transplante na Terra e tratar lesões de astronautas.",
        "Resultados Esperados: Impressão de tecidos complexos com alta fidelidade.",
        "Resultados Obtidos: Sucesso na impressão de um menisco humano e tecidos cardíacos.",
        "Curiosidade: Na Terra, a gravidade faz com que tecidos moles impressos em 3D 'derretam' antes de solidificarem.",
        "Status: Intacto",
        "Integridade: 100%",
        "Nível de Prioridade: Baixa",
        "Módulo da ISS: Destiny (NASA)",
        "Lista de Reparos: ",
        "Nenhuma - Experimento totalmente funcional",
      ],

      fotoProjeto: "serena.jpg",
      status: true,
    },

    {
      titulo: "Comunicação por rádio no espaço",
      bandeira: "eua.png",
      descricao:
        "O ARISS (Amateur Radio on the International Space Station) permite que estudantes, professores e radioamadores em todo o mundo falem diretamente com astronautas via rádio amador, criando conexões educacionais e inspiradoras que alcançam milhões de pessoas. Simultaneamente, o SCAN Testbed valida novas tecnologias de comunicação definidas por software (SDR) que podem revolucionar as comunicações espaciais, tornando-as mais resilientes, flexíveis e independentes de infraestrutura terrestre complexa. Este projeto único combina educação científica de alto impacto com pesquisa tecnológica avançada, engajando milhões de estudantes globalmente em STEM enquanto coleta dados valiosos sobre comunicações em ambiente espacial. As transmissões de rádio amador da ISS são ouvidas por entusiastas em mais de 100 países, criando um senso global de participação na exploração espacial. Os resultados das pesquisas de comunicação melhoram a resiliência das comunicações espaciais para futuras missões de exploração, permitindo que naves em Marte, Lua ou asteroides mantenham comunicação confiável mesmo com tecnologias inovadoras. Já realizou milhares de contatos bem-sucedidos com escolas, inspirando gerações de futuros cientistas e engenheiros espaciais.",

      topicos: [
        "Projeto: Comunicação por Rádio no Espaço",
        "Nome Científico Real: ARISS (Amateur Radio on the International Space Station) / SCAN Testbed",
        "País: Internacional (NASA, ESA, JAXA, Roscosmos)",
        "Área Científica: Engenharia de Comunicações / Telecomunicações",
        "Objetivo: Permitir que estudantes falem com astronautas via rádio amador e testar novas tecnologias de rádio definido por software para comunicações espaciais mais resilientes.",
        "Importância: Educação científica e melhoria da resiliência das comunicações espaciais.",
        "Resultados Esperados: Conexões estáveis e engajamento educacional global.",
        "Resultados Obtidos: Milhares de contatos realizados com escolas em todo o mundo.",
        "Curiosidade: Qualquer pessoa com um rádio amador pode, teoricamente, ouvir a ISS quando ela passa por cima.",
        "Status: Avariado",
        "Integridade: 50%",
        "Nível de Prioridade: Alta",
        "Módulo da ISS: Columbus (ESA) ou Zvezda (Rússia)",
        `Lista de Reparos:
        - Verificar antenas de rádio para danos estruturais causados pelo impacto
        - Testar transmissores e receptores de frequência
        - Restaurar sistema de modulação de frequência (FM/SSB)
        - Calibrar equipamentos de comunicação e sincronização
        - Restaurar conexão com estações de controle terrestre (Houston, Moscou, Tsukuba)
        - Realizar testes de comunicação com múltiplas frequências e validar sinal`,
      ],

      fotoProjeto: "comunicacao.jpg",
      status: false,
    },

    {
      titulo: "Cristalização de proteínas em microgravidade",
      bandeira: "japao.png",
      descricao:
        "O PCG (Protein Crystal Growth) produz cristais de proteína de qualidade e tamanho extraordinariamente superiores em ambiente de microgravidade, permitindo análise estrutural tridimensional detalhada via difração de raios-X que seria impossível ou impraticável na Terra. Sem a convecção causada pela gravidade, os cristais crescem de forma ordenada e perfeita, frequentemente 1000 vezes maiores e com estrutura muito mais bem definida do que cristais terrestres. Esses cristais revelam a estrutura molecular tridimensional exata de proteínas complexas, permitindo aos pesquisadores entender precisamente como funcionam e como podem ser modificadas para combater doenças. Esse conhecimento estrutural é fundamental para o design racional de novos medicamentos contra câncer, distrofias musculares, Alzheimer, HIV e inúmeras outras doenças graves. Já contribuiu diretamente para o desenvolvimento de tratamentos revolucionários, incluindo novos medicamentos para Distrofia Muscular de Duchenne que salvaram vidas e ofereceram esperança a pacientes que antes não tinham opções de tratamento. Cada cristal produzido no espaço potencialmente representa anos de pesquisa acelerada e vidas que podem ser salvas através de novos medicamentos.",

      topicos: [
        "Projeto: Cristalização de Proteínas em Microgravidade",
        "Nome Científico Real: PCG (Protein Crystal Growth) / JAXA PCG",
        "País: Japão (JAXA) / Estados Unidos (NASA)",
        "Área Científica: Bioquímica / Farmacologia / Cristalografia",
        "Objetivo: Produzir cristais de proteínas maiores e mais perfeitos do que na Terra para estudar suas estruturas.",
        "Importância: Desenvolvimento de novos medicamentos para doenças como câncer e distrofia muscular.",
        "Resultados Esperados: Cristais de alta qualidade para análise de difração de raios-X.",
        "Resultados Obtidos: Descoberta de estruturas proteicas que levaram a novos tratamentos para a Distrofia Muscular de Duchenne.",
        "Curiosidade: Sem a convecção causada pela gravidade, os cristais crescem de forma muito mais ordenada.",
        "Status: Danificado",
        "Integridade: 40%",
        "Nível de Prioridade: Alta",
        "Módulo da ISS: Kibo (JAXA)",
        `Lista de Reparos:
- Inspecionar câmaras de cristalização para danos estruturais
- Verificar sistema de controle de temperatura com precisão de ±0.1°C
- Restaurar sistema de isolamento térmico e proteção contra vibrações
- Recolher cristais já formados para análise via difração de raios-X
- Limpar e preparar câmaras para novo ciclo de crescimento
- Restaurar sistema de monitoramento de crescimento em tempo real`,
      ],

      fotoProjeto: "cristalizacao.jpg",
      status: false,
    },

    {
      titulo: "NICER - Neutron Star Interior Composition Explorer",
      bandeira: "eua.png",
      descricao:
        "O NICER é um telescópio de raios-X de alta resolução montado externamente na ISS que estuda estrelas de nêutrons e outros objetos cósmicos extremos. O instrumento captura fótons de raios-X de alta energia emitidos por estes objetos, permitindo aos astrônomos medir suas propriedades físicas como massa, raio e composição interna. Este é um dos instrumentos astronômicos mais importantes já colocados em órbita. O NICER também realiza estudos de navegação por raios-X, testando a possibilidade de usar pulsares como sistema de posicionamento natural no espaço profundo, similar ao GPS na Terra. Em janeiro de 2018, o NICER demonstrou com sucesso a navegação por raios-X, abrindo perspectivas revolucionárias para futuras missões autônomas a Marte e além. Os dados coletados pelo NICER contribuem para nossa compreensão fundamental da física extrema, testando as teorias da relatividade geral de Einstein e ajudando a responder questões sobre a natureza da matéria sob as condições mais extremas do universo.",
      fotoProjeto: "nicer.png",
      status: true,
      topicos: [
        "Projeto: NICER - Neutron Star Interior Composition Explorer",
"Nome Científico Real: NICER X-ray Telescope",
"País: Estados Unidos (NASA)",
"Área Científica: Astrofísica / Astronomia de Raios-X",
"Objetivo: Estudar a composição interna e propriedades de estrelas de nêutrons através de observações de raios-X de alta resolução",
"Importância: Fundamental para compreender a física extrema e testar a relatividade geral. Também valida navegação por raios-X para futuras missões",
"Resultados Esperados: Medições precisas de massa, raio e composição de estrelas de nêutrons",
"Resultados Obtidos: Descobertas revolucionárias sobre a estrutura interna de pulsares. Primeira demonstração bem-sucedida de navegação por raios-X em 2018",
"Curiosidade: Uma colher de chá de matéria de estrela de nêutrons pesaria aproximadamente 6 bilhões de toneladas na Terra. NICER consegue detectar variações de brilho em milissegundos",
"Status: Intacto",
"Integridade: 100%",
"Nível de Prioridade: Baixa",
"Módulo da ISS: Truss (Estrutura externa)",
"Lista de Reparos: ",
"Nenhuma - Experimento totalmente funcional",
      ]
    },

    {
      titulo: "InSPA-Auxilium Bioprinter",
      bandeira: "eua.png",
      descricao:
        "O InSPA-Auxilium Bioprinter é um sistema de impressão 3D especializado que produz implantes médicos complexos em microgravidade. Em 2025, oito implantes médicos para regeneração de nervos periféricos foram impressos simultaneamente com sucesso. Estes implantes são projetados para melhorar fluxo sanguíneo e permitir entrega direcionada de medicamentos em locais de lesão nervosa. A impressão em microgravidade oferece vantagens únicas: sem a influência da gravidade, as partículas não se sedimentam, resultando em estruturas muito mais uniformes e estáveis. Os implantes produzidos no espaço demonstram propriedades mecânicas e biológicas superiores aos produzidos na Terra, com potencial para revolucionar o tratamento de lesões nervosas. Este experimento representa um marco importante na manufatura em espaço, demonstrando que o ambiente orbital pode ser usado para produzir dispositivos médicos de qualidade superior. Os resultados abrem perspectivas para produção em massa de implantes médicos no espaço, reduzindo custos e melhorando acessibilidade a tratamentos avançados.",
      fotoProjeto: "inspa.png",
      status: true,
      topicos:[
"Projeto: InSPA-Auxilium Bioprinter",
"Nome Científico Real: Auxilium Biotechnologies Bioprinter",
"País: Estados Unidos (Empresa Privada)",
"Área Científica: Bioengenharia / Manufatura em Espaço",
"Objetivo: Imprimir implantes médicos para regeneração nervosa em microgravidade",
"Importância: Produzir implantes de qualidade superior para tratamento de lesões nervosas",
"Resultados Esperados: Implantes funcionais para regeneração de nervos periféricos",
"Resultados Obtidos: Oito implantes impressos com sucesso em 2025 para testes pré-clínicos na Terra",
"Curiosidade: Sem gravidade, partículas não se sedimentam, permitindo estruturas muito mais uniformes",
"Status: Intacto",
"Integridade: 100%",
"Nível de Prioridade: Baixa",
"Módulo da ISS: Destiny (Laboratório dos EUA)",
"Lista de Reparos: ",
"Nenhuma - Experimento totalmente funcional",
      ]
    },

    {
      titulo: "Plant Habitat-03B - Sistema Avançado de Cultivo de Plantas",
      bandeira: "eua.png",
      descricao:
        "O Plant Habitat-03B é uma versão melhorada do sistema de cultivo de plantas que permite aos astronautas cultivar plantas com mínima intervenção humana. O sistema utiliza inteligência artificial e sensores avançados para monitorar e otimizar automaticamente as condições de crescimento (luz, água, nutrientes, temperatura). Este experimento valida tecnologias de agricultura autônoma essenciais para futuras colônias na Lua e Marte, onde os astronautas não poderão dedicar tempo significativo ao cultivo manual. O sistema aprende com o tempo, otimizando suas operações para maximizar produtividade com mínimo consumo de recursos. Os resultados demonstram a viabilidade de sistemas agrícolas completamente autônomos em ambientes extraterrestres, um passo crítico para autossuficiência de futuras colônias espaciais.",
      fotoProjeto: "plant.jpg",
      status: true,
      topicos: [
"Projeto: Plant Habitat-03B",
"Nome Científico Real: Advanced Plant Habitat with AI Control",
"País: Estados Unidos (NASA)",
"Área Científica: Botânica / Agricultura Inteligente",
"Objetivo: Cultivar plantas com controle autônomo via IA",
"Importância: Validar agricultura autônoma para futuras colônias",
"Resultados Esperados: Crescimento bem-sucedido com mínima intervenção humana",
"Resultados Obtidos: Cultivos bem-sucedidos com IA otimizando condições",
"Curiosidade: O sistema usa aprendizado de máquina para prever e prevenir problemas de crescimento",
"Status: Intacto",
"Integridade: 100%",
"Nível de Prioridade: Baixa",
"Módulo da ISS: Harmony (Node 2)",
"Lista de Reparos: ",
"Nenhuma - Experimento totalmente funcional",
      ]
    },

    {
      titulo: "Quantum Physics Experiments - Pesquisa de Física Quântica",
      bandeira: "eua.png",
      descricao:
        "A ISS hospeda diversos experimentos de física quântica que exploram fenômenos fundamentais da mecânica quântica em ambiente de microgravidade. Estes experimentos testam princípios como emaranhamento quântico, superposição e tunelamento quântico em condições que não podem ser replicadas na Terra. Os pesquisadores utilizam átomos ultrafrios e sistemas quânticos sofisticados para fazer medições de precisão extraordinária. O ambiente de microgravidade permite que átomos sejam mantidos em estados quânticos por períodos muito mais longos, permitindo experimentos que seriam impossíveis em laboratórios terrestres. Os resultados têm implicações profundas para computação quântica, criptografia quântica e nossa compreensão fundamental da realidade. Futuras aplicações podem incluir relógios atômicos de precisão extrema para navegação espacial e computadores quânticos revolucionários.",
      fotoProjeto: "quantum.webp",
      status: true,
      topicos: [
"Projeto: Quantum Physics Experiments",
"Nome Científico Real: Cold Atom Quantum Systems",
"País: Estados Unidos (NASA) / Colaboração Internacional",
"Área Científica: Física Quântica / Computação Quântica",
"Objetivo: Estudar fenômenos quânticos em microgravidade",
"Importância: Avanços em computação quântica e tecnologia de navegação",
"Resultados Esperados: Compreensão mais profunda de fenômenos quânticos",
"Resultados Obtidos: Medições de precisão extraordinária de sistemas quânticos",
"Curiosidade: Átomos ultrafrios no espaço podem ser mantidos em estados quânticos por minutos, vs. milissegundos na Terra",
"Status: Intacto",
"Integridade: 100%",
"Nível de Prioridade: Média",
"Módulo da ISS: Destiny (Laboratório dos EUA)",
"Lista de Reparos: ",
"Nenhuma - Experimento totalmente funcional",
      ]
    },
  ]);

  const [selecionado, setSelecionado] = useState(null);
  const [pagina, setPagina] = useState(1);
  const [busca, setBusca] = useState("");
  const POR_PAGINA = 6;
  const projetosFiltrados = projeto.filter((p) =>
    p.titulo.toLowerCase().includes(busca.toLowerCase())
  );
  const totalPaginas = Math.ceil(projetosFiltrados.length / POR_PAGINA);
  const inicio = (pagina - 1) * POR_PAGINA;
  const paginados = projetosFiltrados.slice(inicio, inicio + POR_PAGINA);

  if (selecionado)
    return (
      <ProjetoDetails
        {...selecionado}
        onVoltar={() => {
          setSelecionado(null);
          setBusca("");
        }}
      />
    );

  return (
    <>
      <Header
            onBusca={(valor) => {
            setBusca(valor);
            setPagina(1);
            }}
      />
      <div className="projeto-view__grid-wrapper">
        <SimpleGrid
          cols={3}
          spacing="sm"
          verticalSpacing="xl"
          px="md"
          pt="md"
          pb={80}
          w="fit-content"
        >
          {paginados.map((projeto, index) => (
            <ProjetoCard
              key={index}
              projeto={projeto}
              onClick={() => setSelecionado(projeto)}
            />
          ))}
        </SimpleGrid>
      </div>

      <Footer total={totalPaginas} value={pagina} onChange={setPagina} />
    </>
  );
};

export default ProjetoView;
