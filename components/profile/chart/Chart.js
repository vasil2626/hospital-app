import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { conf } from "./config"


ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {


    return (
        <div className="chart">
            <Pie
                data={conf}
                
            />
        </div>
    );
}

export default Chart