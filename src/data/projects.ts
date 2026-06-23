import type { IProject } from "@/interfaces/project.interface"

const projects: IProject[] = [
    {
        name: "Proyecto 1",
        id: 1,
        lastModifyDate: "02/06/2026",
        modules: [
            {
                id: 1,
                name: "users",
                endpoints: [
                    {
                        id: 1,
                        name: "get_users",
                        url: "/users",
                        method: "GET",
                        description: "return all users",
                        queryParameters: [],
                        pathParameters: [],
                        headers: [],
                        requestBody: "{\n    'name': 'string',\n    'email': 'string'\n    'addresses': [\n        {\n            'street': 'string'\n        }\n    ]\n}",
                        responses: {
                            status: 200,
                            body: "{\n    'id': 1\n    'name': 'Matias'\n    'email': 'matisalnico@gmail.com'\n    'addresses': [\n        {\n            'id': 1\n            'street': 'Avenida Siempreviva 123'\n        },\n        {\n            'id': 2,\n            'address': 'Avenida Siempreviva 124'\n        },\n        {\n            'id': 3,\n            'address': 'Avenida Siempreviva 125'\n        }\n    ]\n}",
                            description: "OK"
                        },
                        note: "",
                        tags: [
                            "get",
                            "users",
                            "all",
                            "list",
                        ]
                    },
                ]
            },
        ]
    },
]

export default projects