import Image from 'next/image';
import { readdirSync } from 'fs';
import { join } from 'path';
import Company from '@/components/Company';

export default function Home() {
  // Read the directory contents

  const directoryPath = join(process.cwd(), 'public', 'ads');

  // Read the directory contents
  const files = readdirSync(directoryPath);

  return (
    <div className='max-w-7xl m-auto mt-12 bg-white text-black'>
      <h1 className='text-3xl'>Heisenbug ads overview</h1>
      {files &&
        files.map((file: string) => <Company key={file} companyName={file} />)}
    </div>
  );
}
