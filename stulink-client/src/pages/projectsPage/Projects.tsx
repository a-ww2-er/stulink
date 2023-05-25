import { AiOutlineShareAlt } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import src from "../../Assets/PM.jpg";
import "./projects.scss";
import NewsForYou from "../../components/Dashboard/molecules/NewsForYou";
import ProjectHistory from "../../components/Dashboard/molecules/ProjectHistory";
import Team from "../../components/Dashboard/molecules/Team";
import Nav from "../../components/NavBar/Nav";
import SidePanel from "../../components/SideNav/SidePanel";
import { Link } from "react-router-dom";
import { images } from "../../images";
import PopupModal from "../../components/PopupModal/PopupModal";
import { useContext } from "react";
import { AppContext } from "../../utilities/context";
import { IoClose } from "react-icons/io5";
const Projects = () => {
  const { modalOpen, setModalOpen, setCloseSidePanel, closeSidePanel } =
    useContext(AppContext);
  return (
    <>
      {modalOpen && (
        <PopupModal
          isOpen={modalOpen}
          handleClose={() => {
            setModalOpen(!modalOpen);
          }}
        >
          <section className="container">
            <span>
              <IoClose onClick={() => setModalOpen(!modalOpen)} />
            </span>
            <span>Modal</span>
            <section>
              hello , welcome to stulink, this feature is UNAVAILIABLE at the
              moment , try again later
            </section>
          </section>
        </PopupModal>
      )}
      {/* <SidePanel /> */}
      <div
        className={
          closeSidePanel
            ? "dashboard_container"
            : `dashboard_container openSideNav`
        }
      >
        <div className="project_container">
          <div className="project">
            <section>
              <span>03</span>
              <Link
                to="#"
                className="create_new"
                onClick={() => setModalOpen(!modalOpen)}
              >
                Create New
              </Link>
            </section>
            <div className="project_project_body">
              <div>
                <span>
                  <h2>Developing an App</h2> <p>~ Joe's Team (Team 3)</p>
                </span>
                <img src={images(800, 400, false, 188)} alt={src} />
                <article>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                  reprehenderit, eligendi fugiat dolores tenetur explicabo
                  iusto, commodi aliquid quibusdam corporis et placeat sequi est
                  labore, soluta facere itaque quas rerum ratione. Atque rerum,
                  adipisci voluptas reiciendis amet nihil. Odio aliquam dolorem,
                  mollitia magnam voluptas est sapiente consequatur tempore
                  facilis, quas dolor quos at sunt delectus provident. Sint
                  optio nobis nihil iste quos dignissimos cum incidunt
                  perspiciatis, earum eligendi inventore voluptate illum
                  adipisci delectus officia perferendis qui tenetur aspernatur
                  rem laboriosam laudantium quia sequi nisi rerum! Nobis,
                  repudiandae facere? Provident possimus, cum eveniet magni
                  exercitationem excepturi recusandae voluptatibus sed aut velit
                  mollitia! Impedit beatae qui quae vel suscipit, iusto expedita
                  quia aliquam at dolor nostrum distinctio obcaecati similique,
                  reprehenderit fugiat aperiam minima fuga voluptatibus
                  asperiores explicabo? Ullam natus tempora pariatur, quas odio
                  iusto fugit consectetur ipsa amet voluptate eaque explicabo
                  placeat accusantium veniam esse illo quam ratione molestiae
                  deserunt nulla, sapiente saepe soluta. Fugit corrupti
                  laboriosam perferendis voluptatibus a dignissimos nostrum illo
                  aliquid adipisci quae atque doloribus provident neque
                  architecto dolor et animi, sapiente numquam quod iste nemo
                  dolores corporis. Beatae, ratione harum! Hic soluta similique
                  repellat dolorum, molestias aperiam? Consequuntur obcaecati
                  eum quae doloremque magni eveniet a repudiandae placeat dicta.
                </article>
              </div>
            </div>
            <article
              className="edit_icons"
              onClick={() => setModalOpen(!modalOpen)}
            >
              <BiEdit />
              <AiOutlineShareAlt />
            </article>
          </div>

          <NewsForYou />
        </div>

        <Team />
        <ProjectHistory />
      </div>
    </>
  );
};

export default Projects;
