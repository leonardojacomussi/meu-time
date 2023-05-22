import { FC, HTMLAttributes } from "react";
import { Container, Chart, Title } from "./styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as TitleJS,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useTheme, DefaultTheme } from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  TitleJS,
  Tooltip,
  Legend
);

interface BarChartProps extends HTMLAttributes<HTMLDivElement> {
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

const BarChart: FC<BarChartProps> = ({ title, labels, datasets, ...props }): JSX.Element => {
  const theme: DefaultTheme = useTheme();

  return (
    <Container {...props}>
      <Title>{title}</Title>
      <Chart>
        <Bar
          data-testid="canvas"
          data={{
            labels,
            datasets
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  color: theme.colors.gray[50],
                },
              },
              y: {
                grid: {
                  display: false,
                  color: theme.colors.gray[50],
                },
                ticks: {
                  color: theme.colors.gray[50],
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              }
            }
          }}
        />
      </Chart>
    </Container>
  );
};

export default BarChart;