import React from 'react';
import './App.css';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";


export default function App(){
    return(
        <div>
            <header>
                <div className="icons">
                    <a href="#"><FaGithub className="icon"></FaGithub></a>
                    <a href="#"><FaInstagram className="icon"></FaInstagram></a>
                    <a href="#"><FaLinkedin className="icon"></FaLinkedin></a>
                </div>
            </header>
            <div className="main">
                <div className="title">
                    <h1 className="h1">GGráficos</h1>
                    <GoGraph className="iconTitle"></GoGraph>
                    <h2 className="h2">Gerador de Gráficos online</h2>
                </div>
                <div className="divForm">
                    <div className="division">
                        <form className="infoTitles">
                            <h1>Título</h1>
                            <input type="text" id="ftitle" name="ftitle" className="inputText"></input>
                            <h1>Eixo X</h1>
                            <div className="flexEixo">
                                <input type="text" placeholder="Título"></input>
                                <input type="text" placeholder="Máximo valor"></input>
                                <input type="text" placeholder="Mínimo valor"></input>
                            </div>
                        </form>
                        <form className="infoSeries">

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
