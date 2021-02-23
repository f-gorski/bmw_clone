const Description = () => {
    return (
        <section id="description" className="description">
            <div className="description__photos">
                <img className="description__photo" 
                src={require('../../assets/foto2_2.png').default} 
                srcSet={require('../../assets/foto2_2@2x.png') + '2x'} alt="bmw photo" />
                <img className="description__photo" 
                src={require('../../assets/foto2_1.png').default} 
                srcSet={require('../../assets/foto2_1@2x.png') + '2x'} alt="bmw photo"/>
            </div>
            <div className="description__content">
                <img src={require('../../assets/ico_2.svg').default} alt="" className="description__icon" />
                <h2 className="description__header">INNOWACYJNA AERODYNAMIKA BMW iX.</h2>
                <p className="description__text-top">
                    BMW iX w każdym milimetrze swojej dynamicznej stylistyki wdraża zasadę „forma podąża za funkcją”.
                </p>
                <p className="description__text-bottom">
                    Widać to przede wszystkim po gładkiej karoserii ze zwężoną nadbudową kabiny i zredukowanymi fugami oraz po płaskim podwoziu. W połączeniu z zamkniętym przodem oraz dyfuzorem z tyłu i niezwykłymi detalami, takimi jak wpuszczane klamki czy zintegrowane z listwami szybowymi lusterka zewnętrzne, BMW iX osiąga doskonały współczynnik Cx wynoszący zaledwie 0,25. Dzięki temu łączy w sobie zasięg i wydajność z innowacyjną konstrukcją SAV-a.
                </p>
            </div>
        </section>
    )
}

export default Description;