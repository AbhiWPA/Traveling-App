import { MyContextProvider } from './src/context/context';
import AppNavigation from './src/navigation';

export default function App() {
  return (
    <MyContextProvider>
      <AppNavigation />
    </MyContextProvider>
  );
}