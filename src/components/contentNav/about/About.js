import React from 'react';
import './about.scss';

class About extends React.Component {

    render() {
        return(
            <div style={{ minHeight:'100vh' }}>
                <div className='carrer-main-container'>
                    <h1>Moje ime je Igor,</h1>
                    <h3>a ovo je moj put ka ostvarenju kao Web Developer.</h3>
                    <div className='carrer-main-container__path'>
                        <p className='carrer-main-container__path-text'>WEB Development je proizašao kao ideja radi ostvarenja ličnog projekta koji sam zamislio pre skoro 10 godina. Istraživanjem mogućih opcija za realizaciju 
                            projekta, kroz razgovor sa ljudima iz IT industrije, 
                            shvatio sam da tako opširan projekat neću moći da finansiram. Odlučio sam da sam napravim potrebno i naravno, krenem u misiju učenja tih tehnologija.
                        </p>
                        <p className='carrer-main-container__path-text'>Bilo je potrebno još dosta godina da bih bio u mogućnosti da svoje lično usavršavanje u oblasti sporta i trenerskog posla ostavim po strani i posvetim se
                            učenju progamerskih tehnologija. Koncepti istraživanja su isti, to sam znao pre upuštanja u celu avanturu, ali ubrzo sam shvatio da je pored gomile apstraktnosti u 
                            samom procesu zamišljanja projekta, zapravo, programiranje vrlo egzaktna stvar. I tad nastaje oduševljenje!
                        </p>
                        <p className='carrer-main-container__path-text'>Sport i trening ostaju moja ljubav doživotno, prerastaju u malo više uživanja a nastavak istraživanja i usavršavanja je tu isključivo zbog sopstvenog napretka. 
                            Sjajan način da se nastavi usavršavanje! Ovo je napravilo prostora za nova interesovanja i znanja,
                            a zatim omogućilo da širom otvorim vrata JavaScript-u, kao novoj simpatiji, koja polako počinje da prerasta u nešto više.
                        </p>
                    </div>
                </div>
                <div className='carrer-container'>
                    <div className='carrer-container__inner'>
                        <p className='carrer-container__iner-title'>Avgust 2019.</p>
                        <CarrerBlock technology={'HTML + CSS'} insight={'osnove'} source={'Codecademy'}/>
                        <CarrerBlock technology={'JavaScript'} insight={'loops, functions'} source={'Codecademy'}/>
                    </div>
                    <div className='carrer-container__inner'>
                        <p className='carrer-container__iner-title'>Septembar 2019.</p>
                        <p className='carrer-container__iner-title carrer-container__iner-title--subtitle'>Front-end development kurs na FTN Informatika, Novi Sad</p>
                        <CarrerBlock technology={'HTML + SCSS'} insight={'Scss partials, mixins, variables, nesting'} source={'FTN Informatika, Novi Sad'}/>
                        <CarrerBlock technology={'Js, Ts'} insight={'callbacks, classes, oop'} source={'FTN Informatika, Novi Sad'}/>
                        <CarrerBlock technology={'Angular'} insight={'osnove, prvi projekti'} source={'FTN Informatika, Novi Sad'}/>
                    </div>
                    <div className='carrer-container__inner'> 
                        <p className='carrer-container__iner-title'>Januar 2020.</p>
                        <CarrerBlock technology={'JavaScript'} insight={'closures, async funkcije'} source={'Udemy'}/>
                        <CarrerBlock technology={'React'} insight={'osnove, prvi projekti'} source={'Udemy'}/>
                        <CarrerBlock technology={'Node.Js'} insight={'osnove'} source={'Codecademy'}/>
                    </div>
                    <div className='carrer-container__inner'>
                        <p className='carrer-container__iner-title'>Mart 2020.</p>
                        <p className='carrer-container__iner-title carrer-container__iner-title--subtitle'>Front-end praksa u Vega IT, Novi Sad</p>
                        <CarrerBlock technology={'HTML'} insight={'GULP projekti, BEM stil pisanja HTML'} source={'Vega IT, Novi Sad'}/>
                        <CarrerBlock technology={'Scss'} insight={'GULP projekti, BEM scss + linter'} source={'Vega IT, Novi Sad'}/>
                        <CarrerBlock technology={'JavaScript'} insight={'GULP projekti, light Js'} source={'Vega IT, Novi Sad'}/>
                    </div>
                    <div className='carrer-container__inner'>
                        <p className='carrer-container__iner-title'>April 2020.</p>
                        <CarrerBlock technology={'Express.Js'} insight={'CRUD osnove, prvi projekti'} source={'Udemy'}/>
                        <CarrerBlock technology={'SQL, PostgreSQL'} insight={'basic queries, agregate funkcije'} source={'Codecademy'}/>
                    </div>
                </div>
            </div> 
        )
    }

}

function CarrerBlock ({ technology, insight, source }) {
    return(
        <div className='carrer-block'>
            <h3 className='carrer-block__technology'>{ technology }</h3>
            <h5 className='carrer-block__date'>{ insight }</h5>
            <p className='carrer-block__source'>{ source }</p>
        </div>
    )
}

export default About;