import ImageCard from "./ImageCard";
export default function CardRow(props){
    const papers = props.papers;
    return (
        <div style={{ "margin": "5%", "textAlign": 'center' }}>
            {papers?.map(x=>{
                return(
                    <ImageCard url={x} alt="HI" />
                )
            })}
        </div>
    )
}