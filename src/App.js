import React from 'react';
import Chart from "react-google-charts";
import './App.css';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoGraph } from "react-icons/go";


export default function App(){
    return(
        <div className="root">
            <header className="headerSite">
                <a href="#"><FaGithub className="iconHeader"></FaGithub></a>
                <a href="#"><FaInstagram className="iconHeader"></FaInstagram></a>
            </header>
            <main className="main">
                <div className="title">
                    <h1 className="h1">GGráficos</h1>
                    <GoGraph className="iconTitle"></GoGraph>
                    <h2 className="h2">Gerador de Gráficos online</h2>
                </div>
                <div className="informacoes">
                    <header className="headerInformacao">
                        <h1 className="h1Informacao">Informações</h1>
                    </header>
                    <div className="infoLeft">
                        <input type="text" placeholder="Título" className="titulo"></input>
                        <div className="eixo">
                            <h1 className="h1Eixo">Eixo X</h1>
                            <input type="text" placeholder="Maximo valor" className="inputEixo"></input>
                            <input type="text" placeholder="Título" className="inputEixo"></input>
                            <input type="text" placeholder="Minimo valor" className="inputEixo"></input>
                        </div>
                        <div className="eixo">
                            <h1 className="h1Eixo">Eixo Y</h1>
                            <input type="text" placeholder="Maximo valor" className="inputEixo"></input>
                            <input type="text" placeholder="Título" className="inputEixo"></input>
                            <input type="text" placeholder="Minimo valor" className="inputEixo"></input>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
/**
 * <Chart
                width={400}
                height={300}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['City', '2010 Population', '2000 Population', '2020 Population'],
                    ['New York City, NY', 8175000, 5000000, 15000000],
                ]}
                options={{
                    title: 'Population of Largest U.S. Cities',
                    chartArea: { width: '30%' },
                    hAxis: {
                        title: 'Total Population',
                        minValue: 0,
                    },
                    vAxis: {
                        title: 'City',
                    },
                }}
                legendToggle
            />
 */