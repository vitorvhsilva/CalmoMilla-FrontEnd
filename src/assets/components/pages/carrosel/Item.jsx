import React from 'react';

export default function Item(item)
{
    return (
        <>
          <img src={item.imagem} alt={item.titulo} style={{ width: '60vh',height: '60vh'}} />
        </>
    )
}