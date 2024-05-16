"use client";
import * as React from 'react';
import TableComponent from './table-component';
import TableRaw from './table-raw';
import TableSc from './table-sc';
import TableMuiV5 from './table-mui-v5';
import TableMuiV4 from './table-mui-v4';
import TablePigment from './table-pigment';

const componentMap = {
  component: TableComponent,
  raw: TableRaw,
  sc: TableSc,
  'mui-v4': TableMuiV4,
  'mui-v5': TableMuiV5,
  pigment: TablePigment,
}

export default function Home() {
  const [child, setState] = React.useState<string | null>(null);

  return (
    <div>
      Render
      <button onClick={() => setState('raw')}>
        Raw
      </button>
      <button onClick={() => setState('component')}>
        Component
      </button>
      <button onClick={() => setState('sc')}>
        Styled-components
      </button>
      <button onClick={() => setState('mui-v4')}>
        Material UI v4
      </button>
      <button onClick={() => setState('mui-v5')}>
        Material UI v5
      </button>
      <button onClick={() => setState('pigment')}>
        Pigment
      </button>
      {child !== null ? React.createElement(componentMap[child]) : null}
    </div>
  );
}
