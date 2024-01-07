
const gqAllApartmentsQuery = `query getAllApartments{
    apartmentsCollection {
      items {
        picture{
            title
            url
        }
        title
        location
        size
        priceNumber
        apartment
        room
      }
    }
  }
`;
 
export interface apartmentsCollectionResponse {
    apartmentsCollection: {
        items: apartmentsItem[];
    }
}

export interface apartmentsItem{
    picture:{
        title:string;
        url:string;
      }
      title:string;
      location:string;
      size:string;
      priceNumber:number;
      apartment:boolean;
      room:boolean;
}

const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;


const getAllApartments =async (): Promise<apartmentsItem[]> => {
    try{
        const response = await fetch(baseUrl, {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
            },
            body:JSON.stringify({query:gqAllApartmentsQuery}),
        });
        const body = (await response.json()) as {data: apartmentsCollectionResponse}

        const apartmentsCollection = body.data.apartmentsCollection.items.map(
            (item)=>({
            title:item.title,
            picture:item.picture,
            location:item.location,
            size:item.size,
            priceNumber:item.priceNumber,
            room:item.room,
            apartment:item.apartment,
        }));

        
        return apartmentsCollection;
    } catch(error){
        console.error("Error fetching apartments:", error);
        return [];
    }
};



const contentfulService = {
    getAllApartments,
}

export default contentfulService;

