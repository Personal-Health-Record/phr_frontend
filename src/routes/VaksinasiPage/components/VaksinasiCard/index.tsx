import React from 'react';

interface Props {
  title: string;
  isComplete: boolean;
  handleClick: () => void;
}

const VaksinasiCard = ({ isComplete, title, handleClick }: Props) => {
  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-center rounded-2xl px-2 py-5 text-center`}
      style={{
        backgroundColor: isComplete ? '#9FDBFD' : 'white',
        boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.2)',
      }}
    >
      <p className="text-xs">{title}</p>
    </div>
  );
};

export default VaksinasiCard;
