import styles from "./styles.module.scss";
import { Button } from "../Button";
import { useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const getModifier = () => {
        if (counter > 0) return styles.counter_title_increment;
        if (counter < 0) return styles.counter_title_decrement;
        return "";
    }

    return (
        <div className={styles.container_counter}>
            <h1 data-testid="counter_title" className={`${styles.counter_title} ${getModifier()}`}>{counter}</h1>

            <section className={styles.box_buttons}>
                <Button
                    onClick={() => setCounter(prev => prev - 1)}
                    action="decrement">
                    Decrement
                </Button>
                <Button
                    onClick={() => setCounter(prev => prev + 1)}
                    action="increment">
                    Increment
                </Button>
            </section>
        </div >
    );
};
