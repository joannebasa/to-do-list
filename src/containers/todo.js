import { connect } from "react-redux";
import Todo from "../Components/Todo";

// this function gets given the global state
// it returns an object which gets passed in as the props
const mapStateToProps = state => ({
    todoInfo: state.getIn(["todo"]),
});

export default connect(mapStateToProps)(Todo);