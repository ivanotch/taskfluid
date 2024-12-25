import './styles.css';

export default function Carousel() {
    const comments = {
        names: ["Vanessa Venice", "Lycka Valdez", "James Justin"],
        messages: ["TaskFluid has helped me stay organized and focused on my tasks. It's a game-changer!", "I love how easy it is to collaborate with my team using TaskFluid. Highly recommended!", "TaskFluid is a must-have for anyone looking to boost their productivity and stay on top of their tasks."],
        images: ["https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80", "https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60", "https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"],
      }
    return (
        <div className="custom-slider font-sans flex justify-center items-center w-[44rem] h-auto relative">
            <div className="slider w-full max-w-[700px] h-auto relative [transform-style:preserve-3d]">
                <input type="radio" name="slider" id="item-1" defaultChecked />
                <input type="radio" name="slider" id="item-2" />
                <input type="radio" name="slider" id="item-3" />
                <div className="cards flex justify-center items-center relative w-full h-[300px] gap-[15px]">
                    <label className="absolute w-[40%] h-full overflow-hidden cursor-pointer rounded-[10px] transition-transform duration-[400ms] ease-in-out" htmlFor="item-1" id="song-1">
                        <img className="w-full h-full object-cover block" src={comments.images[0]}  alt="Song 1" />
                    </label>
                    <label className="absolute w-[40%] h-full overflow-hidden cursor-pointer rounded-[10px] transition-transform duration-[400ms] ease-in-out" htmlFor="item-2" id="song-2">
                        <img className="w-full h-full object-cover block" src={comments.images[1]} alt="Song 2" />
                    </label>
                    <label className="absolute w-[40%] h-full overflow-hidden cursor-pointer rounded-[10px] transition-transform duration-[400ms] ease-in-out" htmlFor="item-3" id="song-3">
                        <img className="w-full h-full object-cover block" src={comments.images[2]}  alt="Song 3" />
                    </label>
                </div>
                <div className="player">
                    <div className="upper-part">
                        <div className="info-area">
                            <div className="song-info" id="song-info-1">
                                <div className="names">{comments.names[0]}</div>
                                <div className="comments">{comments.messages[0]}</div>
                            </div>
                            <div className="song-info" id="song-info-2">
                                <div className="names">{comments.names[1]}</div>
                                <div className="comments">{comments.messages[1]}</div>
                            </div>
                            <div className="song-info" id="song-info-3">
                                <div className="names">{comments.names[2]}</div>
                                <div className="comments">{comments.messages[2]}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}