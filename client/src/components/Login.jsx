import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import AccountBox from "@material-ui/icons/AccountBox";

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      open: false
    };
    this.onSignUp = this.onSignUp.bind(this);
  }
  onSignUp( ) {
    const container = document.getElementById('login-container');

    container.classList.add("right-panel-active");
  }

  onSignIn= () => {
    const container = document.getElementById('login-container');
    if(container) {
      container.classList.remove("right-panel-active");
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          LOGIN
          <AccountBox />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <div className="container" id="login-container">
              <div className="form-container sign-up-container">
                <form action="#">
                  <h1>Create Account</h1>
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button>Sign Up</button>
                </form>
              </div>
              <div className="form-container sign-in-container">
                <form action="#">
                  <h1>Sign in</h1>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <a href="#">Forgot your password?</a>
                  <button>Sign In</button>
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                      To keep connected with us please login with your personal
                      info
                    </p>
                    <button onClick={this.onSignIn} className="ghost" id="signIn">
                      Sign In
                    </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button onClick={this.onSignUp} className="ghost" id="signUp">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default Login;
