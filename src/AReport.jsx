import React, { useState } from 'react';

const AReport = () => {
  const [data, setData] = useState({
    openCastDept: "",
    totalOBExcavatedDept: "",
    explosiveConsumedDept: "",
    pfOBRDept: "",
    openCastHired: "",
    totalOBExcavatedHired: "",
    explosiveConsumedHired: "",
    pfOBRHired: "",
    totalOBExcavatedTotal: "",
    explosiveConsumedTotal: "",
    pfOBRTotal: "",
    coalProducedBlasted: "",
    unblastedCoal: "",
    totalCoalProduced: "",
    explosiveConsumedCoal: "",
    pfCoal: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  return (
    <div className="ritz grid-container" dir="ltr">
      <table className="waffle" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th className="row-header freezebar-origin-ltr"></th>
            <th className="column-headers-background" style={{ width: "350px" }}>A</th>
            <th className="column-headers-background" style={{ width: "100px" }}>B</th>
            <th className="column-headers-background" style={{ width: "100px" }}>C</th>
            <th className="column-headers-background" style={{ width: "100px" }}>D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="row-headers-background">
              <div className="row-header-wrapper">1</div>
            </th>
            <td>TECHNOLOGY -WISE EXPLOSIVE CONSUMPTION</td>
            <td>Month</td>
            <td>Prog upto</td>
            <td>Last Year Prog</td>
          </tr>
          <tr>
            <th className="row-headers-background">
              <div className="row-header-wrapper">2</div>
            </th>
            <td>OPEN CAST - Departmental</td>
            <td><input type="text" name="openCastDept" value={data.openCastDept} onChange={handleChange} /></td>
            <td><input type="text" name="totalOBExcavatedDept" value={data.totalOBExcavatedDept} onChange={handleChange} /></td>
            <td><input type="text" name="explosiveConsumedDept" value={data.explosiveConsumedDept} onChange={handleChange} /></td>
          </tr>
          <tr>
            <th className="row-headers-background">
              <div className="row-header-wrapper">3</div>
            </th>
            <td>i) Total OB excavated (in ' lakh Cum.)</td>
            <td><input type="text" name="totalOBExcavatedDept" value={data.totalOBExcavatedDept} onChange={handleChange} /></td>
            <td><input type="text" name="explosiveConsumedDept" value={data.explosiveConsumedDept} onChange={handleChange} /></td>
            <td><input type="text" name="pfOBRDept" value={data.pfOBRDept} onChange={handleChange} /></td>
          </tr>
          <tr>
            <th className="row-headers-background">
              <div className="row-header-wrapper">4</div>
            </th>
            <td>Explosive consumed in (Tonnes)(CB included)</td>
            <td><input type="text" name="explosiveConsumedDept" value={data.explosiveConsumedDept} onChange={handleChange} /></td>
            <td><input type="text" name="pfOBRDept" value={data.pfOBRDept} onChange={handleChange} /></td>
            <td><input type="text" name="openCastHired" value={data.openCastHired} onChange={handleChange} /></td>
          </tr>
          <tr>
            <th className="row-headers-background">
              <div className="row-header-wrapper">5</div>
            </th>
            <td>PF for OBR in CUM Kg of explosive</td>
            <td>#DIV/0!</td>
            <td>#DIV/0!</td>
            <td>#DIV/0!</td>
          </tr>
          <tr>
            <th className="row-headers-background">
              <div className="row-header-wrapper">6</div>
            </th>
            <td>OB excavated without blasting (L.Cum]/RH+LOOSE</td>
            <td><input type="text" name="totalOBExcavatedDept" value={data.totalOBExcavatedDept} onChange={handleChange} /></td>
            <td><input type="text" name="explosiveConsumedDept" value={data.explosiveConsumedDept} onChange={handleChange} /></td>
            <td><input type="text" name="pfOBRDept" value={data.pfOBRDept} onChange={handleChange} /></td>
          </tr>
          <tr>
            <th className="row-headers-background">
              <div className="row-header-wrapper">7</div>
            </th>
            <td>Overall OBR including OB without blast (L.Cum)</td>
            <td><input type="text" name="totalOBExcavatedHired" value={data.totalOBExcavatedHired} onChange={handleChange} /></td>
            <td><input type="text" name="explosiveConsumedHired" value={data.explosiveConsumedHired} onChange={handleChange} /></td>
            <td><input type="text" name="pfOBRHired" value={data.pfOBRHired} onChange={handleChange} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AReport;
