import React, { useState } from 'react';
import './content.component.css';


const ContentComponent: React.FC = () => {

    // What is going on in this expression?
    // 'excavators' is the STATE value - The state should be immutable!  Always define it with const.
    // If we need to change the value, then we should call the setter function!  This will replace the
    // old state with new state.
    const [excavators, setExcavators] = useState(1);

    // why use useState(0) - what is the 0 for? - 0 is the initial value.
    const [catapults, setCatapults] = useState(2);

    // excavatorInput
    const [excavatorInput, setExcavatorInput] = useState(0);
    
    // catapultInput
    const [catapultInput, setCatapultInput] = useState(0);

    const manufacture = () => {
        setExcavators(excavators + excavatorInput);
        setCatapults(catapults + catapultInput);
        setExcavatorInput(0);
        setCatapultInput(0);
    }

    /* Inside of a JSX block you can include JS/TS expressions within { } */
    /* In JSX you can bind a value or expression to attribute using attribute={ expression } */
    /* In JSX we can bind to browser events using event={function}, click={ () => doSomething() } */
    return (
        <main id="content-component">
            <section id="inventory-container">
                <h2>Inventory</h2>
                <ol id="inventory-list">
                    <li>{excavators} Excavators</li>
                    <li>{catapults} Catapults</li>
                </ol>
            </section>
            <section id="manufacture-container">
                <h2>Manufacture</h2>
                <form>
                    <fieldset>
                        <label>Excavators: 
                            <input 
                                value={excavatorInput}
                                onChange={(e) => setExcavatorInput(Math.max(excavatorInput, +e.target.value))}
                                type="number"
                            ></input>
                        </label>
                    </fieldset>
                    <fieldset>
                        <label>
                            Catapults: 
                            <input 
                                value={catapultInput}
                                onChange={(e) => setCatapultInput(Math.max(catapultInput, +e.target.value))}
                                type="number"
                            ></input>
                        </label>
                    </fieldset>
                </form>
                    <button onClick={() => manufacture()}>Submit</button>
            </section>
        </main>
    );
}

export default ContentComponent;