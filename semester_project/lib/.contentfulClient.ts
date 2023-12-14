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
        price
      }
    }
  }
`;


interface apartmentsCollectionResponse {
    apartmentsCollection: {
        items: apartmentsItem[];
    }
}

interface apartmentsItem{
    picture:{
        title:string;
        url:string;
      }
      title:string;
      location:string;
      size:string;
      price:string;
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

        const apartments:apartmentsItem[] = body.data.apartmentsCollection.items.map(
            (item)=>({
            title:item.title,
            picture:item.picture,
            location:item.location,
            size:item.size,
            price:item.price
        }));
        return apartments;
    } catch(error){
        console.error("Error fetching apartments:", error);
        return [];
    }
};

    getAllApartments()
  .then(apartments => {
    // Successfully fetched apartments
    console.log('Apartments:', apartments);
    // Perform further actions with the apartments
  })
  .catch(error => {
    // Error occurred during the fetch
    console.error('Error fetching apartments:', error);
    // Handle the error or provide user feedback
  });

export default getAllApartments;