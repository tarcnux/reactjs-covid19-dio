import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { memo } from "react";
import Api from '../../api'
import { ContainerStyled } from "./style";

function Main() {
    const [data, setData] = useState({});
    const [country, setCountry] = useState('brazil');

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
        .then(data => setData(data));
    }, []);

    useEffect(() => {
        getCovidData(country);
    }, [getCovidData, country]);

    return (
        <ContainerStyled>
            <div className="mb-2">

            </div>
        </ContainerStyled>
    )
}

export default memo(Main);