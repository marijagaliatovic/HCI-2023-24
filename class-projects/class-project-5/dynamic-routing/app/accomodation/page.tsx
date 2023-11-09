import Link from "@/node_modules/next/link";

export interface Apartment {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getPosts = async (): Promise<Apartment[]> => {
  const data = await fetch(`${BASE_API_URL}/photos`);
  return data.json();
};

export default async function Accomodation() {
  const apartments = await getPosts();
  return (
    <div className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {apartments.map((apartment) => (
          <div key={apartment.id} className="bg-white hover:scale-105">
            <Link href={`accomodation/${apartment.id}`}>
              <img
                src={apartment.url}
                alt={apartment.title}
                className="w-full h-56 object-cover p-7"
              />
              <div className="p-4">
                <span className="bg-white font-serif font-medium not-italic tracking-wide">
                  {apartment.title}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
