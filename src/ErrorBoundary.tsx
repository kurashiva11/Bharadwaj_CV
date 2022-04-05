import { Component, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    state: State = {
        hasError: false,
    };

    static getDerivedStateFromError(): State {
        // Updating the state to show the fallback ui when there is an error
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
            <div className="App">
                <h1>Sorry, Something Went Wrong</h1>
            </div>
            );
        }
        // return the children when there is no error
        return this.props.children;
    }
}

export default ErrorBoundary;
