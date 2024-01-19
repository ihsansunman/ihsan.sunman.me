import Image from "next/image";

const SocialMedia = ({
  socialList,
}: {
  socialList: { name: string; link: string; icon: string }[];
}) => {
  return (
    <div>
      {socialList.map((item) => {
        return (
          <div>
            {item.name}
            <Image src={item.icon} alt={item.name} width={50} height={50}/>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMedia;
