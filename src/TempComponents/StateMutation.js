import { Component } from 'react';
import ItemList from './ItemsList';


class App extends Component {
    // Initialize items to an empty array
    state = {
        items: []
    };

    // Initialize a counter that will increment
    // for each item ID
    nextItemId = 0;

    makeItem() {
        // Create a new ID and use
        // a random number as the value
        return {
            id: this.nextItemId++,
            value: Math.ceil(Math.random() * 10)
        };
    }

    // The Right Way:
    // copy the existing items and add a new one
    addItemImmutably = () => {
        this.setState({
            items: [...this.state.items, this.makeItem()]
        });
    };

    // The Wrong Way:
    // mutate items and set it back
    addItemMutably = () => {
        this.state.items.push(this.makeItem());
        this.setState({ items: this.state.items });
    };

    render() {
        return (
            <div>
                <button onClick={this.addItemImmutably}>
                    Add item immutably (good)
          </button>
                <button onClick={this.addItemMutably}>Add item mutably (bad)</button>
                <ItemList items={this.state.items} />
            </div>
        );
    }
}

export default App;