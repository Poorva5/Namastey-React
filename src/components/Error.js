import { useRouteError } from "react-router-dom"

const ErrorComponent = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Oops Something went wrong</h1>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default ErrorComponent;