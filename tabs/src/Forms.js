import React, { Component } from "react";
import "./Form.css"

export default class Forms extends Component {
    state = {
        signIn: true,
        signUp: false
    }
    onSIgnIn = () => this.setState({ signIn: true, signUp: false });
    onSIgnUp = () => this.setState({ signIn: false, signUp: true });


    render() {

        const { signIn, signUp } = this.state;
        return (

            <>
                <div className="form">
                    <div className="flex">
                        <div onClick={this.onSIgnIn}>
                            <p>SIGN IN</p>
                        </div>
                        <div onClick={this.onSIgnUp}>
                            <p>SIGN UP</p>
                        </div>
                    </div>
                    {signIn && <> <form action="">
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                    </form>
                        <button>Sign in</button></>}
                    {signUp && <> <form action="">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Phone" />

                        <input type="password" placeholder="Password" />
                    </form>
                        <button>Sign up</button></>}
                </div>
            </>
        )
    }
}


