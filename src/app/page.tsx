import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center">
      <Image src={"/logo_dark_no_bg.png"} alt="logo" className=" scale-75 flexx items-center justify-center" width={354} height={88} />
    </div>
  );
}
