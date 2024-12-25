import './linkstyle.css';


export default function LinkCard({title, description, image}: {title: string, description: string, image: string}) {
    return (
        <div className='container'>
            <div className="nft">
                <div className='main'>
                    <img className='tokenImage' src={image} alt="NFT" />
                    <h2 className='title'>{title}</h2>
                    <p className='description'>{description}</p>
                    <hr />
                    <div className='creator'>
                        <p><ins>Try it now!</ins></p>
                    </div>
                </div>
            </div>
        </div>
    )
}