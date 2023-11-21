import { AdvancedImage } from "@cloudinary/react";
import Sample from '../components/Sample'
import Images from '../components/ImageCard'


import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';

// const myImage = new CloudinaryImage('sample', {cloudName: 'dycag6dkz'}).resize(fill().width(100).height(150));

// function HomePage() {
//   return (<div>
//   <div>Welcome to Next.js!</div>
//   <div><AdvancedImage cldImg={myImage} />
//   </div><Images /></div>
//   )
// }

// export default HomePage

import React from 'react';
import { prisma } from '../../lib/prisma';
import ImageCard from '../components/ImageCard';
import Login from '../components/Login';
import Layout from "@/components/Layout";
import { useSession, signIn, signOut } from "next-auth/react";


interface Image {
  id: number;
  url: string;
}

interface HomeProps {
  images: Image[];
}

export default function Home({ images }: HomeProps) {
  const { data: session } = useSession();
  return (
    <Layout>
    <div>
      <div className="image-grid">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
      <div>
          <Login></Login>
      </div>
    </div>
    </Layout>
  );
}

// for (let i = 0; i < Images.length; i += teamsPerLine) {
//   teamsRows.push(teams.slice(i, i + teamsPerLine));
// }

export async function getServerSideProps() {
 const images = await prisma.image.findMany();
  return {
    props: { images },
  };
}
