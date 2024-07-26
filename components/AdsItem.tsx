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
  isPreviewLink?: boolean;
};

const AdsItem = ({
  companyName,
  year,
  month,
  adName,
  fileName,
  isPreviewLink,
}: AdsItemProps) => {
  const [showAd, setShowAd] = useState(isPreviewLink ? true : false);

  const size = fileName.split('x');

  const src = `/ads/${companyName}/${year}/${month}/${adName}/${fileName}/index.html`;

  return (
    <div className={!isPreviewLink ? 'ml-6' : 'ml-0'}>
      <div className='flex items-center space-x-3'>
        <div>{fileName}</div>
        {!isPreviewLink && (
          <>
            <div
              className='cursor-pointer underline'
              onClick={() => setShowAd(!showAd)}
            >
              {showAd ? 'Hide ad' : 'Show ad'}
            </div>
            <a href={src} target='_blank' className='underline'>
              Open ad
            </a>
          </>
        )}
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
