export function Footer() {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} RPG System. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 