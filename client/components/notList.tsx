import { Notes } from "@/types/noteType";
import React from "react";

const NotListCmp = async () => {
  const res = await fetch("http://localhost:5000/api/notlar/", {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <p className="container mx-auto mt-20 flex items-center justify-center text-xl text-red-600 font-bold">
        Bir hata oluştu !
      </p>
    );
  }

  const notes: Notes[] = await res.json();

  return (
    <div className="container mx-auto mt-10 grid grid-cols-6 gap-4 ">
      {notes.map((not) => (
        <div
          key={not.id}
          className="border border-orange-600 bg-orange-500 text-white h-44 p-4 rounded-md"
        >
          <div>
            <h1 className="text-center font-semibold text-lg">{not.baslik}</h1>
          </div>
          <div>
            <p>{not.icerik}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotListCmp;
