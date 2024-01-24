import styles from "./Select.module.scss"

export const Select = () => {
    return (
        <>
            <select className={`w-1/4 cursor-custom-pointer px-5 ${styles.select}`} name="vehichles" id="vehichles">
                <option value="1">BMW</option>
                <option value="2">AUDI</option>
                <option value="3">MERCEDES</option>
                <option value="3">VOLKSWAGEN</option>
            </select>
        </>
    );
};