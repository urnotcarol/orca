import React from "react";
import { Carousel } from 'antd-mobile';

const defaultProps = {
};

type IProps = {
} & Partial<typeof defaultProps>;

interface IState {
    list: any[];
}

export default class extends React.Component<IProps, IState> {
    static defaultProps = defaultProps;

    constructor(props: any) {
        super(props);
        this.state = {
            list: [1, 2, 3],
        };
    }
    render() {
        const { list } = this.state;
        return (
            <Carousel>
                {list.map(item => (
                    <div key={item} style={{ height: '176px' }}>{item}</div>
                ))}
            </Carousel>
        );
    }
}
