import { Button, Divider, Image, ScrollArea, Switch} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { useState } from 'react';
import Header from '../../components/Header';
import './ProjetoDetails.css';

const ProjetoDetails = (props) => {
    const [checked] = useState(props.status);
    const [load, setLoad] = useState(false);
    return (
        <>
            <Header/>
            <main className="projeto-details__main">
                <section className="projeto-details__foto-section">
                    <Button
                        className="projeto-details__voltar"
                        leftSection={<IconArrowLeft size={16}/>}
                        onClick={props.onVoltar}
                        variant='default'
                    >
                        Voltar
                    </Button>
                    <Image
                        src={"./src/assets/projetos/".concat(props.fotoProjeto)}
                        fallbackSrc="./src/assets/projetos/erroImage.jpg"
                        loading='lazy'
                        fit='fill'
                        height={600}
                    />
                </section>

                <section className="projeto-details__info-section">
                    <h1>{props.titulo}</h1>
                    <Image
                        src={"./src/assets/flag/".concat(props.bandeira)}
                        loading='lazy'
                        onLoad={() => setLoad(true)}
                        fit="fill"
                        alt={'Bandeira do'.concat(props.bandeira)}
                        className="projeto-details__bandeira"
                        style={{ opacity: load ? 1 : 0 }}
                    />

                    <section>
                        <Switch
                            checked={checked}
                            color={checked ? "green" : "red"}
                            labelPosition='left'
                            label={checked ? "Ativo" : "Inativo"}
                        />
                    </section>
                   
                        <ScrollArea>
                             <div style={{height: 500}}>
                                 <Divider className="projeto-details__divider"/>
                                    <h2>Descrição</h2>
                                    {props.descricao && props.descricao.length > 0 ?
                                        <p>{props.descricao}</p> :
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, a in. Ratione sint expedita dolore a, molestiae eum natus voluptatum distinctio beatae assumenda, delectus maxime, optio pariatur! Sed, error explicabo?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit pariatur quas numquam, unde incidunt enim doloremque cum id, soluta aliquid harum voluptas distinctio. Sit odit amet unde, obcaecati natus officia!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi hic quibusdam officia, autem ad officiis vero odit dignissimos molestias necessitatibus quia dicta repellendus sed amet, dolorum voluptatum tempore esse cumque!</p>
                                    }
                                 <ul className="projeto-details__topicos">
                                    {props.topicos.map((topico, index) => (

                                    <li className="projeto-details__topico" key={index}>
                                    <strong>
                                        {topico.split(':')[0]}:
                                    </strong>

                                    {topico.includes(':') &&
                                        ` ${topico.split(':').slice(1).join(':')}`
                                    }
                                    </li>
                                    ))}
                                </ul>
                        
                             </div>
                              
                        </ScrollArea>

                   
                </section>
            </main>
        </>
    )
}

export default ProjetoDetails;