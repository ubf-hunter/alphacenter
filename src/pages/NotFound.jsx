import Container from '@components/common/Container';
import Button from '@components/common/Button';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation('application');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-9xl font-bold text-gradient mb-4">404</div>
          <h1 className="text-4xl font-bold text-navy mb-4">
            {t('notFound.title')}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {t('notFound.subtitle')}
          </p>
          <Button variant="primary" size="lg" to="/">
            {t('notFound.backHome')}
          </Button>
        </div>
      </Container>
    </div>
  );
}
