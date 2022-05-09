import React from "react";
import styles from "./Card.module.css";


const Card = () => {
    const numOfFields = 4;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");

        // Check if they hit the max character length
        if (value.length >= maxLength) {
            // Check if it's not the last input field
            if (parseInt(fieldIndex, 10) < numOfFields) {
                // Get the next input field
                const nextSibling: any = document.querySelector(
                    `input[name=${fieldName}-${parseInt(fieldIndex, 10) + 1}]`
                );

                // If found, focus the next field
                if (nextSibling !== null) {
                    nextSibling.focus();
                }
            }
        }
    };

    return (
        <div className={styles.cardBody}>
            <div className={styles.cardNumber}>
                <input name="cn-1" type="number" placeholder="xxxx" maxLength={4} onChange={handleChange} />
                <input name="cn-2" type="number" placeholder="xxxx" maxLength={4} onChange={handleChange} />
                <input name="cn-3" type="number" placeholder="xxxx" maxLength={4} onChange={handleChange} />
                <input name="cn-4" type="number" placeholder="xxxx" maxLength={4} onChange={handleChange} />
            </div>
        </div>
    );
};

export default Card;