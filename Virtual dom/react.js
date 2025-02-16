const Fruits = () => {
    const [fruit, setFruit] = React.useState('');
    const [fruits, setFruits] = React.useState(['mango', 'guava', 'apple', 'orange']);

    const addItem = () => {
        if (fruit.trim()) { 
            setFruits([...fruits, fruit.trim()]);
            setFruit(''); 
        }
    };

    return (
        <div className="container">
            <ul id="fruits">
                {fruits.slice().sort().map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            <br />
            <p>
                <input
                    type="text"
                    value={fruit}
                    onChange={(e) => setFruit(e.target.value)}
                />
            </p>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
};

const domContainer = document.querySelector("#root");
ReactDOM.createRoot(domContainer).render(<Fruits />);
