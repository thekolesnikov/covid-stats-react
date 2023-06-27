const API_URL = 'https://covid-api.com/api/';

export async function fetchTotalStats(date) {
    const res = await fetch(API_URL + 'reports/total?date=' + date);
    const data = await res.json();
    return data;
    // console.log(data);
}
