import React from "react";
import './index.less';

const defaultProps = {
};

type IProps = {
} & Partial<typeof defaultProps>;

interface IState {
    data: any;
    time: any,
}

export default class extends React.Component<IProps, IState> {
    static defaultProps = defaultProps;

    constructor(props: any) {
        super(props);
        this.state = {
            data: {},
            time: '',
        };
    }
    render() {
        const { data, time } = this.state;
        return (
            <div className="component-analyze">
                <h2 className="title">女性遭受暴力实时动态</h2>
                <p className="time">截止{time}日</p>
                <ul className="numbers">
                    <li className="number-item">
                        <span className="value">128</span>
                        <span className="label">死亡人数</span>
                    </li>
                    <li className="number-item">
                        <span className="value">61</span>
                        <span className="label">未结案</span>
                    </li>
                    <li className="number-item">
                        <span className="value">104</span>
                        <span className="label">未立案</span>
                    </li>
                    <li className="number-item">
                        <span className="value">223</span>
                        <span className="label">案件总数</span>
                    </li>
                </ul>
            </div>
        );
    }
}
