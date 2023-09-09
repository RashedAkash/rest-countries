import './country.css'

const Country = ({ country }) => {
  const { name, population, flags, region, capital } = country;
  console.log(country);
  return (
    <div className="Country-container">
      <img className=' country-img' src={flags.png} alt="" />
      <h2> Country Name : {name.common} </h2>
      <h3> Capital : {capital} </h3>
      <h5> Region : {region} </h5>
      <h6> Population : {population} </h6>
    </div>
  );
};

export default Country;