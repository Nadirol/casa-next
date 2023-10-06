import Image from "next/image";
import { zaloLogo } from "../../public/assets";

const ZaloWidget = () => {

    return (
        <a target="_blank" href="https://zalo.me/0373522843" className="overflow-hidden relative z-10 shadow-bold">
            <Image src={zaloLogo} alt="zalo logo" className="w-9 md:w-12"/>                
        </a>
    )
};

export default ZaloWidget;