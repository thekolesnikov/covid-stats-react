import { useState } from 'react';
import { DatesPicker } from '../../components/DatesPicker/DatesPicker';
import { CaseSelect } from '../../components/CaseSelect/CaseSelect';
import { RegionSelect } from '../../components/RegionSelect/RegionSelect';
import { Chart } from '../../components/Chart/Chart';
import { Loader } from '../../components/Loader/Loader';
import { IStatByDate } from '../../types/types';

function StatsPage() {
    const [totalStats, setTotalStats] = useState<IStatByDate[]>([]);
    const [filter, setFilter] = useState('confirmed_diff');
    const [isLoading, setIsLoading] = useState(false);
    const [region, setRegion] = useState('all');

    return (
        <>
            <div className="flex">
                <DatesPicker
                    setTotalStats={setTotalStats}
                    setIsLoading={setIsLoading}
                    region={region}
                    setRegion={setRegion}
                />
                <RegionSelect region={region} setRegion={setRegion} />
                <CaseSelect filter={filter} setFilter={setFilter} />
            </div>
            {isLoading && <Loader />}
            {totalStats.length > 0 && (
                <Chart totalStats={totalStats} filter={filter} />
            )}
        </>
    );
}

export default StatsPage;
