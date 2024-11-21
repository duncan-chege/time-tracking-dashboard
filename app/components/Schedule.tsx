import Image from "next/image";
import ellipses from "../../public/images/icon-ellipsis.svg";
import workIcon from "../../public/images/icon-work.svg"
import playIcon from "../../public/images/icon-play.svg"
import studyIcon from "../../public/images/icon-study.svg"
import exerciseIcon from "../../public/images/icon-exercise.svg"
import socialIcon from "../../public/images/icon-social.svg"
import careIcon from "../../public/images/icon-self-care.svg"
import Records from "../data.json";

const RecordsWithIds = Records.map((record, index) => ({
    ...record,
    id: index,
}));

const Schedule = () => {
    return (
    <div className="md:w-3/4 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        <div className="bg-light-red-work rounded-xl pt-12 pb-0 relative z-50">
            <Image className="absolute right-8 top-0 -z-10" src={workIcon} alt="" />
            <div className="rounded-xl p-10 text-white cursor-pointer bg-dark-blue hover:saturate-200">
                <div className="flex justify-between items-center pb-6">
                    <p className="text-xl">{ RecordsWithIds[0].title }</p>
                    <Image className="h-auto" src={ellipses} alt="" />
                </div>
                <h3 className="text-5xl font-light">{ RecordsWithIds[0].timeframes.daily.current }hrs</h3>
                <p className="text-desaturated-blue pt-4">Yesterday - { RecordsWithIds[0].timeframes.daily.previous }hrs</p>
            </div>
        </div>

        <div className="bg-soft-blue rounded-xl pt-12 relative z-50">
            <Image className="absolute right-8 top-0 -z-10" src={playIcon} alt="" />
            <div className="rounded-xl p-10 text-white cursor-pointer bg-dark-blue hover:saturate-200">
                <div className="flex justify-between items-center pb-6">
                    <p className="text-xl">Play</p>
                    <Image className="h-auto" src={ellipses} alt="" />
                </div>
                <h3 className="text-5xl font-light">10hrs</h3>
                <p className="text-desaturated-blue pt-4">Last Week - 8hrs</p>
            </div>
        </div>

        <div className="bg-light-red-study rounded-xl pt-12 relative z-50">
            <Image className="absolute right-8 top-0 -z-10" src={studyIcon} alt="" />
            <div className="rounded-xl p-10 text-white cursor-pointer bg-dark-blue hover:saturate-200">
                <div className="flex justify-between items-center pb-6">
                    <p className="text-xl">Study</p>
                    <Image className="h-auto" src={ellipses} alt="" />
                </div>
                <h3 className="text-5xl font-light">4hrs</h3>
                <p className="text-desaturated-blue pt-4">Last Week - 7hrs</p>
            </div>
        </div>

        <div className="bg-lime-green rounded-xl pt-12 relative z-50">
            <Image className="absolute right-8 top-0 -z-10" src={exerciseIcon} alt="" />
            <div className="rounded-xl p-10 text-white cursor-pointer bg-dark-blue hover:saturate-200">
                <div className="flex justify-between items-center pb-6">
                    <p className="text-xl">Exercise</p>
                    <Image className="h-auto" src={ellipses} alt="" />
                </div>
                <h3 className="text-5xl font-light">4hrs</h3>
                <p className="text-desaturated-blue pt-4">Last Week - 5hrs</p>
            </div>
        </div>

        <div className="bg-violet rounded-xl  pt-12 relative z-50">
            <Image className="absolute right-8 top-0 -z-10" src={socialIcon} alt="" />
            <div className="rounded-xl p-10 text-white cursor-pointer bg-dark-blue hover:saturate-200">
                <div className="flex justify-between items-center pb-6">
                    <p className="text-xl">Social</p>
                    <Image className="h-auto" src={ellipses} alt="" />
                </div>
                <h3 className="text-5xl font-light">5hrs</h3>
                <p className="text-desaturated-blue pt-4">Last Week - 10hrs</p>
            </div>
        </div>

        <div className="bg-soft-orange rounded-xl  pt-12 relative z-50">
            <Image className="absolute right-8 top-0 -z-10" src={careIcon} alt="" />
            <div className="rounded-xl p-10 text-white cursor-pointer bg-dark-blue hover:saturate-200">
                <div className="flex justify-between items-center pb-6">
                    <p className="text-xl">Self Care</p>
                    <Image className="h-auto" src={ellipses} alt="" />
                </div>
                <h3 className="text-5xl font-light">2hrs</h3>
                <p className="text-desaturated-blue pt-4">Last Week - 2hrs</p>
            </div>
        </div>
    </div>
    )
}

export default Schedule;