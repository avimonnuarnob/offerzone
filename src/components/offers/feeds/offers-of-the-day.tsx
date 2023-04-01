import type { FC } from 'react';
import { useBestSellerGroceryProductsQuery } from '@framework/product/get-all-best-seller-grocery-products';
import ProductsGridBlock from '../../product/products-grid-block';
import { LIMITS } from '@framework/utils/limits';

interface ProductFeedProps {
  className?: string;
  variant?: string;
}

const OffersOfTheDay: FC<ProductFeedProps> = ({ className, variant }) => {
  const { data, isLoading, error } = useBestSellerGroceryProductsQuery({
    limit: LIMITS.BEST_SELLER_GROCERY_PRODUCTS_LIMITS,
  });
  return (
    <ProductsGridBlock
      sectionHeading='text-offers-of-the-day'
      className={className}
      products={data?.slice(0, 5)}
      loading={isLoading}
      error={error?.message}
      limit={LIMITS.BEST_SELLER_GROCERY_PRODUCTS_LIMITS}
      uniqueKey='best-sellers'
      variant={variant}
    />
  );
};
export default OffersOfTheDay;
