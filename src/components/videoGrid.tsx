import Link from "next/link";
import CustomButton from '@/components/common/customButton';
import { Video } from "../homepage/utils/videodata";

const VideoGrid = ({ VideoData }: { VideoData: Video[] }) => {
  return (
    <div className="mt-10 mb-28 relative">
        <div className="text-white ml-1 mb-4">
            <h3 className="font-bold mb-6 text-lg">Gallery</h3>
            <p className="flex flex-col flex-shrink-0 mb-2 font-light text-[20px]">
                Check out our inspiration gallery to get more ideas for your events
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {VideoData.slice(0, 6).map((video) => (
                <Link href={video.videoUrl} key={video.id} passHref>
                    <div className="relative group cursor-pointer w-[336px] h-[236px] rounded bg-black">
                        <div
                            className="relative aspect-w-16 aspect-h-9 bg-cover bg-center group-hover:opacity-80"
                            style={{ backgroundImage: `url(${video.thumbnail})` }}
                        >
                            <div className="absolute inset-0 top-20 items-center justify-center">
                                <img
                                src="/svg/playBtn.svg"
                                alt="Play-btn"
                                className="w-16 h-16"
                                style={{ margin: "auto" }}
                                />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>


        <div className='absolute -bottom-20 -right-0'>
            <Link href='./gallery'>
            <CustomButton
                textColor='#1E1E1E'
                width='202px'
                height='46px'
                padding='8px 40px'
                background='#FFF'
                borderRadius='2px'
                onClick={() => {}}
            >
                See More
            </CustomButton>
            </Link> 
        </div>
    </div>
  );
};

export default VideoGrid;
