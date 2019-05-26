# Resourses

    DELETE http://localhost:3001/admin/delete/:id

- headers:
        
        {
            Content-Type: application/json,
            "Authorization": "Bearer token",
            "email": string
        }


- params

        {
            id: string        
        }

### On Success

- will return an object of type:

        {
            success: true,
            data: object | array
        }

### on Failure

        {
            success: false,
            message: string
        }
