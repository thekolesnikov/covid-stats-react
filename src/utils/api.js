const API_URL = 'https://covid-api.com/api/';

export async function fetchTotalStats(date, setIsLoading) {
    setIsLoading(true);
    try {
        const res = await fetch(API_URL + 'reports/total?date=' + date);
        const data = await res.json();
        return data;
    } catch (error) {
        setIsLoading(false);
        throw new Error('Oops :( Something goes wrong!');
    }
}
