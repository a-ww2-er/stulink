import { AiOutlineShareAlt } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import src from "../../../Assets/PM.jpg";
import "../styles/dashboard.scss";
import NewsForYou from "./NewsForYou";
import ProjectHistory from "./ProjectHistory";
import Team from "./Team";
const DashBoard = () => {
  return (
    <>
      <div className="dashboard_container">
        <div className="dashboard">
          <div className="dashboard_project_title">
            <span>03</span>
            <div>
              <h2>Developing an App</h2> <p>~ Joe's Team (Team 3)</p>
            </div>
          </div>
          <img src={src} alt={src} />
          <div className="dashboard_project_body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            reprehenderit, eligendi fugiat dolores tenetur explicabo iusto,
            commodi aliquid quibusdam corporis et placeat sequi est labore,
            soluta facere itaque quas rerum ratione. Atque rerum, adipisci
            voluptas reiciendis amet nihil. Odio aliquam dolorem, mollitia
            magnam voluptas est sapiente consequatur tempore facilis, quas dolor
            quos at sunt delectus provident. Sint optio nobis nihil iste quos
            dignissimos cum incidunt perspiciatis, earum eligendi inventore
            voluptate illum adipisci delectus officia perferendis qui tenetur
            aspernatur rem laboriosam laudantium quia sequi nisi rerum! Nobis,
            repudiandae facere? Provident possimus, cum eveniet magni
            exercitationem excepturi recusandae voluptatibus sed aut velit
            mollitia! Impedit beatae qui quae vel suscipit, iusto expedita quia
            aliquam at dolor nostrum distinctio obcaecati similique,
            reprehenderit fugiat aperiam minima fuga voluptatibus asperiores
            explicabo? Ullam natus tempora pariatur, quas odio iusto fugit
            consectetur ipsa amet voluptate eaque explicabo placeat accusantium
            veniam esse illo quam ratione molestiae deserunt nulla, sapiente
            saepe soluta. Fugit corrupti laboriosam perferendis voluptatibus a
            dignissimos nostrum illo aliquid adipisci quae atque doloribus
            provident neque architecto dolor et animi, sapiente numquam quod
            iste nemo dolores corporis. Beatae, ratione harum! Hic soluta
            similique repellat dolorum, molestias aperiam? Consequuntur
            obcaecati eum quae doloremque magni eveniet a repudiandae placeat
            dicta.
          </div>
          <div className="dashboard_project_edit">
            <div>
              <BiEdit />
              <AiOutlineShareAlt />
            </div>
            <button>Create Project</button>
          </div>
        </div>

        <NewsForYou />
      </div>

      <Team classname="team" />
      <ProjectHistory />
    </>
  );
};

export default DashBoard;
