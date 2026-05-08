import { Card, Image, Text, Badge } from "@mantine/core";
import './ProjetoCard.css';

const ProjetoCard = ({ projeto, onClick }) => {

    return (
        <Card
            shadow="sm"
            padding="sm"
            radius="md"
            withBorder
            className="projeto-card"
            onClick={() => onClick(projeto)}
        >
            <Card.Section>
                <Image
                    src={"./src/assets/projetos/".concat(projeto.fotoProjeto)}
                    fallbackSrc="./src/assets/projetos/erroImage.jpg"
                    height={150}
                    fit="cover"
                    radius={3}
                    alt={projeto.titulo}
                />
            </Card.Section>

            <Text fw={600} mt="md" lineClamp={2}>
                {projeto.titulo}
            </Text>

            <Badge mt="sm" color={projeto.status ? "green" : "red"}>
                {projeto.status ? "Ativo" : "Inativo"}
            </Badge>
        </Card>
    );
};

export default ProjetoCard;
