const NotFormCmp = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center mt-2">
        <h3 className="text-2xl font-bold">Yeni Bir Not Ekle</h3>
      </div>
      <div className="flex items-center justify-center mt-10 space-x-8">
        <div>
          <label className="text-lg mr-4 font-semibold">Not Başlık :</label>
          <input type="text" className="border outline-none w-96 p-2" />
        </div>
        <div>
          <label className="text-lg mr-4 font-semibold">Not İçerik :</label>
          <input type="text" className="border outline-none w-96 p-2" />
        </div>
        <button className="bg-orange-500 px-10 h-12 text-lg font-semibold text-white rounded-lg">
          Ekle
        </button>
      </div>
    </div>
  );
};

export default NotFormCmp;
