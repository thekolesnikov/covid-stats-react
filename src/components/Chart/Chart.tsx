import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { IStatByDate } from '../../types/types';

type Props = {
    totalStats: IStatByDate[];
    filter: string;
};

export const Chart = ({ totalStats, filter }: Props) => {
    const filterDataKey = `data.${filter}`;

    return (
        <ResponsiveContainer width={800} height={600}>
            <LineChart
                width={500}
                height={300}
                data={totalStats}
                margin={{
                    top: 20,
                    right: 0,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="data.date" />
                <YAxis
                    type="number"
                    domain={[
                        Math.min(
                            +`totalStats[0]?.data.${filter}`,
                            +`totalStats[totalStats.length - 1]?.data.${filter}`
                            // totalStats[0]?.data.confirmed,
                            // totalStats[totalStats.length - 1]?.data.confirmed
                        ),
                        Math.max(
                            +`totalStats[0]?.data.${filter}`,
                            +`totalStats[totalStats.length - 1]?.data.${filter}`
                            // totalStats[0]?.data.confirmed,
                            // totalStats[totalStats.length - 1]?.data.confirmed
                        ),
                    ]}
                />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey={filterDataKey}
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
