import { BarChart } from "@mui/x-charts";

export default function Bar({form, que, idx,chartData}){

    return(
        <BarChart
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