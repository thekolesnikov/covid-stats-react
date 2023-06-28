const API_URL = 'https://covid-api.com/api/';

export async function fetchTotalStats(date, region, setIsLoading) {
    setIsLoading(true);
    try {
        let res;
        if (region === 'all') {
            res = await fetch(API_URL + 'reports/total?date=' + date);
        } else {
            res = await fetch(
                API_URL + 'reports/total?date=' + date + '&iso=' + region
            );
        }
        const data = await res.json();
        return data;
    } catch (error) {
        setIsLoading(false);
        throw new Error('Oops :( Something goes wrong!');
    }
}

export async function fetchRegionsList(setRegionList) {
    try {
        const res = await fetch(API_URL + 'regions');
        const data = await res.json();
        setRegionList(data);
    } catch (error) {
        throw new Error('Oops :( Something goes wrong!');
    }
}
