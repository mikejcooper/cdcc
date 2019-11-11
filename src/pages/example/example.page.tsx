import './example.page.css'
import '@blueprintjs/table/lib/css/table.css'

import { Cell, Column, Table } from '@blueprintjs/table'
import * as React from 'react'
import { Component } from 'react'
import ax from 'src/api/axios'
import ChartComponent from 'src/pages/example/chart.component'
import ExampleRedux from 'src/pages/example/example.redux'
import TableComponent from 'src/pages/example/table.component'

class ExamplePage extends Component<IProps, IState> {
  state = {
    data: {
      subwayData: [],
    },
  }

  async componentWillMount() {
    await ax
      .get(
        'https://cors-anywhere.herokuapp.com/https://s3-us-west-2.amazonaws.com/s.cdpn.io/656755/subway.json'
      )
      .then((res: any) => {
        this.setState({ data: res.data })
      })
  }

  sortByStation = () => {
    const newSubwayData = this.state.data.subwayData.sort((a, b) =>
      a.STATION > b.STATION ? 1 : -1
    )

    this.setState({ data: { subwayData: newSubwayData } })
  }

  onClickSortButton = () => {
    this.sortByStation()
  }

  render() {
    if (this.state.data.subwayData.length == 0) {
      return null
    }
    const dataA = this.state.data.subwayData
    console.log(dataA)
    const sortButton = () => {
      return <button onClick={this.onClickSortButton}>Sort</button>
    }
    return (
      <div className="container">
        <Table numRows={dataA.length}>
          <Column
            name="TIMESTAMP"
            cellRenderer={(rowIndex: number) => {
              return <Cell>{`${dataA[rowIndex].TIMESTAMP}`}</Cell>
            }}
          />
          <Column
            name="STATION"
            cellRenderer={(rowIndex: number) => {
              return <Cell>{`${dataA[rowIndex].STATION}`}</Cell>
            }}
            columnHeaderCellRenderer={sortButton}
          />
          <Column
            name="latitude"
            cellRenderer={(rowIndex: number) => {
              return <Cell>{`$${dataA[rowIndex].latitude}`}</Cell>
            }}
          />
          <Column
            name="longitude"
            cellRenderer={(rowIndex: number) => {
              return <Cell>{`${dataA[rowIndex].longitude}`}</Cell>
            }}
          />
          <Column
            name="ENTRIES (1000s)"
            cellRenderer={(rowIndex: number) => {
              return <Cell>{`${Math.round(parseInt(dataA[rowIndex].ENTRIES) / 1000)}`}</Cell>
            }}
          />
          <Column
            name="EXITS (1000s)"
            cellRenderer={(rowIndex: number) => {
              return <Cell>{`${Math.round(parseInt(dataA[rowIndex].EXITS) / 1000)}`}</Cell>
            }}
          />
        </Table>
      </div>
    )
  }
}

interface IState {
  data: {
    subwayData: any
  }
}

interface IProps {}

export default ExamplePage
