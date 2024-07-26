import Image from 'next/image';
import { readdirSync } from 'fs';
import { join } from 'path';
import Company from '@/components/Company';
import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';
import AdsItem from '@/components/AdsItem';
import { getAdName } from '@/lib/helper/getAdName';

export default function Page({
  params,
}: {
  params: { company: string; year: string; month: string; adname: string };
}) {
  //   const pathNames = usePathname();
  //   console.log(pathNames);

  const dir =
    'ads/' +
    params.company +
    '/' +
    params.year +
    '/' +
    params.month +
    '/' +
    params.adname;

  const directoryPath = join(process.cwd(), 'public', dir);

  const files = readdirSync(directoryPath);

  console.log(files);

  return (
    <div className='max-w-7xl m-auto mt-12 bg-white text-black'>
      <h1 className='text-3xl uppercase'>{params.company}</h1>
      <h2 className='first-letter:capitalize text-2xl mb-6'>
        {getAdName(params.adname)}
      </h2>
      {files &&
        files.map((file: string) => (
          <AdsItem
            key={file}
            companyName={params.company}
            adName={params.adname}
            fileName={file}
            month={params.month}
            year={params.year}
            isPreviewLink={true}
          />
        ))}
      {/* {files &&
        files.map((file: string) => <Company key={file} companyName={file} />)} */}
    </div>
  );
}
