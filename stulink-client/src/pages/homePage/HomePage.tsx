import { Link } from "react-router-dom";
import MockForm from "../MockForm";

type HomePageProps = {
  onMockData: (data: any) => void;
};

const HomePage = ({ onMockData }: HomePageProps) => {
  const handleMockData = (data: any) => {
    onMockData(data);
    return data
  };
  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "grey",
          textDecoration: "underline",
        }}
      >
        <Link to="/login">Login</Link>
        <Link to="/dashboard/projects">dashboard</Link>
        <Link to="/register">register</Link>
      </section>
      <div>HomePage</div>
      <span>
        working email for login: danny20@gmail.com
        <br />
        <span> password: good</span>
      </span>
      <MockForm handleMockData={handleMockData} />
    </>
  );
};

export default HomePage;
