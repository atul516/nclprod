import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

const ExplosiveConsumptionForm = () => {

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : {
      bulkExplosive: {
        coal: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
        obr: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
      },
      castBooster: {
        emulsion: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
        petn: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
      },
      detonators: {
        ced1_8M: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
        fuse: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
        cordRelay: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
        shockTube: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
        eDetFactorySet: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
        eDetProgrammable: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
        msConnector: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
      },
    };
  });

  const [monthlySupplyFig, setMonthlySupplyFig] = useState(() => {
    const savedSupplyFig = localStorage.getItem('monthlySupplyFig');
    return savedSupplyFig ? parseFloat(savedSupplyFig) : 0; // default value
  });

  const [area, setArea] = useState(() => {
    const savedArea = localStorage.getItem('area');
    return savedArea ? parseInt(savedArea, 10) : 6002; // default value
  });

  useEffect(() => {
    // Save formData and monthlySupplyFig to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    localStorage.setItem('monthlySupplyFig', monthlySupplyFig.toString());
    localStorage.setItem('area', area.toString()); // Save area to localStorage
  }, [formData, monthlySupplyFig, area]);

  const handleAreaChange = (e) => {
    const selectedArea = parseInt(e.target.value, 10);
    setArea(selectedArea); // Update area state
  };

  const handleClearData = () => {
    setFormData({
      bulkExplosive: {
        coal: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
        obr: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
      },
      castBooster: {
        emulsion: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
        petn: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
      },
      detonators: {
        ced1_8M: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
        fuse: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
        cordRelay: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
        shockTube: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
        eDetFactorySet: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
        eDetProgrammable: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
        msConnector: { currentMonth: { coalAndOb: 0, otherDevWorks: 0 }, cyProgressive: { coalAndOb: 0, otherDevWorks: 0 }, lyProgressive: { coalAndOb: 0, otherDevWorks: 0 } },
      },
    });
    setMonthlySupplyFig(0);
    setArea(6002); // Reset area to default
    localStorage.removeItem('formData');
    localStorage.removeItem('monthlySupplyFig');
    localStorage.removeItem('area');
  };

  const handleChange = (e, category, item, timePeriod, field) => {
    const { name, value } = e.target;
    const updatedValue = parseFloat(value) || 0;

    setFormData((prevData) => {
      const newData = { ...prevData };
      newData[category][item][timePeriod][name] = updatedValue;
      const coalAndOb = newData[category][item][timePeriod].coalAndOb;
      const otherDevWorks = newData[category][item][timePeriod].otherDevWorks;
      newData[category][item][timePeriod].total = (coalAndOb + otherDevWorks).toFixed(5);
      return newData;
    });
  };

  const handleMonthlySupplyChange = (e) => {
    setMonthlySupplyFig(parseFloat(e.target.value) || 0);
  };

  const calculateBulkExplOnly = () => {
    return (
      formData.bulkExplosive.coal.currentMonth.coalAndOb + formData.bulkExplosive.obr.currentMonth.coalAndOb
    ).toFixed(5);
  };

  const calculateOnlyDevWorksBulkOnly = () => {
    return (
      formData.bulkExplosive.coal.currentMonth.otherDevWorks + formData.bulkExplosive.obr.currentMonth.otherDevWorks
    ).toFixed(5);
  };

  const calculateTotalCastBooster = () => {
    return (
      formData.castBooster.emulsion.currentMonth.coalAndOb +
      formData.castBooster.petn.currentMonth.coalAndOb
    ).toFixed(5);
  };

  const calculateTotExplIncludingDevAndCastBooster = () => {
    return (
      formData.bulkExplosive.coal.currentMonth.coalAndOb +
      formData.bulkExplosive.obr.currentMonth.coalAndOb +
      formData.bulkExplosive.coal.currentMonth.otherDevWorks +
      formData.bulkExplosive.obr.currentMonth.otherDevWorks +
      formData.castBooster.emulsion.currentMonth.coalAndOb +
      formData.castBooster.petn.currentMonth.coalAndOb +
      formData.castBooster.emulsion.currentMonth.otherDevWorks +
      formData.castBooster.petn.currentMonth.otherDevWorks
    ).toFixed(5);
  };

  const calculateCheck = () => {
    return parseFloat(calculateBulkExplOnly()) + parseFloat(calculateOnlyDevWorksBulkOnly()) - parseFloat(monthlySupplyFig);
  };

  const handleExportToXLSX = () => {
    const exportData = [];

    // Define the first row for headers: "Particulars" and "Details"
    const headersRow1 = [
      'Particulars', 'Details',
      'Current Month', 'Current Month', 'Current Month',
      'CY Progressive', 'CY Progressive', 'CY Progressive',
      'LY Progressive', 'LY Progressive', 'LY Progressive'
    ];

    // Define the second row for sub-headers: "CoalAndOb", "OtherDevWorks", "Total"
    const headersRow2 = [
      '', '', // Empty cells for the "Particulars" and "Details"
      'CoalAndOb', 'OtherDevWorks', 'Total',
      'CoalAndOb', 'OtherDevWorks', 'Total',
      'CoalAndOb', 'OtherDevWorks', 'Total'
    ];

    // Initialize the rows array for holding the data
    const rows = [];

    // Loop through categories and items to fill the data for export
    const categories = Object.keys(formData);
    categories.forEach((category) => {
      const items = Object.keys(formData[category]);

      items.forEach((item) => {
        // Create a new row for the item, with columns for all time periods
        const row = [
          category, // Particulars
          item, // Details
          // Current Month Data
          formData[category][item].currentMonth.coalAndOb,
          formData[category][item].currentMonth.otherDevWorks,
          formData[category][item].currentMonth.total,
          // CY Progressive Data
          formData[category][item].cyProgressive.coalAndOb,
          formData[category][item].cyProgressive.otherDevWorks,
          formData[category][item].cyProgressive.total,
          // LY Progressive Data
          formData[category][item].lyProgressive.coalAndOb,
          formData[category][item].lyProgressive.otherDevWorks,
          formData[category][item].lyProgressive.total
        ];

        // Push the row into the rows array
        rows.push(row);
      });
 
      // Add Total row after each section (category)
      if (category === 'bulkExplosive' || category === 'castBooster' || category === 'detonators') {
        const totals = calculateSectionTotals(category);
        rows.push([
          '',
          '',
          totals['currentMonth'].coalAndObTotal.toFixed(5),
          totals['currentMonth'].otherDevWorksTotal.toFixed(5),
          totals['currentMonth'].total.toFixed(5),
          totals['cyProgressive'].coalAndObTotal.toFixed(5),
          totals['cyProgressive'].otherDevWorksTotal.toFixed(5),
          totals['cyProgressive'].total.toFixed(5),
          totals['lyProgressive'].coalAndObTotal.toFixed(5),
          totals['lyProgressive'].otherDevWorksTotal.toFixed(5),
          totals['lyProgressive'].total.toFixed(5),
        ])
      }

    });

    rows.push([]);
    rows.push([]);
    rows.push(['TOT BULK EXPL ONLY (EXCLD DEV WORKS):',calculateBulkExplOnly()]);
    rows.push(['ONLY DEV WORKS BULK ONLY:', calculateOnlyDevWorksBulkOnly()]);
    rows.push(['TOTAL CAST BOOSTER(EXCLD DEV WORKS):', calculateTotalCastBooster()]);
    rows.push(['TOT EXPL (INCLD DEV AND CAST BOOSTER):', calculateTotExplIncludingDevAndCastBooster()]);
    rows.push(['MONTHLY SUPPLY FIG:', monthlySupplyFig]);
    rows.push(['CHECK:', calculateCheck()]);


    // Combine the headers and rows for the final data to be written to Excel
    const worksheetData = [headersRow1, headersRow2, ...rows];

    // Create the worksheet from the data
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    // Adjust column widths to make the Excel sheet more readable
    const colWidths = [
      { wpx: 120 }, // Particulars column
      { wpx: 120 }, // Details column
      { wpx: 80 }, // CoalAndOb columns
      { wpx: 80 }, // OtherDevWorks columns
      { wpx: 80 }, // Total columns
      { wpx: 80 }, // CoalAndOb columns
      { wpx: 80 }, // OtherDevWorks columns
      { wpx: 80 }, // Total columns
      { wpx: 80 }, // CoalAndOb columns
      { wpx: 80 }, // OtherDevWorks columns
      { wpx: 80 }, // Total columns
    ];

    worksheet['!cols'] = colWidths;

    // Merge header cells where needed for multi-row header structure
    worksheet['!merges'] = [
      { s: { r: 0, c: 2 }, e: { r: 0, c: 4 } }, // Merge "Current Month"
      { s: { r: 0, c: 5 }, e: { r: 0, c: 7 } }, // Merge "CY Progressive"
      { s: { r: 0, c: 8 }, e: { r: 0, c: 10 } }, // Merge "LY Progressive"
    ];

    // Create a workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Explosive Consumption');

    // Write the workbook to a file
    XLSX.writeFile(workbook, `${area}_B_Report_TR.xlsx`);
  };

  // Function to calculate totals for each section (bulkExplosive, castBooster, detonators)
  const calculateSectionTotals = (section) => {
    let totals = {
      currentMonth: {
        coalAndObTotal: 0,
        otherDevWorksTotal: 0,
        total: 0,
      },
      cyProgressive: {
        coalAndObTotal: 0,
        otherDevWorksTotal: 0,
        total: 0,
      },
      lyProgressive: {
        coalAndObTotal: 0,
        otherDevWorksTotal: 0,
        total: 0,
      },
    };

    const items = Object.keys(formData[section]);

    items.forEach((item) => {
      ['currentMonth', 'cyProgressive', 'lyProgressive'].forEach((timePeriod) => {
        totals[timePeriod]['coalAndObTotal'] += formData[section][item][timePeriod].coalAndOb;
        totals[timePeriod]['otherDevWorksTotal'] += formData[section][item][timePeriod].otherDevWorks;
        totals[timePeriod]['total'] += parseFloat(formData[section][item][timePeriod].total) || 0;
      });
    });

    return totals;
  };

  // Render rows including totals for each section
  const renderRows = () => {
    const categories = Object.keys(formData);
    const rows = [];

    categories.forEach((category) => {
      const items = Object.keys(formData[category]);

      items.forEach((item) => {
        rows.push(
          <tr key={`${category}-${item}`} className="text-gray-800">
            <td className="px-2 py-3 border-b">{category}</td>
            <td className="px-2 py-3 border-b">{item}</td>
            {['currentMonth', 'cyProgressive', 'lyProgressive'].map((timePeriod) => (
              <React.Fragment key={`${item}-${timePeriod}`}>
                {['coalAndOb', 'otherDevWorks'].map((field) => (
                  <td key={`${item}-${timePeriod}-${field}`} className="px-2 py-3 border-b">
                    <input
                      type="number"
                      name={field}
                      value={formData[category][item][timePeriod][field]}
                      onClick={(event) => event.target.select()} 
                      onFocus={(event) => event.target.select()} 
                      onChange={(e) => handleChange(e, category, item, timePeriod, field)}
                      step="0.00001"
                      min="0"
                      className="p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                    />
                  </td>
                ))}
                <td key={`${item}-${timePeriod}-total`} className="px-2 py-3 border-b font-semibold">
                  {formData[category][item][timePeriod].total}
                </td>
              </React.Fragment>
            ))}
          </tr>
        );
      });

      // Add Total row after each section (category)
      if (category === 'bulkExplosive' || category === 'castBooster' || category === 'detonators') {
        const totals = calculateSectionTotals(category);
        rows.push(
          <tr key={`${category}-total`} className="text-gray-800">
            <td className="px-2 py-3 border-b font-semibold" colSpan="2">Total {category}</td>
            {['currentMonth', 'cyProgressive', 'lyProgressive'].map((timePeriod) => (
              <>
                <td className="px-2 py-3 border-b">{totals[timePeriod].coalAndObTotal.toFixed(5)}</td >
                <td className="px-2 py-3 border-b">{totals[timePeriod].otherDevWorksTotal.toFixed(5)}</td>
                <td className="px-2 py-3 border-b">{totals[timePeriod].total.toFixed(5)}</td>
              </>
            ))}
          </tr>
        );
      }
    });

    return rows;
  };

  return (
    <div className="max-w-full mx-auto px-5 py-2 bg-white shadow-xl rounded-lg overflow-x-auto">
      <h2 className="text-4xl font-semibold text-center text-gray-900 mb-8">Explosive Consumption</h2>
      <span className="text-xl mb-8">Area:&nbsp;</span>
      <select
        value={area}
        onChange={handleAreaChange} // Handle area change
        className="text-xl mb-8"
      >
        <option value="6002">Block-B</option>
        <option value="6003">Jhingurda</option>
        <option value="6004">Nigahi</option>
        <option value="6005">Amlohri</option>
        <option value="6006">Jayant</option>
        <option value="6007">Kakri</option>
        <option value="6008">Khadia</option>
        <option value="6010">Krishnashila</option>
        <option value="6012">Dudhichua</option>
        <option value="6014">Bina</option>
      </select>

      <form className="space-y-6">
        <table className="min-w-full table-auto border-collapse bg-white shadow-sm rounded-md">
          <thead className="bg-blue-100 text-gray-600">
            <tr>
              <th className="px-2 py-4 text-left">Particulars</th>
              <th className="px-2 py-4 text-left">Details</th>
              <th colSpan="3" className="px-2 py-3 text-center">Current Month</th>
              <th colSpan="3" className="px-2 py-3 text-center">CY Progressive</th>
              <th colSpan="3" className="px-3 py-3 text-center">LY Progressive</th>
            </tr>
            <tr className="bg-blue-50">
              <th></th>
              <th></th>
              {['currentMonth', 'cyProgressive', 'lyProgressive'].map((timePeriod) => (
                <React.Fragment key={timePeriod}>
                  {['coalAndOb', 'otherDevWorks', 'total'].map((field) => (
                    <th key={`${timePeriod}-${field}`} className="px-4 py-3 text-center">{field}</th>
                  ))}
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
      <br />
      <div className="my-8 mx-auto">
        <div className="flex justify-between">
          <span>TOT BULK EXPL ONLY (EXCLD DEV WORKS):</span>
          <span>{calculateBulkExplOnly()}</span>
        </div>
        <div className="flex justify-between">
          <span>ONLY DEV WORKS BULK ONLY:</span>
          <span>{calculateOnlyDevWorksBulkOnly()}</span>
        </div>
        <div className="flex justify-between">
          <span>TOTAL CAST BOOSTER(EXCLD DEV WORKS):</span>
          <span>{calculateTotalCastBooster()}</span>
        </div>
        <div className="flex justify-between">
          <span>TOT EXPL (INCLD DEV AND CAST BOOSTER):</span>
          <span>{calculateTotExplIncludingDevAndCastBooster()}</span>
        </div>
        <div className="flex justify-between mt-4">
          <span>MONTHLY SUPPLY FIG:</span>
          <input
            type="number"
            value={monthlySupplyFig}
            onChange={handleMonthlySupplyChange}
            className="p-2 w-40 border rounded-md"
          />
        </div>
        <div className="flex justify-between mt-4 font-semibold">
          <span>Check:</span>
          <span>{calculateCheck()}</span>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handleClearData}
          className="px-5 py-3 text-lg bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Clear All Data
        </button>

        <button
          onClick={handleExportToXLSX}
          className="bg-green-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out"
        >
          Export to XLSX
        </button>
      </div>
    </div>
  );
};

export default ExplosiveConsumptionForm;
