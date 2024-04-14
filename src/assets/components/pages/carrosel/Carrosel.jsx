import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item';
import Carrosel1 from '../../../imgs/home/carrosel1.png'
import Carrosel2 from '../../../imgs/home/carrosel2.png'
import Carrosel3 from '../../../imgs/home/carrosel3.png'

function Carrosel()
{
    var items = [
      {
        'id': 1,
        'imagem': Carrosel1,
        'titulo': 'Imagem 1'
      },
      {
        'id': 2,
        'imagem': Carrosel2,
        'titulo': 'Imagem 2'
      },
      {
        'id': 3,
        'imagem': Carrosel3,
        'titulo': 'Imagem 3'
      },
    ]

    return (
        <Carousel>
            {
              items.map( item => <Item key={item.id} imagem={item.imagem} /> )
            }
        </Carousel>
    )
}

export default Carrosel
