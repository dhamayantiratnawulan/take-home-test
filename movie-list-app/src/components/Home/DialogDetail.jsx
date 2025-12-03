import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';

export const DialogDetail = ({
  isOpen,
  onClose,
  movieDetail,
}) => {
  const dialogRef = useRef(null);
  const navigate = useNavigate();

  const handleBackdropClick = (e) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div
        ref={dialogRef}
        className="rounded-lg shadow-lg p-6 w-11/12 max-w-md relative h-[500px]"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), url(${movieDetail.Poster}), url(https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930)`,
        }}
      >
        <div className="flex justify-between items-end h-full w-full">
          <div className="w-full">
            <div className="text-xl text-white font-bold">
              {movieDetail.Title}
            </div>
            <div>
              <div className="flex justify-between">
                <div>
                  <span className="text-sm text-white capitalize">
                    {movieDetail.Type}
                  </span>
                  <span className="text-sm text-white mx-2">|</span>
                  <span className="text-sm text-white">{movieDetail.Year}</span>
                </div>
                <button className="px-4 py-1 bg-gray-500 text-white rounded text-sm" onClick={()=> navigate(`/detail/${movieDetail.imdbID}`)}>
                  See Detail
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute -right-3 -top-2 bg-white rounded-full w-8 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};
