export const login = {
    title: "login to your account",
    button: "login",
    inputs: [
        {
            id: 1,
            type: "email",
            placeHolder: "email",
            error: "email filed is required"
        },
        {
            id: 2,
            type: "password",
            placeHolder: "password",
            error: "password filed is required"
        }
    ],
    
}

export const register = {
    title: "registration",
    button: "registration",
    inputsRequestor: [
        {
            id:1,
            type: "text",
            placeHolder: "full name",
            error: "" ,
            name: "name"
        },
        {
            id:2,
            type: "email",
            placeHolder: "email",
            error: "",
            name: "email"
        },
        {
            id:3,
            type: "text",
            placeHolder: "Contact person",
            error: "",
            name: "contact_person"
        },
        {
            id:4,
            type: "text",
            placeHolder: "Company name",
            error: "",
            name: "company_name"
        },
        {
            id:5,
            type: "text",
            placeHolder: "Phone",
            error: "",
            name: "phone"
        },
        {
            id:6,
            type: "password",
            placeHolder: "password",
            error: "",
            name: "password"
        },
        {
            id:7,
            type: "text",
            placeHolder: "parental id",
            error: "",
            name: "parent_id"
        }
    ],
    inputsClinic: [
        {
            id:1,
            type: "text",
            placeHolder: "full name",
            error: "name filed is required",
            name: "name"
        },
        {
            id:2,
            type: "email",
            placeHolder: "email",
            // error: "email filed is required",
            name: "email"
        },
        {
            id:3,
            type: "text",
            placeHolder: "phone",
            // error: "email filed is required",
            name: "phone"
        },
        {
            id:4,
            type: "text",
            placeHolder: "Contact person",
            // error: "this filed is required",
            name: "contact_person"
        },
        {
            id:5,
            type: "password",
            placeHolder: "password",
            // error: "password filed is required",
            name: "password"
        },
        {
            id:6,
            type: "text",
            placeHolder: "parental id",
            // error: "password filed is required",
            name: "parent_id"
        }
    ]

}


