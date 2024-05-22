function Header(){
    return (
        <div className="bg">
            <img src="/bgm.jpg" className="bgimg"></img>
            <div className="up_title"><img src="netflix.png" width="20%"></img></div>
            <div className="search"><input type="text" placeholder="Search Movies....." id="serach_box"></input></div>
        </div>
    )
}
export default Header;