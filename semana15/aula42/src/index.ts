import express, { request, Request, Response, response } from "express";
import cors from "cors";
import { countries, country } from "./countries";

const app = express ();
app.use(express.json());
app.use(cors());

// app.get("/test", (req: Request, res: Response) => {
//     console.log("Endpoint de teste")
// })

//Endpoint 1 
app.get("/countries/all", (req: Request, res: Response) => {
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))
    res.status(200).send(result)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

//Endpoint 2
app.get("/coutries/:id", (req: Request, res: Response) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )
    
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(400).send("Not found.")
    }
})

//Endpoint 3
app.get("/coutries/search", (req: Request, res: Response) => {
    if (!req.query.name &&
        !req.query.capital &&
        !req.query.continent
        ) {
            res.status(400).send("Error.")
    } else {
        let result: country[] = countries
        if (req.query.name) {
            result = result.filter(
                country => country.name.includes(req.query.name as string)
            )
        }

        if (req.query.capital) {
            result = result.filter(
                country => country.capital.includes(req.query.capital as string)
            )
        }

        if (req.query.continent) {
            result = result.filter(
                country => country.continent.includes(req.query.continent as string) 
            )
        }

        if (result.length) {
            res.status(200).send(result)
        } else {
            res.status(400).send("Not found.")
        }
    }
})

// Endpoint 4
app.put("/countries/edit/:id", (req: Request, res:Response) => {
    let errorCode: number = 400

    try {
        const {name, capital} = req.body
        const index : number = countries.findIndex(
            country => country.id === Number(req.params.id)
        )

        if (index === -1) {
            errorCode = 404
            throw new Error("Id inválido")
        }

        if (!name) {
            errorCode = 400
            throw new Error("Nome não foi informado")
        }
    
        if (!capital) {
            errorCode = 400
            throw new Error("Capital não foi informada")
        }

        countries[index].name = name
        countries[index].capital = capital
        res.status(200).send(req.body)
    } catch (error) {
        console.log(error)
        res.status(errorCode).send(error.message)

    }
})