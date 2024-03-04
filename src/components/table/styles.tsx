import styled from '@emotion/styled';

import ITable from '@mui/material/Table';
import IBody from '@mui/material/TableBody';
import ITableContainer from '@mui/material/TableContainer';
import IHead from '@mui/material/TableHead';
import { grey, teal } from '@mui/material/colors';

const second = teal[100];
const primary = teal[500];
const description = grey[500];

export const Container = styled.div`
  width: 100%;
  .MuiPagination-ul {
    margin-top: 1rem;
    float: right;
  }
`;
export const TableContainer = styled(ITableContainer)`
  gap: 10px;
  background-color: rgb(255, 255, 255);
  color: rgb(33, 43, 54);
  box-shadow:
    rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
    rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  border-radius: 16px;
  align-items: center;

  td,
  th {
    .MuiSvgIcon-root {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: ${second};
      color: ${primary};
    }
  }

  th {
    font-weight: 700;
  }
  .description {
    color: ${description};
  }
`;
export const TableWrapper = styled(ITable)``;
export const Head = styled(IHead)``;
export const Body = styled(IBody)``;
