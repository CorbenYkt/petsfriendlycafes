
# Pets Friendly Cafe's
![petsfriendlycafes](https://corbenykt.github.io/petsfriendlycafes/Logo.png)<br>

Looking for a place to eat deliciously, but want to take your pet with you? Open this page and within a radius of 500m you will see what options are nearby.<br>

This project uses the Google Maps JavaScript API. To find the nearest cafes, the Places library is used, searchNearby https://developers.google.com/maps/documentation/places/web-service/search-nearby

## Code

```javascript
const { Place, SearchNearbyRankPreference } = await google.maps.importLibrary(
            "places",
        );
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        let center = new google.maps.LatLng(userLocation.lat, userLocation.lng);
        const request = {
            fields: ["id", "photos", "rating", "displayName", "editorialSummary", "location", "businessStatus", "allowsDogs", "nationalPhoneNumber", "hasWiFi"],
            locationRestriction: {
                center: center,
                radius: 500,
            },
            includedPrimaryTypes: ["american_restaurant", "bakery", "bar", "barbecue_restaurant", "brazilian_restaurant", "breakfast_restaurant", "brunch_restaurant", "cafe", "chinese_restaurant", "coffee_shop", "fast_food_restaurant", "french_restaurant", "greek_restaurant", "hamburger_restaurant", "ice_cream_shop", "indian_restaurant", "indonesian_restaurant", "italian_restaurant", "japanese_restaurant", "korean_restaurant", "lebanese_restaurant", "meal_delivery", "meal_takeaway", "mediterranean_restaurant", "mexican_restaurant", "middle_eastern_restaurant", "pizza_restaurant", "ramen_restaurant", "restaurant", "sandwich_shop", "seafood_restaurant", "spanish_restaurant", "steak_house", "sushi_restaurant", "thai_restaurant", "turkish_restaurant", "vegan_restaurant", "vegetarian_restaurant", "vietnamese_restaurant",
            ],
            maxResultCount: 10,
            rankPreference: SearchNearbyRankPreference.POPULARITY,
            language: "en-US",
            region: "nz",
        };
        const { places } = await Place.searchNearby(request);
```


<a href='https://corbenykt.github.io/petsfriendlycafes'>Goto Pets Friendly Cafes page</a>