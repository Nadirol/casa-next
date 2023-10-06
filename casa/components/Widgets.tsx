import { TFunction } from "next-i18next"
import CallWidget from "./buttons/CallWidget"
import ZaloWidget from "./buttons/ZaloWidget"
import MessengerWidget from "./buttons/MessengerWidget";


const Widgets = ({ t }: { t: TFunction }) => {
    return (
        <div className="fixed right-6 bottom-12 md:bottom-16 z-30 flex gap-4 md:gap-8 flex-col items-center">
            <MessengerWidget/>
            <CallWidget t={t}/>
            <ZaloWidget/>
        </div>
    )
};

export default Widgets;