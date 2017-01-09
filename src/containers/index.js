import { connect } from 'react-redux'
import { scorePoints } from '../actions'
import App from '../components/app'

const mapStateToProps = (state) => {
  return {
    score: state.score,
    lexicon: state.lexicon
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onScorePoints: (points) => {
      dispatch(scorePoints(points))
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer