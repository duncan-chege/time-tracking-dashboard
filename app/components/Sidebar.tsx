import Image from "next/image"
import profilePic from "../../public/images/image-jeremy.png";

type SidebarProps = {
    chosenTime: "Daily" | "Weekly" | "Monthly";

    /* setChosenTime is the state updater function, ensuring it can only update chosenTime
    /with valid values ("Daily", "Weekly", "Monthly") or a function. */
    setChosenTime: React.Dispatch<React.SetStateAction<"Daily" | "Weekly" | "Monthly" >>;
};

export default function Sidebar({ chosenTime, setChosenTime }: SidebarProps){
    const options = ["Daily", "Weekly", "Monthly"] as const;

    return (
        <div className="md:w-1/4 bg-dark-blue rounded-xl">
            <div className="bg-blue text-white rounded-xl lg:p-8 p-6 font-light flex items-center md:block">
                <Image className="border-white border-2 rounded-full w-1/4 md:w-1/2" src={profilePic} alt="" priority={true} />
                <div className="md:my-6 md:ml-0 ml-4">
                    <p className="opacity-70 ">Report For</p>
                    <h3 className="lg:text-5xl md:text-3xl text-2xl">Jeremy Robson</h3>
                </div>
            </div>
            <div className="text-desaturated-blue lg:p-8 p-6">
                <ul>
                    { options.map((item) => (
                        <li key={item} className={`py-2 text-lg cursor-pointer hover:text-white ${chosenTime === item ? `text-white`: ``}`}
                        onClick={() => setChosenTime(item)}>{ item }</li>
                    )) }
                    
                </ul>
            </div>
        </div>
    )
}