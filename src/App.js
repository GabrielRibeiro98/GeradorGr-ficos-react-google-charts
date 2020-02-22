import React from 'react';
import { useState } from 'react';
import './App.css';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";


export default function App(){
    const [title, setTitle] = useState("");
    const [titleAxisX, setTitleAxisX] = useState("");
    const [valueMaxAxisX,setValueMaxAxisX] = useState(0);
    const [valueMinAxisX,setValueMinAxisX] = useState(0);
    const [titleAxisY, setTitleAxisY] = useState("");
    const [valueMaxAxisY, setValueMaxAxisY] = useState("");
    const [valueMinAxisY, setValueMinAxisY] = useState("");
    

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
                            <h1 className="h1" style={{fontSize: '25px'}}>Título</h1>
                            <input 
                                type="text" 
                                className="inputText"
                                onChange={e => setTitle(e.target.value)}
                            />
                            <h1 className="h1" style={{fontSize: '25px'}}>Eixo X</h1>
                            <div className="flexEixo">
                                <input 
                                    type="text" 
                                    placeholder="Título de eixo" 
                                    className="inputText"
                                    onChange={e => setTitleAxisX(e.target.value)}
                                />
                                <div className="grid-eixo">
                                    <input 
                                        type="text" 
                                        placeholder="Máximo valor" 
                                        className="inputTextGrid"
                                        onChange= {e => setValueMaxAxisX(e.target.value)}
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Mínimo valor" 
                                        className="inputTextGrid"
                                        onChange= {e => setValueMinAxisX(e.target.value)}
                                    />
                                </div>
                            </div>
                            <h1 className="h1" style={{fontSize: '25px'}}>Eixo Y</h1>
                            <div className="flexEixo">
                                <input type="text" placeholder="Título de eixo" className="inputText"/>
                                <div className="grid-eixo">
                                    <input type="text" placeholder="Máximo valor" className="inputTextGrid"/>
                                    <input type="text" placeholder="Mínimo valor" className="inputTextGrid"/>
                                </div>
                            </div>
                        </form>
                        <form className="infoSeries">
                                <div className="categorias-flex">
                                    <h1 className="h1-categoria">Título da Categoria</h1>
                                    <h1 className="h1-categoria">Valor</h1>
                                    <input type="text" className="inputTextCat"/>
                                    <input type="text" className="inputTextCat"/>
                                </div>
                                <div className="button-cat">
                                    <a className="a-button-gerar" href="#">
                                        <span>Adicionar nova categoria</span>
                                    </a>
                                </div>
                        </form>
                    </div>
                </div>
                <div class="wrapper">
                    <a className="a-button" href="#"><span>Gerar Gráfico
                    <GoGraph></GoGraph></span></a>
                </div>
            </div>
        </div>
    );
}
