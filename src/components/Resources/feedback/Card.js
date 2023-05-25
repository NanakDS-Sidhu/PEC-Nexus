export default function FeedbackCard(props){
    return (
        <div className="card bg-base-100 shadow-xl" style={{ "width": "92%", "margin": "1% 4%" }}>
                <div className="card-body">
                <h4 className="card-title">{props.user}</h4>
                    <p>{props.text}</p>
                    <div className="card-actions justify-end">

                        <button>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            <p>{props.likes}</p>
                        </button>
                    </div>
                </div>
            </div>
    )
}