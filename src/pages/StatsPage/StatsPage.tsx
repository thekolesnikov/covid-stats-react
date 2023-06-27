import { useState } from 'react';
import { DatesPicker } from '../../components/DatesPicker/DatesPicker';
import { BasicSelect } from '../../components/BasicSelect/BasicSelect';
import { Chart } from '../../components/Chart/Chart';
import { Loader } from '../../components/Loader/Loader';
import { IStatByDate } from '../../types/types';

function StatsPage() {
    const [totalStats, setTotalStats] = useState<IStatByDate[]>([]);
    const [filter, setFilter] = useState('confirmed_diff');
    const [isLoading, setIsLoading] = useState(false);
    console.log(totalStats);

    return (
        <>
            <div className="flex">
                <DatesPicker
                    setTotalStats={setTotalStats}
                    setIsLoading={setIsLoading}
                />
                <BasicSelect filter={filter} setFilter={setFilter} />
            </div>
            {isLoading && <Loader />}
            {totalStats.length > 0 && (
                <Chart totalStats={totalStats} filter={filter} />
            )}
        </>
    );
}

export default StatsPage;
