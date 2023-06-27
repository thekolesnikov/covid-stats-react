import { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { DateRange } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { fetchTotalStats } from '../../utils/api';
import CaseSelect from '../../components/CaseSelect/CaseSelect';
import { Chart } from '../../components/Chart/Chart';
import { IStatByDate } from '../../types/types';

function Stats() {
    const [totalStats, setTotalStats] = useState<IStatByDate[]>([]);
    console.log(totalStats);

    const [dateRange, setDateRange] = useState<DateRange<Dayjs>>([
        dayjs(''),
        dayjs(''),
    ]);

    const [params, setParams] = useSearchParams();

    //Days between
    const getDatesBetween = (startDate: Date, endDate: Date) => {
        let dates = [];
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    };

    useEffect(() => {
        // const result = getDatesBetween(
        //     new Date(dateRange[0] ? dateRange[0].format('YYYY-MM-DD') : ''),
        //     new Date(dateRange[1] ? dateRange[1].format('YYYY-MM-DD') : '')
        // );
        // const resultArr = result.map((date) => {
        //     const dateFormat = dayjs(date).format('YYYY-MM-DD');
        //     return fetchTotalStats(dateFormat);
        // });
        // Promise.all(resultArr).then((res) => res);
    });

    return (
        <>
            <div className="flex">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateRangePicker
                        value={dateRange}
                        onChange={(newValue) => {
                            setDateRange(newValue);
                            if (newValue[0] && newValue[1]) {
                                setParams({
                                    dataFrom: newValue[0]?.format('YYYY-MM-DD'),
                                    dataTo: newValue[1]?.format('YYYY-MM-DD'),
                                });
                                const result = getDatesBetween(
                                    new Date(
                                        newValue[0]
                                            ? newValue[0].format('YYYY-MM-DD')
                                            : ''
                                    ),
                                    new Date(
                                        newValue[1]
                                            ? newValue[1].format('YYYY-MM-DD')
                                            : ''
                                    )
                                );
                                const resultArr = result.map((date) => {
                                    const dateFormat =
                                        dayjs(date).format('YYYY-MM-DD');
                                    return fetchTotalStats(dateFormat);
                                });
                                Promise.all(resultArr).then((res) =>
                                    setTotalStats(res)
                                );
                            }
                        }}
                    />
                </LocalizationProvider>
                <CaseSelect />
            </div>
            <Chart totalStats={totalStats} />
        </>
    );
}

export default Stats;
