const Report = require('fluentreports').Report

// Our Simple Data in Object format:
const data = [
    {name: 'Elijah', age: 18}, 
    {name: 'Abraham', age: 22}, 
    {name: 'Gavin', age: 28}
];
  
// Create a Report  
const rpt = new Report("Report.pdf")        
      .pageHeader( ["Employee Ages hamada"] )      // Add a simple (optional) page Header...        
      .data( data )	 			 	      // Add some Data (This is required)
      .detail( [['name', 200],['age', 200]]) // Layout the report in a Grid of 200px & 50px
      .render();  				          // Render the Report (required if you want output...)