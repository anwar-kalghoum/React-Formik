import React from 'react';
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        alert('The value is: ' + this.input.value + this.input2.value + this.input3.value + this.petType.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input type="text" ref={(input) => this.input = input} />
                </label>
                <label>
                    Name:
            <input type="text" ref={(input2) => this.input2 = input2} />
                </label>
                <label>
                    Name:
            <textarea ref={(input3) => this.input3 = input3} />
                </label>
                <select
                    ref={select => this.petType = select}
                    name="petType">
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    <option value="ferret">Ferret</option>
                </select>
                <label>
                    Cat
    <input type="radio" value="cat" name="pet" />
                </label>
                <label>
                    Dog
    <input type="radio" value="dog" name="pet" />
                </label>
                <label>
                    Ferret
    <input type="radio" value="ferret" name="pet" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}



export default Form