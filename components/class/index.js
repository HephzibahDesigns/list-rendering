import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import data from "./data";

class Index extends Component {
  render() {
    return (
      <div>
      <ProductTable />
         <TableBody />
      </div>
    );
  }
}

export default Index;

 class ProductTable extends Component {
  render() {
    return (
      <Card>
        
      </Card>
    );
  }
}

class TableBody extends Component {
  render() {
    return (
      <>
        <Table bordered striped>
    
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Amount Left</th>
          </tr>
        </thead>
        <tbody>
          {
          data.map((item) => (
           <>
           <td>{item.name}</td>
           <td>{item.price}</td>
           <td>{item.stocked ? "in stocked ": "not in stocked"}</td>
           <td>{item.goodsLeft}</td>
           
           </>
          ))
  }
        </tbody>
        </Table>
      </>
    );
  }
}
