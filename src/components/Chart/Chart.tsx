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
};

export const Chart = ({ totalStats }: Props) => {
    return (
        <ResponsiveContainer width="100%" height={600}>
            <LineChart
                width={500}
                height={300}
                data={totalStats}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                    type="number"
                    domain={[
                        Math.min(
                            totalStats[0]?.data.confirmed,
                            totalStats[totalStats.length - 1]?.data.confirmed
                        ),
                        Math.max(
                            totalStats[0]?.data.confirmed,
                            totalStats[totalStats.length - 1]?.data.confirmed
                        ),
                    ]}
                />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="data.confirmed"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
