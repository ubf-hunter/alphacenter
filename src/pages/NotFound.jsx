import Container from '@components/common/Container';
import Button from '@components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-9xl font-bold text-gradient mb-4">404</div>
          <h1 className="text-4xl font-bold text-navy mb-4">
            Page non trouvée
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Button variant="primary" size="lg" to="/">
            Retour à l'accueil
          </Button>
        </div>
      </Container>
    </div>
  );
}
