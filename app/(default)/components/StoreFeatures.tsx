import Image from 'next/image';
import { BsBoxSeam } from "react-icons/bs";
import { IoTrophyOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineHeadset } from "react-icons/md";

const features = [
  {
    icon: BsBoxSeam,
    title: 'FASTED DELIVERY',
    desc: 'Delivery in 24/H',
  },
  {
    icon: IoTrophyOutline,
    title: '24 HOURS RETURN',
    desc: '100% money-back guarantee',
  },
  {
    icon: CiCreditCard1,
    title: 'SECURE PAYMENT',
    desc: 'Your money is safe',
  },
  {
    icon: MdOutlineHeadset,
    title: 'SUPPORT 24/7',
    desc: 'Live contact/message',
  },
];

export default function StoreFeatures() {
  return (
    <div className="w-full bg-white rounded-md border border-gray-200 flex flex-row items-center justify-between px-6 py-4 gap-10 md:gap-0 overflow-auto">
      {features.map((feature, idx) => {
        const Icon = feature.icon;
        return (
          <div key={feature.title} className="flex items-center gap-3 flex-1 min-w-[180px] justify-center">
            <div className="w-10 h-10 flex items-center justify-center text-gray">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <div className="font-semibold text-sm uppercase text-gray">{feature.title}</div>
              <div className="text-sm text-[#5F6C72] mt-1 text-nowrap">{feature.desc}</div>
            </div>
            {idx < features.length - 1 && (
              <div className="hidden md:block h-10 border-l border-gray-200 mx-10"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
