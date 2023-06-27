import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { DateRange } from '@mui/x-date-pickers-pro';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { useSearchParams, useParams } from 'react-router-dom';
import { fetchTotalStats } from '../../utils/api';
import { IStatByDate } from '../../types/types';

type Props = {
    setTotalStats: ([]: IStatByDate[]) => void;
    setIsLoading: (isLoading: boolean) => void;
};

export const DatesPicker = ({ setTotalStats, setIsLoading }: Props) => {
    const [dateRange, setDateRange] = useState<DateRange<Dayjs>>([
        dayjs(''),
        dayjs(''),
    ]);

    const [isVisible, setIsVisible] = useState(true);

    const getDatesBetween = (startDate: Date, endDate: Date) => {
        let dates = [];
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    };

    const [params, setParams] = useSearchParams();

    const location = useLocation();

    useEffect(() => {
        if (location.search) {
            const startDate: any = new URLSearchParams(location.search).get(
                'dataFrom'
            );
            const endDate: any = new URLSearchParams(location.search).get(
                'dataTo'
            );
            setDateRange([dayjs(startDate), dayjs(endDate)]);
            setIsVisible(false);
            fetchDates(startDate, endDate);
        }
    }, []);

    function fetchDates(startDate: string, endDate: string) {
        const result = getDatesBetween(new Date(startDate), new Date(endDate));
        const resultArr = result.map((date) => {
            const dateFormat = dayjs(date).format('YYYY-MM-DD');
            return fetchTotalStats(dateFormat, setIsLoading);
        });
        Promise.all(resultArr).then((res) => {
            setIsLoading(false);
            setTotalStats(res);
        });
    }

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker
                    value={dateRange}
                    disableFuture
                    onChange={(newValue) => {
                        setDateRange(newValue);
                        setIsVisible(false);
                        if (newValue[0] && newValue[1]) {
                            setParams({
                                dataFrom: newValue[0]?.format('YYYY-MM-DD'),
                                dataTo: newValue[1]?.format('YYYY-MM-DD'),
                            });
                            const startDate = newValue[0]
                                ? newValue[0].format('YYYY-MM-DD')
                                : '';
                            const endDate = newValue[1]
                                ? newValue[1].format('YYYY-MM-DD')
                                : '';
                            fetchDates(startDate, endDate);
                        }
                    }}
                />
            </LocalizationProvider>
            {isVisible && (
                <div className="date_red">Please, choose a date period</div>
            )}
        </div>
    );
};
