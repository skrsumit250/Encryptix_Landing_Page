function Card(props){
    const path=props.path;
    const name=props.name
    return(
        <><div className="col-sm-12 col-lg-3 col-md-6 box"><img src={path} width="100%" id="cardimg"></img><p className="name">{name}</p></div></>
    )
}
export default Card;