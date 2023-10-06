import Image from "next/image";
import { messengerLogo } from "../../public/assets";

const MessengerWidget = () => {

    return (
        <a target="_blank" href="http://m.me/XuanHoaHome" className="overflow-hidden relative z-10 shadow-bold">
            <Image src={messengerLogo} alt="zalo logo" className="w-9 md:w-12"/>                
        </a>
    )
};

export default MessengerWidget;