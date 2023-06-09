import { useTranslation } from 'next-i18next';
import Link from '@components/ui/link';
import Image from '@components/ui/image';
import { ROUTES } from '@utils/routes';
import Heading from '@components/ui/heading';
import Text from '@components/ui/text';
import { Merchant } from '@framework/types';
import { useState } from 'react';

type VendorCardProps = {
  shop: Merchant;
};

const VendorCard: React.FC<VendorCardProps> = ({ shop }) => {
  const { t } = useTranslation();
  const { Name, MerchantID, District } = shop;

  const [src, setSrc] = useState(
    'https://www.offerzonebd.com/merchantimgapi/images/' + MerchantID + '.jpg',
  );
  const placeholderImage = `/assets/images/product-placeholder.png`;
  return (
    <Link
      href={`${ROUTES.SHOPS}/${MerchantID}`}
      className='relative flex items-center px-5 py-5 transition-all bg-white border rounded-lg cursor-pointer xl:px-7 xl:py-7 border-border-base shadow-vendorCard hover:shadow-vendorCardHover'
    >
      <div className='relative flex items-center justify-center w-16 h-16 overflow-hidden rounded-full shrink-0 bg-fill-thumbnail xl:w-20 xl:h-20'>
        <Image
          alt={t('common:text-logo')}
          src={src}
          layout='fill'
          objectFit='cover'
          onError={() => setSrc(placeholderImage)}
        />
      </div>

      <div className='flex flex-col ltr:ml-4 rtl:mr-4 xl:ltr:ml-5 xl:rtl:mr-5'>
        <Heading variant='mediumHeading' className='pb-1.5'>
          {Name}
        </Heading>
        <Text className='xl:leading-6'>{District}</Text>
      </div>
    </Link>
  );
};

export default VendorCard;
