import Image from "next/image";

const Avatar = ({ url }: { url: any }) => {
  return (
    <Image
      src={url}
      width={64}
      height={64}
      alt="profile-photo"
      className="rounded-full"
    />
  );
};

export default Avatar;
