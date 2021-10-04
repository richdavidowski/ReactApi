const HOUSES = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
    get = async () => {
        try {
            const resp = await fetch(HOUSES);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('There was an issue fetching houses', e);
        }
    }

    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application.json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) { 
            console.log('There was an issue updating houses', e);
        }
    }

}

export const housesApi = new HousesApi();