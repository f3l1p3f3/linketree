import React from 'react'
import photo from '../../assets/img/perfil.png'
import github from '../../assets/img/git.svg'
import email from '../../assets/img/email.png'
import linkedin from '../../assets/img/linkedin.svg'
import instagram from '../../assets/img/instagram.svg'
import './home.css'
import Card from '../../components/Card'


export default function Home() {



    const link = [
        {
            img: github,
            title: 'Github',
            description: 'Link do meu perfil do github.',
            url: 'https://github.com/f3l1p3f3'
        },
        {
            img: email,
            title: 'E-mail',
            description: 'Caso tenha interesse , fique a vontade para entrar em contato comigo! felipe.ferreirag3@gmail.com ',
            url: 'mailto:felipe.ferreirag3@gmail.com'

        },
        {
            img: linkedin,
            title: 'Linkedin',
            description: 'Meu perfil do linkedin para vocês me acompanharem por lá!',
            url: 'https://www.linkedin.com/in/felipe-ferreira-687b97105/'
        },
        {
            img: instagram,
            title: 'Instagram',
            description: 'Meu perfil do instagram para vocês me seguirem!',
            url: 'https://www.instagram.com/felipeferreira.jj/'
        }
    ]

    
    return (
        <>
            <div className='container'>
                <img src={photo} alt="" />

                <div className='titulo' >
                    <h5>Felipe Ferreira</h5>
                    <p>@felipeferreira</p>
                </div>

            </div>
            <div className='card'>

                {
                link.map((link, index) => {
                    return (
                        <div key={index} className="div1">
                            <Card links={link} />

                        </div>
                    )
                })}

            </div>
            <footer>
                <p>#FelipeDev</p>
            </footer>

        </>
    )
}