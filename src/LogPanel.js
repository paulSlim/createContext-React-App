import React, { PureComponent } from 'react';

import { AppContext } from './AppContext';

const usersList = [
    { userId: 'user', pass: 'abc' },
    { userId: 'user1', pass: 'abc1' },
    { userId: 'user2', pass: 'abc2' },
    { userId: 'user3', pass: 'abc3' },
];

class LogPanel extends PureComponent {
    state = {
        text: '',
        password: '',
        passChecked: false,
        passWrong: false
    }

    handlePass = (e) => {

        const type = e.target.type;

        this.setState({
            [type]: e.target.value,
        })
    }

    checkPass = (e, login = this.state.text, password = this.state.password) => {
        e.preventDefault();

        const userListObject = usersList.filter((element) => element.userId === login);

        if (userListObject[0] === undefined || userListObject[0].userId !== login || userListObject[0].pass !== password) {
            this.setState({
                passWrong: true,
            })
        } else if (userListObject[0].userId === login && userListObject[0].pass === password) {
            this.setState({
                passChecked: true,
            })
        } else {
            this.setState({
                passWrong: true,
            })
        }
    }

    loginOptions = (type) => {
        let loginOptions = []
        usersList.forEach((element) => {
            loginOptions.push(` ${element.[type]}`);
        })
        return loginOptions;
    }

    render() {

        const formElement = (
            <form onSubmit={this.checkPass} noValidate>
                <p>Welcome to CreateContext Excercise App!</p><br />
                <p>Please sign in using credentials below</p>
                <input type="text" placeholder={this.loginOptions("userId")} value={this.state.text} onChange={this.handlePass} />
                <br />
                <input type="password" placeholder={this.loginOptions("pass")} value={this.state.password} onChange={this.handlePass} />
                <br />
                {this.state.passWrong && <p className="error_msg">Invalid username or password</p>}
                <button>Sign in</button>
            </form>
        );

        return (
            <>
                {formElement}
                <AppContext.Consumer>
                    {
                        ({ toggleLoggedIn }) => (this.state.passChecked ? toggleLoggedIn() : null)
                    }
                </AppContext.Consumer>
            </>
        );
    }
}

export default LogPanel;