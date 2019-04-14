# Description
        POST http://localhost:3001/register

## Resources

Headers: 

    {
        Content-Type: application/json
    }

Body:

    {
        userName: string, (Unique)
        email: string, (Unique)
        password: string
    }

## On Success:

    {
        data: {
            user: Object
            token: string
        },
        success: true
    }

## On Failure: 

    {
        message: string,
        success: false
    }