import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { exampleActions } from 'src/actions'
import { IAppState } from 'src/reducers'

class ExampleRedux extends Component<IProps, IState> {
  onRequestNewNumberWithConfirmation = () => {
    this.props.actions.getData()
  }

  render() {
    return (
      <>
        <button onClick={this.onRequestNewNumberWithConfirmation}>Request data</button>
        <div>-------------</div>
        <div>{this.props.data}</div>
      </>
    )
  }
}

interface IState {}

interface IDispatchProps {
  actions?: typeof exampleActions
}

interface IStateProps {
  data?: IAppState['exampleState']['data']
}

type IProps = IDispatchProps & IStateProps

function mapStateToProps(state: IAppState): IStateProps {
  return {
    data: state.exampleState.data,
  }
}

function mapDispatchToProps(dispatch: Dispatch): IDispatchProps {
  return {
    actions: bindActionCreators({ ...exampleActions }, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleRedux)
