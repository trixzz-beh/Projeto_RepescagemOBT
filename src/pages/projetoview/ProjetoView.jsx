import { useState } from "react";
import { SimpleGrid } from "@mantine/core";
import './ProjetoView.css';
import ProjetoCard from "./ProjetoCard";
import ProjetoDetails from "../projetodetails/ProjetoDetails";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ProjetoView = () => {
    
const [projeto] = useState([
    { 
        titulo: "Densidade óssia e muscular em microgravidade", 
        bandeira: "eua.png", 
        descricao: "Este experimento utiliza camundongos como modelo biológico para estudar como a microgravidade afeta a perda de densidade óssea e massa muscular em ambiente de microgravidade. O projeto testa medicamentos inovadores baseados em inibidores de miostatina que podem proteger astronautas durante missões de longa duração (Lua, Marte) e oferecer tratamentos revolucionários para doenças como osteoporose, sarcopenia e distrofias musculares na Terra.Os pesquisadores medem a densidade óssea dos camundongos antes e depois da missão usando equipamento especializado de densitometria de raios-X, analisando como o bloqueio da miostatina afeta a preservação de massa muscular e óssea. Os resultados diretos já demonstraram que este medicamento pode ser eficaz tanto para astronautas quanto para pacientes idosos com perda de massa muscular. É um dos experimentos mais críticos para garantir a saúde e viabilidade de futuras explorações espaciais de longa duração, pois a perda de densidade óssea e muscular representa um dos maiores riscos fisiológicos para astronautas em microgravidade.",  
        
        topicos: [
            "Estudo da perda de densidade óssea e massa muscular em microgravidade",
            "Uso de camundongos como modelo biológico",
            "Teste de inibidores de miostatina",
            "Aplicação em missões longas (Lua e Marte)",
            "Tratamento de osteoporose e sarcopenia na Terra",
            "Medição com densitometria de raios-X",
            "Redução de riscos fisiológicos em astronautas"
        ],

        fotoProjeto: "corrida.jpg", 
        status: true 
    },

    { 
        titulo: "Materiais resistentes à radiação espacial", 
        bandeira: "eua.png", 
        descricao: "O MISSE é uma série de experimentos que expõe diversos materiais avançados ao ambiente extremo do espaço, incluindo radiação cósmica intensa, vácuo absoluto, ciclos de temperatura extrema (-150°C a +120°C) e oxigênio atômico altamente reativo. Amostras de polímeros, revestimentos especiais, compostos de carbono e outros materiais inovadores são deixadas do lado de fora da ISS por períodos prolongados para avaliar sua degradação, mudanças de cor, perda de propriedades mecânicas e durabilidade. Os pesquisadores analisam como esses materiais se comportam quando expostos a um ambiente que não existe na Terra, onde a radiação solar não é filtrada pela atmosfera e a pressão é praticamente zero.Os dados coletados permitem validar quais materiais são adequados para futuras estruturas espaciais, painéis solares, isolamento térmico e proteção de naves. Os resultados são essenciais para desenvolver naves mais seguras e duráveis, trajes espaciais avançados, painéis solares eficientes e estruturas para futuras bases lunares e marcianas, garantindo que os equipamentos possam suportar décadas de exposição ao ambiente espacial extremo.",
        fotoProjeto: "radiacao.jpg", 
        status: true 
    },

    { 
        titulo: "Comportamento de fluidos em microgravidade", 
        bandeira: "eua.png", 
        descricao: "Este experimento estuda como líquidos se comportam sem a influência da gravidade, focando em fenômenos de capilaridade e tensão superficial que dominam completamente o comportamento dos fluidos em microgravidade. Os pesquisadores observam como água, combustível e outros líquidos se movem em diferentes geometrias de recipientes, formando padrões e comportamentos impossíveis de reproduzir na Terra onde a gravidade sempre 'puxa' os fluidos para baixo.Os dados coletados permitem aos engenheiros desenvolver sistemas inovadores onde bombas tradicionais não funcionam, criando alternativas baseadas em forças capilares para transportar combustível, água potável e oxigênio em naves espaciais. Esses sistemas são críticos para futuras missões de longa duração onde o peso e o consumo de energia são fatores limitantes. Os modelos matemáticos gerados a partir deste experimento revolucionam a engenharia aeroespacial, permitindo o design de sistemas de suporte de vida mais eficientes, compactos e confiáveis para futuras bases lunares, marcianas e naves de exploração profunda do espaço.",
        fotoProjeto:"fluido.jpeg", 
        status: true 
    },

    { 
        titulo: "Microorganismos em ambiente extremo", 
        bandeira: "europa.png", 
        descricao: "O BioRock estuda como bactérias especializadas interagem com rochas e minérios em ambiente extremo de microgravidade e vácuo, investigando a possibilidade revolucionária de usar microrganismos para extrair minerais valiosos de asteroides, solo lunar e marciano através de biomineração. O experimento expõe bactérias a rochas basálticas e observa se conseguem extrair elementos de terras raras, ferro, cobre e outros minerais essenciais. Este projeto abre perspectivas transformadoras para autossuficiência de futuras colônias espaciais, permitindo que os astronautas extraiam recursos locais usando processos biológicos em vez de máquinas pesadas e consumidoras de energia. Se bem-sucedido, bactérias poderiam ser 'plantadas' em asteroides ou na Lua para extrair recursos continuamente, fornecendo matérias-primas para construção, combustível e suprimentos.",
        fotoProjeto: "ambiente_extremo.jpeg", 
        status: true 
    },

    { 
        titulo: "Crescimento de plantas em microgravidade", 
        bandeira: "eua.png", 
        descricao: "O Veggie/Advanced Plant Habitat é um sistema de cultivo inovador que permite aos astronautas plantar, cultivar e colher vegetais frescos diretamente no espaço, sem dependência total de suprimentos trazidos da Terra. O sistema utiliza LED especial para iluminação, controle automático de água e nutrientes, e sensores que monitoram o crescimento das plantas em tempo real em ambiente de microgravidade.",
        fotoProjeto: "planta.jpg", 
        status: false 
    },

    { 
        titulo: "Regeneração de tecidos em microgravidade", 
        bandeira: "eua.png", 
        descricao: "A BioFabrication Facility utiliza impressoras 3D especializadas e biocompatíveis para criar tecidos biológicos complexos em ambiente de microgravidade onde a gravidade não interfere com o processo de impressão.",
        fotoProjeto:"serena.jpg", 
        status: false 
    },

    { 
        titulo: "Comunicação por rádio no espaço", 
        bandeira: "eua.png", 
        descricao: "O ARISS permite que estudantes e astronautas se comuniquem via rádio amador, promovendo educação científica global e testes de comunicação espacial.",
        fotoProjeto: "comunicacao.jpg", 
        status: false 
    },

    { 
        titulo: "Cristalização de proteínas em microgravidade", 
        bandeira: "japao.png", 
        descricao: "O PCG produz cristais de proteína de alta qualidade no espaço, ajudando no desenvolvimento de medicamentos avançados.",
        fotoProjeto:"cristalizacao.jpg", 
        status: false 
    },

    { 
        titulo: "Tianwen-2", 
        bandeira: "china.png", 
        descricao: "Missão chinesa para coletar amostras do asteroide Kamoʻoalewa e depois explorar um cometa do cinturão principal.",
        fotoProjeto:null, 
        status: true 
    },

    { 
        titulo: "Chang'e 7", 
        bandeira: "china.png", 
        descricao: "Missão chinesa para explorar o Polo Sul da Lua, incluindo um mini voador para investigar crateras permanentemente sombreadas.",
        fotoProjeto:null, 
        status: true 
    },

    { 
        titulo: "Mangalyaan 2", 
        bandeira: "india.png", 
        descricao: "Segunda missão orbital de Marte da ISRO, com instrumentos científicos aprimorados para estudar a atmosfera marciana.",
        fotoProjeto:null, 
        status: false 
    },

    { 
        titulo: "Aditya-L1", 
        bandeira: "india.png", 
        descricao: "Primeira missão solar da Índia, posicionada no ponto de Lagrange L1 para observar continuamente o Sol.",
        fotoProjeto:null, 
        status: true 
    },

    { 
        titulo: "JUICE", 
        bandeira: "europa.png", 
        descricao: "Missão da ESA para estudar as luas geladas de Júpiter — Ganimedes, Calisto e Europa.",
        fotoProjeto:null, 
        status: true 
    },

    { 
        titulo: "Hera", 
        bandeira: "europa.png", 
        descricao: "Missão da ESA para investigar o asteroide Dimorphos após impacto da missão DART.",
        fotoProjeto:null, 
        status: true 
    },

    { 
        titulo: "MMX", 
        bandeira: "japao.png", 
        descricao: "Missão japonesa para explorar as luas de Marte e retornar amostras de Fobos.",
        fotoProjeto:null, 
        status: true 
    },

    { 
        titulo: "XRISM", 
        bandeira: "japao.png", 
        descricao: "Telescópio de raios-X japonês para estudar fenômenos cósmicos extremos.",
        fotoProjeto:null, 
        status: true 
    },

    { 
        titulo: "FARQUHAR", 
        bandeira: "brasil.png", 
        descricao: "Missão brasileira de observação da Terra focada em mudanças climáticas.",
        fotoProjeto:null, 
        status: false 
    },

    { 
        titulo: "Missão Centena", 
        bandeira: "brasil.png", 
        descricao: "Projeto da AEB para desenvolvimento de microssatélites e formação científica.",
        fotoProjeto:null, 
        status: true 
    },
]);

    const [selecionado, setSelecionado] = useState(null);
    const [pagina, setPagina] = useState(1);
    const [busca, setBusca] = useState('');
    const POR_PAGINA = 6;
    const projetosFiltrados = projeto.filter(
        (p) => p.titulo.toLocaleLowerCase().includes(busca.toLocaleLowerCase()));
    const totalPaginas = Math.ceil(projetosFiltrados.length / POR_PAGINA);
    const inicio = (pagina - 1) * POR_PAGINA;
    const paginados = projetosFiltrados.slice(inicio, inicio + POR_PAGINA);

    if (selecionado)
        return <ProjetoDetails {...selecionado} onVoltar={() => { setSelecionado(null); setBusca(''); }} />


    return (
        <>
            <Header onBusca={setBusca}/>
            <div className="projeto-view__grid-wrapper">
                <SimpleGrid cols={3} spacing="sm" verticalSpacing="xl" px="md" pt="md" pb={80} w="fit-content">
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
    )
}

export default ProjetoView;