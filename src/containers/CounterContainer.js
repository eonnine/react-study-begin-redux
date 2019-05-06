// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, { Component } from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import { CounterActions } from 'store/actionCreators';

class CounterContainer extends Component {
  handleIncrement = () => {
    CounterActions.increment();
  }

  handleDecrement = () => {
    CounterActions.decrement();
  }

  render() {
    const { handleIncrement, handleDecrement } = this;
    const { number } = this.props;

    return (
      <Counter 
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        number={number}
      />
    )
  }
}

// const mapStateToProps = (state) => ({
//   number: state.counter.number
// });

// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(counterActions.increment()),
//   decrement: () => dispatch(counterActions.decrement())
// })

export default connect(
  (state) => ({
    number: state.counter.number
  })
)(CounterContainer);