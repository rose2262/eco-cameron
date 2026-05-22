import { RouterProvider } from 'react-router';
import { router } from './routes';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </div>
  );
}