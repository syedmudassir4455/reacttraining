import React, { Component } from "react";

//columns :array
//sortColumn:object
//onSort:function

class TableHeader extends Component {
  raiseSort = (path) => {
    // console.log("This is my path"+ path);
    const sortColumn = { ...this.props.sortColumn };
    // console.log("we are checking sort column "+sortColumn);
    if (sortColumn.path === path) {
      console.log("if check order");
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      console.log("else check order");
      sortColumn.path = path;
      sortColumn.order = "desc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
    return <i className="fa fa-sort-desc" />

  }
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              className="clickable"

              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>

          ))}
        
      
        </tr>

      </thead>
    );
  }
}

export default TableHeader;
