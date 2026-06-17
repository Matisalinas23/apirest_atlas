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
                        method: "GET"
                    },
                    {
                        id: 2,
                        name: "get_user",
                        url: "/users/:id",
                        method: "GET"
                    },
                    {
                        id: 3,
                        name: "create_user",
                        url: "/users",
                        method: "POST"
                    },
                    {
                        id: 4,
                        name: "update_user",
                        url: "/users/:id",
                        method: "PUT"
                    },
                    {
                        id: 5,
                        name: "delete_user",
                        url: "/users/:id",
                        method: "DELETE"
                    }
                ]
            },
            {
                id: 2,
                name: "auth",
                endpoints: [
                    {
                        id: 2,
                        name: "login",
                        url: "/auth/login",
                        method: "POST"
                    },
                    {
                        id: 3,
                        name: "register",
                        url: "/auth/register",
                        method: "POST",
                    }
                ]
            }
        ]
    },
    {
        name: "Proyecto 2",
        id: 2,
        lastModifyDate: "05/06/2026",
        modules: [
            {
                id: 3,
                name: "auth",
                endpoints: [
                    {
                        id: 4,
                        name: "login",
                        url: "/auth/login",
                        method: "POST"
                    }
                ]
            },
            {
                id: 4,
                name: "products",
                endpoints: [
                    {
                        id: 5,
                        name: "get_products",
                        url: "/products",
                        method: "GET"
                    },
                    {
                        id: 6,
                        name: "get_product",
                        url: "/products/:id",
                        method: "GET"
                    },
                    {
                        id: 7,
                        name: "create_product",
                        url: "/products",
                        method: "POST"
                    },
                    {
                        id: 8,
                        name: "update_product",
                        url: "/products/:id",
                        method: "PUT"
                    },
                    {
                        id: 9,
                        name: "delete_product",
                        url: "/products/:id",
                        method: "DELETE"
                    }
                ]
            }
        ]
    }
]

export default projects