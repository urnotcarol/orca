import React from "react";
import { ListView } from 'antd-mobile';
import './index.less';

interface IState {
    dataSource: any,
    hasNext: boolean;
}

export default class CaseList extends React.Component<any, IState> {
    page = 1;
    pageSize = 20;
    rData = [];

    constructor(props: any) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1: any, row2: any) => (row1.id !== row2.id),
            }),
            hasNext: true,
        };
    }

    componentDidMount() {
        this.fetchList();
    }

    fetchList = () => {
        const { pageSize } = this;
        const data: any = {
            list: [{
                name: 'xxx',
                age: '123',
            }, {
                name: 'yyy',
                age: '1233',
            }, {
                name: 'zzz',
                age: '1234',
            }],
        };
        const { list = [] } = data;
        this.rData = this.rData.concat(list);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            hasNext: (list.length === pageSize),
        });
    }

    handleClick = () => {
        console.log(this.props);
        // this.props.history.push('./case?id=1');
    }

    renderRow = (item: any) => {
        return (
            <div className="list-item" onClick={this.handleClick}>
                <div>{item.name}</div>
                <div>{item.age}</div>
            </div>
        );
    }

    onEndReached = () => {
        if (this.state.hasNext) {
            this.page = this.page + 1;
            this.fetchList();
        }
    }

    render() {
        const { pageSize } = this;
        const { dataSource, hasNext } = this.state;
        return (
            <div className="page-list">
                <ListView
                    dataSource={dataSource}
                    renderFooter={() => (
                        <div className="list-footer">{hasNext ? '加载中…' : '- 没有更多数据了 -'}</div>
                    )}
                    renderRow={this.renderRow}
                    className="case-list"
                    pageSize={pageSize}
                    useBodyScroll
                    scrollRenderAheadDistance={300}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                />
            </div>
        );
    }
}
