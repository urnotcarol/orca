import React from "react";
import Banner from "./components/Banner/index";
import Analyze from "./components/Analyze/index";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Banner/>

                <Analyze/>
            </div>
        );
    }
}
