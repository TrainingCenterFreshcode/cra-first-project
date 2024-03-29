import { useState, useEffect } from 'react';

/*

1. Компонента йде за даними
2. Компонента отримує дані і кладе їх в стейт
3. Компонента ділиться даними з кимось іншим, хто знає як треба відобразити ці дані

*/

const useData = (loadData) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => { // componentDidMount
        loadData()
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return {data, isLoading, error};
}


export default useData;


/* Правила хуків.

1. Хук - JS функція (не клас!)
2. Ім'я хуку має починатися з "use".
3. У хуках ми можемо використовувати інші хуки.

*/
