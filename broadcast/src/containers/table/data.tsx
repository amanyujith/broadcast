import { Table } from './table';

export const Data = () => {
  const heading = [
    'Parameter', 'Historical Weightage(%)', 'Last Month Weightage(%)', 'Total Weightage(%)', 'Formula', 
    'Historical Performed', 'Historical Actual', 'Performed', 'Actual', 'History Total' ,'Total','Weightage',
  ];

  const data = [
    {
      Parameter: "Attendance Rate",
      "HistoricalWeightage(%)": "20",
      "LastMonthWeightage(%)": "10",
      "TotalWeightage(%)": "30",
      Formula: "(Days_Present / Total_Working_Days) * 30",
      HistoricalPerformed:"",
      HistoricalActual:"212",
      Performed:"",
      Actual:"20",
      

    },
    {
        Parameter: "Punctuality",
        "HistoricalWeightage(%)": "7",
        "LastMonthWeightage(%)": "3",
        "TotalWeightage(%)": "10",
        Formula: "(Days_On_Time / Total_Working_Days) * 10",
        HistoricalPerformed:"",
        HistoricalActual:"212",
        Performed:"",
        Actual:"20",
        
      },
      {
        Parameter: "Leave Utilization",
        "HistoricalWeightage(%)": "6",
        "LastMonthWeightage(%)": "4",
        "TotalWeightage(%)": "10",
        Formula: "(Approved_Leave_Taken / Leave_Entitlement) * 10",
        HistoricalPerformed:"",
        HistoricalActual:"20",
        Performed:"",
        Actual:"2",
      },
      {
        Parameter: "Leave Balance",
        "HistoricalWeightage(%)": "3",
        "LastMonthWeightage(%)": "2",
        "TotalWeightage(%)": "5",
        Formula: "(Remaining_Leave / Total_Leave_Entitlement) * 5",
        HistoricalPerformed:"",
        HistoricalActual:"10",
        Performed:"",
        Actual:"1",
      },
      {
        Parameter: "Unapproved Absences",
        "HistoricalWeightage(%)": "10",
        "LastMonthWeightage(%)": "5",
        "TotalWeightage(%)": "15",
        Formula: "(-Unapproved_Absence_Days * 15)",
        HistoricalPerformed:"",
        HistoricalActual:"0",
        Performed:"",
        Actual:"0",
      },
      {
        Parameter: "Leave Trends",
        "HistoricalWeightage(%)": "4",
        "LastMonthWeightage(%)": "3",
        "TotalWeightage(%)": "7",
        Formula: "(-Excessive_Weekend_Leaves * 7)",
        HistoricalPerformed:"",
        HistoricalActual:"0",
        Performed:"",
        Actual:"0",
      },
      {
        Parameter: "Work Schedule Adherence on Critical Days",
        "HistoricalWeightage(%)": "4",
        "LastMonthWeightage(%)": "2",
        "TotalWeightage(%)": "6",
        Formula: "(-Unapproved leave on critical days) * 6",
        HistoricalPerformed:"",
        HistoricalActual:"0",
        Performed:"",
        Actual:"0",
      },
      {
        Parameter: "Absence with Prior Notice",
        "HistoricalWeightage(%)": "4",
        "LastMonthWeightage(%)": "2",
        "TotalWeightage(%)": "6",
        Formula: "(Leaves with Prior Notice / Total Leaves) * 6",
        HistoricalPerformed:"",
        HistoricalActual:"",
        Performed:"",
        Actual:"",
      },
      {
        Parameter: "Person Responsible for Others Absence",
        "HistoricalWeightage(%)": "5",
        "LastMonthWeightage(%)": "3",
        "TotalWeightage(%)": "8",
        Formula: "(Handled_Absences / Total_Working_Days) * 8",
        HistoricalPerformed:"",
        HistoricalActual:"",
        Performed:"",
        Actual:"",
      },
      {
        Parameter:"Total",
        "HistoricalWeightage(%)":"",
        "LastMonthWeightage(%)": "",
        "TotalWeightage(%)": "",
      },
      {
        Parameter:"Percentage"
      },
      {
        Parameter:"Score"
      }
      
      
  ];

  return (
    <div className=''>
      <Table heading={heading} data={data} />
    </div>
  );
};