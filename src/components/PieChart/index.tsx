import { FC, HTMLAttributes } from "react";
import { Container, Chart, Title } from "./styles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useTheme, DefaultTheme } from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  labels: Array<string>;
  datasets: Array<{
    label: string;
    data: Array<number|null>;
    backgroundColor?: Array<string>;
    borderColor?: Array<string>;
    borderWidth?: number;
    hoverOffset?: number;
    [key: string]: any;
  }>;
  [key: string]: any;
};

const PieChart: FC<PieChartProps> = ({ title, labels, datasets, ...props }): JSX.Element => {
  const theme: DefaultTheme = useTheme();

  return (
    <Container {...props}>
      <Title>{title}</Title>
      <Chart>
        <Pie
          data-testid="canvas"
          data={{
            labels,
            datasets
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  boxWidth: 10,
                  boxHeight: 10,
                  color: theme.colors.gray[50],
                }
              },
              tooltip: {
                callbacks: {
                  label: (context: any) => {
                    const label: string = context.label || "";
                    const value: number = context.raw || 0;
                    return `${value}%`;
                  }
                }
              }
            }
          }}
        />
      </Chart>
    </Container>
  );
};

export default PieChart;