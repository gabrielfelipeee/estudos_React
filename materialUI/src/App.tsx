import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import { AppThemeProvider, DrawerProvider } from './contexts';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>


          <Sidebar>
            <AppRoutes />
          </Sidebar>


        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  )
};
export default App;
