// Finish project by Thursday, 21st November

import Image from "next/image"
import profilePic from "../../public/images/image-jeremy.png";
import { useState } from "react";


export default function Sidebar(){
    // Define options as a string array and use `as const` to make it a readonly tuple
    const options = ["Daily", "Weekly", "Monthly"] as const;

    // State to track the selected item
    const [selectedPeriod, setSelectedPeriod] = useState<typeof options[number]>("Daily");

    // Function to handle item selection
    const handleItemClick = (item:typeof options[number]) => {
        setSelectedPeriod(item);
    }

return (
    <div className="md:w-1/4 bg-dark-blue rounded-xl">
        <div className="bg-blue text-white rounded-xl lg:p-8 p-6 font-light flex items-center md:block">
            <Image className="border-white border-2 rounded-full w-1/4 md:w-1/2" src={profilePic} alt="" />
            <div className="md:my-6 md:ml-0 ml-4">
                <p className="opacity-70 ">Report For</p>
                <h3 className="lg:text-5xl md:text-3xl text-2xl">Jeremy Robson</h3>
            </div>
        </div>
        <div className="text-desaturated-blue lg:p-8 p-6">
            <ul>
                { options.map((item) => (
                    <li key={item} className={`py-2 text-lg cursor-pointer hover:text-white ${selectedPeriod === item ? `text-white`: ``}`}
                    onClick={() => handleItemClick(item)}>{ item }</li>
                )) }
                
            </ul>
        </div>
    </div>
)
}