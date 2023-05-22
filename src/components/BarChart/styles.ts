import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
`;

export const Title = styled.h4<HTMLAttributes<HTMLHeadingElement>>`
  width: 100%;
  font-size: .1.8rem;
  margin-bottom: 1rem;
`;

export const Chart = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.gray[700]};
  border-radius: ${({ theme }) => theme.border.radius};
`;