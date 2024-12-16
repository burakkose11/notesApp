"use client";

import { ChangeEvent, useState } from "react";

const NotFormCmp = () => {
  const [baslik, setBaslik] = useState<string>("");
  const [icerik, setIcerik] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async () => {
    if (!baslik.trim()) {
      setMessage("Başlık ve içerik boş olamaz.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/notlar/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ baslik, icerik }),
      });

      if (response.ok) {
        setMessage("Not başarıyla kaydedildi. :)");
        setBaslik("");
        setIcerik("");
      } else {
        const data = await response.json();
        setMessage(data.message || "Bir hata oluştu");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Sunucuya bağlanırken bir hata oluştu. :(");
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center mt-2">
        <h3 className="text-2xl font-bold">Yeni Bir Not Ekle</h3>
      </div>
      <div className="flex items-center justify-center mt-10 space-x-8">
        <div>
          <label className="text-lg mr-4 font-semibold">Not Başlık :</label>
          <input
            type="text"
            value={baslik}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setBaslik(e.target.value)
            }
            className="border outline-none w-96 p-2"
          />
        </div>
        <div>
          <label className="text-lg mr-4 font-semibold">Not İçerik :</label>
          <input
            type="text"
            value={icerik}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setIcerik(e.target.value)
            }
            className="border outline-none w-96 p-2"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-orange-500 px-10 h-12 text-lg font-semibold text-white rounded-lg"
        >
          Ekle
        </button>
      </div>
      {message && <p className="text-center mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default NotFormCmp;
