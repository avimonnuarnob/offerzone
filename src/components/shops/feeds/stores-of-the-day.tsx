import type { FC } from 'react';
import StoresGridBlock from '../stores-grid-block';
import { LIMITS } from '@framework/utils/limits';
import { useShopsQuery } from '@framework/shop/get-shops';

interface ProductFeedProps {
  className?: string;
  variant?: string;
}

const StoresOfTheDay: FC<ProductFeedProps> = ({ className }) => {
  const { data, isLoading, error } = useShopsQuery({
    limit: 9,
  });
  return (
    <StoresGridBlock
      sectionHeading='text-stores-of-the-day'
      className={className}
      shops={data?.shop?.data.slice(0, 5)}
      loading={isLoading}
      error={error?.message}
      limit={LIMITS.BEST_SELLER_GROCERY_PRODUCTS_LIMITS}
      uniqueKey='stores-of-the-day'
    />
  );
};
export default StoresOfTheDay;
