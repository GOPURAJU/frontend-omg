import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ApiServices from "../Services/ApiServices";
import { useEffect, useState } from "react";
import './Listofinventory.css'

const columns = [
  { id: "name", label: "InventoryId", minWidth: 170 },
  { id: "code", label: "ProductName", minWidth: 100 },
  {
    id: "population",
    label: "Quantity",
    minWidth: 170,
    align: "right",
    
  },
  {
    id: "size",
    label: "Purchase price",
    minWidth: 170,
    align: "right",
  
  },
  
];

function createData(name, code, population, size) {
  // const density = population / size;
  return { name, code, population, size  };
}
const rows = [
  // createData('INVOO9', 'orange', 20, 3287263),
];
export default function Listofinventory() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [inventorylist, setInventorylist] = useState([]);

  useEffect(() => {
    ApiServices.Listofinventory()
      .then((res) => {
        // console.log(res.data);
        setInventorylist(res.data);
      })
      .catch((err) => alert(err.message));
    
  }, []); 


  useEffect(() => {
    // console.log(inventorylist);
    inventorylist.map((it) => {
      // console.log(it);
      rows.push(createData(it.wareHouseId, it.productName, it.quantity,it.purchasePrice));
       console.log(rows);
    });
   

},[inventorylist]);





  
  // setInventorylist.map((it) =>
  // {

  // }

  // )

  //   {
  //     "inventoryId": "INV009",
  //     "productName": "Orange",
  //     "quantity": 20
  // }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div class=" mt-3 col d-flex " style={{"margin-left":"280px"}}>

    <Paper  sx={{ width: "40%" }}>
    <TableContainer align="centre" sx={{ maxHeight: 440 }}>
      <Table  stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow  id="tableInventory">
            {columns.map((column) => (
              <TableCell
              id="tableInventory"
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}  id="inventoryTable">
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
  </div>
  );
}

