import './cursos.css'


function Cursos(){
    return(
        <>
        
            <ul className='slider'>
                <li>
                    <iframe className='youtube' width="560" height="315" src="https://www.youtube.com/embed/yDA3O2Ipqbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </li>
                <li>
                    <iframe className='youtube' width="560" height="315" src="https://www.youtube.com/embed/BkmsBMjoCtE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </li>
                <li>
                    <iframe className='youtube' width="560" height="315" src="https://www.youtube.com/embed/xwbYLR8sCh4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </li>
            </ul>

            <div className='lista-curso'>
                <h3 className='titulo-curso'>Lista de cursos </h3>
                <ul className='lista-de-cursos'>
                    <li className='item-curso'>
                        <a href='https://www.skillshare.com/browse/crochet?locale=ptcoupon=GOOGNBPT1MESGRATISutm_source=Googleutm_medium=paidsearchutm_campaign=Croud_Search_Google_LA_BR_PT_BOF_Non-Brandutm_term=matchtype=gclid=Cj0KCQjw852XBhC6ARIsAJsFPN0lABUlyQWj6Hg2n4gbUCsQcPFtHXOnWPkfiv3bnLNiCfK5vkZCutkaAmkfEALw_wcB' target='_blank'>Diversos cursos de artesanato</a>
                        <img className='img-curso' src='http://s2.glbimg.com/-v2cXew7XJoPeIsFOOWfZU9V7uw=/940x523/e.glbimg.com/og/ed/f/original/2013/09/27/shutterstock_134358206.jpg' />
                    </li>
                    <li className='item-curso'>
                        <a href='https://loja.belasartes.br/portal-ecom/?gclid=Cj0KCQjw852XBhC6ARIsAJsFPN27c6y5HSL6_1Q9ZQ35DuGTiVI11hmLQQ5KS45gkWZcOqClPavskNAaAoZlEALw_wcB' target='_blank'>Cursos de artes na Belas Artes</a>
                        <img  className='img-curso' src='http://i.mlcdn.com.br/portaldalu/fotosconteudo/73821.jpg'/>
                    </li>
                    <li className='item-curso'>
                        <a href='https://www.learncafe.com/cursos-gratis/arte-e-entretenimento/artesanato' target='_blank'>Diversos cursos de artesanato uma outra opção</a>
                        <img className='img-curso' src='https://i.pinimg.com/736x/17/30/a7/1730a7666bc00869600a65bdef608528--bunga-carne.jpg'/>

                    </li>
                    <li className='item-curso'>
                        <a href='https://catracalivre.com.br/educacao/instituto-oferece-20-cursos-gratuitos-de-artesanato-ead/' target='_blank'> Conheça esse instituito com cursos ead</a>
                        <img className='img-curso' src='https://midias.correiobraziliense.com.br/_midias/jpg/2020/10/19/675x450/1_cbpfot191020202110-24558259.jpg?20220120222840?20220120222840' />

                    </li>
                    <li className='item-curso'>
                        <a href='https://www.sebrae.com.br/sites/PortalSebrae/Busca?q=artesanato' target='_blank'>O Sebrae oferece diversos cursos de artesanato e negocios.</a>
                        <img className='img-curso' src='https://ae01.alicdn.com/kf/HTB1AuYaXVmWBuNjSspdq6zugXXaJ/Kit-de-artesanato-artesanal-de-feltro-para-corte-gr-tis-figuras-para-artesanato-e-presente-de.jpg_Q90.jpg_.webp'/>

                    </li>
                </ul>
            </div>
        </>


    )
}

export default Cursos