import { readdirSync } from 'fs';
import { join } from 'path';
import Year from './Year';

type CompanyProps = {
  companyName: string;
};

const Company = ({ companyName }: CompanyProps) => {
  const directoryPath = join(process.cwd(), 'public', 'ads/' + companyName);
  if (directoryPath.includes('DS_Store')) {
    return null;
  }
  const files = readdirSync(directoryPath);

  return (
    <div className='mt-6'>
      <h2 className='uppercase text-xl'>{companyName}</h2>
      {files &&
        files.map((file: string) => (
          <Year key={file} year={file} companyName={companyName} />
        ))}
    </div>
  );
};

export default Company;
