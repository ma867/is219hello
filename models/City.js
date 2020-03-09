class City {
    constructor(city,city_ascii,lat,lng,country,iso2,iso3,admin_name,capital,population,id) {
        this.id = id;
        this.city = city;
        this.city_ascii = city_ascii;
        this.lat = lat;
        this.lng = lng;
        this.iso2 = iso2;
        this.iso3 = iso3;
        this.capital = capital;
        this.admin_name = admin_name;

    }

    /*static createCity(city,city_ascii,lat,lng,country,iso2,iso3,admin_name,capital,population,id){
        return new City(city,city_ascii,lat,lng,country,iso2,iso3,admin_name,capital,population,id);
    }*/

    static createCity(cityArray){
        return new City(cityArray[0],cityArray[1],cityArray[2],cityArray[3],cityArray[4],cityArray[5],cityArray[6],cityArray[7], cityArray[8]);
  }
}
module.exports = City;