import { readdirSync } from 'fs';
import { join } from 'path';
import AdsContainer from './AdsContainer';

type MonthProps = {
  companyName: string;
  year: string;
  month: string;
};

const Month = ({ companyName, year, month }: MonthProps) => {
  const directoryPath = join(
    process.cwd(),
    'public',
    'ads/' + companyName + '/' + year + '/' + month
  );
  if (directoryPath.includes('DS_Store')) {
    return null;
  }
  const files = readdirSync(directoryPath);

  return (
    <div className='ml-6'>
      <h2 className='uppercase'>{month}</h2>
      {files &&
        files.map((file: string) => (
          <AdsContainer
            key={file}
            month={month}
            companyName={companyName}
            year={year}
            adName={file}
          />
        ))}
    </div>
  );
};

export default Month;
