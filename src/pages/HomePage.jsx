import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ALL_COUNTRIES } from "../config";

import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";

export const HomePage = ({ setCountries, countries }) => {
  let navigate = useNavigate();
  const [filtredCountries, setFiltredCountries] = useState(countries);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltredCountries(data);
  };

  const countriesFetch = useCallback(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, [setCountries]);

  useEffect(() => {
    countriesFetch();
  }, [setCountries, countriesFetch]);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filtredCountries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };

          return (
            <Card
              key={c.name}
              onClick={() => navigate(`country/${c.name}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};
