'use client';
import { readdirSync } from 'fs';
import { join } from 'path';
import { useState } from 'react';

type AdsItemProps = {
  companyName: string;
  year: string;
  month: string;
  adName: string;
  fileName: string;
};

const AdsItem = ({
  companyName,
  year,
  month,
  adName,
  fileName,
}: AdsItemProps) => {
  const [showAd, setShowAd] = useState(false);

  const size = fileName.split('x');

  const src = `/ads/${companyName}/${year}/${month}/${adName}/${fileName}/index.html`;

  return (
    <div className='ml-6'>
      <div className='flex items-center space-x-3'>
        <div>{fileName}</div>
        <div
          className='cursor-pointer underline'
          onClick={() => setShowAd(!showAd)}
        >
          {showAd ? 'Hide ad' : 'Show ad'}
        </div>
        <a href={src} target='_blank' className='underline'>
          Open ad
        </a>
      </div>
      {showAd && (
        <div className='my-3'>
          <iframe
            src={`/ads/${companyName}/${year}/${month}/${adName}/${fileName}/index.html`}
            width={size[0]}
            height={size[1]}
            scrolling='no'
            style={{ border: 'none' }}
          />
        </div>
      )}
    </div>
  );
};

export default AdsItem;
