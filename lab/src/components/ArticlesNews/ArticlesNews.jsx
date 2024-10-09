import '../ArticlesNews/ArticlesNews.css'

export default function ArticlesNews(){
    return(
        <div>
    <div className="eighthContainer">
      <div>
        <p className="listeners">Article and News</p>
        <p className="platform">News, tips, tricks and more</p>
      </div>
      <div className="articlesDiv">
        <div className="articles">
          <div className="article article1">
            <div>
              <img src="./images/imgg1.png" alt=""></img>
              <p className="podcast">PODCAST</p>
              <p className="podcastDescr">Setup your own podcast</p>
              <p className="podcastLor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</p>
              <hr className="HR2"></hr>
              <div>
                <div>
                  <button className="AlternatesFont">business</button>
                  <button className="AlternatesFont">startup</button>
                </div>
                <p>Sep 14, 2021</p>
              </div>
            </div>
          </div>
          <div className="article">
            <div>
              <img src="./images/imgg2.png" alt=""></img>
              <p className="tips">TIPS & TRICK</p>
              <p className="tipsDescr">Doodle artwork 101</p>
              <p className="tipsLor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</p>
              <hr className="HR2"></hr>
              <div>
                <div>
                  <button className="AlternatesFont">art</button>
                  <button className="AlternatesFont">creative</button>
                  <button className="AlternatesFont">tips and trick</button>
                </div>
                <p>Sep 12, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="browseAllDiv">
        <button className="AlternatesFont browseButton">BROWSE ALL</button>
      </div>
    </div>
    <div className="scribbleDiv">
      <img src="./images/Scribble.png" alt="" className="scribbleImg"></img>
    </div>
        </div>
    )
}