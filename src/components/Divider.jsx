import React from 'react';
import clsx from 'clsx';

const Divider = ({ bgClassName }) => {
  const baseClasses = 'flex justify-center items-center py-2 px-4 text-dusty-coral';
  const combinedClasses = clsx(baseClasses, bgClassName);

  return (
    <div className={combinedClasses}>
      <span className="material-symbols-outlined text-xl">brush</span>
      <div className="flex-grow border-t border-dashed border-current mx-4"></div>
      <span className="material-symbols-outlined text-xl">content_cut</span>
      <div className="flex-grow border-t border-dashed border-current mx-4"></div>
      <span className="material-symbols-outlined text-xl">card_giftcard</span>
    </div>
  );
};

export default Divider;
