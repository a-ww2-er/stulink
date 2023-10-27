import discussImage from "../../Assets/discuss.jpg";
import getresourcesImage from "../../Assets/getresources.jpg";
import savetocloudImage from "../../Assets/savetocloud.jpg";
import meetnewpeopleImage from "../../Assets/meetnewpeople2.jpg";
import worktogetherImage from "../../Assets/worktogether.jpg";
import studytogetherImage from "../../Assets/studytogether.jpg";

const sectionData = [
  {
    imgSrc: discussImage,
    title: "Discuss",
  },
  {
    imgSrc: getresourcesImage,
    title: "Get Resources",
  },
  {
    imgSrc: savetocloudImage,
    title: "Save to Cloud",
  },
  {
    imgSrc: meetnewpeopleImage,
    title: "Meet New People",
  },
  {
    imgSrc: worktogetherImage,
    title: "Work Together",
  },
  {
    imgSrc: studytogetherImage,
    title: "Study Together",
  },
];

const ConnectSection = () => {
  return (
    <div className="connect">
      <div className="connect__header">
        <h1>Connect With Your Team!</h1>
        <p>or Find Your Team, Right On Stulink</p>
      </div>
      <div className="section">
        {sectionData.map((section, index) => (
          <div className="section__img" key={index}>
            <img src={section.imgSrc} alt={section.title} />
            <div className="section__overlay"></div>
            <div className="section__text">
              <h3>{section.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectSection;
