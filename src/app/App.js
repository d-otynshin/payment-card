import { PaymentPage } from '../pages/PaymentPage/ui/PaymentPage';
import { useTranslation } from 'react-i18next';
import { useEffect, Suspense } from 'react';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    (async () => await i18n.changeLanguage('ru'))()
  }, [i18n])

  return (
    <Suspense fallback={'loading...'}>
      <PaymentPage />
    </Suspense>
  );
}

export default App;
