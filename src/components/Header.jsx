import { TextInput } from '@mantine/core';
import { IconSearch, IconSun, IconMoon } from '@tabler/icons-react';
import {
    ActionIcon,
    useMantineColorScheme
} from '@mantine/core';

import './Header.css';

const Header = ({onBusca}) => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    return (
        <header className="header">
            <TextInput
                placeholder="Pesquisar projetos..."
                leftSection={<IconSearch size={16} />}
                onChange={(e) => onBusca && onBusca(e.target.value)}
                className="header__input"
            />

             <ActionIcon
                onClick={() => toggleColorScheme()}
                variant="filled"
                radius="xl"
                size="lg"
                className="theme-toggle"
            >
                {colorScheme === 'dark'
                    ? <IconSun size={18} />
                    : <IconMoon size={18} />
                }
            </ActionIcon>

        </header>
    );
};

export default Header;
