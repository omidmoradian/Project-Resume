import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1 (1).jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Charts templates',
        github: 'https://github.com',

    },
    {
        id: 2,
        image: IMG2,
        title: 'Figma dashboard UI',
        github: 'https://github.com',

    },
    {
        id: 3,
        image: IMG3,
        title: 'maintaining tasks',
        github: 'https://github.com',

    },
    {
        id: 4,
        image: IMG4,
        title: 'Charts templates',
        github: 'https://github.com',

    },
    {
        id: 5,
        image: IMG5,
        title: ' .Crypto Currency Dashboard',
        github: 'https://github.com',

    },
    {
        id: 6,
        image: IMG6,
        title: ' .Crypto Currency Dashboard',
        github: 'https://github.com',

    },
]

const Portfolio = () => {

    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {data.map(({id, image, title, github}) => {
                    return (

                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title}/>
                            </div>
                            <h3 style={{fontSize:'1rem', textAlign:'center',marginTop:'1rem'}}>{title}</h3>
                            <div className='portfolio__item-cta'>
                            <a style={{marginRight:'1rem'}} href={github} className="btn" target='_blank'>Github</a>
                            <a href="https://Telegram.com" className="btn btn-primary" target='_blank'>Demo</a>
                            </div>
                        </article>
                    )
                })
                }
            </div>
            {/*<article className="portfolio__item">*/}
            {/*    <div className="portfolio__item-image">*/}
            {/*        <img src={IMG2} alt='/'/>*/}
            {/*    </div>*/}
            {/*    <h3>This is a portfolio item title</h3>*/}
            {/*    <a href="https://github.com" className="btn" target='_blank'>Github</a>*/}
            {/*    <a href="https://Telegram.com" className="btn btn-primary" target='_blank'>Live Demo</a>*/}
            {/*</article>*/}
            {/*<article className="portfolio__item">*/}
            {/*    <div className="portfolio__item-image">*/}
            {/*        <img src={IMG3} alt='/'/>*/}
            {/*    </div>*/}
            {/*    <h3>This is a portfolio item title</h3>*/}
            {/*    <a href="https://github.com" className="btn" target='_blank'>Github</a>*/}
            {/*    <a href="https://Telegram.com" className="btn btn-primary" target='_blank'>Live Demo</a>*/}
            {/*</article>*/}
            {/*<article className="portfolio__item">*/}
            {/*    <div className="portfolio__item-image">*/}
            {/*        <img src={IMG4} alt='/'/>*/}
            {/*    </div>*/}
            {/*    <h3>This is a portfolio item title</h3>*/}
            {/*    <a href="https://github.com" className="btn" target='_blank'>Github</a>*/}
            {/*    <a href="https://Telegram.com" className="btn btn-primary" target='_blank'>Live Demo</a>*/}
            {/*</article>*/}
            {/*<article className="portfolio__item">*/}
            {/*    <div className="portfolio__item-image">*/}
            {/*        <img src={IMG5} alt='/'/>*/}
            {/*    </div>*/}
            {/*    <h3>This is a portfolio item title</h3>*/}
            {/*    <a href="https://github.com" className="btn" target='_blank'>Github</a>*/}
            {/*    <a href="https://Telegram.com" className="btn btn-primary" target='_blank'>Live Demo</a>*/}
            {/*</article>*/}
            {/*<article className="portfolio__item">*/}
            {/*    <div className="portfolio__item-image">*/}
            {/*        <img src={IMG6} alt='/'/>*/}
            {/*    </div>*/}
            {/*    <h3>This is a portfolio item title</h3>*/}
            {/*    <a href="https://github.com" className="btn" target='_blank'>Github</a>*/}
            {/*    <a href="https://Telegram.com" className="btn btn-primary" target='_blank'>Live Demo</a>*/}
            {/*</article>*/}


        </section>
    );
};

export default Portfolio;
