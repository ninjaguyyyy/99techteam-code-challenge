import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import SwapForm from './features/swap/components/SwapForm';
import './App.css';

const qc = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={qc}>
            <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#B3ECFF] via-[#E4D9FF] to-[#ECE0FF]">
                <SwapForm />
            </div>
            <Toaster position="top-center" richColors />
        </QueryClientProvider>
    );
}

export default App;
