import React from 'react'
import './Funcionalidades.css'
import ImagemBrain from '../../../imgs/geral/img-brain.png'
import ImagemRelaxamento from '../../../imgs/geral/img-yoga.png'
import ImagemPsicologo from '../../../imgs/geral/img-callpsico.png'
import FuncionalidadesConteudo from './FuncionalidadesConteudo'

function Funcionalidades() {
  return (
    <>
      <section className='fundoPrincipal'>
        <h2>Funcionalidades</h2>
        <FuncionalidadesConteudo imagem={ImagemBrain} titulo='Jogos Mentais' cor='var(--cor-06)' posicao={true}/>
        <FuncionalidadesConteudo imagem={ImagemRelaxamento} titulo='Relaxamento' cor='var(--cor-destaque-05)' posicao={false}/>
        <FuncionalidadesConteudo imagem={ImagemPsicologo} titulo='Integração com Psicólogos' cor='var(--cor-destaque-01)' posicao={true}/>
      </section>
    </>
  )
}

export default Funcionalidades