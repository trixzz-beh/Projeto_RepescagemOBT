import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import ProjetoView from './pages/projetoview/ProjetoView';

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <ProjetoView />
    </MantineProvider>
  )
}

export default App;
