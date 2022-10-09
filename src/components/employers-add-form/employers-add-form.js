import {Component} from "react";
import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;
        const enabled = name.length > 1 && salary.length > 1;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                           name="name"
                           value={this.state.name}
                           className="form-control new-post-label"
                           placeholder="Как его зовут"
                    onChange={this.onValueChange}/>
                    <input type="number"
                           name="salary"
                           value={this.state.salary}
                           className="form-control new-post-label"
                           placeholder="З/П в $"
                    onChange={this.onValueChange}/>

                    <button type='submit'
                            className="btn btn-outline-light"
                            disabled={!enabled}>Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;