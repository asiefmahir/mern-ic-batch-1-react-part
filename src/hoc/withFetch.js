import { Component } from "react";
export const withFetch = (WrappedComponent, url, initState) => {
	class WrapperComponent extends Component {
		state = {
			data: initState,
			isLoading: true,
			errorMessage: "",
		};

        componentDidMount() {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({
                        ...this.state,
                        isLoading: false,
                        data: data,
                        errorMessage: ''
                    })
                })
                .catch((error) => {
                    this.setState({
                        ...this.state,
                        isLoading: false,
                        errorMessage: error.message,
                        data: initState
                    })
                })
        }

        render () {
            return (
                <WrappedComponent data={this.state.data} isLoading={this.state.isLoading} errorMessage={this.state.errorMessage} />
            )
        }
	} 

    return WrapperComponent
};

// Render props
