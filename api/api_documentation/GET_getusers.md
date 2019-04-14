# Description

    GET http://localhost:3001/getusers

## Resources:

- Headers

        {
            email: string
            Authorization: Bearer <token>
        }

## On Success 

    {
        success: true,
        data: [
            {
                userid: 1,
            username: string,
            useremail: string,
            created_on: Date | null,
            last_login: Date | null
            }
        ]
    }

## On Failure

    {
        message: string,
        success: false
    }