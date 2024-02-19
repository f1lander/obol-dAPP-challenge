import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex space-x-2">
      <Image
        className=""
        src="/obol.svg"
        alt="Obol Logo"
        width={108}
        height={24}
        priority
      />
      <h1 className="text-muted text-nowrap  text-[28px] font-bold">
        Pokemon List
      </h1>
    </div>
  );
};

export default Logo;
