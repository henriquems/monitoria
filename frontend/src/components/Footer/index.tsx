import './styles.css';

function Footer() {
    return (
        <footer className="footer mt-auto py-2">
            <ul className="nav justify-content-center border-bottom pb-2 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted texto-footer">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted texto-footer">Quem Somos</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted texto-footer">Fale Conosco</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted texto-footer">Login</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted texto-footer">Esqueci minha senha</a></li>
            </ul>
            <p className="text-center text-muted texto-footer">&copy; 2022 Sistema de Monitoria Ciências Médicas de Minas Gerais<br />
             Desenvolvido por T.I FELUMA</p>
        </footer>
    );
}

export default Footer;