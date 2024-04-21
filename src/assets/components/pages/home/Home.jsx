import React from 'react'
import "./Home.css"
import Flor1 from '../../../imgs/home/flores/flor01.png'
import Flor2 from '../../../imgs/home/flores/flor02.png'
import Flor3 from '../../../imgs/home/flores/flor03.png'
import Flor4 from '../../../imgs/home/flores/flor04.png'
import Flor5 from '../../../imgs/home/flores/flor05.png'
import Flor6 from '../../../imgs/home/flores/flor06.png'
import Flor7 from '../../../imgs/home/flores/flor07.png'
import Gallery from '../carrosel/Carrosel'
import { Grid } from '@mui/material'


function Home() {
  return (
    <>
      <main>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item xs={6}>
              <section className='secaoEsquerda'>
                <h1>Calmo<span className='textoRoxo'>Milla</span></h1>
                <h2>o seu <span className='textoRoxo'><br />equilíbrio <br />mental </span><br />começa aqui!</h2>
                <button>Vamos começar?</button>
              </section>
            </Grid>
            <Grid item xs={6}>
              <section className='secaoDireita'>
                <Gallery style/>
                {/* <img src={Flor1} alt="" id='flor1' />
                <img src={Flor2} alt="" id='flor2' />
                <img src={Flor3} alt="" id='flor3' />
                <img src={Flor4} alt="" id='flor4' />
                <img src={Flor5} alt="" id='flor5' />
                <img src={Flor6} alt="" id='flor6' />
                <img src={Flor7} alt="" id='flor7' /> */}
              </section>
            </Grid>
          </Grid>
      </main>
    </>
  )
}

export default Home