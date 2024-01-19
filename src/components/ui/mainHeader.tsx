import Avatar from "../avatar";
import SocialMedia from "../socialMedia";

const MainHeader = () => {
  return (
    <div>
      <Avatar url="https://avatars.githubusercontent.com/u/9339872?v=4" />
      <h1 className="text-4xl font-bold tracking-tight text-zinc-100 text-balance mt-9">
        İhsan SUNMAN
      </h1>
      <h2>Software Developer</h2>
      <SocialMedia socialList={[{ name: "sd", link: "", icon: "https://img.icons8.com/?size=50&id=8808&format=png" }]} />
    </div>
  );
};

export default MainHeader;
