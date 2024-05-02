function Table({columns, data}) {

  // ** render columns of table
  const renderColumns = columns.length > 0 ? columns.map((ele, index) => 
    <th key={index}>
      {ele.name}
    </th>
  ) : null

  // ** render data of table
  const renderData = data?.length > 0 ? data.map(ele => 
    <tr key={ele._id}>
      {columns.length > 0 ? columns.map((column, index) =>
        column.returnValue ? <td key={index}>{column.returnValue(ele[column.value])}</td> : <td key={index}>{ele[column.value]}</td> 
      ): null}
    </tr>
  ) : null 

  return (
    <table>
      <thead>
        <tr>
          {renderColumns}
        </tr>
      </thead>
      <tbody>
        {renderData}
      </tbody>
    </table>
  )
}

export default Table;