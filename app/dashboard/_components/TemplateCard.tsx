import React from 'react';
import Image from 'next/image';
import { TEMPLATE } from './TemplateListSection';
import Link from 'next/link';

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={`/dashboard/content/${item.slug}`}>
      <div className="p-5 shadow-xl rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col gap-3 cursor-pointer hover:scale-105 hover:ring-2 hover:ring-purple-500 transition-all duration-300">
        <Image src={item.icon} alt="item" width={50} height={50} />
        <h2 className="font-semibold text-white text-lg">{item.name}</h2>
        <p className="text-gray-400 line-clamp-3">{item.desc}</p>
      </div>
    </Link>
  );
}

export default TemplateCard;
