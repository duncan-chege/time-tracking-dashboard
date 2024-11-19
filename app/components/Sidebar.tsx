// Finish project by Thursday, 21st November

import Image from "next/image"
import profilePic from "../../public/images/image-jeremy.png";

export default function Sidebar(){
return (
    <div className="w-1/4 bg-dark-blue rounded-xl">
        <div className="bg-blue text-white rounded-xl p-8 font-light">
            <Image className="border-white border-2 rounded-full w-1/4" src={profilePic} alt="" />
            <p className="opacity-70 text-sm mt-12">Report For</p>
            <h3 className="text-4xl mb-12">Jeremy<br /> Robson</h3>
        </div>
        <div className="text-desaturated-blue p-8">
            <ul>
                <li className="py-2">Daily</li>
                <li className="py-2">Weekly</li>
                <li className="py-2">Monthly</li>
            </ul>
        </div>
    </div>
)
}