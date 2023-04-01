import { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import cn from 'classnames';
// import Layout from '@components/layout/layout';
import { useTranslation } from 'next-i18next';
import Input from '@components/ui/form/input';

type paymentOpt = 'bkash' | 'rocket' | 'pay online' | 'cod';

interface PaymentMethodsType {
  name: string;
  value: paymentOpt;
  tID: string;
}

const paymentMethods: PaymentMethodsType[] = [
  {
    name: 'Bkash',
    value: 'bkash',
    tID: '',
  },

  {
    name: 'Rocket',
    value: 'rocket',
    tID: '',
  },

  {
    name: 'Pay online',
    value: 'pay online',
    tID: 'Pay online',
  },

  {
    name: 'Cash on delivery',
    value: 'cod',
    tID: 'COD',
  },
];

export default function PaymentMethodForm() {
  const { t } = useTranslation('common');
  const [selectedMethod, setSelectedMethod] = useState<paymentOpt | null>(
    'bkash',
  );
  const [transactionId, setTransactionId] = useState<string>('');

  useEffect(() => {
    const a = paymentMethods.find((method) => method.value === selectedMethod);
    if (a) setTransactionId(a.tID);
  }, [selectedMethod]);

  return (
    <div className='w-full'>
      {JSON.stringify(transactionId)}
      <div className='w-full mx-auto'>
        <RadioGroup value={selectedMethod} onChange={setSelectedMethod}>
          <RadioGroup.Label className='sr-only'>
            {t('text-delivery-schedule')}
          </RadioGroup.Label>
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2'>
            {paymentMethods.map((paymentMethod) => (
              <RadioGroup.Option
                key={paymentMethod.name}
                value={paymentMethod.value}
                className={({ checked }) =>
                  cn(
                    'relative rounded-lg px-5 py-3 cursor-pointer focus:outline-none',
                    checked ? 'bg-brand text-brand-light' : 'bg-gray-100',
                  )
                }
              >
                {({ checked }) => (
                  <div className='flex justify-center items-center'>
                    <RadioGroup.Label
                      as='p'
                      className={`text-base font-semibold  ${
                        checked ? 'text-brand-light' : 'text-gray-900'
                      }`}
                    >
                      {paymentMethod.name}
                    </RadioGroup.Label>
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        {/* End of date schedule */}
      </div>
      {selectedMethod ? (
        <Input
          label={'Transaction ID'}
          variant='solid'
          name='tId'
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          disabled={['cod', 'pay online'].includes(selectedMethod)}
          className='mt-10'
        />
      ) : null}
    </div>
  );
}
