import MyContext from "./MyContext.tsx";

export default function NestContext() {
    return (
        <MyContext.Consumer>
            {(value) => (
                <div>
                    <h2>Nested Component</h2>
                    <p>Value from context: {value}</p>
                </div>
            )}
        </MyContext.Consumer>
    )
}