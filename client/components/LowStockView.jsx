import React, {useState, useEffect} from 'react';
import {Typography} from '@mui/material';
import columnDefinitions from './columns.js';
import { DataGrid } from '@mui/x-data-grid';

function LowStockView () {
    const [data, setData] = useState([]);
    
    const getData = () => {
        fetch('/api/catalog/lowstock')
        .then(res => res.json())
        .then((tableElements) => {
          if (!Array.isArray(tableElements)) tableElements = [];
          setData(tableElements);
          })
        .catch(err => console.log('Table.componentDidMount: get tableElement: ERROR: ', err));
      }
    
      useEffect(() => {
        getData();
      }, [])

      const rows = [];
      const cutoff = 0.25;
      data.forEach((element, index) => {
        const target = element.max_stock;
        const inStock = element.quantity;
        const percent = inStock/target;
        if (percent < cutoff) {
            element.id = index + 1;
            element.percent = percent; 
            rows.push(element)};
        })

    return (
        <div>
        <Typography variant="h5">Running Low</Typography>
        <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columnDefinitions.expiration}
        />
      </div>
      </div>
        
    )
}

export default LowStockView;