export const Button = (prop) => {
    const show = () => {
        prop.setShow((prev) => !prev);
    };

    return <button onClick={show}>Change</button>
}