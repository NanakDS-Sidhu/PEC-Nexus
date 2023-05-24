export default function ImageCard(props){
    return (
        <div>
            <img src={props.url} alt={props.alt} style={{"width":"500px","height":"500px"}} />
        </div>
    )
}