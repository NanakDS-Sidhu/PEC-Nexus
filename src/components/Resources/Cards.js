import {useRouter } from "next/router";

export default function Card(props) {
    // const {push} = useRouter();
    const router = useRouter()
    return (<div style={{padding:20,float:"left"}}>
        {/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://images.unsplash.com/photo-1680792563719-288027b2a090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.subject}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Resources</button>
                    <button className="btn btn-primary">Feedback</button>
                </div>
            </div>
        </div> */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://images.unsplash.com/photo-1680792563719-288027b2a090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.subject}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                
                    <div className="dropdown dropdown-top">
                        <label tabIndex={0} className="btn btn-primary">Resources</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href={router.asPath+"/pastYearMaterial/"+props.description+"/assignquiz"}>Assignment & Quiz</a></li>
                            <li><a href={router.asPath+"/pastYearMaterial/"+props.description+"/midsem"}>Mid Semester</a></li>
                            <li><a href={router.asPath+"/pastYearMaterial/"+props.description+"/endsem"}>End Semester</a></li>
                        </ul>
                    </div>
                    {/* <button className="btn btn-primary" onClick={()=>router.push(router.asPath+"/pastYearMaterial/"+props.description)}>Resources</button> */}
                    <button className="btn btn-primary" onClick={()=>router.push(router.asPath+"/feedback/"+props.description)}>Feedback</button>
                </div>
            </div>
        </div>
    </div>
    )
}