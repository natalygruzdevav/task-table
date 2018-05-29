import React, { Component } from 'react';

import  Input from  "./Input_nums";

class Table extends Component {
    constructor(props) {
        super(props);
        this.calcResult = this.calcResult.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.state = {
            puma: {
                worker: 20,
                pul: 1,
                cars: 2,
                reserve: 1
            },
            ck1: {
                worker: 1,
                pul: 2,
                cars: 3,
                reserve: 1
            },
            ck2: {
                worker: 1,
                pul: 4,
                cars: 4,
                reserve: 1
            }
        }
        this.state.total = 0;
    }
    updateInput = (value, path) => {
        this.setState({
            ...this.state,
            [path[0]]: {
                ...this.state[path[0]],
                [path[1]]: value
            }
        });
    }
    calcResult = () => {
        return (this.state.puma.worker * this.state.puma.pul * this.state.puma.cars + this.state.puma.reserve) +
            (this.state.ck1.worker * this.state.ck1.pul * this.state.ck1.cars + this.state.ck1.reserve) +
            (this.state.ck2.worker * this.state.ck2.pul * this.state.ck2.cars + this.state.ck2.reserve);
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <table className="table-info">
                    <thead>
                    <tr>
                        <th>Сервис:</th>
                        <th>ПУМА</th>
                        <th>СК - 1</th>
                        <th>СК - 2</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Воркер:</td>
                        <td><Input value={this.state.puma.worker} onUpdate={this.updateInput} path={['puma', 'worker']} /></td>
                        <td><Input value={this.state.ck1.worker} onUpdate={this.updateInput} path={['ck1', 'worker']} /></td>
                        <td><Input value={this.state.ck2.worker} onUpdate={this.updateInput} path={['ck2', 'worker']} /></td>
                    </tr>
                    <tr>
                        <td>ПУЛ:</td>
                        <td><Input value={this.state.puma.pul} onUpdate={this.updateInput} path={['puma', 'pul']} /></td>
                        <td><Input value={this.state.ck1.pul} onUpdate={this.updateInput} path={['ck1', 'pul']}/></td>
                        <td><Input value={this.state.ck2.pul} onUpdate={this.updateInput} path={['ck2', 'pul']}/></td>
                    </tr>
                    <tr>
                        <td>Тачки:</td>
                        <td><Input value={this.state.puma.cars} onUpdate={this.updateInput} path={['puma', 'cars']} /></td>
                        <td><Input value={this.state.ck1.cars} onUpdate={this.updateInput} path={['ck1', 'cars']}/></td>
                        <td><Input value={this.state.ck2.cars} onUpdate={this.updateInput} path={['ck2', 'cars']}/></td>
                    </tr>
                    <tr>
                        <td>Резерв:</td>
                        <td><Input value={this.state.puma.reserve} onUpdate={this.updateInput} path={['puma', 'reserve']} /></td>
                        <td><Input value={this.state.ck1.reserve} onUpdate={this.updateInput} path={['ck1', 'reserve']} /></td>
                        <td><Input value={this.state.ck2.reserve} onUpdate={this.updateInput} path={['ck2', 'reserve']}/></td>
                    </tr>
                    <tr>
                        <td>Итого:</td>
                        <td className="td-result" colSpan="3">{this.calcResult()} </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;
