import { useState,useEffect } from "react";
interface TableProps {
  heading: string[];
  data: Record<string, string | number | undefined>[]; 
}
import '../../App.css'
import { useDispatch } from "react-redux";
import { setScore } from "@/redux/slices/score/scoreSlice";
export const Table: React.FC<TableProps> = ({ heading, data }) => {
  const dispatch = useDispatch();
    const disableStatus = [
        {key: 'Parameter' , title:'Parameter' , disabled:true},
        { key: 'HistoricalWeightage', title: 'Historical Weightage', disabled: false },
        { key: 'LastMonthWeightage', title: 'Last Month Weightage', disabled: false },
        { key: 'TotalWeightage(%)', title: 'TotalWeightage(%)', disabled: true },
        { key: 'HistoricalPerformed', title: 'Historical Performed', disabled: false },
        { key: 'HistoricalActual', title: 'Historical Actual', disabled: false },
        {key:'Formula' , title:'Formula' , disabled:true},
        { key: 'Performed', title: 'Performed', disabled: false },
        { key: 'Actual', title: 'Actual', disabled: false },
        {key: 'Total', title:'Total', disabled:true},
        {key: 'HistoryTotal', title:'HistoryTotal', disabled:true},
        {key: 'Weightage', title:'Weightage', disabled:true}
      ];  
  const [tableData, setTableData] = useState(data);
  const [weightageSums, setWeightageSums] = useState({
    historicalSum: 0,
    lastMonthSum: 0,
    totalWeightage: 0,
  });
  useEffect(()=>{
    //Historical,Lastmonth,Total - Weightage
    const historicalSum = tableData.reduce((total,row)=>{
    const weightage= parseFloat(row["HistoricalWeightage(%)"] as string ) || 0;
    return total+weightage;
    },0)
    const lastMonthSum = tableData.reduce((total, row) => {
        const weightage = parseFloat(row["LastMonthWeightage(%)"] as string) || 0;
        return total + weightage;
      }, 0);
    
      const totalWeightage = tableData.reduce((total, row) => {
        const weightage = parseFloat(row["TotalWeightage(%)"] as string) || 0;
        return total + weightage;
      }, 0);
      setWeightageSums({
        historicalSum,
        lastMonthSum,
        totalWeightage
      })    
  },[tableData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, rowIndex: number, fieldName: string) => {
    const { value } = e.target;
    console.log('value',value);
    const actualValue = Number(tableData[rowIndex].Actual);
    const historyValue = Number(tableData[rowIndex].HistoricalActual);
    if (
      // (fieldName === 'Performed' && value.length > actualLength) 
      // (fieldName === 'HistoricalPerformed' && value.length > historicalActualLength)
      (fieldName === 'Performed' && +value > actualValue) ||
      (fieldName === 'HistoricalPerformed' && +value > historyValue)
    ) {
      return; 
    }
    const updatedData = tableData.map((row, index) =>
      index === rowIndex ? { ...row, [fieldName]: value } : row
    );
    setTableData(updatedData);
  };
  const calculateValues = (row: any) => {
    const actual = parseFloat(row.Actual) ;
    const historicalActual = parseFloat(row.HistoricalActual) ;

    const performed = parseFloat(row.Performed) || 0;
    const historicalPerformed = parseFloat(row.HistoricalPerformed) || 0;

  //   const performed = Math.min(parseFloat(row.Performed) || 0, actual);
  // const historicalPerformed = Math.min(parseFloat(row.HistoricalPerformed) || 0, historicalActual);

    const lastMonthWeightage = row["LastMonthWeightage(%)"];
    const historicalWeightage = row["HistoricalWeightage(%)"];
    
    //console
    console.log("per",performed);
    console.log("act",actual);
    console.log("last",lastMonthWeightage);
    // console.log(typeof(lastMonthWeightage));
        
    let total = lastMonthWeightage !== 0 ? (performed / actual ) * lastMonthWeightage : 0;
    if (Number.isNaN(total) || !Number.isFinite(total)) total = 0;  

    let historyTotal = historicalWeightage !== 0 ? (historicalPerformed / historicalActual ) * historicalWeightage : 0;
    if (Number.isNaN(historyTotal) || !Number.isFinite(historyTotal)) historyTotal = 0;

    let weightage = total + historyTotal;
    if (Number.isNaN(weightage) || !Number.isFinite(weightage)) weightage = 0;
    // console.log("tot", total);
    // console.log("his",historyTotal);
    // console.log("weight",weightage);
    
    return { total, historyTotal, weightage };
  };
  
  const isFieldDisabled = (fieldName: string): boolean => {
    const field = disableStatus.find(item => item.key === fieldName);
    return field ? field.disabled : false;
  };
  const calculateInputSize = (value: string) => {
    const baseSize = 10; 
    const length = value.length > baseSize ? value.length : baseSize;
    return length; 
};
  return (
    <div className="pt-[80px]">
      
    <table className="min-w-full bg-white border border-none border-collapse p-5">
      <thead className="bg-red-50 hover:bg-yellow-50">
        <tr className="">
          {heading.map((header, index) => (
            <th key={index} className="border border-black font-sans">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {tableData.map((row, rowIndex) => {
          const { total, historyTotal, weightage } = calculateValues(row);
          const isTotalRow  = row.Parameter ==="Total";
          const ispercentageRow = row.Parameter ==="Percentage"
          const isScoreRow = row.Parameter === "Score"
        //   console.log("tot", total);
        //   console.log("his",historyTotal);
        //   console.log("weight",weightage);
let totalSum = 0;
let historyTotalSum = 0;
let weightageSum = 0;
//
let historyPercentage=0;
let totalPercentage = 0;
let weightagePercentage = 0;
let score= 0 ;
tableData.forEach((row) => {
    const { total, historyTotal, weightage } = calculateValues(row);
    //sum of HistoryTotal,Total,Weightage
    totalSum += total;
    historyTotalSum += historyTotal;
    weightageSum += weightage;
    //percentage
    historyPercentage = historyTotalSum/weightageSums.historicalSum * 100;
    totalPercentage = totalSum/weightageSums.lastMonthSum *100;
    weightagePercentage = weightageSum / weightageSums.totalWeightage*100
    //score
    score=600+weightagePercentage*4;
    dispatch(setScore(score));
    console.log("typeofScore",typeof(score));
    
});

console.log("totalSum",totalSum);
          // <Profile score={score.toString()}/>
          return (
            <tr key={rowIndex} className="bg-gray-100">
              {heading.map((header, colIndex) => {
                const fieldName = header.replace(/\s+/g, ''); 
               
                const inputValue = isTotalRow && fieldName === 'HistoricalWeightage(%)'
                ? weightageSums.historicalSum
                : isTotalRow && fieldName === 'LastMonthWeightage(%)'
                ? weightageSums.lastMonthSum
                : isTotalRow && fieldName === 'TotalWeightage(%)'
                ? weightageSums.totalWeightage

                :isTotalRow && fieldName === 'HistoryTotal'
                ?historyTotalSum.toFixed(2)
                :isTotalRow && fieldName === 'Total'
                ?totalSum.toFixed(2)
                :isTotalRow && fieldName === 'Weightage'
                ?weightageSum.toFixed(2)

                :ispercentageRow && fieldName ==='HistoryTotal'
                ?historyPercentage.toFixed(2)
                :ispercentageRow && fieldName ==='Total'
                ?totalPercentage.toFixed(2)
                :ispercentageRow && fieldName ==='Weightage'
                ?weightagePercentage.toFixed(2)

                :isScoreRow && fieldName ==='Weightage' 
                ?score.toFixed(2)
                :row.Parameter === "Score" && fieldName !== 'Parameter' && fieldName !== 'Weightage' 
                ?""

                : fieldName === 'Total'
                ? (total === 0 ? total : total.toFixed(2))
                : fieldName === 'HistoryTotal'
                ? (historyTotal === 0 ? historyTotal : historyTotal.toFixed(2))
                : fieldName === 'Weightage'
                ? (weightage === 0 ? weightage : weightage.toFixed(2))

                : (row[fieldName] as string);
                 
                  console.log("inp",inputValue);
               
                return (
                    
                  <td
                  key={colIndex}
                  className={`border border-black p-0 bg-[#fdfdfd] ${isFieldDisabled(fieldName) ? 'bg-slate-100' : 'bg-[#ffffff]'}`}
                  style={{ minWidth: `${calculateInputSize(String(inputValue))}ch` }} 
                >
                    <input
                      type="text"
                      disabled={isFieldDisabled(fieldName) }
                      value={inputValue}
                      onChange={(e) => handleInputChange(e, rowIndex, fieldName)}
                      className={`w-full  p-1 hover:bg-green-50 ${isFieldDisabled(fieldName) ? 'bg-slate-100' : 'bg-[#ffffff]'}   outline-none outline-offset-0 relative z-0 focus:outline-blue-500 focus:outline-offset-0 focus:z-10 `}
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};

