import StackRoutes from './src/routes/stack.routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StackRoutes />
      <StatusBar style="light" backgroundColor="#100E1D" />
    </>
  );
}

