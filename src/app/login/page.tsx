import Image from "next/image";
import ImageLogo from "@/../public/assets/ImageLogin.png";
import { FaDiscord } from "react-icons/fa";
import MobileComponent from "@/components/WidgetMobile/MobileWidget";
import NavWidget from "@/components/WidgetMobile/NavWidget";
import Link from "next/link";

function Login() {
  return (
    <div className="w-[375px] h-[700px] bg-main px-4 relative  ">
      <MobileComponent/>
        <div className="flex justify-center items-center pt-10">
        <Image width={350} height={300} className="bg-contain bg-center " src={ImageLogo} alt="Image Login" />
        </div>

      <div className="pr-2 flex flex-col gap-4 pb-4">
        <h2 className="font-bold text-3xl text-center">Conecte-se e organize suas jogatinas</h2>
        <p className=" text-center"> Crie grupos para jogar seus games favoritos com seus amigos</p>
        <div className="flex justify-center">
        <Link href='/home' className="bg-red-600 py-3 px-6  rounded-md flex gap-5 justify-center items-center">
          <FaDiscord size={30}/>
            <p className=" ">Entrar com Discord</p>
        </Link>
        </div>
      </div>
      <NavWidget/>
    </div>
  );
}
export default Login