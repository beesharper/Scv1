import React from 'react';

const Divider = () => {
  return (
    <div className="flex justify-center items-center py-8 px-4 text-text-muted-light dark:text-text-muted-dark">
      <span className="material-symbols-outlined text-2xl">brush</span>
      <div className="flex-grow border-t border-dashed border-current mx-4"></div>
      <span className="material-symbols-outlined text-2xl">content_cut</span>
      <div className="flex-grow border-t border-dashed border-current mx-4"></div>
      <span className="material-symbols-outlined text-2xl">card_giftcard</span>
    </div>
  );
};

export default Divider;
