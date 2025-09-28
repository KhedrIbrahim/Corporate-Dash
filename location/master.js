// **************************** Location Section
// Add Location PopUp
const btnOpenAddLocationPopup = document.getElementById('btnOpenAddLocationPopup');
let popUpAddLocation = document.getElementById("popUpAddLocation")
btnOpenAddLocationPopup.addEventListener("click", function () {
    popUpAddLocation.classList.add("act")
    boxShadow.classList.add("act");
});
// Open Edit Location PopUp
const btnEditLocation = document.querySelectorAll('.btnEditLocation');
let popUpEditLocation = document.getElementById("popUpEditLocation")
btnEditLocation.forEach(button => {
    button.addEventListener('click', function () {
        popUpEditLocation.classList.add("act")
        boxShadow.classList.add("act");
    });
});
let locationDetailsInp = document.getElementById("locationDetailsInp")
let btnSubmitLocationDtls = document.getElementById("btnSubmitLocationDtls")
btnSubmitLocationDtls.addEventListener("click", function(e){
    e.preventDefault()
})

// Google Maps
let input = document.getElementById('locationTitleInput');
let btnSearchLatLngMap = document.getElementById("btnSearchLatLngMap");
function initMap() {
    const defaultLocation = { lat: 25.20410101451047, lng: 55.27160473088643 };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: defaultLocation,
        mapId: "a0aacfa50572dbb9"
    });

    marker = new google.maps.Marker({
        position: defaultLocation,
        map: map
    });

    geocoder = new google.maps.Geocoder();
    placesService = new google.maps.places.PlacesService(map);
    dropdown = document.getElementById('dropdownLocations');

    // Add event listener to input
    input.addEventListener('input', function () {
        const query = input.value.trim();
        if (query.length > 2) {
            if (isLatLng(query)) {
                btnSearchLatLngMap.classList.add('act');
                dropdown.innerHTML = '';
            } else {
                btnSearchLatLngMap.classList.remove('act');
                searchPlaces(query);
            }
        } else {
            dropdown.innerHTML = '';
            btnSearchLatLngMap.classList.remove('act');
        }
    });
    
    btnSearchLatLngMap.addEventListener('click', function (e) {
        e.preventDefault();
        if (btnSearchLatLngMap.classList.contains('act')) {
            const query = input.value;
            if (isLatLng(query)) {
                const [lat, lng] = query.split(',').map(coord => parseFloat(coord.trim()));
                const latLng = { lat: lat, lng: lng };
                map.setCenter(latLng);
                map.setZoom(14);
                marker.setPosition(latLng);

                geocoder.geocode({ location: latLng }, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK && results[0]) {
                        const formattedAddress = results[0].formatted_address;
                        let placeName = '';

                        const addressComponents = results[0].address_components;
                        for (let i = 0; i < addressComponents.length; i++) {
                            if (addressComponents[i].types.includes('establishment') ||
                                addressComponents[i].types.includes('point_of_interest')) {
                                placeName = addressComponents[i].long_name;
                                break;
                            }
                        }

                        if (!placeName) {
                            placeName = formattedAddress;
                        }

                        input.value = placeName;
                        locationDetailsInp.value = `${formattedAddress}`;

                        input.setAttribute('data-lat', lat);
                        input.setAttribute('data-lng', lng);
                        input.setAttribute('data-place-name', placeName);
                        input.setAttribute('data-formatted-address', formattedAddress);
                    } else {
                        console.log('No results found or geocoder failed');
                    }
                });
            }
        }
    });

    map.addListener('click', function (event) {
        const clickedLocation = event.latLng;
        const lat = clickedLocation.lat();
        const lng = clickedLocation.lng();

        marker.setPosition(clickedLocation);

        geocoder.geocode({ location: clickedLocation }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    let placeName = '';
                    const addressComponents = results[0].address_components;
                    for (let i = 0; i < addressComponents.length; i++) {
                        if (addressComponents[i].types.includes('establishment') ||
                            addressComponents[i].types.includes('point_of_interest')) {
                            placeName = addressComponents[i].long_name;
                            break;
                        }
                    }
                    if (!placeName) {
                        placeName = results[0].formatted_address;
                    }
                    input.value = placeName;
                    locationDetailsInp.value = `${results[0].formatted_address}`;

                    input.setAttribute('data-lat', lat);
                    input.setAttribute('data-lng', lng);
                    input.setAttribute('data-place-name', placeName);
                    input.setAttribute('data-formatted-address', results[0].formatted_address);

                    dropdown.innerHTML = '';
                } else {
                    console.log('No results found');
                }
            } else {
                console.log('Geocoder failed due to: ' + status);
            }
        });
    });
}
function isLatLng(query) {
    const latLngRegex = /^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/;
    return latLngRegex.test(query.trim());
}

function searchByLatLng(query) {
    const [lat, lng] = query.split(',').map(coord => parseFloat(coord.trim()));
    const latLng = { lat: lat, lng: lng };

    geocoder.geocode({ location: latLng }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK && results[0]) {
            populateDropdown(results);
        } else {
            dropdown.innerHTML = '<div class="dropdown-loca-item">No results found</div>';
        }
    });
}

function searchPlaces(query) {
    const request = {
        query: query,
        fields: ['name', 'formatted_address', 'geometry', 'place_id'],
    };

    placesService.findPlaceFromQuery(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK && results.length) {
            populateDropdown(results);
        } else {
            dropdown.innerHTML = '<div class="dropdown-loca-item">No results found</div>';
        }
    });
}

function populateDropdown(places) {
    dropdown.innerHTML = '';

    places.forEach(place => {
        const item = document.createElement('div');
        item.classList.add('dropdown-item');
        const placeDetails = `<span class="place-name">${place.name}</span> <span class="location-formated">${place.formatted_address}</span>`;
        item.innerHTML = placeDetails;

        item.addEventListener('click', function () {
            selectPlace(place);
        });
        dropdown.appendChild(item);
    });
}

function selectPlace(place) {
    const location = place.geometry.location;
    const lat = location.lat();
    const lng = location.lng();
    marker.setPosition(location);
    map.setCenter(location);
    map.setZoom(14);
    input.value = place.name || place.formatted_address;
    locationDetailsInp.value = `${place.name}, ${place.formatted_address}`;
    input.setAttribute('data-lat', lat);
    input.setAttribute('data-lng', lng);
    input.setAttribute('data-place-name', place.name);
    input.setAttribute('data-formatted-address', place.formatted_address);
    dropdown.innerHTML = '';
}
function isLatLng(query) {
    const latLngRegex = /^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/;
    return latLngRegex.test(query.trim());
}
window.initMap = initMap;
