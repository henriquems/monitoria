import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container content">
            <p className="titulo-pagina">Sistema de Monitoria</p>
            <br />
            <Link to="/dashboard" className="btn botao">Acessar o Dashboard</Link>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
        </div>
    );
}

export default Home;