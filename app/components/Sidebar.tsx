// Finish project by Thursday, 21st November

import Image from "next/image"
import profilePic from "../../public/images/image-jeremy.png";

export default function Sidebar(){
return (
    <div className="md:w-1/4 bg-dark-blue rounded-xl">
        <div className="bg-blue text-white rounded-xl lg:p-8 p-6 font-light flex items-center md:block">
            <Image className="border-white border-2 rounded-full w-1/4 md:w-1/2" src={profilePic} alt="" />
            <div className="md:my-12 md:ml-0 ml-4">
                <p className="opacity-70 ">Report For</p>
                <h3 className="lg:text-5xl md:text-3xl text-2xl">Jeremy Robson</h3>
            </div>
        </div>
        <div className="text-desaturated-blue lg:p-8 p-6">
            <ul>
                <li className="py-2 text-lg">Daily</li>
                <li className="py-2 text-lg">Weekly</li>
                <li className="py-2 text-lg">Monthly</li>
            </ul>
        </div>
    </div>
)
}