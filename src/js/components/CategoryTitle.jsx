import imageCoock from "../../assets/img/coock.png";

const CategoryTitle = (props) => {
  const { right } = props;
  console.log(right);
  return (
    <div className="support-msg" style={{ right: right }}>
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img
                src={imageCoock}
                alt=""
                className="circle responsive-img img-coock"
              />
            </div>
            <div className="col s10">
              <span className="black-text">
                Hi! Choose a category of dishes and you can find out any recipe
                :)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CategoryTitle };
