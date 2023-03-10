class PlaceService {
  constructor() {
    this.places_service = new window.google.maps.places.PlacesService(document.createElement("div"));
    this.autocomplete_service = new window.google.maps.places.AutocompleteService();
  }

  getAddressForPlaceId = async (placeId) => {
    const request = {
      placeId,
      fields: ["ALL"],
    };

    return new Promise((resolve, reject) => {
      this.places_service.getDetails(request, (place, status) => {
        if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
          reject(new Error("failed to get postal details"));
        }
        const zip = place.address_components.find((item) => item.types.includes("postal_code"))?.long_name || "";
        const lng = place.geometry.location.lng();
        const lat = place.geometry.location.lat();
        const country = place.address_components.find((item) => item.types.includes("country"))?.long_name || "";
        const city = place.address_components.find((item) => item.types.includes("locality") || item.types.includes("postal_town"))
          ?.long_name || "";

        resolve({ zip, city, country, lng, lat });
      });
    });
  };

  getPlaceIdFromText = async (request) => {
    try {
      const b = await this.autocomplete_service.getPlacePredictions({ input: request, types: ["address"] });

      return b.predictions;
    } catch (err) {
      return [];
    }
  };
}

export default PlaceService;