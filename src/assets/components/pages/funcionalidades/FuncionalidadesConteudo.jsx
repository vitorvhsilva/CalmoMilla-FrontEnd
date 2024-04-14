import React from 'react'

export default function FuncionalidadesConteudo(props){
  const posicao = props.posicao 

  return (
    <div>
    { posicao ? 
    <section className='conteudo'>
      <img src={props.imagem} alt="" />
      <section className={'conteudoTexto'}>
        <h3 style={{color: props.cor, textAlign: 'right'}}>{props.titulo}</h3>
        <p style={{textAlign: 'right'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quaerat consectetur, illo, ipsum debitis aliquid magni nihil quod voluptates tempore, facilis corrupti numquam reiciendis neque dignissimos! Commodi accusantium dignissimos id provident deleniti! Dolorum maxime, sit tempora perspiciatis pariatur velit nisi assumenda et eos consectetur omnis ut expedita ab fugiat earum fugit. Autem fugit, et illum maxime deleniti repellendus ea porro! 
        </p>
        <p style={{textAlign: 'right'}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente exercitationem aperiam explicabo quae ab amet illum? Itaque alias debitis aspernatur omnis odio reiciendis inventore quae? Repudiandae veritatis quae at mollitia.
        </p>
      </section>
    </section>
    : 
    <section className='conteudo'>
      <section className='conteudoTexto'>
        <h3 style={{color: props.cor, textAlign: 'left'}}>{props.titulo}</h3>
        <p style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quaerat consectetur, illo, ipsum debitis aliquid magni nihil quod voluptates tempore, facilis corrupti numquam reiciendis neque dignissimos! Commodi accusantium dignissimos id provident deleniti! Dolorum maxime, sit tempora perspiciatis pariatur velit nisi assumenda et eos consectetur omnis ut expedita ab fugiat earum fugit. Autem fugit, et illum maxime deleniti repellendus ea porro! 
        </p>
        <p style={{textAlign: 'left'}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente exercitationem aperiam explicabo quae ab amet illum? Itaque alias debitis aspernatur omnis odio reiciendis inventore quae? Repudiandae veritatis quae at mollitia.
        </p>
      </section>
      <img src={props.imagem} alt="" />
    </section>
    }

    </div>
  )
}
