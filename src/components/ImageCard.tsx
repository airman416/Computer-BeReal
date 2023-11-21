// export default function Images() {
//     return (
//         <div>nothing</div>
//     )
// }

import React from 'react';
import './ImageCard.module.css';
import Images from '../pages/index';
import Link from "next/link";
import Image from 'next/image'
interface Image {
  id: number;
  url: string;
}



interface ImageCardProps {
  image: Image;
}

export default function ImageCard({ image }: ImageCardProps) {

  // const TeamGrid = ({ teams }: TeamGridProps) => {
  //   const isMobile = useIsMobile();
  //   const teamsPerLine = isMobile ? 1 : 3; // set the number of items per line based on screen size
  //   const teamsRows = [];
  //   for (let i = 0; i < teams.length; i += teamsPerLine) {
  //       teamsRows.push(teams.slice(i, i + teamsPerLine));
  //   }

  return (
    <Link href="#" className="">
      <Image
        alt="title"
        src={image.url}
        width={0}
        height={0}
        sizes="50vw"
        style={{ width: '50%', height: 'auto' }}
        className="rounded-lg inset-0 object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">{image.id}</p>

        <p className="text-xl font-bold text-white sm:text-2xl">{"Date"}</p>
        <p className="text-sm text-white">{"Generic Description"}</p>

        {/* mt-32 sm:mt-48 lg:mt-64 */}
        <div className="">
          <div>
          </div>
          {/* className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" */}
        </div>
      </div>
    </Link>

//{/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 grid-auto-rows-auto">
    // 
//</div> */}

)}