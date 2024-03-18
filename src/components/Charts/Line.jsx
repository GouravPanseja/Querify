import { LineChart } from "@mui/x-charts";

export default function Line({form, que, idx,chartData}){

    return(
        <LineChart
            xAxis={[
                {
                    id:"options",
                    data:form?.data[que]?.options,
                    scaleType:"band"
                }
            ]}

            series={[
                {
                    data: chartData[que],

                }   
            ]}
            height={500}
            width={800}
        />
    )
}