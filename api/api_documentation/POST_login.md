# Description

        POST http://localhost:3001/login

## Resources

- At the moment this endpoint will require a password and a username and validate that with an existing user in the DB.(Password is not stored atm)

- Object expected;


Headers: 

    {
        Content-Type: application/json
    }

Body:

    {
        userName: string,
        password: string
    }

## On Success

        {
            data: {
                user: string,
                token: string
            },
            success: true
        }

## On Failure

        {
            message: string,
            success: false
        }