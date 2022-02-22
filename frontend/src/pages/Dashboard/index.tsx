function Dashboard() {
    return (
        <>
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de Vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-ceneter test-secondary">Taxa de sucesso (%)</h5>
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-ceneter test-secondary">Todas vendas</h5>
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary">Todas Vendas</h2>
                </div>
            </div>
        </>
    );
}

export default Dashboard;