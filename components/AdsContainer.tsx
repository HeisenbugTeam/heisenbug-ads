import { readdirSync } from 'fs';
import { join } from 'path';
import AdsItem from './AdsItem';

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
      <h2>{adName}</h2>
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
