import Cardmodule from "./Cardmodule"

function Card(){
    return(
        <>
        <div className="service-page">
            <div className="os">
                <p>Our Services</p>
            </div>
            <div className="card-desc">
                <Cardmodule title='SAP' 
                bio='Our deep SAP expertise, combined with a future-focused vision, positions us as your
                trusted partner for innovative #SAP #Innovation ... '
                />
                <Cardmodule title='AI & Data Analytics' 
                bio='Nexucon unlocks hyper-personalized customer experiences with Cost-Effective AI solutions and Advanced Data insights. #AI #DataPlatform...'
                />
                <Cardmodule title='AI & Data Analytics'
                bio='Nexucon unlocks hyper-personalized customer experiences with Cost-Effective AI solutions and Advanced Data insights. #AI #DataPlatform...'
                />
                <Cardmodule title='AI & Data Analytics' 
                bio='Nexucon unlocks hyper-personalized customer experiences with Cost-Effective AI solutions and Advanced Data insights. #AI #DataPlatform...'
                />
            </div>
        </div>
        </>
    )
}

export default Card