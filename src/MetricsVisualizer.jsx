import React from 'react';
import ColumnChart from './ColumnChart';
const metricsModule = require('./metrics');
const queryTimes = metricsModule.queryTimes;

const MetricsVisualizer = (props) => {
  
    return (
      <div>
      <div className='query-speed-box'>
          <button>Save As Comparison</button>
          <h4>Query Response Time</h4>
          <p>20<span className='milliseconds-display'>ms</span></p>
      </div>
      <ColumnChart />
      </div>
    )
}

export default MetricsVisualizer;