import '@blueprintjs/table/lib/css/table.css'

import { Cell, Column, Table } from '@blueprintjs/table'
import * as React from 'react'
import { Component } from 'react'

class TableComponent extends Component<IProps, IState> {
  state: IState = { showModalConfirmation: false }

  render() {
    return (
      <div>
        <Table
          numRows={dataA.length}
          enableColumnReordering={true}
          enableColumnResizing={false}
          enableRowReordering={true}
          enableRowResizing={false}
        >
          <Column
            name="DataA"
            cellRenderer={(rowIndex: number) => {
              return <Cell>{`$${dataA[rowIndex]}`}</Cell>
            }}
          />
        </Table>
      </div>
    )
  }
}

interface IState {}

interface IProps {}

export default TableComponent

const dataA = [10, 20, -10, 55, 100, 30]
