  const myself ={ 
  details: function(city, country) {
    return this.person + " " + this.age  +"," + city + "," + country;
  }}
  const me = {
    person : "good",
    age : 1,
}
const me2 = {
    person : "bad",
    age : 1,
}
console.log(myself.details.call(me, "ktm", "Nepal"));   //calls details method of myself using it of me ,  takes method seperately
console.log(myself.details.apply(me2, ["ktm", "nepal"]));  //applys details method of myself using it of me2, takes methood as array

//bind  : binds / borrows from other object like from man 2 
  const man ={ 
 person : "good",
    age : 1,
  details: function(city, country) {
    return this.person + " " + this.age  +"," + city + "," + country;
  }}
const man2 = {
    person : "bad",
    age : 1,
}
let details = man.details.bind(man2, "kath", "Nep");
console.log(details())