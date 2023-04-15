import cn from 'classnames';
import Image from '@components/ui/image';
import { Offer } from '@framework/types';
import { useModalAction } from '@components/common/modal/modal.context';

import { useTranslation } from 'next-i18next';
import { productPlaceholder } from '@assets/placeholders';
import dynamic from 'next/dynamic';
const AddToCartCustom = dynamic(
  () => import('@components/product/add-to-cart-custom'),
  {
    ssr: false,
  },
);

interface ProductProps {
  product: Offer;
  className?: string;
}
function RenderPopupOrAddToCart({ props }: { props: { data: Offer } }) {
  const { data } = props;
  return <AddToCartCustom data={data} variant='mercury' />;
}
const ProductCard: React.FC<ProductProps> = ({ product, className }) => {
  const {
    OfferID,
    OfferzoneDiscount,
    Name,
    OfferDescription,
    // OfferStarts,
    // OfferEnds,
  } = product ?? {};
  const { openModal } = useModalAction();
  const { t } = useTranslation('common');

  function handlePopupView() {
    openModal('OFFER_VIEW', product);
  }
  return (
    <article
      className={cn(
        'flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full',
        className,
      )}
      onClick={handlePopupView}
      title={Name}
    >
      <div className='relative shrink-0'>
        <div className='flex overflow-hidden max-w-[230px] mx-auto transition duration-200 ease-in-out transform group-hover:scale-105 relative'>
          <Image
            src={
              `https://www.offerzonebd.com/testapi/images/${OfferID}o1o.jpg` ??
              productPlaceholder
            }
            alt={Name || 'Product Image'}
            width={230}
            height={200}
            quality={100}
            className='object-cover bg-fill-thumbnail'
          />
        </div>
        <div className='w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1'>
          {OfferzoneDiscount && (
            <span className='text-[11px] md:text-xs font-bold text-brand-light uppercase inline-block bg-brand rounded-full px-2.5 pt-1 pb-[3px] mx-0.5 sm:mx-1'>
              {t('text-on-sale')}
            </span>
          )}
          <div className={`block product-count-button-position`}>
            <RenderPopupOrAddToCart props={{ data: { ...product } }} />
          </div>
        </div>
      </div>

      <div className='flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full'>
        <h2 className='text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5'>
          {Name && Name.length > 50 ? Name.substring(0, 50) + '...' : Name}
        </h2>
        <div className='mt-auto text-13px sm:text-sm'>
          {OfferDescription && OfferDescription.length > 50
            ? OfferDescription.substring(0, 50) + '...'
            : OfferDescription}
        </div>
        {/* <div className='mt-auto text-13px sm:text-sm'>{unit}</div> */}
      </div>
    </article>
  );
};

export default ProductCard;
