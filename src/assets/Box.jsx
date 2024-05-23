import Card from "./card";
function Box(){
    const path1="/card1.jpg";
    const path2="/card2.jpg";
    const path3="/card3.jpg";
    const path4="/card4.jpg";
    
    return(
        <>
            <div className="row">
                <Card path={path1} name="Iron Man"/>
                <Card path={path2} name="Tommy Shleby"/>
                <Card path={path3} name="Peter Parker"/>
                <Card path={path4} name="Loki"/>
            </div>
        </>
    )
}
export default Box;