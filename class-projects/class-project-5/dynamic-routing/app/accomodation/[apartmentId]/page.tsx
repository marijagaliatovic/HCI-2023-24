import { Apartment } from "../page";

interface Params {
  apartmentId: string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getPost = async (id: string): Promise<Apartment> => {
  const data = await fetch(`${BASE_API_URL}/photos/${id}`);
  return data.json();
};

export default async function AccomodationPost({ params }: { params: Params }) {
  const apartment = await getPost(params.apartmentId);

  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      {apartment && (
        <div className="grid grid-cols-1">
          <div className="w-full flex items-center justify-center bg-white p-4">
            <div className="w-3/4 max-w-full h-auto">
              <img src={apartment.url} alt={apartment.title} />
            </div>
            <div className="p-5 text-center">
              <h1 className="font-serif font-medium not-italic m-4">
                <span className="font-bold text-2xl">
                  Apartment {apartment.id}
                </span>
                <br /> {apartment.title}
              </h1>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
