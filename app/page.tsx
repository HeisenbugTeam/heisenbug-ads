import Image from 'next/image';
import { readdirSync } from 'fs';
import { join } from 'path';

export default function Home() {
  // Read the directory contents

  const directoryPath = join(process.cwd(), 'public', 'ads-test');

  // Read the directory contents
  const files = readdirSync(directoryPath);
  console.log(files);

  return (
    <div>
      <h2>Ads overview</h2>
    </div>
  );
}
