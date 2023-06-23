import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import HeroSection from "../../components/Home/HeroSection";
import InfoSection from "../../components/Home/InfoSection";
import MockForm from "../MockForm";

type HomePageProps = {
  onMockData: (data: any) => void;
};

const HomePage = ({ onMockData }: HomePageProps) => {
  // const handleMockData = (data: any) => {
  //   onMockData(data);
  //   return data
  // };
  // console.log(onMockData)
  const navBarLinks = [
  { id: 0, link: "Community" },
  { id: 1, link: "Explore" },
  { id: 2, link: "News" },
  { id: 3, class: "support_btn", link: "Support" },
  { id: 4, class: "signin_btn", link: "Sign in", icon: <MdArrowDropDown /> },
];

  return (
    <>
      <HeroSection navBarLinks={navBarLinks} />
      <InfoSection />
    </>
  );
};

export default HomePage;
