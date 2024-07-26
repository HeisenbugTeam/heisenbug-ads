import { readdirSync } from 'fs';
import { join } from 'path';
import AdsItem from './AdsItem';
import { getAdName } from '@/lib/helper/getAdName';
import Link from 'next/link';

type AdsProps = {
  companyName: string;
  year: string;
  month: string;
  adName: string;
};

const AdsContainer = ({ companyName, year, month, adName }: AdsProps) => {
  const directoryPath = join(
    process.cwd(),
    'public',
    'ads/' + companyName + '/' + year + '/' + month + '/' + adName
  );
  const files = readdirSync(directoryPath);

  return (
    <div className='ml-6'>
      <div className='flex space-x-1'>
        <h2 className='first-letter:capitalize font-bold'>
          {getAdName(adName)}
        </h2>
        <Link
          className='underline italic cursor-pointer'
          target='_blank'
          href={'ads/' + companyName + '/' + year + '/' + month + '/' + adName}
        >
          (Open preview link of tihs ad)
        </Link>
      </div>
      {files &&
        files.map((file: string) => (
          <AdsItem
            key={file}
            companyName={companyName}
            year={year}
            month={month}
            adName={adName}
            fileName={file}
          />
        ))}
    </div>
  );
};

export default AdsContainer;
