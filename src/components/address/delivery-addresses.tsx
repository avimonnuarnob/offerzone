import { useAddressQuery } from "@framework/address/address";
import AddressGrid from "@components/address/address-grid";
import { useModalAction } from "@components/common/modal/modal.context";
import CloseButton from "@components/ui/close-button";
import Heading from "@components/ui/heading";
import { useTranslation } from "next-i18next";

const DeliveryAddresses: React.FC = () => {
  const { t } = useTranslation("common");
  const { data, isLoading } = useAddressQuery();
  const { closeModal } = useModalAction();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-[820px] bg-brand-light p-5 sm:p-8 md:p-10 border border-border-base rounded-md relative">
      <CloseButton onClick={closeModal} />
      <div className="w-full">
        <Heading variant="title" className="mb-5 md:mb-8 md:-mt-1.5">
          {t("text-delivery-address")}
        </Heading>
        <AddressGrid address={data?.data} />
      </div>
    </div>
  );
};

export default DeliveryAddresses;
