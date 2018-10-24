export class Itinerary {
    meta: string;
    data: data[];
}

interface data {
    type: string;
    id: number;
    meta: {
        totalItineraries: number,
        runTime: string;
    }
    attributes: {
        itineraries: itineraries[];
    }
}

interface itineraries {
    itineraryId: string;
    voyages: any[];
}

interface voyages {
    _id: string;
    currency: string;
    voyageId: string;
    itineraryId: string;
    brand: string;
    itineraryType: string;
    destination: any[];
    dateDepart: string;
    dateArrive: string;
    duration: number;
    ship: {
        shipId: string;
        displayName: string;
        shipVersion: string;
    }

    //TODO: keep fleshing out Class from https://qabook.hollandamerica.com/api/cruiseSearch/v1/api/search/itineraries?country=US&limit=10&skip=0

}

