import d3 from 'd3'
import * as Plottable from 'plottable'
import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { exampleActions } from 'src/actions'
import { IAppState } from 'src/reducers'

class ChartPlottableComponent extends Component<IProps, IState> {
  state: IState = { showModalConfirmation: false }

  private divElem: React.RefObject<HTMLDivElement> = React.createRef()

  // public render() {
  //   return <div style={{ width: 500, height: 300 }} ref={this.divElem} />
  // }

  componentDidMount() {
    const xScale = new Plottable.Scales.Linear()
    const yScale = new Plottable.Scales.Linear()

    const xAxis = new Plottable.Axes.Numeric(xScale, 'bottom')
    const yAxis = new Plottable.Axes.Numeric(yScale, 'left')

    const plot = new Plottable.Plots.Line()

    plot.x((d: typeof data[0]) => d.x, xScale)
    plot.y((d: typeof data[0]) => d.y, yScale)

    const data = [{ x: 0, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 4 }, { x: 3, y: 8 }]

    const dataset = new Plottable.Dataset(data)
    plot.addDataset(dataset)

    const chart = new Plottable.Components.Table([[yAxis, plot], [null, xAxis]])

    chart.renderTo(this.divElem.current)
  }

  render() {
    return (
      <>
        <div style={{ 'background-color': 'white', width: 500, height: 300 }} ref={this.divElem} />;
      </>
    )
  }
}

interface IState {}

interface IProps {}

export default ChartPlottableComponent
