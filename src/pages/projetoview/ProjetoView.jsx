import { useState } from "react";
import { SimpleGrid } from "@mantine/core";
import './ProjetoView.css';
import ProjetoCard from "./ProjetoCard";
import ProjetoDetails from "../projetodetails/ProjetoDetails";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ProjetoView = () => {
    
    const [projeto] = useState([
        { titulo: "Densidade óssia e muscular em microgravidade", bandeira: "eua.png", descricao: "Estudo que utiliza camundongos para analisar os efeitos da microgravidade na perda óssea e muscular. O experimento testa medicamentos capazes de proteger astronautas em missões longas. Os resultados também podem ajudar no tratamento da osteoporose e outras doenças na Terra.",  fotoProjeto: "corrida.jpg", status: true },
        { titulo: "Materiais resistentes à radiação espacial", bandeira: "eua.png", descricao: "O experimento MISSE testa materiais expostos à radiação, vácuo e temperaturas extremas do espaço. Os resultados ajudam no desenvolvimento de naves, trajes espaciais e estruturas mais seguras. É essencial para futuras missões espaciais de longa duração.",fotoProjeto: "radiacao.jpg", status: true },
        { titulo: "Comportamento de fluidos em microgravidade", bandeira: "eua.png", descricao: "O experimento analisa como líquidos se comportam sem gravidade, estudando capilaridade e tensão superficial. Os dados ajudam no desenvolvimento de sistemas de combustível, água e oxigênio para espaçonaves. A pesquisa é importante para missões espaciais futuras.",fotoProjeto:"fluido.jpeg", status: true },
        { titulo: "Microorganismos em ambiente extremo", bandeira: "europa.png", descricao: "O BioRock investiga como bactérias interagem com rochas em microgravidade. O objetivo é estudar formas de extrair minerais de asteroides usando processos biológicos. A pesquisa pode ajudar futuras colônias espaciais a obter recursos localmente.", fotoProjeto: "ambiente_extremo.jpeg", status: true },
        { titulo: "Crescimento de plantas em microgravidade", bandeira: "eua.png", descricao: "O sistema Veggie/APH permite cultivar vegetais frescos na ISS. O projeto ajuda no desenvolvimento de agricultura espacial para missões à Lua e Marte. Além disso, melhora o bem-estar dos astronautas durante missões longas.", fotoProjeto: "planta.jpg", status: false },
        { titulo: "Regeneração de tecidos em microgravidade", bandeira: "eua.png", descricao: "A BioFabrication Facility utiliza impressoras 3D para criar tecidos humanos no espaço. A microgravidade permite formar estruturas mais precisas e estáveis. A pesquisa pode revolucionar a medicina regenerativa e os transplantes.", fotoProjeto:"serena.jpg", status: false },
        { titulo: "Comunicação por rádio no espaço", bandeira: "eua.png", descricao: "O ARISS conecta astronautas com estudantes e radioamadores através de rádio amador. O projeto também testa novas tecnologias de comunicação espacial. Ele une educação científica e desenvolvimento tecnológico.", fotoProjeto: "comunicacao.jpg", status: false },
        { titulo: "Cristalização de proteínas em microgravidade", bandeira: "japao.png", descricao: "O PCG produz cristais de proteínas mais perfeitos em microgravidade para estudos médicos. Essas análises ajudam no desenvolvimento de medicamentos contra doenças graves. O projeto já contribuiu para avanços importantes na medicina.", fotoProjeto:"cristalizacao.jpg", status: false },
        { titulo: "Tianwen-2", bandeira: "china.png", descricao: "Missão chinesa para coletar amostras do asteroide Kamoʻoalewa e depois explorar um cometa do cinturão principal.", fotoProjeto:null, status: true },
        { titulo: "Chang'e 7", bandeira: "china.png", descricao: "Missão chinesa para explorar o Polo Sul da Lua, incluindo um mini voador para investigar crateras permanentemente sombreadas.", fotoProjeto:null, status: true },
        { titulo: "Mangalyaan 2", bandeira: "india.png", descricao: "Segunda missão orbital de Marte da ISRO, com instrumentos científicos aprimorados para estudar a atmosfera marciana.", fotoProjeto:null, status: false },
        { titulo: "Aditya-L1", bandeira: "india.png", descricao: "Primeira missão solar da Índia, posicionada no ponto de Lagrange L1 para observar continuamente o Sol.", fotoProjeto:null, status: true },
        { titulo: "JUICE", bandeira: "europa.png", descricao: "Missão da ESA para estudar as luas geladas de Júpiter — Ganimedes, Calisto e Europa — em busca de oceanos subsuperficiais.", fotoProjeto:null, status: true },
        { titulo: "Hera", bandeira: "europa.png", descricao: "Missão da ESA para investigar o asteroide Dimorphos após o impacto da missão DART da NASA.", fotoProjeto:null, status: true },
        { titulo: "MMX", bandeira: "japao.png", descricao: "Missão japonesa para explorar as luas de Marte, Fobos e Deimos, e retornar amostras de Fobos à Terra.", fotoProjeto:null, status: true },
        { titulo: "XRISM", bandeira: "japao.png", descricao: "Telescópio de raios-X japonês para estudar plasma de alta temperatura em galáxias, aglomerados e remanescentes de supernovas.", fotoProjeto:null, status: true },
        { titulo: "FARQUHAR", bandeira: "brasil.png", descricao: "Missão brasileira em desenvolvimento para observação da Terra com foco em monitoramento ambiental e mudanças climáticas.", fotoProjeto:null, status: false },
        { titulo: "Missão Centena", bandeira: "brasil.png", descricao: "Projeto da AEB para formação de recursos humanos e desenvolvimento de microssatélites nacionais até 2030.", fotoProjeto:null, status: true },
    ])
    

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